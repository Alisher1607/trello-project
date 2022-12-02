import React from "react";
import ReactDOM from "react-dom";
import { Button, ModalBox, ModalContainer } from "./StyleModal";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <ModalContainer>
        <ModalBox>
          <Button onClick={onClose}>Close Modal</Button> {children}
        </ModalBox>
      </ModalContainer>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
