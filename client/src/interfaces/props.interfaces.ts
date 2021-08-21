import React, { ChangeEvent, Dispatch, FocusEvent, ReactNode, SyntheticEvent } from 'react';

interface IPropsChildren {
  children?: ReactNode;
}

interface IPropsChildrenModal {
  width?: string | number;
  height?: string | number;
  isOpen?: boolean;
  unClose?: boolean;
  children?: ReactNode;
  handleClose?: (e: SyntheticEvent) => void;
}

interface IPropsDescOptions {
  title?: string;
  description?: string;
}

interface IPropsHeaderForm {
  title?: string;
}

interface IPropsCardTech {
  img: string;
  title: string;
}

interface IPropsFormUp {
  title?: string;
  description?: string;
  children?: ReactNode;
  handleSubmit?: (e: SyntheticEvent) => void;
}

interface IPropsButtonHome {
  title: string;
  html?: string;
  href?: string;
  css?: string;
  to?: string;
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
  first?: boolean;
  title?: string;
  clName?: string;
  onClick?: (e: SyntheticEvent) => void;
}

interface IPropsCardMain {
  img?: string;
  grid?: string;
  href?: string;
  title?: string;
  description?: string;
}

interface IPropsCardAbout {
  img?: string;
  href?: string;
  title?: string;
}

interface IPropsCardDetect {
  idx: number;
  img?: string;
  name?: string;
  buffer?: Uint8Array;
  predictions?: number[];
  setState: [Dispatch<React.SetStateAction<boolean>>, boolean];
  onClick?: (buffer?: Uint8Array, idx?: number) => Promise<void>;
  onRemove?: (idx: number) => void;
  deletePred?: (idx?: number) => void;
}

export type {
  IPropsFormUp,
  IPropsChildren,
  IPropsCardTech,
  IPropsCardMain,
  IPropsCardAbout,
  IPropsFormGroup,
  IPropsHeaderForm,
  IPropsButtonHome,
  IPropsMainButton,
  IPropsCardDetect,
  IPropsDescOptions,
  IPropsChildrenModal
};
