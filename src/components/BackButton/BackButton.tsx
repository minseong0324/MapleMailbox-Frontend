import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { s } from './style';

type BackButtonProps = {
    to: string;
}

function BackButton({ to }: BackButtonProps) { 
    const navigate = useNavigate(); // useNavigate hook 사용

       // 뒤로가기 버튼의 이벤트 핸들러 함수
    const handleBack = () => {
        //navigate(`/mypage/${userId}`);
        navigate(to); // `to` prop 사용

    };

    return(
        <s.BackWrapper>
            <s.BackButton onClick={handleBack}></s.BackButton>
        </s.BackWrapper>
    )
}
export default BackButton;
