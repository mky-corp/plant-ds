import {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  ReactNode,
  SyntheticEvent
} from 'react';

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

interface IPropsFormGroup {
  id?: string;
  name?: string;
  type?: string;
  label?: string;
  value?: string | number | string[] | undefined;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

interface IPropsMainButton {
  to?: string | object;
  title?: string;
  type?: string;
  onClick?: (e: SyntheticEvent) => void;
}

export type {
  IPropsChildren,
  IPropsFormUp,
  IPropsFormGroup,
  IpropsDescOptions,
  IPropsMainButton
};
