import { ChangeEvent, createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { IFileContext } from '../interfaces/file.interfaces';
import { IPropsChildren } from '../interfaces/props.interfaces';
import { defaultFileState } from '../services/default.state';
import { ls } from '../utils/Globals';

const FileContext = createContext<Partial<IFileContext>>(defaultFileState);

export const FileProvider = ({ children }: IPropsChildren) => {
  const [progress, setProgress] = useState<number | string>('');
  const [names, setNames] = useState<string[]>(defaultFileState.names);
  const [images, setImages] = useState<string[]>(defaultFileState.images);
  const [buffers, setBuffers] = useState<Uint8Array[]>(
    defaultFileState.buffers
  );

  const resetAll = () => {
    saveImagesLs([], []);
    setBuffers([]);
  };

  const handleDeleteAll = (idx: number) => {
    const newImages = images.filter((_, i) => idx !== i);
    const newBuffers = buffers.filter((_, i) => idx !== i);
    const newNames = names.filter((_, i) => idx !== i);

    saveImagesLs(newImages, newNames);
    setBuffers(newBuffers);
  };

  const saveImagesLs = (newImages: string[], newNames: string[]) => {
    setImages(newImages);
    setNames(newNames);
    setDataInLs('names', newNames);
    setDataInLs('images', newImages);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    processImage(e.target.files);
  };

  const handleImageDropZone = (files: File[]) => {
    if (!files.length) return;

    processImage(files);
  };

  const setDataInLs = (key = 'default', data: string[]) => {
    try {
      ls.setItem(key, JSON.stringify(data));
    } catch (err: any) {
      toast.error(
        err.message || 'Se sobrepaso el limite de espacio en el local storage'
      );
    }
  };

  const processImage = (newFiles: File[] | FileList) => {
    const fileBuffers: Uint8Array[] = buffers;
    const fileImages: string[] = images;
    const fileNames: string[] = names;
    const fileArray = Array.from(newFiles);

    if (fileArray.length + images.length > 18)
      return toast.warn(
        'Se está sobrepasando el límite de imágenes que puede evaluar'
      );

    fileArray.forEach((file) => uploadImage(file, fileImages, fileNames));
    fileArray.forEach((file) => uploadBuffer(file, fileBuffers));
    toast.info('Las archivos han sido procesados');
  };

  const handleUint8Array = async (url: string, buffers: Uint8Array[] = []) => {
    buffers.push(await handleImageByString(url));
    setBuffers(buffers);
  };

  const handleImageWebCam = async (url: string) => {
    const newNames = [...names, 'Capture Image'];
    const newImages = [...images, url];

    saveImagesLs(newImages, newNames);

    buffers.push(await handleImageByString(url));
    setBuffers(buffers);
  };

  const handleImageByString = async (url: string) => {
    const file = await fetch(url);
    const image = await file.arrayBuffer();
    return new Uint8Array(image);
  };

  const uploadImage = (
    file: File,
    fileImages: string[],
    fileNames: string[]
  ) => {
    if (file.type !== 'image/jpeg')
      return toast.info(
        'Los archivos con extensión *.png, *.mp4, *.mp3, u otros no son válidos'
      );

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileNames.push(file.name);
    setNames(fileNames);
    setDataInLs('names', fileNames);

    fileReader.addEventListener('load', (e: ProgressEvent) => {
      if (!fileReader.result || fileReader.result instanceof ArrayBuffer)
        return;

      fileImages.push(fileReader.result);
      setImages(fileImages);
      setDataInLs('images', fileImages);
    });
  };

  const uploadBuffer = (file: File, fileBuffers: Uint8Array[]) => {
    if (file.type !== 'image/jpeg') return;
    const fileReader = new FileReader();

    fileReader.readAsArrayBuffer(file);

    fileReader.addEventListener('load', (e: ProgressEvent) => {
      if (!fileReader.result || typeof fileReader.result === 'string') return;

      const arrayBuffer = new Uint8Array(fileReader.result);

      fileBuffers.push(arrayBuffer);
      setBuffers(fileBuffers);
    });

    fileReader.addEventListener('progress', (e: ProgressEvent) => {
      let progress = (e.loaded * 100) / e.total;
      setProgress(progress);
    });

    fileReader.addEventListener('loadend', (e: ProgressEvent) => {
      setTimeout(() => {
        setProgress('');
      }, 1200);
    });
  };

  useEffect(() => {
    if (images && !buffers.length)
      for (let i = 0; i < images.length; ++i)
        handleUint8Array(images[i], buffers);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FileContext.Provider
      value={{
        names,
        images,
        buffers,
        progress,
        resetAll,
        handleDeleteAll,
        handleUint8Array,
        handleImageChange,
        handleImageWebCam,
        handleImageDropZone
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

export default FileContext;
