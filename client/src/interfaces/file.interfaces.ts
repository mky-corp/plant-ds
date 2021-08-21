import { ChangeEvent } from 'react';

interface IFileContext {
  names: string[];
  images: string[];
  buffers: Uint8Array[];
  progress?: number | string;
  handleDeleteAll?: (idx: number) => void;
  handleUint8Array?: (url: string) => void;
  handleImageChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleImageDropZone?: (e: File[]) => void;
}

export type { IFileContext };
