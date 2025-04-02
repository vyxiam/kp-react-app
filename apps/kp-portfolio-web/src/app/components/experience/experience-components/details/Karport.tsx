import { useTranslation } from 'react-i18next';

export function Karport({revealFunc}:{revealFunc: (index: number) => void}) {
  const {t} = useTranslation()
  return (
    <section>
      {t('body.karport')}
    </section>
  );
}

export default Karport;
