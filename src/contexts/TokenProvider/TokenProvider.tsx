import React, { useState, useEffect, useContext, ReactNode } from 'react';
import axios from 'axios';
import {s} from './style';
import { useNavigate } from 'react-router-dom';
import ErrorModal from "src/components/ErrorModal/ErrorModal";

// 1. 토큰 관리를 위한 Context 생성
type TokenContextType = {
    accessToken: string | null;
    refreshToken: string | null;
};

const TokenContext = React.createContext<TokenContextType>({
    accessToken: null,
    refreshToken: null,
});


interface TokenProviderProps {
    children: ReactNode;
}

function TokenProvider({ children }: TokenProviderProps) {
    const navigate = useNavigate();
    const [isErrorModalOpen, setErrorModalOpen] = useState(false);
    const [modalErrorContent, setModalErrorContent] = useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.

    useEffect(() => {
        const refreshToken = localStorage.getItem('refreshToken');
        console.log("TokenProvider");
        console.log(refreshToken);
        console.log("TokenProvider----");

        const interval = setInterval(async () => {
            const refreshToken = localStorage.getItem('refreshToken');

            if (refreshToken) {
                const response = await axios.post(`http://localhost:8080/api/auth/refresh`,{}, {
                    headers: {
                        'reauthorization': `${refreshToken}`
                    }
                });

                if (response.status === 200) {
                    const accessToken = response.headers['authorization'];
                    localStorage.setItem('accessToken', accessToken);

                    const newRefreshToken = response.headers['reauthorization'];
                    localStorage.setItem('refreshToken', newRefreshToken);
                } else {
                    setModalErrorContent(
                    <s.ErrorCenterModalWrapper>
                        <s.ErrorModalTextsWrapper2>세션이 만료되었어요!</s.ErrorModalTextsWrapper2>
                        <s.ErrorModalTextsWrapper2>로그아웃 처리 됩니다!</s.ErrorModalTextsWrapper2>
                        <s.ModalButton onClick={handleNavigateHome}>돌아가기</s.ModalButton>
                    </s.ErrorCenterModalWrapper>
                    );
                    setErrorModalOpen(true)
                    localStorage.removeItem("email");
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('userId');
                    localStorage.removeItem('refreshToken');
                    localStorage.removeItem('nowDate');
                    localStorage.removeItem('userName');
                    localStorage.removeItem('treeType');
                    localStorage.removeItem('characterType');
                    localStorage.removeItem('lettersOverFive');
                }
            }
        }, 1000 * 60 * 0.1); // 30분 마다 실행

        return () => clearInterval(interval);
  }, [navigate]);

  const handleNavigateHome = () => {
    navigate('/')
  };

  return (
    <TokenContext.Provider value={{ 
        accessToken: localStorage.getItem('accessToken'),
        refreshToken: localStorage.getItem('refreshToken')
    }}>
      {children}
        <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
            {modalErrorContent}
        </ErrorModal>
      {modalErrorContent}
    </TokenContext.Provider>
  );
}

// 다른 컴포넌트에서 쉽게 사용할 수 있는 custom hook
export function useToken() {
  return useContext(TokenContext);
}

export default TokenProvider;
