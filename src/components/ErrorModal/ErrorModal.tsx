import React,{useEffect} from 'react';
import {s} from "./style";

// children 프로퍼티를 포함하도록 ModalProps 인터페이스를 수정했습니다.
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ErrorModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {

  const [fullHeight, setFullHeight] = React.useState('100vh');  // 상태 변수

  useEffect(() => {
    if (isOpen) {
      const calculatedHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      setFullHeight(`${calculatedHeight}px`);  // 상태 업데이트
    }
  }, [isOpen]);
  
  return (
    <s.ModalWrapper id="modal-wrapper" style={{minHeight: fullHeight}} show={isOpen} onClick={onClose}>
    <s.ModalContent onClick={(e: React.SyntheticEvent) => e.stopPropagation()}>
        <s.ModalInnerContent>
        {children}
        </s.ModalInnerContent>
      </s.ModalContent>
    </s.ModalWrapper>
  );
};

export default ErrorModal;