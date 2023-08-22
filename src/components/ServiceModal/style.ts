import styled from 'styled-components';
import GinkgoLeaf from '../../assets/leafImg/GinkgoLeaf.png';
import MapleLeaf from '../../assets/leafImg/MapleLeaf.png';

const Wrapper = styled.div`
font-family: 'DOSSaemmul';
display: flex;
flex-direction: column;
align-items: center;
line-height: 1;  // 글자 간격
padding-top: 30px;

`;

const TitleWrapper = styled.div`
  font-family: 'DOSSaemmul';
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const SubSubTitle = styled.span`
  margin-top: 0px;
  font-family: 'DOSSaemmul';
  font-size: 10px;
  padding-right: 0px;
    padding-left: 0px;
`;

const Text = styled.span`
  margin-top: 6px;
  font-size: 14px;
  padding-bottom: 30px;

`;

const Break = styled.br``;

const Title = styled.span`
font-family: 'DOSGothic';
font-size: 20px;
margin-bottom: 20px;
text-align: center;
`;

 const SubTitle = styled.span`
  font-family: 'DOSSaemmul';
  font-size: 15px;
  text-align: center;
`;


 const ModalTextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
    padding-right: 0px;
    padding-left: 0px;
    padding-top : 10px;
`;

const GinkgoLeafImage = styled.img.attrs({
    src: GinkgoLeaf
  })`
      z-index: 2;
  width:30px;
  margin-top:-20px;

`;

const MapleLeafImage = styled.img.attrs({
    src: MapleLeaf
  })`
      z-index: 2;
      width:30px;
      margin-top:-20px;
     
`;

const HorizontalContainer = styled.div`
  display: flex;
  align-items: center;  // 아이템들을 세로 중앙 정렬
  justify-content: space-between;  // 아이템들 사이에 동일한 공간을 둡니다.
`;

export const s = {
    Wrapper,
    TitleWrapper,
    Title,
    SubTitle,
    SubSubTitle,
    Text,
    Break,
    ModalTextsWrapper,
    GinkgoLeafImage,
    MapleLeafImage,
    HorizontalContainer
}