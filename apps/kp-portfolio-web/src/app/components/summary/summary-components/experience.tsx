import { useTranslation } from 'react-i18next';
import styles from './my-name.module.css';
import { CRA_SUMMARY } from '@/app/components/shared/Constant';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Experience() {
  const {t} = useTranslation()
  return (
    <section className="rounded-3xl p-12 pb-0 max-h-screen-xl md:py-16 md:pb-0 flex flex-col items-center">
      <div className="relative">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('summary.experience')}</h1>
        <p className={styles['position-title'] + " text-center mb-2"}>{t('summary.experience.since')} <span className={styles['position-title-underscore']}>2023</span></p>
        <p className="text-center mb-4 ">{t('summary.experience.cra.brief')}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {CRA_SUMMARY.map((summary, index) => (
          <div key={index} className="flex items-start space-x-4 border-2 p-6 rounded-xl">
            <div className="p-3 rounded-lg hidden sm:block">
              <summary.icon className="w-6 h-6"/>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{summary.title}</h3>
              <p>{summary.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-10">
        <Button size="lg">
          {t('summary.experience.detailed.button')}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}

export default Experience;
