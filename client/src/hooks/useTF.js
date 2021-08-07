import * as tf from '@tensorflow/tfjs';
import * as jpeg from 'jpeg-js';
import { useState, useEffect } from 'react';

const API = process.env.REACT_APP_API;

const useTF = () => {
  const [loading, setLoading] = useState(true);
  const [predictions, setPredictions] = useState([]);
  const [model, setModel] = useState(undefined);

  const loadModel = async () => {
    try {
      const modelPlants = await tf.loadLayersModel(`${API}/cnn/model.json`);
      setModel(modelPlants);
    } catch (err) {
      console.error(err);
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
    const answers = [];

    for (let i = 0; i < buffers.length; ++i)
      answers.push(await predictModel(buffers[i]));

    setPredictions(answers);
  };

  useEffect(() => {
    loadModel();
  }, []);

  return { predictions, loading, predictionsModel };
};

export default useTF;
