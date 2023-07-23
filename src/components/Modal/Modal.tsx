// components/Modal.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

// children 프로퍼티를 포함하도록 ModalProps 인터페이스를 수정했습니다.
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// show 프로퍼티를 갖는 ModalWrapperProps 인터페이스를 정의했습니다.
interface ModalWrapperProps {
  show: boolean;
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

// ModalWrapper 컴포넌트에 ModalWrapperProps 타입을 적용하여 show 프로퍼티를 사용할 수 있도록 했습니다.
const ModalWrapper = styled.div<ModalWrapperProps>`
  font-family: 'EarlyFontDiary';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(197, 247, 255, 0.8);
  animation: ${props => props.show ? fadeIn : fadeOut} 0.5s linear forwards;
  display: ${props => props.show ? 'block' : 'none'};
  z-index: 999;
`;




const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 244, 220, 0.99);
  padding: 1em 1.5em;
  width: 200px;
  height : 500px;
  border-radius: 10px;
  border: 8px outset rgba(255, 142, 90, 0.8);
  //border: 8px dashed rgba(255, 155, 101, 0.8);
  color: rgb(0, 0, 0); // 폰트 색상을 흰색으로 변경
  font-size: 16px; // 폰트 크기를 16px로 설정
  overflow: auto; // 스크롤 기능 추가
`;


const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <ModalWrapper show={isOpen} onClick={onClose}>
      <ModalContent onClick={(e: React.SyntheticEvent) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
