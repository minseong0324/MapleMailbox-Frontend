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
  '우표1 설명',
  '우표2 설명',
  // ... 나머지 설명들
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
