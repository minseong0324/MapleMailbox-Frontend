
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './features/home/Home';
import Login from './features/login/Login';
import SignUp from './features/signup/SignUp';
import HomeBeforeLogin from './features/home/HomeBeforeLogin/HomeBeforeLogin';
import OwnerHome from './features/home/OwnerHome/OwnerHome';
import "./App.css"
import LeafFalling from './assets/leafFalling/leafFalling'
import SelectTreeCharacter from './features/select/selectTreeCharacter';
import KakaoLogin from './features/login/kakaoLogin/KakaoLogin';
import KakaoCallback from './features/login/kakaoLogin/KakaoCallback';
import NaverLogin from './features/login/naverLogin/NaverLogin';
import NaverCallback from './features/login/naverLogin/NaverCallback';
import GoogleLoginButton from './features/login/googleLogin/GoogleLoginButton';
function App() {
  return (
    <>
    <LeafFalling />
      <Router>
          <Routes>
            <Route path="/" element={<HomeBeforeLogin />} />
            <Route path="/Home" element={<Home />} />
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
    </>
  );
}

export default App;
