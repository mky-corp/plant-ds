import Webcam from 'react-webcam';
import { useCallback, useState, useRef, useContext } from 'react';

import { ls, w } from '../utils/Globals';
import FileContext from '../context/FileContext';
import { webCam as stateWebCam } from '../libs/auth.storage';

const useWebcam = () => {
  const webcamRef = useRef<Webcam>(null);
  const [webCam, setWebCam] = useState<boolean>(stateWebCam);
  const { handleUint8Array } = useContext(FileContext);
  const width = w.innerWidth;
  const height = w.innerHeight;

  const handleWebCam = () => {
    setWebCam(!webCam);
    ls.setItem('webCam', true + '');
  };

  const handleImage = async (url: string) => {
    const file = await fetch(url);
    const image = await file.arrayBuffer();
    const uint8Array = new Uint8Array(image);

    if (handleUint8Array)
      handleUint8Array(uint8Array);
  };

  const capture = useCallback(() => {
    if (!webcamRef.current) return;

    const imageSrc = webcamRef.current.getScreenshot({
      width: 249,
      height: 249
    });

    if (imageSrc) handleImage(imageSrc);
  }, [webcamRef]);

  return { capture, webCam, handleWebCam, webcamRef, width, height };
};

export default useWebcam;