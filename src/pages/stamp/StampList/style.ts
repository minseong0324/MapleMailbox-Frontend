import styled from 'styled-components';
import Stamp1 from '../../../assets/stamp/ginkgo_squ.png';
import Stamp2 from '../../../assets/stamp/maple_squ.png';
import Stamp3 from '../../../assets/stamp/pumkin_squ.png';
import Stamp4 from '../../../assets/stamp/sky_squ.png';
import Stamp5 from '../../../assets/stamp/squirrel_squ.png';
import Stamp6 from '../../../assets/stamp/teddybear_squ.png';
import Stamp7 from '../../../assets/stamp/mailbox_squ.png';
import Stamp8 from '../../../assets/stamp/mail_squ.png';
import Stamp9 from '../../../assets/stamp/pie_squ.png';
import Stamp10 from '../../../assets/stamp/mountain_squ.png';
import Stamp11 from '../../../assets/stamp/forest_squ.png';
import Stamp12 from '../../../assets/stamp/sunset_squ.png';
import Stamp13 from '../../../assets/stamp/blueSky_squ.png';
import Stamp14 from '../../../assets/stamp/burberry_squ.png';
import Stamp15 from '../../../assets/stamp/campFire_squ.png';
import Stamp16 from '../../../assets/stamp/camping_squ.png';
import Stamp17 from '../../../assets/stamp/pumpkinPie_squ.png';
import Stamp18 from '../../../assets/stamp/reading_squ.png';
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
import buttonMidium1 from '../../../assets/button/button-midium-1.png'; 
import buttonMidium2 from '../../../assets/button/button-midium-2.png'; 

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
font-family: 'BareunHipi';
display: flex;
flex-direction: column;
//align-items: center;
//line-height: 0.2;  // 글자 간격
font-size: 17px; 
text-align: center;
margin-top: 100px;
`;

const Break = styled.br`
`;

const TextsStyle = styled.div`
font-family: 'BareunHipi';
display: flex;
flex-direction: column;
//align-items: center;
//line-height: 0.2;  // 글자 간격
font-size: 19px; 
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
  padding: 50px;
  margin: 0px;
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
  font-family: 'NanumBarunpenB';
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

// 뒤로가기 버튼을 스타일링합니다.
const BackButton = styled.button`
  font-family: 'BareunHipi';
  background-color: #FFE5CC;
  border:2px; 
  border-style:hidden;
  border-radius: 30%;
  font-size: 13px;
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

const ErrorCenterModalWrapper = styled.div` //에러 모달창 wrapper
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
`;

const ErrorModalTextsWrapper1 = styled.div` // 한줄짜리 에러창일 때 사용
position: relative;
display: flex;
font-size: 20px;
align-items: center;
  justify-content: center;
line-height: 2;  // 글자 간격
margin-bottom: 10px;
`;

const ErrorModalTextsWrapper2 = styled.div` //두줄짜리 에러창일 때 사용
position: relative;
display: flex;
font-size: 20px;
align-items: center;
  justify-content: center;
line-height: 2;  // 글자 간격
margin-bottom: -10px;
`;

const ModalButton = styled.button`
  margin-top: 45px;
  font-family: 'NanumBarunpenB';
  font-weight: normal; // 명시적으로 굵기 설정
  width: 170px; // 버튼 너비를 조정
  height: 40px; // 버튼 높이를 조정
  background: url(${buttonMidium1}) no-repeat center center; // 이미지를 배경으로 사용
  background-size: cover; // 이미지가 버튼에 맞게 조절
  color: black;
  border-radius: 15px;
  font-size: 17px; 
  border: 0px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 2;
  &:active { // 버튼이 눌렸을 때의 스타일
    background: url(${buttonMidium2}) no-repeat center center; // 눌렸을 때의 배경 이미지
    background-size: cover; // 이미지가 버튼에 맞게 조절
  }
  color: #444;
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
    ShowStampWrapper,
    Break,
    ErrorCenterModalWrapper,
    ErrorModalTextsWrapper1,
    ErrorModalTextsWrapper2,
}