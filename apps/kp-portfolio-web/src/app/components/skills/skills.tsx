import PageTitle from '@/app/components/shared/page-title';
import TechGroup from '@/app/components/shared/tech-group';
import {
  BACKEND_SKILLS,
  BACKEND_SKILLS_CONTENTS,
  FRONTEND_SKILLS,
  FRONTEND_SKILLS_CONTENTS,
  TOOL_SKILLS,
  TOOLS_CONTENTS
} from '@/app/components/shared/Constant';
import DetailsParaSingle from '@/app/components/skills/shared/details-para-single';
import { KPAlert, Reveal } from '@kp-react-lib/kp-react-common';
import { useTranslation } from 'react-i18next';

export function Skills() {
  const {t} = useTranslation()
  return (
    <section>
      <PageTitle title={'skills.page.title'}/>

      <Reveal className={'mt-20'}>
        <KPAlert title={t('skills.page.opening.transition.alert.header')}>
          <span>{t('skills.page.opening.transition.alert.content')}</span>
          <span>{t('skills.page.opening.transition.alert.content.extra')}</span>
        </KPAlert>
      </Reveal>

      <TechGroup techs={BACKEND_SKILLS} divider={false} className={'py-4 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-2 gap-y-12 justify-items-center md:justify-items-stretch'}/>
      <DetailsParaSingle title={'skills.backend.title'} description={'skills.backend.description'} contents={BACKEND_SKILLS_CONTENTS}/>

      <Reveal className={'mt-20'}>
        <KPAlert title={t('skills.page.opening.transition.alert.header')}>
          <span>{t('skills.page.frontend.transition.alert.content')}</span>
          <span>{t('skills.page.frontend.transition.alert.content.extra')}</span>
        </KPAlert>
      </Reveal>

      <TechGroup techs={FRONTEND_SKILLS} divider={false} className={'py-4 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-2 gap-y-12 justify-items-center md:justify-items-stretch'}/>
      <DetailsParaSingle reverse={true} title={'skills.frontend.title'} description={'skills.frontend.description'} contents={FRONTEND_SKILLS_CONTENTS}/>

      <Reveal className={'mt-20'}>
        <KPAlert title={t('skills.page.opening.transition.alert.header')}><span>{t('skills.page.tools.transition.alert.content')}</span></KPAlert>
      </Reveal>

      <TechGroup techs={TOOL_SKILLS} divider={false} className={'py-4 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2 gap-y-12 justify-items-center md:justify-items-stretch'}/>
      <DetailsParaSingle title={'skills.tools.title'} description={'skills.tools.description'} contents={TOOLS_CONTENTS}/>
    </section>
  );
}

export default Skills;
