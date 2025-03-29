import { useTranslation } from 'react-i18next';
import styles from './my-name.module.css';
import { FREELANCE_SUMMARY } from '@/app/components/shared/Constant';
import { uuid } from '@kp-react-lib/kp-react-common';
import { motion } from "framer-motion"
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PaidFreelance() {
  const {t} = useTranslation()
  return (
    <section className="rounded-3xl py-16 md:p-12 max-h-screen-xl md:py-16 flex flex-col items-center">
      <motion.div
        className="relative"
        initial={{opacity: 0, y: 40}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{duration: 0.5}}
        viewport={{ once: true}}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('summary.paid.reference.experience')}</h1>
        <p className={styles['position-title'] + " text-center mb-2"}>{t('summary.experience.since')} <span className={styles['position-title-underscore']}>2024</span></p>
        <p className="text-center mb-4 ">{t('summary.paid.reference.experience.brief')}</p>
      </motion.div>

      <div className="mt-12 w-[80%] lg:w-[90%] xl:w-[70%]">
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
          {FREELANCE_SUMMARY.map((summary, index) => (
            <motion.div
              key={uuid()}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <dt>
                <motion.div
                  className="absolute flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-md bg-primary text-primary-foreground"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <summary.icon className="h-4 w-4 sm:h-6 sm:w-6" aria-hidden="true" />
                </motion.div>
                <p className="ml-16 text-lg leading-6 font-medium text-foreground">{summary.title}</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-muted-foreground">{summary.description}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
      <motion.div
        className="flex mt-10"
        initial={{opacity: 0, y: 20}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{duration: 0.5, delay: 0.4}}
        viewport={{ once: true}}
      >
        <Link to='/detailed-experience'>
          <Button size="lg">
            {t('summary.experience.detailed.exp.button')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}

export default PaidFreelance;
