import { ArrowRight } from 'lucide-react';
import { HOME_HIGHLIGHTS, HOME_SOCIAL } from '@/app/components/shared/Constant';
import { useTranslation } from 'react-i18next';
import {
  DotPrimaryButton,
  GlitchTitle,
  KPOutlineButton,
  Reveal,
  GlowingCard,
  StaggeredFlipInTitle,
} from '@kp-react-lib/kp-react-common';
import { Link, useNavigate } from 'react-router';
import VACODE from '@/assets/vacode.jpeg';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export function HomeWelcome({toggleRequest} : {toggleRequest:Dispatch<SetStateAction<boolean>>}) {
  const {t} = useTranslation()
  const navigate = useNavigate()
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  const [showMainStatus, setMainStatus] = useState(false)
  const [showFirstStatus, setFirstStatus] = useState(false)
  const [showSecondStatus, setSecondStatus] = useState(false)
  useEffect(() => {
    let firstTimer = undefined
    let secondTimer = undefined
    if (isInView){
      setMainStatus(true)
      firstTimer = setTimeout(() => {
        setFirstStatus(true);
      }, 1200);
      secondTimer = setTimeout(() => {
        setSecondStatus(true);
      }, 1500)
    }

    return() => {
      if (firstTimer){
        clearTimeout(firstTimer)
      }
      if (secondTimer){
        clearTimeout(secondTimer)
      }
    }
  }, [isInView]);

  return (
    <section className='flex flex-col 2xl:flex-row'>
      <div className='flex flex-col 2xl:w-[70%]'>
        {/*<div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">*/}
        <div className="2xl:container flex flex-col items-center justify-center space-y-8 py-16 px-2 text-center md:py-24">
          <div className="space-y-4">
            <Reveal tag={'h1'} className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
              {t('home.welcome.to')}
              <br />
              {t('home.my.site')}
            </Reveal>
            <Reveal tag={'p'} delay={0.2} className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              <span dangerouslySetInnerHTML={{__html: t('home.welcome.description')}}></span>
            </Reveal>
          </div>
          <Reveal hiddenV = {{filter: 'blur(20px)', opacity: 0 }} visibleV = {{filter: 'blur(0px)', opacity: 1 }} className="flex gap-4 flex-col sm:flex-row">
            <DotPrimaryButton onClick={() => {toggleRequest(true); navigate('/summary')}} text={t('home.primary.button')}><ArrowRight className="ml-2 h-4 w-4" /></DotPrimaryButton>
            <KPOutlineButton onClick={() => navigate('/freelance-projects')} text={t('home.secondary.button')}></KPOutlineButton>
          </Reveal>
        </div>

        <div className="2xl:container space-y-16 py-2 md:py-24">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {HOME_HIGHLIGHTS.map((highlight, index) => (
              <Reveal duration={0.2} key={highlight.title} className="relative overflow-hidden rounded-lg border bg-background p-8">
                <Reveal delay={0.1*index} className="flex items-center gap-4">
                  <highlight.icon className="h-8 w-8" />
                  <h3 className="font-bold">{t(highlight.title)}</h3>
                </Reveal>
                <Reveal tag={'p'} delay={0.2*index} className="mt-2 text-muted-foreground">{t(highlight.description)}</Reveal>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <Reveal><GlowingCard title={t('home.label.fullstack')} img={VACODE} className={'mt-20 2xl:mt-40'}/></Reveal>
        <div ref={ref}>
          {showMainStatus && <StaggeredFlipInTitle text={t('home.label.fullstack')} className={'mt-12 text-3xl'}/>}
          <div className='flex flex-col items-center gap-3 mt-4 text-4xl h-34'>
            {showFirstStatus &&
              (<GlitchTitle
                tag={'h3'} randomColor={'text-purple-500'}
                className={'text-blue-200'} title={t('home.label.software')} />)}
            {showSecondStatus &&
              (<GlitchTitle
                tag={'h3'} randomColor={'text-purple-500'}
                className={'text-blue-200'} title={t('home.label.web')} />)}
          </div>
        </div>
        <div className='flex flex-row gap-6'>
          {HOME_SOCIAL.map((item, index) => (
            <Reveal delay={0.1*index} key={item.title}>
              <Link to={item.link}>
                <item.item className={'h-8 w-8'}/>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeWelcome;
