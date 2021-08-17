import Webcam from 'react-webcam';
import { useCallback, useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ls, w } from '../utils/Globals';
import FileContext from '../context/FileContext';
import { webCam as stateWebCam } from '../services/auth.storage';
import { toast } from 'react-toastify';

const useWebcam = () => {
  const webcamRef = useRef<Webcam>(null);
  const [webCam, setWebCam] = useState<boolean>(stateWebCam);
  const { handleUint8Array } = useContext(FileContext);
  const history = useHistory();
  const width = w.innerWidth;
  const height = w.innerHeight;

  const handleWebCam = () => {
    setWebCam(!webCam);
    ls.setItem('webCam', !webCam + '');
  };

  const handleImage = (url: string) => {
    if (handleUint8Array) {
      handleUint8Array(url);

      history.push('/detect');
    } else {
      toast.warn('Espere a la carga completa..');
    }
  };

  const capture = useCallback(() => {
    if (!webcamRef.current) return;

    const imageSrc = webcamRef.current.getScreenshot({
      width: 249,
      height: 249
    });

    if (imageSrc) handleImage(imageSrc);
    else toast.error('Hubo un error con la captura de pantalla');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webcamRef]);

  return { capture, webCam, handleWebCam, webcamRef, width, height };
};

export default useWebcam;
