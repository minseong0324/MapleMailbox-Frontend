import React from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
declare const ErrorModal: React.FC<ModalProps>;
export default ErrorModal;
