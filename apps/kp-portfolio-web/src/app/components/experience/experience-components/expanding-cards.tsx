import styles from './expanding-cards.module.css'
import { useEffect, useRef, useState } from 'react';

export function ExpandingCards() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    const handleMouseEnter = (index: number) => {
      setActiveIndex(index);
    };

    const handleMouseLeave = () => {
      setActiveIndex(null);
    };

    toggleRefs.current.forEach((toggle, index) => {
      if (toggle){
        toggle.addEventListener('mouseenter', () => handleMouseEnter(index));
        toggle.addEventListener('mouseleave', handleMouseLeave);
      }

    });
    return () => {
      toggleRefs.current.forEach((toggle, index) => {
        if (toggle){
          toggle.removeEventListener('mouseenter', () => handleMouseEnter(index));
          toggle.removeEventListener('mouseleave', handleMouseLeave);
        }
      });
    };
  }, []);

  console.log('Active index: ', activeIndex)
  return (
    <section className={styles['expanding-cards'] + ' mt-14'}>
      <div className={styles['edge-container'] + ' no-h-padding'}>
        <div className={styles['expanding-cards-wrapper']}>
          <div className={styles['expanding-cards-container']}>
            <div ref={(el) => { toggleRefs.current[0] = el; }} className={styles['expanding-card'] + ` toggle ${activeIndex === 0 ? styles.active : ''}`}>
              <img src="https://cdn.midjourney.com/8cf2fce8-67e0-4f0b-ab79-91db9f65fc39/0_2.webp" />
              <div className={`${activeIndex === 0 ? 'z-5':'z-[-5]'}`}>TEST</div>
            </div>
            <div ref={(el:HTMLDivElement) => {toggleRefs.current[1] = el}} className={styles['expanding-card'] + ` toggle ${activeIndex === 1 ? styles.active : ''}`}>
              <img src="https://cdn.midjourney.com/0bfed1f0-ac10-4880-9254-f70d23043c9c/0_3.webp" />
            </div>
            <div ref={(el:HTMLDivElement) => {toggleRefs.current[2] = el}} className={styles['expanding-card'] + ` toggle ${activeIndex === 2 ? styles.active : ''}`}>
              <img src="https://cdn.midjourney.com/25320db6-c852-4382-a9e1-b01030429eda/0_0.webp" />
            </div>
            <div ref={(el:HTMLDivElement) => {toggleRefs.current[3] = el}} className={styles['expanding-card'] + ` toggle ${activeIndex === 3 ? styles.active : ''}`}>
              <img src="https://cdn.midjourney.com/b6736647-58c2-4c20-b646-33f16d6b8c7c/0_3.webp" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpandingCards;
