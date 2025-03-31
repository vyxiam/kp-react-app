import styles from './expanding-cards.module.css'
import { useEffect, useRef, useState } from 'react';
import cra from '@/assets/experience_cra.jpg'
import ExpandingCardDetail from '@/app/components/experience/experience-components/expanding-card-detail';
import { useTranslation } from 'react-i18next';
import RevealManual from '@/app/components/shared/motion/RevealManual';

export function ExpandingCards() {
  const {t} = useTranslation()
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
              <img src={cra} />
              <RevealManual duration={0.5} delay={1} className={`opacity-0 transition-opacity duration-200 ${activeIndex === 0 ? 'z-5 opacity-100 duration-500 delay-200':''} relative h-full w-full`}>
                <ExpandingCardDetail fullsize={activeIndex === 0} title={t('experience.cra.title')} location={t('experience.cra.location')} period={t('experience.cra.period')}/>
              </RevealManual>
            </div>
            <div ref={(el:HTMLDivElement) => {toggleRefs.current[1] = el}} className={styles['expanding-card'] + ` toggle ${activeIndex === 1 ? styles.active : ''}`}>
              <img src="https://cdn.midjourney.com/0bfed1f0-ac10-4880-9254-f70d23043c9c/0_3.webp" />
              <RevealManual duration={0.5} delay={1} className={`transition-opacity duration-200 z-5 opacity-100 delay-200'} relative h-full w-full`}>
                <ExpandingCardDetail fullsize={activeIndex === 1} title={t('experience.karport.title')} location={t('experience.karport.location')} period={t('experience.karport.period')}/>
              </RevealManual>
            </div>
            <div ref={(el:HTMLDivElement) => {toggleRefs.current[2] = el}} className={styles['expanding-card'] + ` toggle ${activeIndex === 2 ? styles.active : ''}`}>
              <img src="https://cdn.midjourney.com/25320db6-c852-4382-a9e1-b01030429eda/0_0.webp" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpandingCards;
