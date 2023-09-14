import React,{useEffect} from 'react';
import {s} from "./style";

// children 프로퍼티를 포함하도록 ModalProps 인터페이스를 수정
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {

  useEffect(() => {
    if (isOpen) {
      const modalWrapperElement = document.getElementById("modal-wrapper");
      if (modalWrapperElement) { // null 체크
        const fullHeight = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        );
        modalWrapperElement.style.height = `${fullHeight}px`;
      }
    }
  }, [isOpen]);
  
  return (
    <s.ModalWrapper id="modal-wrapper" show={isOpen} onClick={onClose}>
      <s.ModalContent onClick={(e: React.SyntheticEvent) => e.stopPropagation()}>
        <s.ModalInnerContent>
        {children}
        </s.ModalInnerContent>
      </s.ModalContent>
    </s.ModalWrapper>
  );
};

export default Modal;