import { ArrowRight } from 'lucide-react';
import { HOME_HIGHLIGHTS } from '@/app/components/shared/Constant';
import { useTranslation } from 'react-i18next';
import { DotPrimaryButton, KPOutlineButton, uuid } from '@kp-react-lib/kp-react-common';
import { useNavigate } from 'react-router';

export function HomeWelcome() {
  const {t} = useTranslation()
  const navigate = useNavigate()
  return (
    <section className="">
      {/*<div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">*/}
      <div className="2xl:container flex flex-col items-center justify-center space-y-8 py-16 text-center md:py-24">
        <div className="space-y-4">
          <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            {t('home.welcome.to')}
            <br />
            {t('home.my.site')}
          </h1>
          <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            <span dangerouslySetInnerHTML={{__html: t('home.welcome.description')}}></span>
          </p>
        </div>
        <div className="flex gap-4 flex-col sm:flex-row">
          <DotPrimaryButton onClick={() => navigate('/summary')} text={t('home.primary.button')}><ArrowRight className="ml-2 h-4 w-4" /></DotPrimaryButton>
          <KPOutlineButton onClick={() => navigate('/freelance-projects')} text={t('home.secondary.button')}></KPOutlineButton>
        </div>
      </div>

      <div className="2xl:container space-y-16 py-2 md:py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {HOME_HIGHLIGHTS.map((highlight) => (
            <div key={uuid()} className="relative overflow-hidden rounded-lg border bg-background p-8">
              <div className="flex items-center gap-4">
                <highlight.icon className="h-8 w-8" />
                <h3 className="font-bold">{t(highlight.title)}</h3>
              </div>
              <p className="mt-2 text-muted-foreground">{t(highlight.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}

export default HomeWelcome;
