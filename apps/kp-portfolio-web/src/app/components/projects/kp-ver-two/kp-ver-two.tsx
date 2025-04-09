import {
  DetailsPageCursiveTitle,
  KPAlert,
  Reveal,
  StaggeredFlipInTitle,
} from '@kp-react-lib/kp-react-common';
import { useTranslation } from 'react-i18next';

export function KpVerTwo() {
  const {t} = useTranslation()
  document.documentElement.classList.remove('dark');

  return (
    <section>
      <DetailsPageCursiveTitle title={t('project.kp.v2.title')} subTitle={t('project.kp.v2.description')}/>
      <Reveal className='flex flex-col items-center'>
        <StaggeredFlipInTitle text={t('project.development')} className={'mt-12 text-xl'} textClassName={'!p-[3px]'} textColor={'text-yellow-600'} borderColor={'bg-yellow-600'} flashColor={'#d08700'}/>
      </Reveal>

      <Reveal className={'mt-20'}>
        <KPAlert title={t('project.intro.brief.title')}>
          <span dangerouslySetInnerHTML={{__html: t('project.intro.brief.dedicated', {projectName: t('project.kp.v2.title')})}}/>
          <span dangerouslySetInnerHTML={{__html: t('project.intro.brief.details', {experienceLink: '/detailed-experience', title: t('project.intro.brief.details.experience')})}}/>
        </KPAlert>
      </Reveal>

      <Reveal className={'mt-20'}>
        <KPAlert title={t('project.update.development.alert.title')}>
          <span>{t('project.update.development.alert.description')}</span>
        </KPAlert>
      </Reveal>

    </section>
  );
}

export default KpVerTwo;
