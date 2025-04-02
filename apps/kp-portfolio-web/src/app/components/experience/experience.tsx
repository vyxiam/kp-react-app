import PageTitle from '../shared/page-title';
import ExpandingCards from '@/app/components/experience/experience-components/landing/expanding-cards';
import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import CRA from '@/app/components/experience/experience-components/details/CRA';
import Karport from '@/app/components/experience/experience-components/details/Karport';
import Personal from '@/app/components/experience/experience-components/details/personal';
import styles from './experience.module.css'

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
        headers[0].classList.add(styles['fade-out'])
      }
      refs.forEach(ref => {
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
        return <CRA setIntroStatus={setIntroDone} revealFunc={revealExp}/>
      case 1:
        hideElements(true)
        return <Karport revealFunc={revealExp}/>
      case 2:
        hideElements(true)
        return <Personal revealFunc={revealExp}/>
      default:
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
