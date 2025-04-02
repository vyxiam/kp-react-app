import { useTranslation } from 'react-i18next';
import DetailsTitle from '@/app/components/experience/experience-components/details/shared/details-title';
import DetailsParaHeader from '@/app/components/experience/experience-components/details/shared/details-para-header';
import RevealParagraph from '@/app/components/shared/motion/RevealParagraph';

interface ExpProps{
  revealFunc: (index: number) => void
}

export function CRA({revealFunc}: ExpProps) {
  const {t} = useTranslation()
  return (
    <>
    <section>
      <DetailsTitle title={t('experience.details.cra.title')} position={t('experience.details.cra.position')}/>
      <div className='flex flex-col w-full justify-center px-40 pt-20'>
        <DetailsParaHeader title={t('experience.details.cra.header.about')} description={t('experience.details.cra.header.about.description')}>
          <RevealParagraph delay={0.75} className='w-[50%]'>{t("experience.details.cra.body.about.brief")}</RevealParagraph>
        </DetailsParaHeader>
      </div>

    </section>
    </>
  );
}

export default CRA;
