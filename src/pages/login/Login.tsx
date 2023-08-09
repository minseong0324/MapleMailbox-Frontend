import React, { useState, useEffect } from "react";
import { s } from './style'
import { useNavigate } from 'react-router-dom';
import KakaoLogin from './kakaoLogin/KakaoLogin';
import NaverLogin from './naverLogin/NaverLogin';
import GoogleLoginButton from './googleLogin/GoogleLoginButton';
import axios from 'axios';
import { QueryClientProvider, useMutation, useQueryClient } from 'react-query';
import NaverLoginImage from "../../assets/socialLoginButton/NaverLogin.svg";
import KakaoLoginImage from "../../assets/socialLoginButton/KakaoLogin.svg";
import GoogleLoginImage from '../../assets/socialLoginButton/GoogleLogin.svg'


// 로그인에 필요한 사용자의 정보를 나타내는 타입을 정의합니다.
type LoginCredentials = {
  email: string;
  password: string;
};

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // useNavigate hook 사용

    // 로그인 처리 함수
   // useMutation을 사용해 로그인 요청을 관리합니다.
  // 요청이 성공하면 성공 메시지를 보여주고, 실패하면 오류 메시지를 보여줍니다.
  // 요청이 성공하면 토큰을 로컬 스토리지에 저장합니다.
  const loginMutation = useMutation(async (credentials: LoginCredentials) => {
    const response = await axios.post("http://localhost:8080/auth/login/self", credentials);
    return response; // return whole response object, not just data
  }, {
    onSuccess: async (response) => {
      console.log(response.headers); 
      // your token processing code here
      const accessToken = response.headers['Authorization']; 
      const refreshToken = response.headers['Reauthorization'];
      
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);
      

      if (response.status === 200) {
        // 로그인 성공 시 GET 요청을 수행
        try {
          const userResponse = await axios.get("http://localhost:8080/api/users", {
            headers: {
              'Authorization': `Bearer ${response.headers['Authorization']}`  // 토큰을 헤더에 포함시키기 위함
            }
          });
          
          if (userResponse.status === 200) {
            //const { email, userName } = userResponse.data;
            const { id, userName } = userResponse.data;
            localStorage.setItem("user_id", id);
            //const endpointId = response.data('id');
            //localStorage.setItem("endpoint_id", endpointId);
            //localStorage.setItem("user_email", email);
            localStorage.setItem("user_name", userName);
            alert("로그인에 성공했습니다!");
            navigate(`/OwnerHome/${userResponse.data.id}`, { replace: true });
          }
        } catch (error) {
          console.error("사용자 정보를 가져오는 도중 오류가 발생했습니다.", error);
        }
      } else {
        switch(response.status) {
          case 401:
            alert(`로그인에 실패했습니다: ${response.data.message}`);
            break;
          default:
            alert("로그인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
            break;

            
        }
      }
    },
  
    onError: (error) => {
      console.error("Login error:", error);
      alert("로그인 도중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
    
  });

  // 폼 제출 시 로그인 뮤테이션을 실행합니다.
  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    loginMutation.mutate({ email, password });
    localStorage.setItem("email", email);
  };

  // useEffect를 사용해 토큰의 유효성을 주기적으로 확인합니다.
  // 토큰이 만료되면 사용자를 로그아웃시키거나 새 토큰을 요청합니다.
  useEffect(() => {
    // 30분마다 토큰을 새로 발급받는 요청을 보냅니다.
    const interval = setInterval(async () => {
      // 여기서는 refresh-token을 사용해 access-token을 새로 발급받습니다.
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken) {
        const response = await axios.post('http://localhost:8080/auth/refresh', {
          refreshToken: refreshToken,
        });

        if (response.status === 200) {
          const accessToken = response.headers['Authorization'];
          localStorage.setItem('access_token', accessToken);
        } else {
          // 토큰 발급에 실패한 경우 로그아웃하거나 적절한 조치를 취합니다.
          localStorage.clear();
          navigate('/login');
        }
      }
    }, 1000 * 60 * 30); // 30분 마다 실행

    // 컴포넌트 unmount 시 clearInterval 실행
    return () => clearInterval(interval);
}, [navigate]);



  
    return (
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
          <GoogleLoginButton buttonImage={GoogleLoginImage} />
        </s.LoginForm>
      </s.LoginWrapper>

    );
  }
  
  export default Login;

  /*
function setIdToken(credential: string) {
  throw new Error('Function not implemented.');
}
*/