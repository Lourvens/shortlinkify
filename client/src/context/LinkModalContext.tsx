import { createContext, useContext, useState } from "react";

type modalProps = {
  original_url: string;
  short_url: string;
};

type context = {
  props: modalProps | undefined;
  isOpen: boolean;
  onClose: () => void;
  openModal: (props: modalProps) => void;
};

const ModalContext = createContext<context | undefined>(undefined);

type ModalProps = { children: JSX.Element[] };
export function LinkModalProvider({ children }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [props, setProps] = useState<modalProps>();

  const onClose = () => setIsOpen(false);
  const openModal = (props: modalProps) => {
    setProps(props);
    setIsOpen(true);
  };

  const value: context = {
    isOpen,
    props,
    onClose,
    openModal,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

export function useLinkModal() {
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error("context cannot be undefined");
  }
  return modalContext;
}
