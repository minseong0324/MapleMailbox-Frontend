import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { s } from './style';
import { useNavigate } from 'react-router-dom';
import axios, {AxiosError} from "axios";
import Modal from '../../components/Modal/Modal';
import BackButton from "src/components/BackButton/BackButton";
import ErrorModal from "src/components/ErrorModal/ErrorModal";
import {useToken}  from '../../contexts/TokenProvider/TokenProvider'

function MyPage() {
    const { accessToken, refreshToken } = useToken();
    const [isLeaveModalOpen, setLeaveModalOpen] = useState(false);
    const [isCheckModalOpen, setCheckModalOpen] = useState(false);
    const [word, setWord] = useState('');  // 보내는 사람 이름을 관리하는 상태
    const navigate = useNavigate(); // useNavigate hook 사용
    const MyUserId = localStorage.getItem("userId")
    const { userId } = useParams<{ userId: string }>(); //userId를 url에서 떼오기 코드
    const userName = localStorage.getItem(`userName_${userId}`);
    const [isErrorModalOpen, setErrorModalOpen] = useState(false);
    const [modalErrorContent, setModalErrorContent] = useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.

    useEffect(() => {
        if(userId !== MyUserId) {
            setModalErrorContent(
                <s.ErrorCenterModalWrapper>
                    <s.ErrorModalTextsWrapper1>잘못된 접근이에요!</s.ErrorModalTextsWrapper1>
                    <s.ModalButton onClick={handleNavigateHome}>돌아가기</s.ModalButton>
                </s.ErrorCenterModalWrapper>
            );
            setErrorModalOpen(true)
        }
        
    })

    const handleNavigateHome = () => { 
        navigate(`/home/${MyUserId}`);    
    }

    const handleNavigateSelectCharacterTree = () => { 
        navigate(`/select-character-tree/${MyUserId}`);
    }

    //탈퇴하기 모달창 열기 함수
    const handleSubmitLeaveModalOpen = () => { 
        setLeaveModalOpen(true);
    }

     //취소 함수
    const handleSubmitCancel = () => { 
        setLeaveModalOpen(false);
        setCheckModalOpen(false);
    }

    //탈퇴하기 전 단어 입력 모달창 열기 함수
    const handleSubmitCheckModal = () => { 
        setCheckModalOpen(true);
    }

    // 탈퇴하기 위해 MapleMailbox를 입력받는 함수
    const writeWord = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWord(e.target.value)
    }

    //탈퇴하기 버튼 함수
    const handleSubmitLeave = async () => { 
        // 입력된 word가 'MapleMailbox'인지 확인
        if (word !== 'MapleMailbox') {
            setModalErrorContent(
                <s.ErrorCenterModalWrapper>
                    <s.ErrorModalTextsWrapper2>입력값이</s.ErrorModalTextsWrapper2>
                    <s.ErrorModalTextsWrapper2>일치하지 않아요.</s.ErrorModalTextsWrapper2>
                    <s.ModalButton onClick={handleNavigateHome}>돌아가기</s.ModalButton>
                </s.ErrorCenterModalWrapper>
            );
            setErrorModalOpen(true)
            setCheckModalOpen(false);
            setLeaveModalOpen(false);
            setWord(''); // input의 값 초기화
            return; // 함수 종료
        }
        try {
            const response = await axios.delete(`https://maplemailbox.com/api/auth/leave/${MyUserId}`, {
                headers: {
                    'authorization': `${accessToken}`
                }
        });
            // 추가: response가 정의되어 있고 data가 있는지 확인
            if(response.status === 200) {
                // User has been deactivated, handle this (e.g. log out)
                setLeaveModalOpen(false);
                setCheckModalOpen(false); // 입력값 확인 모달 닫기
                localStorage.clear();
                navigate('/');
            } 
            
        
        } catch (error: unknown) { //에러 일 경우
            if (error instanceof AxiosError) {
                const status = error?.response?.status;
                setModalErrorContent(
                    <s.CenterModalWrapper>
                        <s.ErrorModalTextsWrapper2>유저의 정보를</s.ErrorModalTextsWrapper2>
                        <s.ErrorModalTextsWrapper2>불러오지 못했어요.</s.ErrorModalTextsWrapper2>
                        <s.ModalButton onClick={handleNavigateHome}>돌아가기</s.ModalButton>
                    </s.CenterModalWrapper>
                );
                if (status === 404) {
                    // 리소스를 찾을 수 없음
                } else if (status === 500) {
                    // 서버 내부 오류
                } else {
                    // 기타 상태 코드 처리
                }
            } 
            setErrorModalOpen(true);
            return null;
          }
        }
    

    return (
        <s.Wrapper>
            
            {/*<BackButton to="/ownerhome" /> {/* 프론트 단독 개발 시에 이거 사용. */}
       
            <BackButton to={`/home/${MyUserId}`} /> {/* 백엔드 코드와 결합 시 이거 사용. */}
          
            <s.CenteredWrapper>
                
            <s.TitleTextStyle>{userName}의 마이페이지</s.TitleTextStyle>
            <s.ButtonWrapper>
                <s.Button onClick={handleNavigateSelectCharacterTree}>내 나무/캐릭터 변경하기</s.Button>
                <s.Button onClick={handleSubmitLeaveModalOpen}>내 나무 없애기</s.Button>       
            </s.ButtonWrapper>

            <Modal isOpen={isLeaveModalOpen} onClose={() => setLeaveModalOpen(false)}>
                <s.CenteredWrapper>
                    <s.H2>정말 탈퇴하시겠습니까?</s.H2>
                    <s.P>
                        삭제된 정보는 복구할 수 없습니다. 신중하게 생각하시고 결정해주시기 바랍니다.
                    <s.Break/>
                    </s.P>
                    <s.ModalButton onClick={handleSubmitCheckModal}>탈퇴하기</s.ModalButton>
                    <s.ModalButton onClick={handleSubmitCancel}>취소</s.ModalButton>
                </s.CenteredWrapper>
                
            </Modal>

            <Modal isOpen={isCheckModalOpen} onClose={() => setCheckModalOpen(false)}>
                <s.CenteredWrapper>
                    <s.H2>탈퇴를 원하시면,</s.H2>
                    <s.P>
                        'MapleMailbox'를 입력해주세요. 탈퇴가 완료됩니다.
                    <s.Break/>
                    </s.P>
                    <s.WordInput
                        type="text"
                        placeholder="탈퇴하기 위해 입력하세요."
                        value={word}
                        onChange={writeWord}
                    />
                    <s.ModalButton onClick={handleSubmitCancel}>취소</s.ModalButton>
                    <s.ModalButton onClick={handleSubmitLeave}>확인</s.ModalButton>
                </s.CenteredWrapper>
                
            </Modal>
            </s.CenteredWrapper>
            <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
                {modalErrorContent}
            </ErrorModal>
        </s.Wrapper>
    );
}

export default MyPage;