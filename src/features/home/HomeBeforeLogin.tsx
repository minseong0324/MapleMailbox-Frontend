import { useState } from 'react';
import { useSelector} from 'react-redux';
import { RootState } from '../../app/store';
import MenuBeforeLogin from '../../components/MenuBeforeLogin';
import Modal from '../../components/Modal';
import initialTreeImage from '../../assets/treeImg/MapleMainTree.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';  // useNavigate import
import "./Home.css"
import GinkgoCharImg from '../../assets/charImg/ginkgo-small-big2.png';

const Button = styled.button`
  font-family: 'LeeSeoyun';
  width: 200px; // 버튼 너비를 조정
  height: 35px; // 버튼 높이를 조정
  padding: 10px; // 내부 패딩을 조정
  background:rgb(255, 178, 34);
  color: black;
  border-radius: 15px;
  font-size: 17px; 
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 2;
  &:active { // 버튼이 눌렸을 때의 스타일
    background: rgb(255, 157, 0); // 눌렸을 때의 배경색을 변경
  }
`;


  const CenteredWrapper = styled.div`
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const TextsStyle = styled.div`
font-family: 'LeeSeoyun';
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.2;  // 글자 간격
`;

const GinkgoCharImage = styled.img`
  position: absolute;
  z-index: 2;
  top: 77%; // top offset from tree image
  right: 25%; // right offset from tree image
`;

const TreeImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

function HomeBeforeLogin() {
  const treeState = useSelector((state: RootState) => state.autumnTree.treeState);
  const [isMenuOpen, setMenuOpen] = useState(true); 
  const [isServiceModalOpen, setServiceModalOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate hook 사용


  const getTreeImage = () => {
    return initialTreeImage;
  };

  const handleServiceDescription = () => {
    setServiceModalOpen(true);
  };

  

return (
  <>
  {isMenuOpen && <MenuBeforeLogin onLogin={() => navigate('/login')} onServiceDescription={handleServiceDescription} />}
   <CenteredWrapper>
    <TextsStyle>
      <h3>가을을 기다리며,</h3>
      <h1>단풍 우편함</h1>
      <br/>
      <p>당신의 따뜻한 마음으로 나무를 물들여봐요.</p>
    </TextsStyle>
   
    <TreeImageWrapper>
      <img className= "treeimg" src={getTreeImage(treeState)} alt="Autumn Tree"/>
      <GinkgoCharImage src={GinkgoCharImg} alt="Ginkgo Image" />
    </TreeImageWrapper>
      <br/> 
      <Button onClick={() => navigate('/login')}>로그인</Button>
      <br/> 
      <Button onClick={() => navigate('/signup')}>회원가입</Button>
      <Modal isOpen={isServiceModalOpen} onClose={() => setServiceModalOpen(false)}>
        <h3>가을을 기다리며, 단풍우편함</h3>
        <p>
          하루에 5개 이상의 편지를 받으면 오늘의 편지를 열람할 수 있어요.
          <br/>
          어쩌구 저쩌구
        </p>
      </Modal>
    </CenteredWrapper>
  </>
);

}

export default HomeBeforeLogin;
