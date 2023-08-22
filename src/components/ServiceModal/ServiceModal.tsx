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
  

            <s.ModalTextsWrapper>
                <s.HorizontalContainer>
                    <s.MapleLeafImage/>
                    <s.TitleWrapper>
                        <s.SubTitle>가을을 기다리며,</s.SubTitle>
                        <s.Title>단풍 우편함</s.Title>
                    </s.TitleWrapper>
                    <s.GinkgoLeafImage/>
                </s.HorizontalContainer>
           
                
                <s.SubSubTitle>룰루</s.SubSubTitle>
            </s.ModalTextsWrapper>
            

    </Modal>
  );
}

export default ServiceModal;
