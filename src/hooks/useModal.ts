import { useState } from 'react';

type arrayUseModal = [boolean, () => void, () => void];

const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const data: arrayUseModal = [isOpen, openModal, closeModal];

  return data;
};

export default useModal;
