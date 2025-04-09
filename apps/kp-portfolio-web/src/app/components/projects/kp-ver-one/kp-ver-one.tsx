import {
  DetailsPageCursiveTitle,
  DetailsParaMiddleFourPoints,
  DetailsParaMiddleFourPointsInline,
  DetailsParaPoints,
  KPAlert,
  MidFourPointProps,
  MidFourPointsInlineProps,
  ParaPointProps,
  Reveal,
} from '@kp-react-lib/kp-react-common';
import { useTranslation } from 'react-i18next';
import {
  PRO_KP_V1_GENERAL_POINTS,
  PRO_KP_V1_RUN_POINTS,
  PRO_KP_V1_SHOWCASE,
  PRO_KP_V1_UI_UX
} from '@/app/components/shared/Constant';
import UI_GENERAL from '@/assets/projects/kp_v1/ui.png'
import UI_RUNNING from '@/assets/projects/kp_v1/ui_run.png'
import i18n from '@/i18n';

export function KpVerOne() {
  const {t} = useTranslation()

  const uiContents: MidFourPointProps = {
    titleUp: t('project.kp.v1.ui.title.up'),
    titleDown: t('project.kp.v1.ui.title.down'),
    description: t('project.kp.v1.ui.description'),
    contents: PRO_KP_V1_UI_UX }
  const uiGeneralPointContent: ParaPointProps = {
    title: t('project.kp.v1.ui.general.title'),
    description: t('project.kp.v1.ui.general.description'),
    pointImage: UI_GENERAL,
    contents: PRO_KP_V1_GENERAL_POINTS,
    aspectVideo: false
  }
  const uiRunPointContent: ParaPointProps = {
    title: t('project.kp.v1.ui.run.title'),
    description: t('project.kp.v1.ui.run.description'),
    pointImage: UI_RUNNING,
    contents: PRO_KP_V1_RUN_POINTS,
    reverse: true,
    aspectVideo: false
  }
  const showcaseContent: MidFourPointsInlineProps = {
    title: t('project.kp.v1.ui.showcase.title'),
    contents: PRO_KP_V1_SHOWCASE
  }

  return (
    <section>
      <DetailsPageCursiveTitle title={t('project.kp.v1.title')} subTitle={t('project.kp.v1.description')}/>
      <Reveal className={'mt-20'}>
        <KPAlert title={t('project.intro.brief.title')}>
          <span dangerouslySetInnerHTML={{__html: t('project.intro.brief.dedicated', {projectName: t('project.kp.v1.title')})}}/>
          <span dangerouslySetInnerHTML={{__html: t('project.intro.brief.details', {experienceLink: '/detailed-experience', title: t('project.intro.brief.details.experience')})}}/>
        </KPAlert>
      </Reveal>

      <DetailsParaMiddleFourPoints props={uiContents} i18n={i18n}/>
      <DetailsParaPoints props={uiGeneralPointContent} i18n={i18n}/>
      <DetailsParaPoints props={uiRunPointContent} i18n={i18n}/>
      <DetailsParaMiddleFourPointsInline props={showcaseContent} i18n={i18n}/>

    </section>
  );
}

export default KpVerOne;
