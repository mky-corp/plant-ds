import { ChangeEvent } from 'react';

interface IAuthContext {
  auth: boolean;
  handleAuth?: (e: ChangeEvent<HTMLElement>) => void;
}

export type { IAuthContext };
