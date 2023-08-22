import React, { useState, useEffect } from "react";
import { s } from './style'
import { useNavigate } from 'react-router-dom';
import KakaoLogin from './kakaoLogin/KakaoLogin';
import NaverLogin from './naverLogin/NaverLogin';
import GoogleLogin from './googleLogin/GoogleLogin'
import GoogleLoginButton from './googleLogin/GoogleLoginButton';
import axios, {AxiosError} from 'axios';
import { QueryClientProvider, useMutation, useQueryClient } from 'react-query';
import NaverLoginImage from "../../assets/socialLoginButton/NaverLogin.svg";
import KakaoLoginImage from "../../assets/socialLoginButton/KakaoLogin.svg";
import GoogleLoginImage from '../../assets/socialLoginButton/GoogleLogin.svg'
import ErrorModal from "src/components/ErrorModal/ErrorModal";


// 로그인에 필요한 사용자의 정보를 나타내는 타입을 정의합니다.
type LoginCredentials = {
  email: string;
  password: string;
};

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // useNavigate hook 사용
    const [isErrorModalOpen, setErrorModalOpen] = useState(false);
    const [modalErrorContent, setModalErrorContent] = useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.

      // 서비스 설명 함수
  const handleServiceDescription = () => {
    setErrorModalOpen(true);
  };
    // 로그인 처리 함수
   // useMutation을 사용해 로그인 요청을 관리합니다.
  // 요청이 성공하면 성공 메시지를 보여주고, 실패하면 오류 메시지를 보여줍니다.
  // 요청이 성공하면 토큰을 로컬 스토리지에 저장합니다.
  const loginMutation = useMutation(async (credentials: LoginCredentials) => {
    const response = await axios.post(`http://localhost:8080/api/auth/login/self`, credentials);
    return response; // return whole response object, not just data
  }, {
    
    onSuccess: async (response) => {
      console.log(response.headers); 
      // your token processing code here
      const accessToken = response.headers['authorization']; 
      const refreshToken = response.headers['reauthorization'];
      
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      
      try{
        if (response.status === 200) {
          // 로그인 성공 시 GET 요청을 수행
          try {
            const userResponse = await axios.get(`http://localhost:8080/api/users`, {
              headers: {
                'authorization': `${accessToken}` 
              }
            });
            
            if (userResponse.status === 200) {
              //const { email, userName } = userResponse.data;
              const { userId, userName } = userResponse.data;
              localStorage.setItem("userId", userId);
              localStorage.setItem("userName", userName);
              //alert("로그인에 성공했습니다!");
            }
            const userId = localStorage.getItem('userId')
            const returnUrl = localStorage.getItem('returnUrl');

            if (returnUrl) {
              // 저장된 URL로 리다이렉트합니다.
              navigate(returnUrl);
              localStorage.removeItem('returnUrl'); // 사용 후 저장된 URL을 삭제합니다.
            } else {
              // 저장된 URL이 없으면 기본 페이지(예: 사용자 홈)로 리다이렉트합니다.
              navigate(`/home/${userId}`);
            }

          } catch (error: unknown) { //에러 일 경우
            console.error("사용자 정보를 가져오는 도중 오류가 발생했습니다.", error);
            if (error instanceof AxiosError) {
              const status = error?.response?.status;
              console.error('Failed to fetch user info:', error);
              setModalErrorContent(
                <s.ErrorCenterModalWrapper>
                    <s.ErrorModalTextsWrapper2>유저의 정보를</s.ErrorModalTextsWrapper2>
                <s.ErrorModalTextsWrapper2>불러오지 못했어요.</s.ErrorModalTextsWrapper2>
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
      } catch (error: unknown) { //에러 일 경우
        
        if (error instanceof AxiosError) {
          const status = error?.response?.status;
          console.error('Failed to fetch user info:', error);
          setModalErrorContent(
            <s.ErrorCenterModalWrapper>
                <s.ErrorModalTextsWrapper2>유저의 정보를</s.ErrorModalTextsWrapper2>
                <s.ErrorModalTextsWrapper2>불러오지 못했어요.</s.ErrorModalTextsWrapper2>
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
      
    },

    onError: (error) => {
      if (error instanceof AxiosError) {
        const status = error?.response?.status;
        console.error('Failed to fetch user info:', error);
        setModalErrorContent(
          <s.ErrorCenterModalWrapper>
              <s.ErrorModalTextsWrapper2>이메일 혹은 비밀번호를</s.ErrorModalTextsWrapper2>
              <s.ErrorModalTextsWrapper2>정확히 입력해주세요!</s.ErrorModalTextsWrapper2>
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
      console.error("Login error:", error);
      setErrorModalOpen(true);
    }
    
  });

  const handleErrorModalClose = () => {
    setErrorModalOpen(false);
  }

  // 폼 제출 시 로그인 뮤테이션을 실행합니다.
  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    loginMutation.mutate({ email, password });
    localStorage.setItem("email", email);
  };

    return (
      <>
      <s.LoginWrapper>
        <s.TextsStyle>
            <s.H3>가을을 기다리며,</s.H3>
            <s.H1>단풍 우편함</s.H1>
            <br/>
            <s.P>당신의 따뜻한 마음으로 나무를 물들여봐요.</s.P>
        </s.TextsStyle>
        <s.LoginForm onSubmit={handleSubmit}>
            <s.LoginInput
                type="text"
                placeholder="이메일"
                value={email}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
            />
            <s.LoginInput
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
            />
          <s.LoginButton type="submit">로그인하기</s.LoginButton>
          <KakaoLogin imageUrl={KakaoLoginImage}/>
          <NaverLogin imageUrl={NaverLoginImage}/>
          <GoogleLogin buttonImage={GoogleLoginImage}/>
          {/*<GoogleLoginButton buttonImage={GoogleLoginImage} />*/}
        </s.LoginForm>
      </s.LoginWrapper>

      <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
          {modalErrorContent}
      </ErrorModal>
      </>
    );
  }
  
  export default Login;

  /*
function setIdToken(credential: string) {
  throw new Error('Function not implemented.');
}
*/