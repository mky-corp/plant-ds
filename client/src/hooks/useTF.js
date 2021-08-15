import * as tf from '@tensorflow/tfjs';
import * as jpeg from 'jpeg-js';
import { useState, useEffect } from 'react';

const API = "https://api-phg-plants.herokuapp.com";

const useTF = () => {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [predictions, setPredictions] = useState([]);
  const [model, setModel] = useState({});

  const loadModel = async () => {
    try {
      // const modelPlants = await tf.loadLayersModel(`${API}/cnn/model.json`);
      // setModel(modelPlants);
    } catch (err) {
      setErrors({
        ...err,
        model: false,
        message: 'Error a la carga del modelo'
      });
    } finally {
      setLoading(false);
    }
  };

  const imageToTensor = (rawImageData) => {
    const { width, height, data } = jpeg.decode(rawImageData, {
      useTArray: true
    });
    const buffer = new Uint8Array(width * height * 3);
    let offset = 0;

    for (let i = 0; i < buffer.length; i += 3) {
      buffer[i] = data[offset];
      buffer[i + 1] = data[offset + 1];
      buffer[i + 2] = data[offset + 2];
      offset += 4;
    }

    return tf.tensor3d(buffer, [height, width, 3]);
  };

  const predictModel = async (uint8) => {
    const rawImageData = uint8.buffer;
    const imageTensor = imageToTensor(rawImageData).resizeBilinear([249, 249]);
    const tensor = imageTensor.reshape([1, 249, 249, 3]);
    const predict = await model.predict(tensor);
    const array = await predict.array();
    return array[0];
  };

  const predictionsModel = async (buffers) => {
    if (!Object.keys(model).length) {
      return setErrors({
        ...errors,
        message: 'No se puede predecir el modelo no está cargado'
      });
    }

    if (!buffers || !buffers.length) {
      return setErrors({
        ...errors,
        buffers: false,
        message: 'No hay imágenes que procesar'
      });
    }

    const answers = [];
    for (let i = 0; i < buffers.length; ++i)
      answers.push(await predictModel(buffers[i]));
    setPredictions(answers);
  };

  useEffect(() => {
    loadModel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { predictions, loading, errors, predictionsModel };
};

export default useTF;
