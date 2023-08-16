import React, { useState } from "react";
import { s } from './style';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios, {AxiosError} from 'axios'; // axios 라이브러리를 가져옵니다.
import Modal from '../../components/Modal/Modal';
import BackButton from "src/components/BackButton/BackButton";
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


const userId = localStorage.getItem('userId');
const refreshToken = localStorage.getItem('refreshToken');
const accessToken = localStorage.getItem('accessToken');


function SelectTreeCharacter() {
  const [selectedTree, setSelectedTree] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [isServiceModalOpen, setServiceModalOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate hook 사용

  const handleSubmit = async () => {
    const selectedData = {
      treeType: selectedTree, 
      characterType: selectedCharacter 
    };
    console.log(selectedData);

    try {
      // 나무, 캐릭터 선택 후, 백엔드 서버로 데이터 전송
      const response = await axios.put(`http://localhost:8080/api/users/${userId}`, selectedData, {
        headers: {
          'authorization': `${accessToken}` // accessToken을 헤더에 추가
        }
      });
      if(response.status===200) {
        console.log('Success:', response.data);
        // navigate('/Ownerhome'); //프론트 자체 테스트용
        navigate(`/home/${userId}`, { replace: true });
        //어차피 자신의 홈으로 이동되면서 다시 유저의 정보들이 요청될 것이므로 따로 받아와야하는 값은 없다.
      }
    }catch (error: unknown) { //에러 일 경우
      if (error instanceof AxiosError) {
        const status = error?.response?.status;
        console.error('Failed to fetch user info:', error);
        if (status === 404) {
          // 리소스를 찾을 수 없음
        } else if (status === 500) {
            // 서버 내부 오류
        } else {
            // 기타 상태 코드 처리
        }
      } 
      return null;
    }
    // 홈으로 이동
    //navigate(`/home/${userId}`, { replace: true }); //에러처리 다 하면 이건 지워도 될 듯
}

  const characterData = [
    { name: "Maple Character", imgSrc: MapleCharImg },
    { name: "Ginkgo Character", imgSrc: GinkgoCharImg },
    { name: "Black Character", imgSrc: BlackCharImg },
    { name: "Blue Character", imgSrc: BlueCharImg },
    { name: "Brown Character", imgSrc: BrownCharImg },
    { name: "Gray Character", imgSrc: GrayCharImg },
    { name: "Purple Character", imgSrc: PurpleCharImg },
    { name: "SkyBlue Character", imgSrc: SkyBlueCharImg },
    { name: "Violet Character", imgSrc: VioletCharImg },
    { name: "Yellow Character", imgSrc: YellowCharImg }
    // 캐릭터 추가
  ];  

  return (
    <s.Wrapper>
    <BackButton to={`/mypage/${userId}`} />
      <s.CenteredWrapper>
        <s.TitleTextStyle>내 나무/캐릭터 변경하기</s.TitleTextStyle>
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
          {characterData.map((character) => (
            <s.SelectClickEvent onClick={() => setSelectedCharacter(character.name)}>
              <s.ImageButton src={character.imgSrc} alt={character.name} selected={selectedCharacter === character.name} style={{width: "70px", height: "100px"}}/>
            </s.SelectClickEvent>
          ))}
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
    </s.Wrapper>
  );
}

export default SelectTreeCharacter;
