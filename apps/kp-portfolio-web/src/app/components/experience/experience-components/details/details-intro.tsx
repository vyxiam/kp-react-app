import styles from './details.module.css'
import { useTranslation } from 'react-i18next';
import Reveal from '@/app/components/shared/motion/Reveal';
import { motion } from 'framer-motion';

interface DetailsProps {
  location: string;
  positionHighlight?: string;
  position: string;
  year: string;
}

export function DetailsIntro({location, positionHighlight, position, year}:DetailsProps) {
  const {t} = useTranslation()
  return (
    <>
      <motion.div initial={{opacity: 0, display: 'none'}} animate={{opacity: 1, display: 'block'}} transition={{duration: 0.5, delay: 1}} className={'h-full w-full absolute ' + styles['fake-bg']}></motion.div>
      <div className={styles['details-body'] + ' flex flex-col-reverse'}>
        <div className='absolute z-[100] bottom-[45vh]'>
          <Reveal delay={2}><p className={styles['position-title'] + styles['cursive'] + " text-center mb text-[3rem]"}>{location}</p></Reveal>
          <Reveal delay={2.2}><p className={styles['position-title'] + " text-center mb text-[3rem]"}><span className={styles['position-title-underscore']}>{positionHighlight}</span>{position}</p></Reveal>
          <Reveal delay={2.4}><p className={styles['position-title'] + " text-center mb-2 text-[3rem]"}>{t('experience.details.intro.since')} <span>{year}</span> </p></Reveal>
        </div>
      </div>
    </>
  );
}

export default DetailsIntro;
