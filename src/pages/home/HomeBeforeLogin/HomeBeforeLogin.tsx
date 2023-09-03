import { useState, useContext } from 'react';
import { useSelector} from 'react-redux';
import useScroll from 'src/hooks/useScroll/useScroll';
import MenuBeforeLogin from '../../../components/MenuBeforeLogin/MenuBeforeLogin';
import Modal from '../../../components/Modal/Modal';
import MapleTreeImage from '../../../assets/treeImg/MapleMainTree.png';
import { s } from './style'
import { useNavigate } from 'react-router-dom';  // useNavigate import
import GinkgoCharImg from '../../../assets/charImg/ginkgo-small.png';
import GrayCharImg from '../../../assets/charImg/gray-small.png';
import YellowCharImg from '../../../assets/charImg/yellow-small.png';
import ServiceModal from 'src/components/ServiceModal/ServiceModal';


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
      <s.GinkgoCharImage src={YellowCharImg} alt="Yellow Character" />
    </s.TreeImageWrapper>
    <s.ButtonWrapper>
      <s.Break/>
      <s.Button onClick={() => navigate('/login')}>로그인</s.Button>
      <s.Break/> 
      <s.Button onClick={() => navigate('/signup')}>회원가입</s.Button>
    </s.ButtonWrapper>

    <s.PolicyTextsWrapper>
      <s.PolicyTextsStyle>
        계속 진행하면 <s.PolicyStyledLink target="_blank" href="https://western-geography-c35.notion.site/006776f45848445583fb3270b03364da?pvs=4">서비스 이용약관</s.PolicyStyledLink>에 동의하고
      </s.PolicyTextsStyle>
      <s.PolicyTextsStyle>
        <s.PolicyStyledLink target="_blank" href="https://western-geography-c35.notion.site/1f195e6045b049aebf4ade0058718d92?pvs=4">개인정보 처리방침</s.PolicyStyledLink>을 읽었음을 인정하는 것으로 간주됩니다.
      </s.PolicyTextsStyle>
    </s.PolicyTextsWrapper>


    

    <ServiceModal isOpen={isServiceModalOpen} onClose={() => setServiceModalOpen(false)}/>

    </s.CenteredWrapper>
  </>
);

}

export default HomeBeforeLogin;
