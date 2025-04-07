import { uuid } from '@kp-react-lib/kp-react-common';
import { gsap } from 'gsap';
import styles from './elastic.module.css'
import { useEffect, useRef, useState } from 'react';

export function ElasticCards({content}:{content: string[]}) {
  const [expandedIndex, setExpandedIndex] = useState(-100);
  const toggleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const previousState = useRef({ index: -1, wasExpanded: false });
  const handleClick = (index:number) => {
    setExpandedIndex(prev => prev === index ? -1 : index);
  };

  const animations: gsap.core.Tween[] = [];

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
          width: '42vw',
          duration: 2.5,
          ease: 'elastic(1, .3)'
        });
      }
      else if (index === previousState.current.index){
        // Animate clicked item to COLLAPSE
        animation = gsap.fromTo(item,
          { width: "42vw" },
          {
            width: "15vw",
            duration: 2.5,
            ease: "elastic(1, 0.3)"
          }
        );
      }
      else if (!wasExpanded && previousState.current.index < 0){
        // Animate other items when an item is EXPANDING and in initial state
        animation = gsap.to(item, {
          width: '8vw',
          duration: 2,
          ease: 'elastic(1, .6)'
        });
      }
      else if (!wasExpanded && previousState.current.index >= 0){
        // Animate other items when the clicked item is EXPANDING and NOT in initial state
        animation = gsap.fromTo(item,
          {width: '10vw'},
          {
            width: '8vw',
            duration: 2,
            ease: 'elastic(3, .3)'
          });
      }
      else if (wasExpanded){
        // Animate other items when the clicked item is COLLAPSED
        animation = gsap.fromTo(item,
          { width: '8vw' },
          {
            width: '15vw',
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
          key={uuid()}
          ref={(el) => {toggleRefs.current[index] = el}}
          className={`${styles.item} ${item}`}
          onClick={() => handleClick(index)}
        />
      ))}
    </section>
  );
}

export default ElasticCards;
