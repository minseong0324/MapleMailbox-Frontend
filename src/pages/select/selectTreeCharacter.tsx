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
import MapleCharImg from "../../assets/charImg/maple-small-big2.png";
import GinkgoCharImg from "../../assets/charImg/ginkgo-small-big2.png";

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

        <div style={{ width: '300px' }}>
        <Carousel showThumbs={false} showStatus={false}>
          <div onClick={() => setSelectedTree("Maple Tree")}>
            <s.ImageButton src={MapleTreeImage} alt="Maple Tree" selected={selectedTree === "Maple Tree"} style={{width: "200px", height: "200px"}}/>
          </div>
          <div onClick={() => setSelectedTree("Ginkgo Tree")}>
            <s.ImageButton src={GinkgoTreeImage} alt="Ginkgo Tree" selected={selectedTree === "Ginkgo Tree"} style={{width: "200px", height: "200px"}}/>
          </div>
          {/* Add more trees as needed */}
        </Carousel>
        </div>

        <s.TextsStyle>나를 닮은 캐릭터를 찾아봐요!</s.TextsStyle>

        <div style={{ width: '300px' }}>
        <Carousel showThumbs={false} showStatus={false} className="carousel">
          <div onClick={() => setSelectedCharacter("Maple Character")}>
            <s.ImageButton src={MapleCharImg} alt="Maple Character" selected={selectedCharacter === "Maple Character"} style={{width: "70px", height: "100px"}}/>
          </div>
          <div onClick={() => setSelectedCharacter("Ginkgo Character")}>
            <s.ImageButton src={GinkgoCharImg} alt="Ginkgo Character" selected={selectedCharacter === "Ginkgo Character"} style={{width: "70px", height: "100px"}}/>
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

        <s.Button onClick={handleSubmit}>바꾸기</s.Button>
      </s.CenteredWrapper>
    </>
  );
}

export default SelectTreeCharacter;
