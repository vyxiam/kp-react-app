import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import {
  DotPrimaryButton,
  ShinyPrimaryButton,
} from '@kp-react-lib/kp-react-common';
import { useNavigate } from 'react-router';

export function ToOtherExp({body, toExpFunc}:{body: string; toExpFunc: () => void}){
  const {t} = useTranslation()
  const navigate = useNavigate()
  return (
    <div className="py-24 px-4 bg-slate-50">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{t('experience.to.other.exp.title')}</h2>
        <p className="mb-10 text-xl" dangerouslySetInnerHTML={{__html: t(body)}}>
        </p>
        <div className='flex flex-col items-center gap-4'>
          <DotPrimaryButton text={t('experience.to.other.exp.button')} offset={0.066} onClick={toExpFunc}>
            <ArrowRight className="ml-2 h-5 w-5" />
          </DotPrimaryButton>
          <ShinyPrimaryButton text={t('experience.to.other.skills.button')} onClick={ () => navigate('/detailed-skills')}>
            <ArrowRight className="ml-2 h-5 w-5 text-foreground" />
          </ShinyPrimaryButton>
        </div>

      </div>
    </div>
  )
}

export default ToOtherExp
