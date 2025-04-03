import { useTranslation } from 'react-i18next';
import DetailsTitle from '@/app/components/experience/experience-components/details/shared/details-title';
import DetailsParaHeader from '@/app/components/experience/experience-components/details/shared/details-para-header';
import RevealParagraph from '@/app/components/shared/motion/RevealParagraph';
import DetailsParaMiddle from '@/app/components/experience/experience-components/details/shared/details-para-middle';
import TechGroup from '@/app/components/shared/tech-group';
import { CRA_EXP_DEV_TECHS } from '@/app/components/shared/Constant';

interface ExpProps{
  revealFunc: (index: number) => void
}

export function CRA({revealFunc}: ExpProps) {
  const {t} = useTranslation()
  return (
    <>
    <section>
      <DetailsTitle title={t('experience.details.cra.title')} position={t('experience.details.cra.position')}/>
      {/*ABOUT JOB*/}
      <div className='flex flex-row'>
        <div className='flex flex-col w-full justify-center px-40 pt-20'>
          <DetailsParaHeader title={t('experience.details.cra.header.about')} description={t('experience.details.cra.header.about.description')}>
            <RevealParagraph delay={0.75} divClassName='w-[50%]'>{t("experience.details.cra.body.about.brief")}</RevealParagraph>
            <RevealParagraph delay={1} divClassName='w-[50%] py-4 px-6' className='list-disc' tag={'ul'}>
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
        title={t('experience.details.cra.header.development')}
        mainUp={t('experience.details.cra.body.development.main.up')}
        mainDown={t('experience.details.cra.body.development.main.down')}
        body={t('experience.details.cra.body.development.main.content')}/>

      <TechGroup techs={CRA_EXP_DEV_TECHS} length={CRA_EXP_DEV_TECHS.length}/>


    </section>
    </>
  );
}

export default CRA;
