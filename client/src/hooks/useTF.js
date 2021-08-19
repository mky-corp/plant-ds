import * as tf from '@tensorflow/tfjs';
import * as jpeg from 'jpeg-js';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { API } from '../services/auth.storage';

const useTF = () => {
  const [loading, setLoading] = useState(true);
  const [predLoad, setPredLoad] = useState(false);
  const [errors, setErrors] = useState({});
  const [predictions, setPredictions] = useState([]);
  const [model, setModel] = useState({});

  const loadModel = async () => {
    try {
      const modelPlants = await tf.loadLayersModel(`${API}/cnn/model.json`);
      setModel(modelPlants);
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
    try {
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
    } catch (err) {
      setErrors({
        ...errors,
        message: 'Error el formato de la imagen tiene un error'
      });
    }
  };

  const predictModel = async (uint8) => {
    const rawImageData = uint8.buffer;
    const imageTensor = imageToTensor(rawImageData).resizeBilinear([249, 249]);
    const tensor = imageTensor.reshape([1, 249, 249, 3]);
    const predict = await model.predict(tensor);
    const array = await predict.array();
    return array[0];
  };

  const deletePrediction = (idx) => {
    const newPredictions = predictions.filter((_, i) => i !== idx);
    setPredictions(newPredictions);
  };

  const predictionBuffers = async (buffers) => {
    setPredLoad(true);

    try {
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

      const answers = predictions;
      for (let i = 0; i < buffers.length; ++i)
        answers.push(await predictModel(buffers[i]));
      setPredictions(answers);
    } catch (err) {
      toast.error(err);
    } finally {
      setPredLoad(false);
    }
  };

  const predictBuffer = async (buffer, idx) => {
    if (!buffer) {
      return setErrors({
        ...errors,
        buffer: false,
        message: 'No hay imágen que procesar'
      });
    }

    for (let i = predictions.length; i <= idx; ++i) predictions.push([]);

    let answers = predictions;
    answers[idx] = await predictModel(buffer);
    setPredictions(answers);
  };

  useEffect(() => {
    loadModel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    predictions,
    predLoad,
    loading,
    errors,
    predictBuffer,
    deletePrediction,
    predictionBuffers
  };
};

export default useTF;
