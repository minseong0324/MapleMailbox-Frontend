import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import KakaoLogin from '../login/kakaoLogin/KakaoLogin';
import NaverLogin from '../login/naverLogin/NaverLogin';
import GoogleLogin from '../login/googleLogin/GoogleLogin'
import axios, {AxiosError} from 'axios';
import { s } from './style';
import NaverSignUpImage from "../../assets/socialLoginButton/NaverSignUp.svg";
import KakaoSignUpImage from "../../assets/socialLoginButton/KakaoSignUp.svg";
import GoogleSignUpImage from "../../assets/socialLoginButton/GoogleSignUp.svg";
import ErrorModal from "src/components/ErrorModal/ErrorModal";

function SignUp() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // useNavigate hook 사용
    const [isErrorModalOpen, setErrorModalOpen] = useState(false);
    const [modalErrorContent, setModalErrorContent] = useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.
  
    // 회원가입 처리 함수
    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // 여기서 입력값 검사 시작
      if (!userName || !email || !password) {
        setModalErrorContent(
          <s.ErrorCenterModalWrapper>
              <s.ErrorModalTextsWrapper2>이름, 이메일, 비밀번호</s.ErrorModalTextsWrapper2>
              <s.ErrorModalTextsWrapper2>를 모두 입력해주세요!</s.ErrorModalTextsWrapper2>
              <s.ModalButton onClick={handleErrorModalClose}>닫기</s.ModalButton>
          </s.ErrorCenterModalWrapper>
        );
        setErrorModalOpen(true);
        return; // 함수 실행을 중단
      }

      // 회원가입 API 요청
      try {
        const response = await axios.post(`http://13.125.112.77:80/api/auth/signup/self`, {
          userName,
          email,
          password,
        });
  
        // 회원가입 성공, status 200일 때
        if (response.status === 200) {
          alert("회원가입에 성공하였습니다!")
          navigate("/login"); 
        } 
      } catch (error: unknown) { //에러 일 경우
        if (error instanceof AxiosError) {
          const status = error?.response?.status;
          console.error('Failed to fetch user info:', error);
          setModalErrorContent(
            <s.ErrorCenterModalWrapper>
                <s.ErrorModalTextsWrapper1>이메일이 존재해요!</s.ErrorModalTextsWrapper1>
                <s.ModalButton onClick={handleErrorModalClose}>닫기</s.ModalButton>
            </s.ErrorCenterModalWrapper>
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
    
    const handleErrorModalClose = () => { 
      setErrorModalOpen(false);
    }
  
    return (
      <s.SignUpWrapper>
        <s.H1>회원가입</s.H1>
        <s.SignUpForm onSubmit={handleSignUp}>
          
            <s.SignUpInput
                type="text"
                placeholder="이름"
                value={userName}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUserName(e.target.value)}
            />

            <s.SignUpInput
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
            />
            
            <s.SignUpInput
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
            />
            <s.SignUpButton type="submit">회원가입하기</s.SignUpButton> {/* onclick 이벤트로 회원가입하기를 누르면 로그인 페이지로 */}
            <KakaoLogin imageUrl={KakaoSignUpImage}/>
            <NaverLogin imageUrl={NaverSignUpImage}/>
            <GoogleLogin buttonImage={GoogleSignUpImage}/>
        {/* <GoogleLoginButton buttonImage={GoogleSignUpImage}/> */}        
          </s.SignUpForm>

        <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
          {modalErrorContent}
      </ErrorModal>
      </s.SignUpWrapper>
    );
  }
  
  export default SignUp;