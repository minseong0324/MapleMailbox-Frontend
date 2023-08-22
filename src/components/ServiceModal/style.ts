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
    margin-left: 5px;
    font-family: 'DOSGothic';
    font-size: 14px;
    padding-right: 0px;
    padding-left: 0px;
    margin-bottom: 10px;
`;

const Text = styled.span`
    margin-top: 0px;
    margin-left: 5px;
    font-family: 'DOSSaemmul';
    font-size: 10px;
    padding-right: 0px;
    padding-left: 0px;
    margin-left: 7px;
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

const GinkgoLeafImageSmall = styled.img.attrs({
    src: GinkgoLeaf
  })`
      z-index: 2;
  width:10px;
  height:10px;
`;

const MapleLeafImageSmall = styled.img.attrs({
    src: MapleLeaf
  })`
      z-index: 2;
      width:20px;
      margin-bottom: 10px;
     
`;

const HorizontalContainer = styled.div`
  display: flex;
  align-items: center;  // 아이템들을 세로 중앙 정렬
  justify-content: center;
`;

const HorizontalContainer2 = styled.div`
  display: flex;
  align-items: center;  // 아이템들을 세로 중앙 정렬
  margin-bottom: 5px;
`;

const HorizontalContainer3 = styled.div`
  display: flex;
  margin-left: 10px;
  margin-bottom: 5px;
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
    HorizontalContainer,
    GinkgoLeafImageSmall,
    MapleLeafImageSmall,
    HorizontalContainer2,
    HorizontalContainer3
}