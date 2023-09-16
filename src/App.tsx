import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VisitorHome from './pages/home/VisitorHome/VisitorHome';
import Home from './pages/home/Home';
import UserProvider from './contexts/UserProvider/UserProvider';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import HomeBeforeLogin from './pages/home/HomeBeforeLogin/HomeBeforeLogin';
import OwnerHome from './pages/home/OwnerHome/OwnerHome';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import useScroll from './hooks/useScroll/useScroll';
import LeafFalling from './components/leafFalling/leafFalling'

import SelectTreeCharacter from './pages/select/selectTreeCharacter';
import KakaoCallback from './pages/login/kakaoLogin/KakaoCallback';
import NaverCallback from './pages/login/naverLogin/NaverCallback';
import GoogleCallback from './pages/login/googleLogin/GoogleCallback';
import MyPage from './pages/MyPage/MyPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import TokenProvider from './contexts/TokenProvider/TokenProvider';

//import ErrorModal from './components/ErrorModal/ErrorModal'; //점검할 때  전역적으로 띄울 공지모달을 위한 코드
//import {s} from './style'  //점검할 때  전역적으로 띄울 공지모달을 위한 코드


const queryClient = new QueryClient();

function App() {

  /*
  //점검할 때  전역적으로 띄울 공지모달을 위한 코드
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorContent, setModalErrorContent] = useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.
  const [word, setWord] = useState('');  // 보내는 사람 이름을 관리하는 상태

  const handleNavigateInstagram = () => {
    window.location.href = 'https://instagram.com/maplemailbox_official?igshid=NGVhN2U2NjQ0Yg==';
}

// 관리자 비밀번호 입력하기 위한 함수
const writeWord = (e: React.ChangeEvent<HTMLInputElement>) => {
  setWord(e.target.value)
}

const handleModalClose = () => {
  if (word !== 'rkdtmdwns') {
    setErrorModalOpen(false);
    return;
  }
}

  //점검할 때  전역적으로 띄울 공지모달을 위한 코드
  useEffect(() => {
    if (word === 'rkdtmdwns') {
      // word가 '강승준'이라면 이 useEffect는 실행하지 않음
      return;
    }

      setModalErrorContent(
          <s.ErrorCenterModalWrapper>
              <s.ErrorModalTextsWrapper2>이용 중 불편을 드려 죄송합니다.</s.ErrorModalTextsWrapper2>
              <s.ErrorModalTextsWrapper2>점검-09/16 17:00~22:00</s.ErrorModalTextsWrapper2>
              <s.ModalButton onClick={handleNavigateInstagram}>인스타그램 이동하기</s.ModalButton>
              <s.WordInput
                        type="text"
                        placeholder="관리자 비밀번호"
                        value={word}
                        onChange={writeWord}
              />
              <s.ModalButton onClick={handleModalClose}>관리자용</s.ModalButton>
          </s.ErrorCenterModalWrapper>
      );
      
      setErrorModalOpen(true) 

  }, [isErrorModalOpen, word]);

*/
  useEffect(() => {
    function isAndroid() {
      return /Android/i.test(navigator.userAgent);
    }

    function checkOrientation() {
      if (isAndroid() && window.innerWidth > window.innerHeight) {
        alert('가로모드는 지원하지 않습니다. 새로모드로 전환해주세요!');
      }
    }


    
    window.addEventListener('resize', checkOrientation);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkOrientation);
    };
  }, []);

  return (
    <>
    
    <QueryClientProvider client={queryClient}>

    <UserProvider>
      <LeafFalling />
      
      <Router>
      <TokenProvider>

        <Routes>
        
          <Route path="/" element={<HomeBeforeLogin />} />
          <Route path="/home/:userId" element={<Home />} />
          {/* <Route path="/ownerhome" element={<OwnerHome />} /> {/* 이건 출시 이전에 뺄 것입니다. 개발을 위해 라우트 해두었습니다. */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/select-character-tree/:userId" element={<SelectTreeCharacter />} />
          <Route path="/kakao/callback" element={<KakaoCallback />} />
          <Route path="/naver/callback" element={<NaverCallback />} />
          <Route path="/google/callback" element={<GoogleCallback />} />
          <Route path="/mypage/:userId" element={<MyPage />} />
          <Route path="/*" element={<ErrorPage />} />

        </Routes>

        </TokenProvider>
      </Router>
    </UserProvider>
    </QueryClientProvider>

    {/*점검할 때  전역적으로 띄울 공지모달을 위한 코드
    <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
      {modalErrorContent}
    </ErrorModal>
      */}
    </>
    
  );
}

export default App;
