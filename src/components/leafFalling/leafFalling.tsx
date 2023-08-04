import React, { useEffect, useState, CSSProperties } from 'react';
import GinkgoLeaf from '../../assets/leafImg/GinkgoLeaf.png';
import MapleLeaf from '../../assets/leafImg/MapleLeaf.png';
import { s } from './style'; 

const numLeaves = 30;

// CSSProperties를 확장하여 사용자 정의 CSS 변수를 포함
interface CSSPropertiesWithCustomVars extends CSSProperties {
  '--start-left'?: string;
  '--end-left'?: string;
}

const LeafFalling: React.FC = () => {
  const [leaves, setLeaves] = useState<Array<JSX.Element>>([]);

  useEffect(() => {
    const newLeaves = [];
      
    for (let i = 0; i < numLeaves; i++) {
      const leafType = Math.random() > 0.5 ? GinkgoLeaf : MapleLeaf;
      const delay = Math.random() * 5;
      const startLeft = `${Math.random() * 90}%`;  
      const endLeft = `${Math.random() * 90}%`;   

      newLeaves.push(
        <s.LeafDiv>
        <s.Leaf
          key={i}
          style={{
            backgroundImage: `url(${leafType})`,
            animationDelay: `${delay}s`,
            "--start-left": startLeft,
            "--end-left": endLeft
          } as CSSPropertiesWithCustomVars}
        />
        </s.LeafDiv>
      );
    }

    setLeaves(newLeaves);
  }, []);

  return <>{leaves}</>;
};

export default LeafFalling;
