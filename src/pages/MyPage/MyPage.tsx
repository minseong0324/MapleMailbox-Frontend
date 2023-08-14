import React, { useState } from "react";
import { s } from './style';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Modal from '../../components/Modal/Modal';
import BackButton from "src/components/BackButton/BackButton";

const userId = localStorage.getItem("userId")
const accessToken = localStorage.getItem("accessToken")


function MyPage() {
    const [isLeaveModalOpen, setLeaveModalOpen] = useState(false);
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
    }

    //탈퇴하기 버튼 함수
    const handleSubmitLeave = () => { 
        axios.put(
            `http://localhost:8080/auth/leave`,
            userId,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
            }
        )
        .then((response) => {
            // 추가: response가 정의되어 있고 data가 있는지 확인
            if(response.status === 200) {
                // User has been deactivated, handle this (e.g. log out)
                setLeaveModalOpen(false);
                localStorage.removeItem("userId");
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                window.location.reload(); // 페이지 새로고침
            } else { // 에러 로직 추가해야함.
                if (response.data.code === 'LEAVE MAPLEMAILBOX FAILED') {
                    alert("계정을 탈퇴하는 데에 실패했습니다.")
                }
            }
        })
    }

    return (
        <>
            {/*<BackButton to={`/home/${userId}`} /> {/* 백엔드 코드와 결합 시 이거 사용. */}
            <BackButton to="/ownerhome" /> {/* 프론트 단독 개발 시에 이거 사용. */}
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
                    <s.ModalButton onClick={handleSubmitLeave}>탈퇴하기</s.ModalButton>
                    <s.ModalButton onClick={handleSubmitCancel}>취소</s.ModalButton>
                </s.CenteredWrapper>
                
            </Modal>
    
            

            </s.CenteredWrapper>
        </>
    );
}

export default MyPage;