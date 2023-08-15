import styled from 'styled-components';
import Stamp1 from '../../../assets/stamp/ginkgo-squ.png';
import Stamp2 from '../../../assets/stamp/maple_squ.png';
import Stamp3 from '../../../assets/stamp/pumkin_squ.png';
import Stamp4 from '../../../assets/stamp/sky_squ.png';
import Stamp5 from '../../../assets/stamp/squirrel_squ.png';
import Stamp6 from '../../../assets/stamp/teddybear_squ.png';
import Stamp7 from '../../../assets/stamp/mailbox-squ.png';
import Stamp8 from '../../../assets/stamp/mail_squ.png';
import Stamp9 from '../../../assets/stamp/mail_squ.png';
import Stamp10 from '../../../assets/stamp/mail_squ.png';
import Stamp11 from '../../../assets/stamp/mail_squ.png';
import Stamp12 from '../../../assets/stamp/mail_squ.png';
import Stamp13 from '../../../assets/stamp/mail_squ.png';
import Stamp14 from '../../../assets/stamp/mail_squ.png';
import Stamp15 from '../../../assets/stamp/mail_squ.png';
import Stamp16 from '../../../assets/stamp/mail_squ.png';
import Stamp17 from '../../../assets/stamp/mail_squ.png';
import Stamp18 from '../../../assets/stamp/mail_squ.png';
import Stamp19 from '../../../assets/stamp/mail_squ.png';
import Stamp20 from '../../../assets/stamp/mail_squ.png';
import Stamp21 from '../../../assets/stamp/mail_squ.png';
import Stamp22 from '../../../assets/stamp/mail_squ.png';
import Stamp23 from '../../../assets/stamp/mail_squ.png';
import Stamp24 from '../../../assets/stamp/mail_squ.png';
import Stamp25 from '../../../assets/stamp/mail_squ.png';
import Stamp26 from '../../../assets/stamp/mail_squ.png';
import Stamp27 from '../../../assets/stamp/mail_squ.png';
import Stamp28 from '../../../assets/stamp/mail_squ.png';
import Stamp29 from '../../../assets/stamp/mail_squ.png';
import Stamp30 from '../../../assets/stamp/mail_squ.png';
//일단 테스트 해야해서 mail_squ로 통일시켜둠. 우표 이미지 만들 때마다 수정해야함.

import modalButton from '../../../assets/button/button-midium-1.png'; 
import modalButtonAfterClick from '../../../assets/button/button-midium-2.png'; 
import MissionButtonImage from '../../../assets/button/missionButton2.png';
import MissionCompletedButtonDisabledImage from '../../../assets/button/button-midium-disabled.png';
import SparkleEffect from '../../../assets/sparkle/sparkleEffect.gif';

const stampImages = [
  Stamp1, Stamp2, Stamp3, Stamp4, Stamp5, Stamp6, Stamp7, Stamp8,
  Stamp9, Stamp10, Stamp11, Stamp12, Stamp13, Stamp14, Stamp15,
  Stamp16, Stamp17, Stamp18, Stamp19, Stamp20, Stamp21, Stamp22,
  Stamp23, Stamp24, Stamp25, Stamp26, Stamp27, Stamp28, Stamp29, Stamp30
];

const Container = styled.div`

`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const MissionButton = styled.button`
  margin-left: 10px;  // 버튼과 텍스트 사이의 간격을 조절
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 12px;
  background: url(${MissionButtonImage}) no-repeat center center; // 이미지를 배경으로 사용
`;

const ButtonTextWrapper = styled.div`
  display: flex;  
  align-items: center;  
  justify-content: center;
  margin-left: 50px;
`;

const TextWrapper = styled.div`
padding-top: 20px;
padding-bottom: 10px;
`;


const MissionText = styled.div`
font-family: 'DOSSaemmul';
display: flex;
flex-direction: column;
//align-items: center;
//line-height: 0.2;  // 글자 간격
font-size: 17px; 
text-align: center;
margin-top: 100px;
`;

const TextsStyle = styled.div`
font-family: 'DOSSaemmul';
display: flex;
flex-direction: column;
//align-items: center;
//line-height: 0.2;  // 글자 간격
font-size: 17px; 
text-align: center;
`;
type StampButtonProps = {
    stampImage: string;
};

const StampButton = styled.button<StampButtonProps>`
  position: relative;
  background: url(${props => props.stampImage}) no-repeat center;
  border: none;
  cursor: pointer;
  width: 90px;
  height: 90px;
  z-index: 2;
  padding: 0px;
  margin: 4px;
`;

const CenteredWrapper = styled.div`
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 4;
  margin-top: 50px;
`;

interface MissionCompletedButtonProps {
  isActive: boolean;
}

const MissionCompletedButton = styled.button<MissionCompletedButtonProps>`
  font-family: 'DOSSaemmul';
  width: 170px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  padding: 10px; // 내부 패딩을 조정
  background: url(${props => props.isActive ? modalButton : MissionCompletedButtonDisabledImage}) no-repeat center center;
  background-size: cover; // 이미지가 버튼에 맞게 조절
  color: black;
  border-radius: 15px;
  font-size: 17px; 
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 5;
  margin-top: 50px;
`;

const ModalButton = styled.button`
  font-family: 'DOSSaemmul';
  width: 170px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  padding: 10px; // 내부 패딩을 조정
  background: url(${modalButton}) no-repeat center center; // 이미지를 배경으로 사용
  background-size: cover; // 이미지가 버튼에 맞게 조절
  color: black;
  border-radius: 15px;
  font-size: 17px; 
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 5;
  &:active { // 버튼이 눌렸을 때의 스타일
    background: url(${modalButtonAfterClick}) no-repeat center center; // 눌렸을 때의 배경 이미지
    background-size: cover; // 이미지가 버튼에 맞게 조절
  }
  margin-top: 50px;
`;

// 뒤로가기 버튼을 스타일링합니다.
const BackButton = styled.button`
  font-family: 'DOSSaemmul';
  background-color: #FFE5CC;
  border:2px; 
  border-style:hidden;
  border-radius: 30%;
  font-size: 15px;
  width: 45px;
  height: 25px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  float: right;
`;

const ShowStampWrapper = styled.div`
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 4;
  margin-top: 50px;
`;

const ShowStamp = styled.img`
  width: 90px;
  height: 90px; 
`;

const ShowStampEffect = styled.div`
  position: absolute;
  top: 50%;  // 상위 요소 중앙에 배치
  left: 50%;  // 상위 요소 중앙에 배치
  transform: translate(-50%, -50%); // 요소 자체의 중앙을 기준으로 배치
  background: url(${SparkleEffect}) no-repeat center center; // 이미지를 배경으로 사용
  width: 120px;
  height: 120px;
`;

export const s = {
    ButtonWrapper,
    TextsStyle,
    StampButton,
    TextWrapper,
    Container,
    stampImages,
    MissionButton,
    ButtonTextWrapper,
    CenteredWrapper,
    ModalButton,
    BackButton,
    MissionText,
    MissionCompletedButton,
    ShowStamp,
    ShowStampEffect,
    ShowStampWrapper
}