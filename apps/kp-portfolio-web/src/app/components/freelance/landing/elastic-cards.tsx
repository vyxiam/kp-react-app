import { Reveal, uuid } from '@kp-react-lib/kp-react-common';
import { gsap } from 'gsap';
import styles from './elastic.module.css'
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ElasticCardDetail from '@/app/components/freelance/landing/elastic-card-detail';
import { useNavigate } from 'react-router';

function getItemWidth(totalCards: number): [string, string, string, string]{
  const perItem = 75/totalCards
  const min = Math.ceil(perItem/2)
  const max = 75 - min*(totalCards - 1)
  return [`${perItem}vw`, `${max}vw`, `${min}vw`, `${min + 2}vw`]
}

interface ElasticProps{
  img: string;
  logo: string;
  type: string;
  title: string;
  period: string;
  link: string;
  completed: boolean;
}

export function ElasticCards({content} : {content: ElasticProps[]}) {
  const [itemWidth, maxItemWidth, minItemWidth, minPlusItemWidth] = getItemWidth(content.length)
  const [expandedIndex, setExpandedIndex] = useState(-100);
  const toggleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const previousState = useRef({ index: -1, wasExpanded: false });
  const handleClick = (index:number) => {
    setExpandedIndex(prev => prev === index ? -1 : index);
  };

  const animations: gsap.core.Tween[] = [];
  const {t} = useTranslation()
  const navigate = useNavigate()
  document.documentElement.classList.add('dark');

  useEffect(() => {
    gsap.set(toggleRefs.current, { width: "15vw" });
    const isExpanding = expandedIndex !== -1;
    const wasExpanded = previousState.current.index === expandedIndex || expandedIndex === -1;

    // Animation logic
    toggleRefs.current.forEach((item, index) => {
      if (!item) return;
      let animation: gsap.core.Tween | undefined = undefined;

      if ((index === expandedIndex)){
        // Animate clicked item to EXPAND
        animation = gsap.to(item, {
          width: maxItemWidth,
          duration: 2.5,
          ease: 'elastic(1, .3)'
        });
      }
      else if (index === previousState.current.index && wasExpanded){
        // Animate clicked item to COLLAPSE
        animation = gsap.fromTo(item,
          { width: maxItemWidth},
          {
            width: itemWidth,
            duration: 2.5,
            ease: "elastic(1, 0.3)"
          }
        );
      }
      else if (index === previousState.current.index && !wasExpanded){
        // Animate clicked item to COLLAPSE and other is EXPANDING
        animation = gsap.fromTo(item,
          { width: maxItemWidth},
          {
            width: minItemWidth,
            duration: 2.5,
            ease: "elastic(1, 0.6)"
          }
        );
      }
      else if (!wasExpanded && previousState.current.index < 0){
        // Animate other items when an item is EXPANDING and in initial state
        animation = gsap.to(item, {
          width: minItemWidth,
          duration: 2,
          ease: 'elastic(1, .6)'
        });
      }
      else if (!wasExpanded && previousState.current.index >= 0){
        // Animate other items when the clicked item is EXPANDING and NOT in initial state
        animation = gsap.fromTo(item,
          {width: minPlusItemWidth},
          {
            width: minItemWidth,
            duration: 2,
            ease: 'elastic(3, .3)'
          });
      }
      else if (wasExpanded){
        // Animate other items when the clicked item is COLLAPSED
        animation = gsap.fromTo(item,
          { width: minItemWidth},
          {
            width: itemWidth,
            duration: 2,
            ease: 'elastic(1, .6)'
          })
      }

      if (animation){
        animations.push(animation)
      }
    });

    previousState.current = {
      index: expandedIndex,
      wasExpanded: isExpanding
    };

    return () => {
      animations.forEach(anim => anim.kill())
    }
  }, [expandedIndex]);

  return (
    <section className={styles.group}>
      {content.map((item, index) => (
        <div
          key={uuid()} ref={(el) => {toggleRefs.current[index] = el}}
          style={{width: itemWidth}}
          className={`${styles.item} relative`} onClick={() => handleClick(index)}
        >
          <img src={item.img} alt={item.title} className={`absolute object-cover w-full h-full ${styles.cover} ${expandedIndex === index? '!opacity-100':''}`}/>
          <Reveal duration={0.1} delay={0.5} className={`opacity-0 transition-opacity duration-200 ${expandedIndex === index ? 'z-5 !opacity-100 duration-500 delay-200':''} relative h-full w-full`}>
            <ElasticCardDetail reveal={()=> navigate(item.link)} fullsize={expandedIndex === index} logo={item.logo} title={t(item.title)} type={t(item.type)} period={t(item.period)} completed={item.completed}/>
          </Reveal>
        </div>
      ))}
    </section>
  );
}

export default ElasticCards;
