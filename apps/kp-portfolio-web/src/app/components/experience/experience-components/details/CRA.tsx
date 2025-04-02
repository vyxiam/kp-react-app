import DetailsIntro from '@/app/components/experience/experience-components/details/details-intro';
import { useTranslation } from 'react-i18next';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface ExpProps{
  setIntroStatus: Dispatch<SetStateAction<boolean>>
  revealFunc: (index: number) => void
}

export function CRA({setIntroStatus, revealFunc}: ExpProps) {
  const {t} = useTranslation()
  const [introAni, setIntroAni] = useState<boolean>(false)

  useEffect(() => {
    if (introAni){
      setIntroStatus(true)
    }
  }, [introAni]);

  return (
    <>
      {!introAni ? <DetailsIntro condition={setIntroAni}
                                location={t("experience.details.intro.location.cra")}
                                positionHighlight={t("experience.details.intro.position.highlight.full.stack")}
                                position={t("experience.details.intro.position.developer")}
                                year={t("experience.details.intro.year.2023")}/>:''}
      {introAni ? <section>
        <p>Something here</p>
      </section>: ''}
    </>
  );
}

export default CRA;
