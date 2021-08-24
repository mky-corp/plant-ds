import * as tf from '@tensorflow/tfjs';
import * as jpeg from 'jpeg-js';
import { API } from '../utils/Globals';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

const useTF = () => {
  const [loading, setLoading] = useState(true);
  const [predLoad, setPredLoad] = useState(false);
  const [errors, setErrors] = useState({});
  const [predictions, setPredictions] = useState([]);
  const [model, setModel] = useState({});

  /**
   * Función asíncrona para la carga del modelo ubicada en el servidor en la
   * ruta /cnn/model.json para poder hacer las predicciones con la red neuronal
   * convolucional de las imágenes que se suban.
   * @returns {Promise<void>}
   */
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

  /**
   * Función que recibe un buffer de la imagen que se subirán al contexto global
   * y nos retornara un tensor de 3d para poder realizar cualquier predicción con
   * nuestra red neuronal.
   *
   * @param rawImageData{ArrayBuffer}
   * @returns {Tensor3D}
   */
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

  /**
   * Función que realiza la predicción a partir de un Arreglo de Uint8Array que
   * tiene su respectivo buffer para hacer el preprocesamiento de la imagen.
   * @param uint8{Uint8Array}
   * @returns {Promise<*>}
   */
  const predictModel = async (uint8) => {
    try {
      const rawImageData = uint8.buffer;
      const imageTensor = imageToTensor(rawImageData).resizeBilinear([
        249, 249
      ]);
      const tensor = imageTensor.reshape([1, 249, 249, 3]);
      const predict = await model.predict(tensor);
      const array = await predict.array();
      return array[0];
    } catch (err) {
      setErrors({
        ...errors,
        message: 'Error al predecir la imagen'
      });
    }
  };

  const deletePrediction = (idx) =>
    setPredictions(predictions.filter((_, i) => i !== idx));

  const deleteAllPredictions = () => setPredictions([]);

  /**
   * Función que recibe un arreglo de buffers para poder hacer la predicción de
   * todas las imágenes que pudieron subir a la aplicación web
   *
   * @param buffers{Uint8Array[] | undefined}
   * @returns {Promise<void>}
   */
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

      const answers = [];
      for (let i = 0; i < buffers.length; ++i)
        answers.push(await predictModel(buffers[i]));
      setPredictions(answers);
    } catch (err) {
      toast.error(err);
    } finally {
      setPredLoad(false);
    }
  };

  /**
   * Función que recibe un buffer y un indice para hacer la predicción de una sola
   * imagen y luego actualizar la lista de todas las predicciones hechas hasta el
   * momento
   * @param buffer
   * @param idx
   * @returns {Promise<void>}
   */
  const predictBuffer = async (buffer, idx) => {
    if (!buffer) {
      return setErrors({
        ...errors,
        buffer: false,
        message: 'No hay imagen que procesar'
      });
    }

    for (let i = predictions.length; i <= idx; ++i) predictions.push([]);

    let answers = predictions;
    answers[idx] = await predictModel(buffer);
    setPredictions(answers);
  };

  /**
   * Cargar el modelo de tensorflow para poder realizar las predicciones
   * posteriormente teniendo las imágenes
   */
  useEffect(() => {
    loadModel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Todas las variables que utilizaremos dentro de la interfaz para poder
   * usar de forma correcta este hook personalizado que creamos a partir de la
   * versión de tensorflow para el desarrollo web con javascript
   */
  return {
    errors,
    loading,
    predLoad,
    predictions,
    predictBuffer,
    deletePrediction,
    predictionBuffers,
    deleteAllPredictions
  };
};

export default useTF;
