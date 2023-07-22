// LeafFalling.tsx

import React, { useEffect, useState } from 'react';
import './leafFalling.css';
import GinkgoLeaf from '../leafImg/GinkgoLeaf.png';
import MapleLeaf from '../leafImg/MapleLeaf.png';

// 화면에 표시될 나뭇잎의 수를 정의합니다.
const numLeaves = 30;

// LeafFalling 컴포넌트를 정의합니다.
const LeafFalling: React.FC = () => {
  // leaves 상태를 설정합니다. 이 상태는 나뭇잎 요소들의 배열을 저장합니다.
  const [leaves, setLeaves] = useState<Array<JSX.Element>>([]);

  useEffect(() => {
    // useEffect 내부에서 새로운 나뭇잎들을 생성하고 leaves 상태를 업데이트합니다.
    const newLeaves = [];
      
    for (let i = 0; i < numLeaves; i++) {
      // 나뭇잎 타입 (GinkgoLeaf 또는 MapleLeaf)을 무작위로 결정하고,
      // 애니메이션의 시작 시간을 무작위로 지연시킵니다.
      const leafType = Math.random() > 0.5 ? GinkgoLeaf : MapleLeaf;
      const delay = Math.random() * 5;
      const startLeft = Math.random() * 90;  
      const endLeft = Math.random() * 90;    
      // 새로운 나뭇잎 요소를 생성하고 newLeaves 배열에 추가합니다.
      newLeaves.push(
          <div
              key={i}
              className="leaf__falling"
              style={{
                backgroundImage: `url(${leafType})`,
                animationDelay: `${delay}s`,
                ["--start-left" as string]: `${startLeft}%`,  
                ["--end-left" as string]: `${endLeft}%`, 
              }}
          />
      );
  }
  

    // 생성된 나뭇잎들로 leaves 상태를 업데이트합니다.
    setLeaves(newLeaves);
  }, []);

  // 나뭇잎 요소들을 반환합니다.
  return <>{leaves}</>;
};

export default LeafFalling;