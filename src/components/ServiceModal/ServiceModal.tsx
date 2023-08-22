import React from 'react';
import { s } from './style';
import Modal from '../../components/Modal/Modal'

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <s.H3>가을을 기다리며, 단풍우편함</s.H3>
      <s.P>
        하루에 5개 이상의 편지를 받으면 오늘의 편지를 열람할 수 있어요.
        <s.Break />
        어쩌구 저쩌구
      </s.P>
    </Modal>
  );
}

export default ServiceModal;
