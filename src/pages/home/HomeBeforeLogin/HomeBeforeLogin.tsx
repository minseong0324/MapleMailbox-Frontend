import { useState } from 'react';
import { useSelector} from 'react-redux';
import useScroll from 'src/hooks/useScroll/useScroll';
import MenuBeforeLogin from '../../../components/MenuBeforeLogin/MenuBeforeLogin';
import Modal from '../../../components/Modal/Modal';
import MapleTreeImage from '../../../assets/treeImg/MapleMainTree.png';
import { s } from './style'
import { useNavigate } from 'react-router-dom';  // useNavigate import
import GinkgoCharImg from '../../../assets/charImg/ginkgo-small.png';



function HomeBeforeLogin() {
  const [isMenuOpen, setMenuOpen] = useState(true); 
  const [isServiceModalOpen, setServiceModalOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate hook 사용

  const handleServiceDescription = () => {
    setServiceModalOpen(true);
  };

return (
  <>
  {isMenuOpen && <MenuBeforeLogin onLogin={() => navigate('/login')} onServiceDescription={handleServiceDescription} />}
   <s.CenteredWrapper>
    <s.TextsStyle>
      <s.H3>가을을 기다리며,</s.H3>
      <s.H1>단풍 우편함</s.H1>
      <s.Break/>
      <s.P>당신의 따뜻한 마음으로 나무를 물들여봐요.</s.P>
    </s.TextsStyle>
   
    <s.TreeImageWrapper>
      <s.TreeImg src={MapleTreeImage} alt="Autumn Tree"/>
      <s.GinkgoCharImage src={GinkgoCharImg} alt="Ginkgo Image" />
    </s.TreeImageWrapper>
    <s.ButtonWrapper>
      <s.Break/>
      <s.Button onClick={() => navigate('/login')}>로그인</s.Button>
      <s.Break/> 
      <s.Button onClick={() => navigate('/signup')}>회원가입</s.Button>
    </s.ButtonWrapper>
      <Modal isOpen={isServiceModalOpen} onClose={() => setServiceModalOpen(false)}>
        <s.H3>가을을 기다리며, 단풍우편함</s.H3>
        <s.P>
          하루에 5개 이상의 편지를 받으면 오늘의 편지를 열람할 수 있어요.
          <s.Break/>
          어쩌구 저쩌구
        </s.P>
      </Modal>
    </s.CenteredWrapper>
  </>
);

}

export default HomeBeforeLogin;
