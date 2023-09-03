import styled from 'styled-components';
import Stamp1 from '../../../assets/stamp/maple_squ-big.png';
import Stamp2 from '../../../assets/stamp/ginkgo_squ-big.png';
import Stamp3 from '../../../assets/stamp/sky_squ-big.png';
import Stamp4 from '../../../assets/stamp/blueSky_squ-big.png';
import Stamp5 from '../../../assets/stamp/reading_squ-big.png';
import Stamp6 from '../../../assets/stamp/kite_squ-big.png';
import Stamp7 from '../../../assets/stamp/mountain_squ-big.png';
import Stamp8 from '../../../assets/stamp/forest_squ-big.png';
import Stamp9 from '../../../assets/stamp/squirrel_squ-big.png';
import Stamp10 from '../../../assets/stamp/riceField_squ-big.png';
import Stamp11 from '../../../assets/stamp/sunset_squ-big.png';
import Stamp12 from '../../../assets/stamp/teddybear_squ-big.png';
import Stamp13 from '../../../assets/stamp/windmill_squ-big.png';
import Stamp14 from '../../../assets/stamp/sweetPotato_squ-big.png';
import Stamp15 from '../../../assets/stamp/burberry_squ-big.png';
import Stamp16 from '../../../assets/stamp/chestnut_squ-big.png';
import Stamp17 from '../../../assets/stamp/cosmos_squ-big.png';
import Stamp18 from '../../../assets/stamp/persimmon_squ-big.png';
import Stamp19 from '../../../assets/stamp/flowers_squ-big.png';
import Stamp20 from '../../../assets/stamp/Potato_squ-big.png';
import Stamp21 from '../../../assets/stamp/camping_squ-big.png';
import Stamp22 from '../../../assets/stamp/campFire_squ-big.png';
import Stamp23 from '../../../assets/stamp/mail_squ-big.png';
import Stamp24 from '../../../assets/stamp/mailbox_squ-big.png';
import Stamp25 from '../../../assets/stamp/pie_squ-big.png';
import Stamp26 from '../../../assets/stamp/witch_squ-big.png';
import Stamp27 from '../../../assets/stamp/pumpkinPie_squ-big.png';
import Stamp28 from '../../../assets/stamp/kitty_squ-big.png';
import Stamp29 from '../../../assets/stamp/pumkin_squ-big.png';
import Stamp30 from '../../../assets/stamp/scarecrow_squ-big.png';


const stampImages = [
  Stamp1, Stamp2, Stamp3, Stamp4, Stamp5, Stamp6, Stamp7, Stamp8,
  Stamp9, Stamp10, Stamp11, Stamp12, Stamp13, Stamp14, Stamp15,
  Stamp16, Stamp17, Stamp18, Stamp19, Stamp20, Stamp21, Stamp22,
  Stamp23, Stamp24, Stamp25, Stamp26, Stamp27, Stamp28, Stamp29, Stamp30
];

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
  color: #444;
  text-decoration: none;
  cursor: pointer;
  float: right;
`;

const TitleTextsStyle = styled.div`
font-family: 'BareunHipi';
display: flex;
flex-direction: column;
align-items: center;
//line-height: 0.2;  // 글자 간격
font-size: 23px; 
border:2px; 
border-style:hidden;
border-radius: 5%;
background-color: #FFE5CC;
padding: 10px;
margin-top:5px;
margin-bottom:10px;
`;

const TextsStyle = styled.div`
font-family: 'BareunHipi';
display: flex;
flex-direction: column;
align-items: center;
//line-height: 0.2;  // 글자 간격
font-size: 18px; 
border:2px; 
border-style:hidden;
border-radius: 5%;
background-color: #FFE5CC;
padding: 10px;
margin-top:5px;
margin-bottom:10px;
`;

const StampWrapper = styled.div`
margin-top: 20px;
margin-bottom: 20px;
align-items: center;
`;

type StampImageProps = {
    stampImage: string;
};


const StampImage = styled.div<StampImageProps>`
background: url(${props => props.stampImage}) no-repeat center;
border: none;
width: 160px;
height: 160px;
z-index: 2;
padding: 0px;
margin: auto; // 이 부분을 수정
position: relative; // 이 부분을 추가

`;

const H2 = styled.h2`

`;

const Break = styled.br`
`;

const H3 = styled.h3`
margin-top:10px;
margin-bottom:10px;
`;

const P = styled.p`
margin-top:5px;
margin-bottom:10px;
`;

const tips = styled.p`
margin-top:5px;
margin-bottom:10px;
font-size:15px;
color: gray;
`;




export const s = {
    BackButton,
    TextsStyle,
    StampWrapper,
    StampImage,
    stampImages,
    H2, H3, tips,
    P, Break,
    TitleTextsStyle
}