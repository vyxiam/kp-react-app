import { RefObject, useEffect, useState } from 'react';

function useCardMouseHover(toggleRefs: RefObject<(HTMLDivElement | null)[]>) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseEnter = (index: number) => {
      setActiveIndex(index);
    };

    const handleMouseLeave = () => {
      setActiveIndex(null);
    };

    toggleRefs.current.forEach((toggle, index) => {
      if (toggle){
        console.log("ADD event listener")
        toggle.addEventListener('mouseenter', () => handleMouseEnter(index));
        toggle.addEventListener('mouseleave', handleMouseLeave);
      }

    });
    return () => {
      toggleRefs.current.forEach((toggle, index) => {
        if (toggle){
          console.log("REMOVE event listener")
          toggle.removeEventListener('mouseenter', () => handleMouseEnter(index));
          toggle.removeEventListener('mouseleave', handleMouseLeave);
        }
      });
    };
  }, [toggleRefs]);

  return activeIndex
}

export default useCardMouseHover;
