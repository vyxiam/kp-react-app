import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import styles from './my-name.module.css';

export function MyName() {
  const {t} = useTranslation()
  return (
    <section className="flex flex-col items-center justify-center space-y-8 text-center md:py-32">
      <div className="flex flex-col items-center justify-center -2xl space-y-8 py-16 text-center md:py-24">
        <div className="space-y-4">
          <h2 className="mb-0 title bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            {t('summary.my.name').toUpperCase()}
          </h2>
          <span className={styles['position-title']}>IT Analyst and <span><span className={styles['position-title-underscore']}>Full-stack</span> Developer</span></span>
          <p className="mt-4 mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {t('summary.description')}
          </p>
        </div>
        <div className="flex gap-4 flex-col sm:flex-row">
          <Button size="lg">
            {t('summary.primary.button')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            {t('summary.secondary.button.skills')}
          </Button>
          <Button variant="outline" size="lg">
            {t('summary.secondary.button.projects')}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default MyName;
