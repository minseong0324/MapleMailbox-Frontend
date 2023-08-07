// NaverCallback.tsx
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { s } from './style'

function NaverCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');

    if (!code || !state) {
      alert('인증 코드 또는 상태 값이 없습니다.');
      navigate('/login');
      return;
    }

    axios.post('http://localhost:8080/api/auth/login/naver', { code, state })
      .then(async (response) => {
        if (response.status === 200) {
          const userResponse = await axios.get('http://localhost:8080/api/users', {
            headers: {
              Authorization: `Bearer ${response.data.token}`
            }
          });

          localStorage.setItem('email', userResponse.data.email);
          localStorage.setItem('name', userResponse.data.userName);
          localStorage.setItem('access_token', userResponse.headers.accessToken);
          localStorage.setItem('refresh_token', userResponse.headers.refreshToken);

          // Remove the code from the URL and redirect to the OwnerHome
          navigate(`/OwnerHome/${userResponse.data.email}`, { replace: true });
        } else {
          console.error('Login failed with status:', response.status);
          navigate('/login');
        }
      })
      .catch((error) => {
        console.error('로그인 실패', error);
        navigate('/login');
      });
  }, [navigate]);

  return (
    <s.NaverWrapper>
      로그인 중...
    </s.NaverWrapper>
  );
}

export default NaverCallback;
