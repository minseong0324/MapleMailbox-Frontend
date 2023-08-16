import React, { useState } from "react";
import { s } from './style';
import { useNavigate } from 'react-router-dom';
import axios, {AxiosError} from "axios";
import Modal from '../../components/Modal/Modal';
import BackButton from "src/components/BackButton/BackButton";

const userId = localStorage.getItem("userId")
const accessToken = localStorage.getItem("accessToken")


function MyPage() {
    const [isLeaveModalOpen, setLeaveModalOpen] = useState(false);
    const [isCheckModalOpen, setCheckModalOpen] = useState(false);
    const [word, setWord] = useState('');  // 보내는 사람 이름을 관리하는 상태
    const navigate = useNavigate(); // useNavigate hook 사용
    const [userName, setUserName] = useState('김단풍'); // 기본 이름 설정


    const handleNavigateSelectCharacterTree = () => { 
        navigate('/select-character-tree');
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
            alert("입력값이 일치하지 않습니다!");
            setCheckModalOpen(false);
            setLeaveModalOpen(false);
            setWord(''); // input의 값 초기화
            return; // 함수 종료
        }
        try {
            const response = await axios.delete(`http://localhost:8080/api/auth/leave/${userId}`, {
                headers: {
                    'authorization': `${accessToken}`
                }
        });
            // 추가: response가 정의되어 있고 data가 있는지 확인
            if(response.status === 200) {
                // User has been deactivated, handle this (e.g. log out)
                setLeaveModalOpen(false);
                setCheckModalOpen(false); // 입력값 확인 모달 닫기
                localStorage.removeItem("userId");
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                window.location.reload(); // 페이지 새로고침
            } 
            
        
        } catch (error: unknown) { //에러 일 경우
            if (error instanceof AxiosError) {
                const status = error?.response?.status;
                console.error('Failed to fetch user info:', error);
                if (status === 404) {
                    // 리소스를 찾을 수 없음
                } else if (status === 500) {
                    // 서버 내부 오류
                } else {
                // 기타 상태 코드 처리
                } 
            }
            alert("계정을 탈퇴하는 데에 실패했습니다.");
        } 
        return null;
    }
    

    return (
        <s.Wrapper>
            <BackButton to={`/home/${userId}`} /> {/* 백엔드 코드와 결합 시 이거 사용. */}
            {/*<BackButton to="/ownerhome" /> {/* 프론트 단독 개발 시에 이거 사용. */}
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
        </s.Wrapper>
    );
}

export default MyPage;