import { ChangeEvent } from 'react';

interface IFileContext {
  files: File[];
  buffers: Uint8Array[];
  progress?: number | string;
  progressInner?: string;
  handleUint8Array?: (e: Uint8Array) => void;
  handleImageChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleImageDropZone?: (e: File[]) => void;
}

export type { IFileContext };
