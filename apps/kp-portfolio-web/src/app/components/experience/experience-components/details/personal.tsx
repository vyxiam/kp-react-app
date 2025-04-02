import { useTranslation } from 'react-i18next';

export function Personal({revealFunc}:{revealFunc: (index: number) => void}) {
  const {t} = useTranslation()
  return (
    <section>
      {t('body.personal')}
    </section>
  );
}

export default Personal;
