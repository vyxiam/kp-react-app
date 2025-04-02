import { useTranslation } from 'react-i18next';
import DetailsIntro from '@/app/components/experience/experience-components/details/details-intro';

export function Karport({revealFunc}:{revealFunc: (index: number) => void}) {
  const {t} = useTranslation()
  return (
    <section>
      <DetailsIntro location={t("experience.details.intro.location.freelance")}
                    positionHighlight={t("experience.details.intro.position.highlight.back.end")}
                    position={t("experience.details.intro.position.developer")}
                    year={t("experience.details.intro.year.2024")}/>
    </section>
  );
}

export default Karport;
