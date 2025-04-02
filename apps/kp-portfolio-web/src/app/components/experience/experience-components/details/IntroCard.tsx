import DetailsIntro from '@/app/components/experience/experience-components/details/details-intro';
import { useTranslation } from 'react-i18next';
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

interface IntroProps{
  setIntroStatus: Dispatch<SetStateAction<boolean>>
  location: string;
  positionHighlight: string;
  position: string;
  year: string;
  children: ReactNode;
}

export function IntroCard({setIntroStatus, location, positionHighlight, position, year, children}: IntroProps) {
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
                                 location={t(location)}
                                 positionHighlight={t(positionHighlight)}
                                 position={t(position)}
                                 year={t(year)}/>:''}
      {introAni ? <section>
        {children}
      </section>: ''}
    </>
  );
}

export default IntroCard;
