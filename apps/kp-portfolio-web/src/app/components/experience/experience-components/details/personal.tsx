import { useTranslation } from 'react-i18next';
import DetailsTitle from '@/app/components/experience/experience-components/details/shared/details-title';
import {
  PER_EXP_EDU_AC,
  PER_EXP_EDU_UOT_FR,
  PER_EXP_EDU_UOT_SR,
  PER_EXP_SOFT_SKILLS
} from '@/app/components/shared/Constant';
import DetailsParaMidFourPoint
  from '@/app/components/experience/experience-components/details/shared/details-para-middle-four-points';
import DetailsParaMidFivePoints
  from '@/app/components/experience/experience-components/details/shared/details-para-middle-five-points';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { Reveal } from '@kp-react-lib/kp-react-common';
import DetailsParaMidFourPointsInline
  from '@/app/components/experience/experience-components/details/shared/details-para-middle-four-points-inline';
import ToOtherExp from '@/app/components/experience/experience-components/to-other-exp';

export function Personal({revealFunc}:{revealFunc: (index: number) => void}) {
  document.documentElement.classList.remove('dark');
  const {t} = useTranslation()
  return (
    <section>
      <DetailsTitle
        title={t('experience.details.personal.title')}
        position={t('experience.details.personal.position')}
      />

      <DetailsParaMidFourPoint
        titleUp={t('experience.details.personal.education.ac.title.up')}
        titleDown={t('experience.details.personal.education.ac.title.down')}
        description={t('experience.details.personal.education.ac.description')}
        contents={PER_EXP_EDU_AC}
      />

      <Reveal>
        <Alert className={'max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto'}>
          <Terminal className="h-4 w-4" />
          <AlertTitle>{t('experience.details.personal.education.transition.alert.header')}</AlertTitle>
          <AlertDescription className={'text-foreground'}>
            <span>{t('experience.details.personal.education.transition.alert.content')}</span>
            <span>{t('experience.details.personal.education.transition.alert.content.extra')}</span>
          </AlertDescription>
        </Alert>
      </Reveal>


      <DetailsParaMidFivePoints
        frUpTitle={'experience.details.personal.education.uot.title.up'}
        frDownTitle={'experience.details.personal.education.uot.title.down'}
        frDownClassName={'text-xl md:text-2xl xl:text-3xl'}
        description={'experience.details.personal.education.uot.description'}
        frContents={PER_EXP_EDU_UOT_FR}
        srContents={PER_EXP_EDU_UOT_SR}
      />

      <DetailsParaMidFourPointsInline
        title={'experience.details.personal.soft.title'}
        contents={PER_EXP_SOFT_SKILLS}
      />

      <ToOtherExp
        body={'experience.to.other.exp.web.description'}
        toExpFunc={() => revealFunc(9999)}
      />

    </section>
  );
}

export default Personal;
