import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import KakaoLogin from '../login/kakaoLogin/KakaoLogin';
import NaverLogin from '../login/naverLogin/NaverLogin';
import GoogleLoginButton from '../login/googleLogin/GoogleLoginButton';
import axios from 'axios';
import { s } from './style';
import NaverSignUpImage from "../../assets/socialLoginButton/NaverSignUp.svg";
import KakaoSignUpImage from "../../assets/socialLoginButton/KakaoSignUp.svg";
import GoogleSignUpImage from "../../assets/socialLoginButton/GoogleSignUp.svg";

function SignUp() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // useNavigate hook 사용
  
    // 회원가입 처리 함수
    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      // 여기에 회원가입 로직 추가
      // API 요청 등
      // 이부분은 백엔드 API가 준비되면 주석 해제하고 사용
      console.log(`Signing up as: ${userName}, ${email}, ${password}`);

      // 회원가입 API 요청
      try {
        const response = await axios.post("http://localhost:8080/auth/signup/self", {
          userName,
          email,
          password,
        });
        console.log(userName, email, password);
  
        // 회원가입 성공, status 200일 때
        if (response.status === 200) {
          alert("회원가입에 성공하였습니다!")
          navigate("/login"); 
        } else if (response.status === 400) {
          // 회원가입 실패, status 400일 때
          switch(response.data.code) { //예시로 한 것.
            case 'ID AND NICKNAME DUPLICATION':
              alert('닉네임과 이메일이 중복되었습니다.');
              break;
            case 'ID DUPLICATION':
              alert('이메일이 중복되었습니다.');
              break;
            case 'NICKNAME DUPLICATION':
              alert('닉네임이 중복되었습니다.');
              break;
            case 'NULL POINT EXCEPTION':
              alert('입력하지 않은 란이 있습니다.');
              break;
            default:
              alert(`회원가입에 실패했습니다: ${response.data.message}`);
              break;
          }
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          alert("회원가입 도중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
          navigate("/signup");
        }
      }
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
            <GoogleLoginButton buttonImage={GoogleSignUpImage} />
        </s.SignUpForm>
      </s.SignUpWrapper>
    );
  }
  
  export default SignUp;