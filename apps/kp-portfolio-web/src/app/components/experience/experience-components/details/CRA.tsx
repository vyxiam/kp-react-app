import { useTranslation } from 'react-i18next';
import DetailsTitle from '@/app/components/experience/experience-components/details/shared/details-title';
import DetailsParaHeader from '@/app/components/experience/experience-components/details/shared/details-para-header';
import RevealParagraph from '@/app/components/shared/motion/RevealParagraph';
import DetailsParaMiddle from '@/app/components/experience/experience-components/details/shared/details-para-middle';
import TechGroup from '@/app/components/shared/tech-group';
import {
  CRA_EXP_BE_DEV_FR, CRA_EXP_BE_DEV_SR,
  CRA_EXP_DEV_TECHS,
  CRA_EXP_FE_COMMON_DEV,
  CRA_EXP_FE_DEV, CRA_EXP_MAINTENANCE_KEYPOINTS
} from '@/app/components/shared/Constant';
import MAINTENANCE_IMG from '@/assets/maintenance.jpg'
import DetailsParaMidFourPoint
  from '@/app/components/experience/experience-components/details/shared/details-para-middle-four-points';
import DetailsParaMidFourPointsInline
  from '@/app/components/experience/experience-components/details/shared/details-para-middle-four-points-inline';
import DetailsParaMidFivePoints
  from '@/app/components/experience/experience-components/details/shared/details-para-middle-five-points';
import DetailsParaPoints from '@/app/components/experience/experience-components/details/shared/details-para-points';
import ToOtherExp from '@/app/components/experience/experience-components/to-other-exp';

interface ExpProps{
  revealFunc: (index: number) => void
}

export function CRA({revealFunc}: ExpProps) {
  const {t} = useTranslation()
  return (
    <section>
      <DetailsTitle title={t('experience.details.cra.title')} position={t('experience.details.cra.position')}/>
      {/*ABOUT JOB*/}
      <div className='flex flex-row'>
        <div className='flex flex-col w-full justify-center px-32 pt-20'>
          <DetailsParaHeader title={t('experience.details.cra.header.about')} description={t('experience.details.cra.header.about.description')}>
            <RevealParagraph delay={0.1} divClassName='w-[50%]' className='text-lg'>{t("experience.details.cra.body.about.brief")}</RevealParagraph>
            <RevealParagraph delay={0.1} divClassName='w-[50%] py-4 px-6' className='list-disc text-lg' tag={'ul'}>
              <li>{t('experience.details.cra.body.about.brief.list.1')}</li>
              <li>{t('experience.details.cra.body.about.brief.list.2')}</li>
              <li>{t('experience.details.cra.body.about.brief.list.3')}</li>
              <li>{t('experience.details.cra.body.about.brief.list.4')}</li>
            </RevealParagraph>
          </DetailsParaHeader>
        </div>

        {/*TO-DO*/}
      </div>

      <DetailsParaMiddle
        delay={0.2}
        title={t('experience.details.cra.header.development')}
        mainUp={t('experience.details.cra.body.development.main.up')}
        mainDown={t('experience.details.cra.body.development.main.down')}
        body={t('experience.details.cra.body.development.main.content')}/>

      <TechGroup techs={CRA_EXP_DEV_TECHS} baseDelay={0.2}/>

      <DetailsParaMidFourPoint
        titleUp={t('experience.details.cra.frontend.up')}
        titleDown={t('experience.details.cra.frontend.down')}
        description={t('experience.details.cra.frontend.description')}
        contents={CRA_EXP_FE_DEV}/>

      <DetailsParaMidFourPointsInline
        title={'experience.details.cra.header.library.header'}
        contents={CRA_EXP_FE_COMMON_DEV}/>

      <DetailsParaMidFivePoints
        frUpTitle={'experience.details.cra.backend.title.up'}
        frDownTitle={'experience.details.cra.backend.title.down'}
        srTitle={'experience.details.cra.backend.title.sub'}
        description={'experience.details.cra.backend.description'}
        frContents={CRA_EXP_BE_DEV_FR}
        srContents={CRA_EXP_BE_DEV_SR}
      />

      <DetailsParaMiddle
        delay={0.1}
        title={t('experience.details.cra.header.maintenance')}
        mainUp={t('experience.details.cra.body.maintenance.main.up')}
        mainDown={t('experience.details.cra.body.maintenance.main.down')}
        body={t('experience.details.cra.body.maintenance.main.content')}/>

      <DetailsParaPoints
        pointImage={MAINTENANCE_IMG}
        title={'experience.details.cra.maintenance.key.title'}
        description={'experience.details.cra.maintenance.key.description'}
        contents={CRA_EXP_MAINTENANCE_KEYPOINTS}
      />

      <ToOtherExp body={'experience.to.other.exp.web.description'} toExpFunc={() => revealFunc(9999)}/>
    </section>
  );
}

export default CRA;
