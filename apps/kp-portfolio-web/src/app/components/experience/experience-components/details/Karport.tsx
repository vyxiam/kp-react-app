import { useTranslation } from 'react-i18next';
import DetailsTitle from '@/app/components/experience/experience-components/details/shared/details-title';
import DetailsParaHeader from '@/app/components/experience/experience-components/details/shared/details-para-header';
import RevealParagraph from '@/app/components/shared/motion/RevealParagraph';
import { Reveal, ShinyPrimaryButton } from '@kp-react-lib/kp-react-common';
import {
  KP_EXP_V1_DEV,
  KP_EXP_V1_TECH,
  KP_EXP_V2_FEATURES
} from '@/app/components/shared/Constant';
import DetailsParaMidFourPoint
  from '@/app/components/experience/experience-components/details/shared/details-para-middle-four-points';
import MAINTENANCE_IMG from '@/assets/maintenance.jpg';
import DetailsParaPoints from '@/app/components/experience/experience-components/details/shared/details-para-points';
import DetailsParaMidFourPointsInline
  from '@/app/components/experience/experience-components/details/shared/details-para-middle-four-points-inline';
import ToOtherExp from '@/app/components/experience/experience-components/to-other-exp';
import { useNavigate } from 'react-router';
import { ArrowRight } from 'lucide-react';
import KP_LOGO from '@/assets/kp.jpg';

export function Karport({revealFunc}:{revealFunc: (index: number) => void}) {
  document.documentElement.classList.remove('dark');
  const {t} = useTranslation()
  const navigate = useNavigate()
  return (
    <section>
      <DetailsTitle
        title={t('experience.details.kp.title')}
        position={t('experience.details.kp.position')}
      />

      <div className='grid grid-cols-1 xl:grid-cols-2'>
        <div className='flex flex-col w-full justify-center px-2 md:px-6 lg:px-20 xl:px-0 xl:pl-20 2xl:pl-32 pt-20'>
          <DetailsParaHeader title={t('experience.details.kp.header.about')} description={t('experience.details.kp.header.about.description')}>
            <RevealParagraph delay={0.1} className='xl:text-lg'>{t("experience.details.kp.body.about.brief")}</RevealParagraph>
            <Reveal tag={'h2'} className='pt-4 xl:text-lg font-bold'>{t('experience.details.kp.body.about.brief.list.header')}</Reveal>
            <RevealParagraph delay={0.1} divClassName='pb-4 px-6' className='list-disc xl:text-lg' tag={'ul'}>
              <li>{t('experience.details.kp.body.about.brief.list.1')}</li>
              <li>{t('experience.details.kp.body.about.brief.list.2')}</li>
              <li>{t('experience.details.kp.body.about.brief.list.3')}</li>
              <li>{t('experience.details.kp.body.about.brief.list.4')}</li>
              <li>{t('experience.details.kp.body.about.brief.list.5')}</li>
            </RevealParagraph>
          </DetailsParaHeader>
        </div>

        <div className="m-auto">
          <img src={KP_LOGO} alt={t('experience.details.cra.title')} className="object-fit max-w-[200px] rounded-full sm:max-w-sm sm:min-w-sm"/>
        </div>
      </div>

      <DetailsParaMidFourPoint
        titleUp={t('experience.details.kp.v1.up')}
        titleDown={t('experience.details.kp.v1.down')}
        description={t('experience.details.kp.v1.description')}
        contents={KP_EXP_V1_DEV}/>

      <Reveal className='flex justify-center my-6'>
        <ShinyPrimaryButton text={t('experience.details.kp.checkout')} onClick={() => (navigate('/freelance-projects'))}>
          <ArrowRight className="ml-2 h-5 w-5 text-foreground" />
        </ShinyPrimaryButton>
      </Reveal>

      <DetailsParaPoints
        pointImage={MAINTENANCE_IMG}
        title={'experience.details.kp.v1.tech.title'}
        description={'experience.details.kp.v1.tech.description'}
        contents={KP_EXP_V1_TECH}
      />

      <DetailsParaMidFourPointsInline
        title={'experience.details.kp.v2.feature.title'}
        contents={KP_EXP_V2_FEATURES}/>

      <Reveal className='flex justify-center my-6'>
        <ShinyPrimaryButton text={t('experience.details.kp.checkout')} onClick={() => (navigate('/freelance-projects'))}>
          <ArrowRight className="ml-2 h-5 w-5 text-foreground" />
        </ShinyPrimaryButton>
      </Reveal>

      <ToOtherExp body={'experience.to.other.exp.software.description'} toExpFunc={() => revealFunc(9999)}/>

    </section>
  );
}

export default Karport;
