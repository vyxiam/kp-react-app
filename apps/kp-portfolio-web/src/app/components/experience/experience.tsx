import PageTitle from '../shared/page-title';
import ExpandingCards from '@/app/components/experience/experience-components/landing/expanding-cards';
import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import CRA from '@/app/components/experience/experience-components/details/CRA';
import Karport from '@/app/components/experience/experience-components/details/Karport';
import Personal from '@/app/components/experience/experience-components/details/personal';
import styles from './experience.module.css'
import IntroCard from '@/app/components/experience/experience-components/details/IntroCard';

export function Experience() {
  const pageTitleRef = useRef<HTMLDivElement>(null)
  const refs:RefObject<(HTMLElement | null)>[] = [pageTitleRef]
  const [introDone, setIntroDone] = useState<boolean>(false)// intro for each session
  const [activeExp, setActiveExp] = useState<number>(-1); // active session

  /**
   * revealExp: Reveal the selection EXP
   * hideElements: Hide top elements for a smooth intro
   */
  const revealExp = useCallback((index: number) => {
    setActiveExp(index)
  }, [])
  const hideElements = (hide: boolean) => {
    const headers = document.documentElement.getElementsByTagName('header')
    if (hide){
      if (headers){
        headers[0].classList.remove(styles['fade-in'])
        headers[0].classList.add(styles['fade-out'])
      }
      refs.forEach(ref => {
        ref.current?.classList?.remove(styles['fade-in'])
        ref.current?.classList?.add(styles['fade-out'])
      })
    }
    else{
      if (headers){
        headers[0].classList.remove(styles['fade-out'])
        headers[0].classList.add(styles['fade-in'])
      }
      refs.forEach(ref => {
        ref.current?.classList?.remove(styles['fade-out'])
        ref.current?.classList?.add(styles['fade-in'])
      })
    }
  }

  const renderExp = () => {
    switch(activeExp){
      case -1:
        return <ExpandingCards revealFunc={revealExp}/>
      case 0:
        hideElements(true)
        return (
          <IntroCard setIntroStatus={setIntroDone}
                     location={"experience.details.intro.location.cra"} year={"experience.details.intro.year.2023"}
                     positionHighlight={"experience.details.intro.position.highlight.full.stack"}
                     position={"experience.details.intro.position.developer"}>
            <CRA revealFunc={revealExp}/></IntroCard>)
      case 1:
        hideElements(true)
        return (
          <IntroCard setIntroStatus={setIntroDone}
                     location={"experience.details.intro.location.freelance"} year={"experience.details.intro.year.2024"}
                     positionHighlight={"experience.details.intro.position.highlight.back.end"}
                     position={"experience.details.intro.position.developer"}>
            <Karport revealFunc={revealExp}/></IntroCard>)
      case 2:
        hideElements(true)
        return (
          <IntroCard setIntroStatus={setIntroDone}
                     location={"experience.details.intro.location.personal"} year={"experience.details.intro.year.2021"}
                     positionHighlight={"experience.details.intro.position.highlight.software"}
                     position={"experience.details.intro.position.developer"}>
            <Personal revealFunc={revealExp}/></IntroCard>)
      default:
        hideElements(false)
        return <ExpandingCards revealFunc={revealExp}/>
    }
  }

  useEffect(() => {
    if (introDone){
      hideElements(!introDone)
    }
  }, [introDone]);

  return (
    <>
      <PageTitle ref={pageTitleRef} title={'experience.page.title'}/>
      <>
        {renderExp()}
      </>
    </>
  );
}

export default Experience;
