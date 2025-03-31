import { useTranslation } from 'react-i18next';
import styles from './my-name.module.css';
import { CRA_SUMMARY } from '@/app/components/shared/Constant';
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion"
import { useNavigate } from 'react-router';
import { DotPrimaryButton } from '@kp-react-lib/kp-react-common';

export function Experience() {
  const {t} = useTranslation()
  const navigate = useNavigate()
  return (
    <section className="rounded-3xl p-12 pb-0 max-h-screen-xl md:py-16 md:pb-0 flex flex-col items-center">
      <motion.div
        className="relative"
        initial={{opacity: 0, y: 40}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{duration: 0.5}}
        viewport={{ once: true}}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('summary.experience')}</h1>
        <p className={styles['position-title'] + " text-center mb-2"}>{t('summary.experience.since')} <span className={styles['position-title-underscore']}>2023</span></p>
        <p className="text-center mb-4 ">{t('summary.experience.cra.brief')}</p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {CRA_SUMMARY.map((summary, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-4 border-2 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="p-3 rounded-lg hidden sm:block">
              <summary.icon className="w-6 h-6"/>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{summary.title}</h3>
              <p>{summary.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="flex mt-10"
        initial={{opacity: 0, y: 20}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{duration: 0.5, delay: 0.4}}
        viewport={{ once: true}}
      >
        <DotPrimaryButton onClick={() => navigate('/detailed-experience')} text={t('summary.experience.detailed.exp.button')}><ArrowRight className="ml-2 h-4 w-4" /></DotPrimaryButton>
      </motion.div>
    </section>
  );
}

export default Experience;
