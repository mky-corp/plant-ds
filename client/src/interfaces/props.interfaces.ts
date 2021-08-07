import { ReactNode } from 'react';

interface IPropsChildren {
  children: ReactNode;
}

interface IpropsDescOptions {
  title: string;
  description: string;
}

export type { IPropsChildren, IpropsDescOptions };
