import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VisitorHome from './pages/home/VisitorHome/VisitorHome';
import Home from './pages/home/Home';
import UserProvider from './contexts/UserProvider/UserProvider';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import HomeBeforeLogin from './pages/home/HomeBeforeLogin/HomeBeforeLogin';
import OwnerHome from './pages/home/OwnerHome/OwnerHome';
import useScroll from './hooks/useScroll/useScroll';
import LeafFalling from './components/leafFalling/leafFalling'
import Clouds from './components/Clouds/Clouds';
import SelectTreeCharacter from './pages/select/selectTreeCharacter';
import KakaoLogin from './pages/login/kakaoLogin/KakaoLogin';
import KakaoCallback from './pages/login/kakaoLogin/KakaoCallback';
import NaverLogin from './pages/login/naverLogin/NaverLogin';
import NaverCallback from './pages/login/naverLogin/NaverCallback';
import GoogleLoginButton from './pages/login/googleLogin/GoogleLoginButton';
import GoogleCallback from './pages/login/googleLogin/GoogleCallback';
import MyPage from './pages/MyPage/MyPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import TokenProvider from './contexts/TokenProvider/TokenProvider';

const queryClient = new QueryClient();

function App() {
  return (
    <>
    
    <QueryClientProvider client={queryClient}>
     
    <UserProvider>
      <LeafFalling />
      <Clouds />
      
      <Router>
      <TokenProvider>
        <Routes>
        
          <Route path="/" element={<HomeBeforeLogin />} />
          <Route path="/home/:userId" element={<Home />} />
          <Route path="/ownerhome" element={<OwnerHome />} /> {/* 이건 출시 이전에 뺄 것입니다. 개발을 위해 라우트 해두었습니다. */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/select-character-tree/:userId" element={<SelectTreeCharacter />} />
        
        
          <Route path="/kakao/callback" element={<KakaoCallback />} />
        
          <Route path="/naver/callback" element={<NaverCallback />} />
          <Route path="/google/callback" element={<GoogleCallback />} />

          <Route path="/mypage/:userId" element={<MyPage />} />
          
        </Routes>
        </TokenProvider>
      </Router>
    </UserProvider>
    </QueryClientProvider>
    
    </>
    
  );
}

export default App;
