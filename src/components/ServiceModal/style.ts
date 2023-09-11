import styled from 'styled-components';
import GinkgoLeaf from '../../assets/leafImg/GinkgoLeaf.png';
import MapleLeaf from '../../assets/leafImg/MapleLeaf.png';
import Collection from '../../assets/stamp/collection3.png'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
line-height: 1;  // 글자 간격
padding-top: 30px;

`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const SubSubTitle = styled.span`
    margin-top: 10px;
    margin-left: 5px;
    font-family: 'NanumBarunpenB';
    font-weight: normal; // 명시적으로 굵기 설정
    font-size: 15px;
    padding-right: 0px;
    padding-left: 0px;
    margin-bottom: 10px;
`;

const Text = styled.span`
    margin-top: 0px;
    margin-left: 5px;
    font-family: 'BareunHipi';
    font-size: 13px;
    padding-right: 0px;
    padding-left: 0px;
    margin-left: 7px;
    margin-top: -4px;
    margin-bottom: 2px;
`;

const Break = styled.br``;

const Title = styled.span`
font-family: 'BareunHipi';
font-size: 30px;
margin-bottom: 30px;
text-align: center;
`;

 const SubTitle = styled.span`
  font-family: 'BareunHipi';
  font-size: 16px;
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
  margin-left: 10px;
`;

const MapleLeafImage = styled.img.attrs({
    src: MapleLeaf
  })`
      z-index: 2;
      width:30px;
      margin-top:-20px;
      margin-right: 10px;
     
`;

const MapleLeafImageTransform = styled.img.attrs({
  src: MapleLeaf
})`
    z-index: 2;
    width:30px;
    margin-top:-20px;
    margin-left: 7px;
    transform: scaleX(-1); 

`;

const GinkgoLeafImageSmall = styled.img.attrs({
    src: GinkgoLeaf
  })`
      z-index: 2;
  width:10px;
  height:10px;
  margin-bottom: 0px;

`;

const MapleLeafImageSmall = styled.img.attrs({
    src: MapleLeaf
  })`
      z-index: 2;
      width:20px;
      margin-bottom: 10px;
      margin-top: 10px;
     
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

const CollectionImg = styled.img.attrs({
    src: Collection 
  })`
      z-index: 2;
      width:240px;
      height:100px;
      //margin-left: 10px;
      margin-bottom: 2px;
      margin-top: 5px;
     align-items:center;
`;

const InstagramImg = styled.img.attrs({
    src: Collection //바꿔야함
  })`
      z-index: 2;
      width:110px;
      height:25px;
      margin-left: 5px;
      //margin-bottom: 10px;
     align-items:center;
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
    HorizontalContainer3,
    CollectionImg,
    InstagramImg,
    MapleLeafImageTransform
}