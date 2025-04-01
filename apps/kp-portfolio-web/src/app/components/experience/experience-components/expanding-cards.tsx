import styles from './expanding-cards.module.css'
import { useRef } from 'react';
import ExpandingCardDetail from '@/app/components/experience/experience-components/expanding-card-detail';
import { useTranslation } from 'react-i18next';
import RevealManual from '@/app/components/shared/motion/RevealManual';
import { EXPERIENCE_CARDS } from '@/app/components/shared/Constant';
import { useMouseHover } from '@kp-react-lib/kp-react-common';

function revealSection(sectionIndex: number){
  console.log('Reveal this section ' + sectionIndex)
}

export function ExpandingCards({revealFunc}:{revealFunc: () => void}) {
  const {t} = useTranslation()
  const toggleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndex = useMouseHover(toggleRefs)
  document.documentElement.classList.add('dark');

  return (
    <section className={styles['expanding-cards'] + ' mt-14'}>
      <div className={styles['edge-container'] + ' no-h-padding'}>
        <div className={styles['expanding-cards-wrapper']}>
          <div className={styles['expanding-cards-container']}>
            {EXPERIENCE_CARDS.map((exp, index) => (
              <div key={exp.title} ref={(el) => { toggleRefs.current[index] = el; }} className={styles['expanding-card'] + ` toggle ${activeIndex === index ? styles.active : ''}`}>
                <img src={exp.img} alt={exp.title}/>
                <RevealManual duration={0.5} delay={1} className={`opacity-0 transition-opacity duration-200 ${activeIndex === index ? 'z-5 opacity-100 duration-500 delay-200':''} relative h-full w-full`}>
                  <ExpandingCardDetail reveal={()=> revealSection(index)} fullsize={activeIndex === index} title={t(exp.title)} location={t(exp.location)} period={t(exp.period)}/>
                </RevealManual>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpandingCards;
