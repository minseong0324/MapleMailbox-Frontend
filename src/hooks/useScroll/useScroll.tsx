import { useEffect, useState, useRef } from "react";

const useScroll = (): [React.MutableRefObject<HTMLDivElement | null>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const topPos = window.pageYOffset + window.innerHeight;
      const elementTopPos = ref.current.offsetTop;
      if (topPos > elementTopPos) {
        setIsVisible(true);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    });

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []); // 빈 배열 대신 필요한 의존성을 명시해야 할 수도 있음

  return [ref, isVisible];
};

export default useScroll;
