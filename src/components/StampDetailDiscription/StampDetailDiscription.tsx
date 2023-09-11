import React from 'react';
import {s} from './style';

interface StampDetailDiscriptionProps {
  index: number | null;
}

export const StampName: string[] = [
  '단풍잎',
  '은행잎',
  '보라빛 하늘',
  '푸른 하늘',
  '책읽는 소녀',
  '연날리는 소년',
  '단풍이 물든 산',
  '단풍이 물든 숲',
  '도토리 먹는 다람쥐',
  '무르익은 논',
  '붉게 물든 일몰',
  '사랑스런 테디베어',
  '언덕 위 풍차',
  '달콤한 고구마',
  '가을의 버버리 코트',
  '고소한 밤',
  '코스모스',
  '아삭한 감',
  '가을 꽃밭',
  '퍽퍽한 감자',
  '캠핑은 즐거워',
  '캠프파이어 앞의 마시멜로',
  '편지 봉투',
  '우편함',
  '상큼한 라즈베리파이',
  '빗자루 위 마녀',
  '방금 만든 호박파이',
  '마녀가 키우는 키티',
  '할로윈 호박',
  '할로윈 허수아비',
];

export const StampDescription: string[] = [
  "가을하면 빼놓을 수 없는 가을의 상징, 붉은 단풍의 모습을 담겨있다. 뭔가 행운이 담겨 있을지도..?",
  "가을의 따스함과 고요함이 느껴지는 또하나의 상징, 노란 은행잎의 모습이 담겨있다. 뭔가 행운이 담겨 있을지도..?",
  "보랏빛으로 물든 영롱하고 로맨틱한 어느 가을 저녁 하늘. 신비로운 기분이 든다.",
  "가을 특유의 높고 맑은, 청명한 하늘. 이 하늘 아래에서 커피 한잔 어때..?",
  "독서의 계절, 가을에 지식과 여유를 즐기는 소녀. 가을은 독서의 계절이라구!",
  "붉게 물든 노을 아래, 바람을 타고 자유와 꿈을 담은 연을 날리는 소년. 청춘이 느껴지는 가을이다.",
  "환상적인 붉은 색채를 가진 아름다운 가을 산. 상사 혹은 교수님께서 말씀하신다. 이번 주말, 북한산에 갈까요?",
  "단풍으로 물든 숲속의 풍경을 보니, 가을 기념 나들이를 가고 싶어진다.",
  "귀여운 다람쥐가 도토리를 먹고 있다. 다람쥐야 도망가지 말고 여기로 와!",
  "천고마비의 계절, 황금빛 가을논을 보니 풍요와 아름다움이 고스란히 느껴진다.",
  "붉게 타오르는 듯한 석양을 보며 로맨틱하게 하루를 마무리 해보는건 어때?",
  "테디베어가 무척이나 귀엽고 사랑스럽네. 보고 있으니 행복해진다!",
  "푸른 하늘 아래, 마치 바람 소리가 들리는 듯 시원한 기분이 느껴진다.",
  "맛과 영양을 모두 가진 가을 간식의 대표주자, 오늘 간식은 따끈한 고구마에 우유 한 잔 어때?",
  "가을 스타일 아이템의 대표, 세련된 버버리 코트로 패션을 완성해보자.",
  "뾰족한 가시를 가진 밤송이 속 밤이 아주 잘여물었다. 밤으로 어떤 음식을 만들어 먹으면 좋을까?",
  "핑크빛 코스모스가 매우 예쁘다. 코스모스가 활짝 핀 꽃밭에서 사진 한 장 찍어볼까?",
  "초가을, 주황빛의 아삭하고 달콤해보이는 감이다! 곶감이나 홍시로 만들어 먹어도 맛있겠는걸?",
  "높고 푸른 가을 하늘과 형형색색 활짝 핀 꽃들이 만들어내는 가을 풍경이 참 멋지다!",
  "갓구운 퍽퍽하고 따뜻한 감자, 보기만해도 고소한 맛이 느껴지는 듯 하다. 목이 막힐 수 있으니 음료는 필수!",
  "여름이 지나고 다시 찾아온 가을 바람이 주는 평화로움, 이 순간을 영원처럼 만들어 주는 것 같다.",
  "불멍 하면서 먹는 마시멜로우는 천상의 맛이야, 마치 입 안에서 살살 녹는 눈사람 같지 않아?",
  "나의 때묻지 않은 깨끗한 마음만 담아 너에게 보내는 편지, 그 마음이 흘러넘치지 않게 조심조심 전달해줘!",
  "일상에서의 기다림과 설렘이 공존하는 우편함의 모습이다. 그 속엔 사랑의 속삭임이 담겨있다.",
  "쉬는 날 집에서 먹는 라즈베리파이 한 조각, 그 한 조각이면 온 세상을 다 가질 수 있다.",
  "고요한 밤하늘 속 빗자루를 타고 자유롭게 날아가는 마녀, 그녀는 어디로 가버린 걸까?",
  "가을의 대표적인 음식인 호박으로 만든 따끈따끈한 파이, 호박파이는 바로 먹어야 제맛이다.",
  "선반 위에서 마녀가 돌아오기를 기다리고 있다. 쓰다듬고 싶은데 그녀가 날 매서운 눈빛으로 쳐다보고 있어!",
  "즐거움과 공포가 공존하는 할로윈의 상징인 호박의 모습이다. trick or treat!",
  "음산한 할로윈 밤 속 우뚝 서 있는 허수아비, 긴 새벽을 견디기엔 그의 외투가 너무나도 얇아 보인다."
];
  
const StampDetailDiscription: React.FC<StampDetailDiscriptionProps> = ({ index }) => {
  if (index === null) {
    return <s.DescriptionContainer>정보가 없습니다.</s.DescriptionContainer>;
  }
  
  return (
    <>
      <s.DescriptionContainer>{StampName[index]}</s.DescriptionContainer>
      <s.DescriptionContainer>{StampDescription[index]}</s.DescriptionContainer>
    </>
  );
}

export default StampDetailDiscription;
