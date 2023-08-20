import { RefObject } from "react";
type Event = MouseEvent | TouchEvent;
declare const useOnClickOutside: (ref: RefObject<HTMLElement>, handler: (event: Event) => void) => void;
export default useOnClickOutside;
