import { useState, createContext, ChangeEvent } from 'react';
import { IFileContext } from '../interfaces/file.interfaces';
import { IPropsChildren } from '../interfaces/props.interfaces';

const defaultState = {
  files: [],
  buffers: []
};

const FileContext = createContext<Partial<IFileContext>>(defaultState);

export const FileProvider = ({ children }: IPropsChildren) => {
  const [progress, setProgress] = useState<number | string>('');
  const [progressInner, setProgressInner] = useState<string>('');
  const [buffers, setBuffers] = useState<Uint8Array[]>(defaultState.buffers);
  const [files, setFiles] = useState<File[]>(defaultState.files);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;

    const fileBuffers: Uint8Array[] = [];
    const fileList = e.target.files;
    const fileArray = Array.from(fileList);

    if (!fileList) return;

    setFiles(fileArray);
    fileArray.forEach((file) => uploadFile(file, fileBuffers));
  };

  const uploadFile = (file: File, fileBuffers: Uint8Array[]) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.addEventListener('load', (e: ProgressEvent) => {
      if (fileReader.result === null || typeof fileReader.result === 'string')
        return;

      const arrayBuffer = new Uint8Array(fileReader.result);

      fileBuffers.push(arrayBuffer);
      setBuffers(fileBuffers);
    });

    fileReader.addEventListener('progress', (e: ProgressEvent) => {
      let progress = parseInt('' + (e.loaded * 100) / e.total);
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
      value={{ files, buffers, progress, progressInner, handleImageChange }}
    >
      {children}
    </FileContext.Provider>
  );
};

export default FileContext;
