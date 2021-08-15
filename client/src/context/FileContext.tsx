import { ChangeEvent, createContext, useState } from 'react';
import { IFileContext } from '../interfaces/file.interfaces';
import { IPropsChildren } from '../interfaces/props.interfaces';
import { defaultFileState } from '../services/default.state';

const FileContext = createContext<Partial<IFileContext>>(defaultFileState);

export const FileProvider = ({ children }: IPropsChildren) => {
  const [progress, setProgress] = useState<number | string>('');
  const [progressInner, setProgressInner] = useState<string>('');
  const [files, setFiles] = useState<File[]>(defaultFileState.files);
  const [images, setImages] = useState<string[]>(defaultFileState.images);
  const [buffers, setBuffers] = useState<Uint8Array[]>(
    defaultFileState.buffers
  );

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    processImage(e.target.files);
  };

  const handleImageDropZone = (files: File[]) => {
    if (!files.length) return;

    processImage(files);
  };

  const processImage = (newFiles: File[] | FileList) => {
    const fileBuffers: Uint8Array[] = buffers;
    const fileImages: string[] = images;
    const fileArray = Array.from(newFiles);

    setFiles([...files, ...fileArray]);
    fileArray.forEach((file) => uploadImage(file, fileImages));
    fileArray.forEach((file) => uploadFile(file, fileBuffers));
  };

  const handleUint8Array = (imageRaw: Uint8Array) =>
    setBuffers([...buffers, imageRaw]);

  const uploadImage = (file: File, fileImages: string[]) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', (e: ProgressEvent) => {
      if (!fileReader.result || fileReader.result instanceof ArrayBuffer)
        return;

      fileImages.push(fileReader.result);
      setImages(fileImages);
    });
  };

  const uploadFile = (file: File, fileBuffers: Uint8Array[]) => {
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
      setProgressInner(`<i class='fs-7'>${file.name} - ${progress}%</i>`);
    });

    fileReader.addEventListener('loadend', (e: ProgressEvent) => {
      setTimeout(() => {
        setProgress('');
        setProgressInner('');
      }, 1200);
    });
  };

  return (
    <FileContext.Provider
      value={{
        files,
        images,
        buffers,
        progress,
        progressInner,
        handleUint8Array,
        handleImageChange,
        handleImageDropZone
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

export default FileContext;
