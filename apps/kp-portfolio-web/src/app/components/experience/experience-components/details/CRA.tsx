import { useTranslation } from 'react-i18next';
interface ExpProps{
  revealFunc: (index: number) => void
}

export function CRA({revealFunc}: ExpProps) {
  const {t} = useTranslation()
  return (
    <section>
      {t('body.cra')}
    </section>
  );
}

export default CRA;
