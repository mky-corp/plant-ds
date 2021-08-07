import { ReactNode, SyntheticEvent } from 'react';

interface IPropsChildren {
  children?: ReactNode;
}

interface IpropsDescOptions {
  title?: string;
  description?: string;
}

interface IPropsFormUp {
  title?: string;
  description?: string;
  children?: ReactNode;
  handleSubmit?: (e: SyntheticEvent) => void;
}

export type { IPropsChildren, IPropsFormUp, IpropsDescOptions };
