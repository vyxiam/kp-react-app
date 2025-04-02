import DetailsIntro from '@/app/components/experience/experience-components/details/details-intro';
import { useTranslation } from 'react-i18next';

export function CRA({revealFunc}:{revealFunc: (index: number) => void}) {
  const {t} = useTranslation()
  return (
    <section>
      <DetailsIntro location={t("experience.details.intro.location.cra")}
                    positionHighlight={t("experience.details.intro.position.highlight.full.stack")}
                    position={t("experience.details.intro.position.developer")}
                    year={t("experience.details.intro.year.2023")}/>
    </section>
  );
}

export default CRA;
