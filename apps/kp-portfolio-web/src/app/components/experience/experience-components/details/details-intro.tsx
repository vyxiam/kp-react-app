import styles from './details.module.css'
import { useTranslation } from 'react-i18next';
import RevealIntroBG from '@/app/components/shared/motion/RevealIntroBG';
import RevealIntro from '@/app/components/shared/motion/RevealIntro';
import { Dispatch, SetStateAction } from 'react';

interface DetailsProps {
  condition:  Dispatch<SetStateAction<boolean>>
  location: string;
  positionHighlight?: string;
  position: string;
  year: string;
}

export function DetailsIntro({condition, location, positionHighlight, position, year}:DetailsProps) {
  const {t} = useTranslation()
  return (
    <>
      <RevealIntroBG cleanup={condition} duration={0.5} delayShow={0.5} delayHide={4.2} className={'h-full w-full absolute ' + styles['fake-bg']}></RevealIntroBG>
      <div className={styles['details-body'] + ' flex flex-col-reverse'}>
        <div className='absolute z-[100] bottom-[45vh]'>
          <RevealIntro duration={0.3} delayShow={2} delayHide={2}><p className={styles['position-title'] + ' ' +styles['cursive'] + " text-center mb text-8xl"}>{location}</p></RevealIntro>
          <RevealIntro duration={0.3} delayShow={2.2} delayHide={1.6}><p className={styles['position-title'] + " text-center mb text-4xl py-2"}><span className={styles['position-title-underscore']}>{positionHighlight}</span>{position}</p></RevealIntro>
          <RevealIntro duration={0.3} delayShow={2.4} delayHide={1.2}><p className={styles['position-title'] + " text-center mb-2 text-2xl"}>{t('experience.details.intro.since')} <span>{year}</span> </p></RevealIntro>
        </div>
      </div>
    </>
  );
}

export default DetailsIntro;
