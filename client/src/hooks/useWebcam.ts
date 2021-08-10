import Webcam from 'react-webcam';
import { ls, w } from '../utils/Globals';
import { webCam as stateWebCam } from '../libs/auth.storage';
import { useCallback, useState, useRef } from 'react';

const useWebcam = () => {
  const webcamRef = useRef<Webcam>(null);
  const [webCam, setWebCam] = useState<boolean>(stateWebCam);
  const width = w.innerWidth;
  const height = w.innerHeight;

  const handleWebCam = () => {
    setWebCam(!webCam);
    ls.setItem('webCam', true + '');
  };

  const capture = useCallback(() => {
    if (!webcamRef.current) return;

    const imageSrc = webcamRef.current.getScreenshot({
      width: 249,
      height: 249
    });
    console.log(imageSrc);
  }, [webcamRef]);

  return { capture, webCam, handleWebCam, webcamRef, width, height };
};

export default useWebcam;
