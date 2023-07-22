import React, { useState } from "react";

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTree, setCharacter } from './selectedTreeCharacterSlice';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import Modal from '../../components/Modal';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MapleTreeImage from "../../assets/treeImg/MapleMainTree.png";
import GinkgoTreeImage from "../../assets/treeImg/GinkgoMainTree.png";
import MapleCharImg from "../../assets/charImg/maple-small-big2.png";
import GinkgoCharImg from "../../assets/charImg/ginkgo-small-big2.png";

const CenteredWrapper = styled.div`
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  z-index: 4;
`;

const TextsStyle = styled.div`
  font-family: 'LeeSeoyun';
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 5;
  font-size: 20px;
`;

const Button = styled.button`
  font-family: 'LeeSeoyun';
  width: 250px;
  height: 35px;
  padding: 10px;
  margin-top: 30px;
  background:rgb(255, 178, 34);
  color: black;
  border-radius: 15px;
  font-size: 17px; 
  border: 1px transparent;
  position: relative;
  z-index: 2;
`;

type ImageButtonProps = {
    src: string;
    alt: string;
    selected: boolean;
  };
  
  const ImageButton = styled.button<ImageButtonProps>`
  cursor: pointer;
  border: ${props => props.selected ? '2px solid rgba(255, 187, 0, 0.5)' : 'none'};
  border-radius: 15px; // 이 속성을 통해 모서리를 둥글게 만듭니다. 
  background-image: url(${props => props.src});
  background-size: cover;
  background-color: transparent;
  `;


function SelectTreeCharacter() {
  const [selectedTree, setSelectedTree] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [isServiceModalOpen, setServiceModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate hook 사용

  const handleSubmit = () => {
    const selectedData = {
      tree: selectedTree, //string
      character: selectedCharacter //string
    };
    dispatch(setTree(selectedTree));
    dispatch(setCharacter(selectedCharacter));
    console.log(selectedData);
  
    // 나무, 캐릭터 선택 후, 백엔드 서버로 데이터 전송
    fetch('https://localhost:8080', { // 백엔드 서버의 URL을 입력하세요.
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectedData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // 백엔드 서버로부터의 응답 처리 로직을 작성하세요.
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  
    // 홈으로 이동
    navigate('/Ownerhome');
  }

 

  const handleServiceDescription = () => {
    setServiceModalOpen(true);
  };

  return (
    <>
      
      <CenteredWrapper>
        {isMenuOpen && <Menu onLogout={() => {}} onServiceDescription={handleServiceDescription} />} 

        <TextsStyle>어떤 나무로 물들일거예요?</TextsStyle>

        <div style={{ width: '300px' }}>
        <Carousel showThumbs={false} showStatus={false}>
          <div onClick={() => setSelectedTree("Maple Tree")}>
            <ImageButton src={MapleTreeImage} alt="Maple Tree" selected={selectedTree === "Maple Tree"} style={{width: "200px", height: "200px"}}/>
          </div>
          <div onClick={() => setSelectedTree("Ginkgo Tree")}>
            <ImageButton src={GinkgoTreeImage} alt="Ginkgo Tree" selected={selectedTree === "Ginkgo Tree"} style={{width: "200px", height: "200px"}}/>
          </div>
          {/* Add more trees as needed */}
        </Carousel>
        </div>

        <TextsStyle>나를 닮은 캐릭터를 찾아봐요!</TextsStyle>

        <div style={{ width: '300px' }}>
        <Carousel showThumbs={false} showStatus={false} className="carousel">
          <div onClick={() => setSelectedCharacter("Maple Character")}>
            <ImageButton src={MapleCharImg} alt="Maple Character" selected={selectedCharacter === "Maple Character"} style={{width: "70px", height: "100px"}}/>
          </div>
          <div onClick={() => setSelectedCharacter("Ginkgo Character")}>
            <ImageButton src={GinkgoCharImg} alt="Ginkgo Character" selected={selectedCharacter === "Ginkgo Character"} style={{width: "70px", height: "100px"}}/>
          </div>
          {/* Add more characters as needed */}
        </Carousel>
        </div>

        <Modal isOpen={isServiceModalOpen} onClose={() => setServiceModalOpen(false)}>
          <h2>이용안내</h2>
          <p>
            하루에 5개 이상의 편지를 받으면 오늘의 편지를 열람할 수 있어요.
            <br/>
            어쩌구 저쩌구
          </p>
        </Modal>

        <Button onClick={handleSubmit}>바꾸기</Button>
      </CenteredWrapper>
    </>
  );
}

export default SelectTreeCharacter;
