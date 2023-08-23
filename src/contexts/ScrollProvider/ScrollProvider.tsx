import React, { ReactNode } from 'react';
import ScrollContext from '../ScrollContext/ScrollContext';
import useScroll from '../../hooks/useScroll/useScroll';

// ScrollContext의 기본값과 일치하도록 타입 정의
type ScrollContextType = [React.MutableRefObject<HTMLDivElement | null>, boolean];

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const scroll = useScroll(); // 여기서 useScroll 훅을 사용합니다.

  return (
    <ScrollContext.Provider value={scroll as ScrollContextType}>
      {children}
    </ScrollContext.Provider>
  );
}
