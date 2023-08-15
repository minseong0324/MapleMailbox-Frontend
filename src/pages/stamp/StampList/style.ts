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

const TextWrapper = styled.div`
padding-top: 20px;
padding-bottom: 10px;
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

export const s = {
    ButtonWrapper,
    TextsStyle,
    StampButton,
    TextWrapper,
    Container,
    stampImages
}