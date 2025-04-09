import {
  DetailsPageCursiveTitle,
  KPAlert,
  Reveal,
  StaggeredFlipInTitle,
} from '@kp-react-lib/kp-react-common';
import { useTranslation } from 'react-i18next';

export function ThisPage() {
  const {t} = useTranslation()
  document.documentElement.classList.remove('dark');

  return (
    <section>
      <DetailsPageCursiveTitle title={t('project.va.title')} subTitle={t('project.va.description')}/>
      <Reveal className='flex flex-col items-center'>
        <StaggeredFlipInTitle text={t('project.completed')} className={'mt-12 text-xl'} textClassName={'!p-[3px]'} textColor={'text-green-600'} borderColor={'bg-green-600'} flashColor={'#67c750'}/>
      </Reveal>

      <Reveal className={'mt-20'}>
        <KPAlert title={t('project.intro.brief.title')}>
          <span dangerouslySetInnerHTML={{__html: t('project.intro.brief.dedicated', {projectName: t('project.va.title')})}}/>
          <span dangerouslySetInnerHTML={{__html: t('project.intro.brief.details', {experienceLink: '/detailed-experience', title: t('project.intro.brief.details.experience')})}}/>
        </KPAlert>
      </Reveal>

      <Reveal className={'mt-20'}>
        <KPAlert title={t('project.update.complete.alert.title')}>
          <span>{t('project.update.complete.alert.description')}</span>
        </KPAlert>
      </Reveal>

    </section>
  );
}

export default ThisPage;
