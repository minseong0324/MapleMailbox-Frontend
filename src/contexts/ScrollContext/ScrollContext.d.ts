/// <reference types="react" />
type ScrollContextType = [React.MutableRefObject<HTMLDivElement | null>, boolean];
declare const ScrollContext: import("react").Context<ScrollContextType | undefined>;
export default ScrollContext;
