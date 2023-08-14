import React, { useState } from "react";
import { s } from './style';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import BackButton from "src/components/BackButton/BackButton";

function MyPage() {
    const [isLeaveModalOpen, setLeaveModalOpen] = useState(false);
    const navigate = useNavigate(); // useNavigate hook 사용
    const [userName, setUserName] = useState('김단풍'); // 기본 이름 설정


    const handleNavigateSelectCharacterTree = () => { 
        navigate('/select-character-tree');
    }

    //탈퇴하기 함수
    const handleSubmitLeave = () => { 
        setLeaveModalOpen(true);
    }

     //취소 함수
    const handleSubmitCancel = () => { 

    }


    return (
        <>
        <BackButton/>
            <s.CenteredWrapper>
            <s.TitleTextStyle>{userName}의 마이페이지</s.TitleTextStyle>
            <s.ButtonWrapper>
                <s.Button onClick={handleNavigateSelectCharacterTree}>내 나무/캐릭터 변경하기</s.Button>
                <s.Button onClick={handleSubmitLeave}>내 나무 없애기</s.Button>       
            </s.ButtonWrapper>
           
            <Modal isOpen={isLeaveModalOpen} onClose={() => setLeaveModalOpen(false)}>
                <s.H2>정말 탈퇴하시겠습니까?</s.H2>
                <s.P>
                    삭제된 정보는 복구할 수 없습니다. 신중하게 생각하시고 결정해주시기 바랍니다.
                <s.Break/>
                </s.P>
                <s.Button onClick={handleSubmitLeave}>탈퇴하기</s.Button>
                <s.Button onClick={handleSubmitCancel}>취소</s.Button>
            </Modal>
    
            

            </s.CenteredWrapper>
        </>
    );
}

export default MyPage;