import React from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
