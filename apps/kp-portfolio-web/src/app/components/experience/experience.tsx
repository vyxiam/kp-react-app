import PageTitle from '../shared/page-title';
import ExpandingCards from '@/app/components/experience/experience-components/landing/expanding-cards';
import { RefObject, useCallback, useRef, useState } from 'react';
import CRA from '@/app/components/experience/experience-components/details/CRA';
import Karport from '@/app/components/experience/experience-components/details/Karport';
import Personal from '@/app/components/experience/experience-components/details/personal';
import styles from './experience.module.css'

function hideElements(hide: boolean, refs: RefObject<(HTMLElement | null)>[]){
  console.log('Hide element')
  if (hide){
    const headers = document.documentElement.getElementsByTagName('header')
    if (headers){
      console.log('header: ', headers[0])
      headers[0].classList.add(styles['fade-out'])
    }
    refs.forEach(ref => {
      console.log('ref: ', ref)
      ref.current?.classList?.add(styles['fade-out'])
    })
  }
}

export function Experience() {
  const pageTitleRef = useRef<HTMLDivElement>(null)
  const revealExp = useCallback((index: number) => {
    setActiveExp(index)
  }, [])
  const [activeExp, setActiveExp] = useState<number>(-1);
  const renderExp = () => {
    switch(activeExp){
      case -1:
        return <ExpandingCards revealFunc={revealExp}/>
      case 0:
        hideElements(true, [pageTitleRef])
        return <CRA revealFunc={revealExp}/>
      case 1:
        hideElements(true, [pageTitleRef])
        return <Karport revealFunc={revealExp}/>
      case 2:
        hideElements(true, [pageTitleRef])
        return <Personal revealFunc={revealExp}/>
      default:
        return <ExpandingCards revealFunc={revealExp}/>
    }
  }

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
