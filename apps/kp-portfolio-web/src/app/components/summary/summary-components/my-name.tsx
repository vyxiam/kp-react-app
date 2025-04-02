import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './my-name.module.css';
import { motion } from 'framer-motion';
import ThunderReveal from '@/app/components/shared/motion/ThunderReveal';
import Reveal from '@/app/components/shared/motion/Reveal';
import { useNavigate } from 'react-router';
import {
  DotPrimaryButton,
  KPOutlineButton,
} from '@kp-react-lib/kp-react-common';

export function MyName() {
  const {t} = useTranslation()
  const navigate = useNavigate()
  return (
    <section className="flex flex-col items-center justify-center space-y-8 text-center md:py-32">
      <div className="flex flex-col items-center justify-center -2xl space-y-8 py-16 text-center md:py-24">
        <div className="space-y-4">
          <Reveal>
            <h2 className="mb-0 title bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
              {t('summary.my.name').toUpperCase()}
            </h2>
          </Reveal>
          <ThunderReveal><span className={styles['position-title']}>IT Analyst and
            <motion.span
              initial={{color: '#020618'}}
              whileInView={{ color: '#f7ca18' }}
              transition={{duration: 0.5, delay: 0.65}}
              viewport={{ once: true }}
            >
              <motion.span initial={{color: '#020618', borderBottom: 'none'}}
                           whileInView={{ color: '#f7ca18' , borderBottom: '5px solid #f7ca18'}}
                           transition={{duration: 0.5, delay: 0.65}}
                           viewport={{ once: true }} className={styles['position-title-underscore']}> Full-stack</motion.span> Developer</motion.span></span></ThunderReveal>
          <Reveal delay={0.3}><p className="mt-4 mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {t('summary.description')}
          </p></Reveal>
        </div>
        <Reveal delay={0.3}><div className="flex gap-4 flex-col sm:flex-row">
            <DotPrimaryButton onClick={() => navigate('/detailed-experience')} text={t('summary.primary.button')}><ArrowRight className="ml-2 h-4 w-4" /></DotPrimaryButton>
            <KPOutlineButton onClick={() => navigate('/detailed-skills')} text={t('summary.secondary.button.skills')}/>
            <KPOutlineButton onClick={() => navigate('/freelance-projects')} text={t('summary.secondary.button.projects')}/>
        </div></Reveal>
      </div>
    </section>
  );
}

export default MyName;
