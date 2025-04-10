import PageTitle from '../shared/page-title';
import ExpandingCards from '@/app/components/experience/experience-components/landing/expanding-cards';
import { RefObject, useCallback, useRef, useState } from 'react';
import CRA from '@/app/components/experience/experience-components/details/CRA';
import Karport from '@/app/components/experience/experience-components/details/Karport';
import Personal from '@/app/components/experience/experience-components/details/personal';
import styles from './experience.module.css'
import IntroCard from '@/app/components/experience/experience-components/details/IntroCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { EXPERIENCE_CARDS } from '@/app/components/shared/Constant';
import { Card, CardContent } from '@/components/ui/card';
import { KPOutlineButton, Reveal } from '@kp-react-lib/kp-react-common';
import { useTranslation } from 'react-i18next';

export function Experience() {
  const {t} = useTranslation()
  const pageTitleRef = useRef<HTMLDivElement>(null)
  const refs:RefObject<(HTMLElement | null)>[] = [pageTitleRef]
  const [activeExp, setActiveExp] = useState<number>(-1); // active session

  /**
   * revealExp: Reveal the selection EXP
   * hideElements: Hide top elements for a smooth intro
   */
  const revealExp = useCallback((index: number) => {
    setActiveExp(index)
  }, [])

  const setIntroDone = ()=> {
    hideElements(false)
  }

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
                     positionHighlight={"experience.details.intro.position.highlight.backend"}
                     position={"experience.details.intro.position.developer"}>
            <Karport revealFunc={revealExp}/></IntroCard>)
      case 2:
        hideElements(true)
        return (
          <IntroCard setIntroStatus={setIntroDone}
                     location={"experience.details.intro.location.personal"} year={"experience.details.intro.year.2021"}
                     positionHighlight={"experience.details.intro.position.highlight.computer"}
                     position={"experience.details.intro.position.programmer"}>
            <Personal revealFunc={revealExp}/></IntroCard>)
      default:
        hideElements(false)
        return <ExpandingCards revealFunc={revealExp}/>
    }
  }

  const [mobileRender, setMobileRender] = useState(-1)

  const requestRender = (index: number) => {
    setMobileRender(index)
  }

  const revealMobile = useCallback((index: number) => {
    setMobileRender(-1)
  }, [])

  const renderMobile = () => {
    switch(mobileRender){
      case 1:
        document.documentElement.classList.remove('dark');
        return (
          <CRA revealFunc={revealMobile}/>
        )
      case 2:
        document.documentElement.classList.remove('dark');
        return(
          <Karport revealFunc={revealMobile}/>
        )
      case 3:
        document.documentElement.classList.remove('dark');
        return(
          <Personal revealFunc={revealMobile}/>
        )
      default:
        document.documentElement.classList.add('dark');
        return null
    }
  }

  return (
    <>
      <PageTitle ref={pageTitleRef} title={'experience.page.title'}/>
      <div className='hidden md:block'>
        {renderExp()}
      </div>
      {
        mobileRender === -1?<Reveal className='md:hidden flex flex-col justify-center items-center'>
          <Carousel className="w-full max-w-xs sm:max-w-md h-full sm:max-h-md max-h-xs flex flex-col">
            <CarouselContent>
              {EXPERIENCE_CARDS.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-0">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center">
                        <img src={item.img} alt={item.title} className={`aspect-square w-full h-full object-cover object-center`}/>
                        <h4 className={'clear-both inline-block relative uppercase overflow-hidden my-[0.5em]'}>{t(item.location)}</h4>
                        <h2 className={'text-blue-200 text-4xl text-center clear-both inline-block relative uppercase overflow-hidden mb-[0.3em]'}>{t(item.title)}</h2>
                        <h5 className={'clear-both inline-block relative overflow-hidden mb-[0.3em]'} dangerouslySetInnerHTML={{__html: t(item.period)}}></h5>
                        <div className='flex justify-center z-50'>
                          <KPOutlineButton text={t('experience.card.reveal')} onClick={() => requestRender(index + 1)}/>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className=""/>
            <CarouselNext className=""/>
          </Carousel>
        </Reveal>:''
      }

      <div className='md:hidden'>
        {mobileRender?renderMobile():''}
      </div>
    </>
  );
}

export default Experience;
