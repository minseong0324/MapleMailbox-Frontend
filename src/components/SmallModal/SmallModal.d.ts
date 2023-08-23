import React from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
declare const SmallModal: React.FC<ModalProps>;
export default SmallModal;
