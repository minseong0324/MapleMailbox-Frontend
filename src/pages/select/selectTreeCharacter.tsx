import React, { useState } from "react";
import { s } from './style';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTree, setCharacter } from './selectedTreeCharacterSlice';
import styled from 'styled-components';
import Menu from '../../components/Menu/Menu';
import Modal from '../../components/Modal/Modal';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MapleTreeImage from "../../assets/treeImg/MapleMainTree.png";
import GinkgoTreeImage from "../../assets/treeImg/GinkgoMainTree.png";
import MapleCharImg from "../../assets/charImg/maple-small.png";
import GinkgoCharImg from "../../assets/charImg/ginkgo-small.png";
import BlackCharImg from "../../assets/charImg/black-small.png";
import BlueCharImg from "../../assets/charImg/blue-small.png";
import BrownCharImg from "../../assets/charImg/brown-small.png";
import GrayCharImg from "../../assets/charImg/gray-small.png";
import PurpleCharImg from "../../assets/charImg/purple-small.png";
import SkyBlueCharImg from "../../assets/charImg/skyblue-small.png";
import VioletCharImg from "../../assets/charImg/violet-small.png";
import YellowCharImg from "../../assets/charImg/yellow-small.png";


function SelectTreeCharacter() {
  const [selectedTree, setSelectedTree] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [isServiceModalOpen, setServiceModalOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate hook 사용

  const handleSubmit = () => {
    const selectedData = {
      treeType: selectedTree, //string
      characterType: selectedCharacter //string
    };
    console.log(selectedData);
  
    // 나무, 캐릭터 선택 후, 백엔드 서버로 데이터 전송
    fetch('https://localhost:8080', { // 엔드포인트 맞춰야함
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
      
      <s.CenteredWrapper>
        {isMenuOpen && <Menu onLogout={() => {}} onServiceDescription={handleServiceDescription} />} 

        <s.TextsStyle>어떤 나무로 물들일거예요?</s.TextsStyle>

        <s.SelectWrapper>
        <Carousel showThumbs={false} showStatus={false}>
          <s.SelectClickEvent onClick={() => setSelectedTree("Maple Tree")}>
            <s.ImageButton src={MapleTreeImage} alt="Maple Tree" selected={selectedTree === "Maple Tree"} style={{width: "200px", height: "200px"}}/>
          </s.SelectClickEvent>
          <s.SelectClickEvent onClick={() => setSelectedTree("Ginkgo Tree")}>
            <s.ImageButton src={GinkgoTreeImage} alt="Ginkgo Tree" selected={selectedTree === "Ginkgo Tree"} style={{width: "200px", height: "200px"}}/>
          </s.SelectClickEvent>
          {/* Add more trees as needed */}
        </Carousel>
        </s.SelectWrapper>

        <s.TextsStyle>나를 닮은 캐릭터를 찾아봐요!</s.TextsStyle>

        <s.SelectWrapper>
        <Carousel showThumbs={false} showStatus={false} className="carousel">
          <s.SelectClickEvent onClick={() => setSelectedCharacter("Maple Character")}>
            <s.ImageButton src={MapleCharImg} alt="Maple Character" selected={selectedCharacter === "Maple Character"} style={{width: "70px", height: "100px"}}/>
          </s.SelectClickEvent>
          <s.SelectClickEvent onClick={() => setSelectedCharacter("Ginkgo Character")}>
            <s.ImageButton src={GinkgoCharImg} alt="Ginkgo Character" selected={selectedCharacter === "Ginkgo Character"} style={{width: "70px", height: "100px"}}/>
          </s.SelectClickEvent>
          {/* Add more characters as needed */}
        </Carousel>
        </s.SelectWrapper>

        <Modal isOpen={isServiceModalOpen} onClose={() => setServiceModalOpen(false)}>
          <s.H2>이용안내</s.H2>
          <s.P>
            하루에 5개 이상의 편지를 받으면 오늘의 편지를 열람할 수 있어요.
            <s.Break/>
            어쩌구 저쩌구
          </s.P>
        </Modal>

        <s.Button onClick={handleSubmit}>바꾸기</s.Button>
      </s.CenteredWrapper>
    </>
  );
}

export default SelectTreeCharacter;
