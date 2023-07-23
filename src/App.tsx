
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VisitorHome from './pages/home/VisitorHome/VisitorHome';
import Home from './pages/home/Home';
import UserProvider from './components/UserProvider';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import HomeBeforeLogin from './pages/home/HomeBeforeLogin/HomeBeforeLogin';
import OwnerHome from './pages/home/OwnerHome/OwnerHome';
import "./App.css"
import LeafFalling from './assets/leafFalling/leafFalling'
import SelectTreeCharacter from './pages/select/selectTreeCharacter';
import KakaoLogin from './pages/login/kakaoLogin/KakaoLogin';
import KakaoCallback from './pages/login/kakaoLogin/KakaoCallback';
import NaverLogin from './pages/login/naverLogin/NaverLogin';
import NaverCallback from './pages/login/naverLogin/NaverCallback';
import GoogleLoginButton from './pages/login/googleLogin/GoogleLoginButton';

function App() {
  return (
    <UserProvider>
      <LeafFalling />
      <Router>
        <Routes>
          <Route path="/" element={<HomeBeforeLogin />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/VisitorHome" element={<VisitorHome />} />
          <Route path="/OwnerHome" element={<OwnerHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/select-character-tree" element={<SelectTreeCharacter />} />
          <Route path="/kakao-login" element={<KakaoLogin />} /> 
          <Route path="/kakao/callback" element={<KakaoCallback />} />
          <Route path="/naver-login" element={<NaverLogin />} /> 
          <Route path="/naver/callback" element={<NaverCallback />} />
          <Route path="/google-login" element={<GoogleLoginButton />} /> 
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
