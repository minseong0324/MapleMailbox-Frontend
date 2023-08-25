import { createContext } from 'react';

type ScrollContextType = [React.MutableRefObject<HTMLDivElement | null>, boolean];

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export default ScrollContext;
