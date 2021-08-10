import { useState, createContext, ChangeEvent } from 'react';
import { IFileContext } from '../interfaces/file.interfaces';
import { IPropsChildren } from '../interfaces/props.interfaces';
import { defaultFileState } from '../libs/default.state';
import { ls } from '../utils/Globals';

const FileContext = createContext<Partial<IFileContext>>(defaultFileState);

export const FileProvider = ({ children }: IPropsChildren) => {
  const [progress, setProgress] = useState<number | string>('');
  const [progressInner, setProgressInner] = useState<string>('');
  const [files, setFiles] = useState<File[]>(defaultFileState.files);
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

  const bufferToJSON = (buffers: Uint8Array[]) => {
    ls.setItem('imageBuffers', JSON.stringify(buffers));
  };

  const processImage = (newFiles: File[] | FileList) => {
    const fileBuffers: Uint8Array[] = buffers;
    const fileList = newFiles;
    const fileArray = Array.from(fileList);

    setFiles([...files, ...fileArray]);
    fileArray.forEach((file) => uploadFile(file, fileBuffers));
  };

  const uploadFile = (file: File, fileBuffers: Uint8Array[]) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.addEventListener('load', (e: ProgressEvent) => {
      if (!fileReader.result || typeof fileReader.result === 'string') return;

      const arrayBuffer = new Uint8Array(fileReader.result);

      fileBuffers.push(arrayBuffer);
      setBuffers(fileBuffers);
      bufferToJSON(fileBuffers);
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
      }, 1600);
    });
  };

  return (
    <FileContext.Provider
      value={{
        files,
        buffers,
        progress,
        progressInner,
        handleImageChange,
        handleImageDropZone
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

export default FileContext;
