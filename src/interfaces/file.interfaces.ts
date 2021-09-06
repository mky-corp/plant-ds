import { ChangeEvent } from 'react';

interface IFileContext {
  names: string[];
  images: string[];
  buffers: Uint8Array[];
  progress?: number | string;
  resetAll?: () => void;
  handleDeleteAll?: (idx: number) => void;
  handleUint8Array?: (url: string) => void;
  handleImageChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleImageWebCam?: (e: string) => void;
  handleImageDropZone?: (e: File[]) => void;
}

export type { IFileContext };
