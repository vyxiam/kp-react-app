import { useTranslation } from 'react-i18next';
import DetailsIntro from '@/app/components/experience/experience-components/details/details-intro';

export function Personal({revealFunc}:{revealFunc: (index: number) => void}) {
  const {t} = useTranslation()
  return (
    <section>
      <DetailsIntro location={t("experience.details.intro.location.personal")}
                    positionHighlight={t("experience.details.intro.position.highlight.software")}
                    position={t("experience.details.intro.position.developer")}
                    year={t("experience.details.intro.year.2021")}/>
    </section>
  );
}

export default Personal;
