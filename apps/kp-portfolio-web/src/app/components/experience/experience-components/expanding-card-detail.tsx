import RevealCardDetail from '@/app/components/shared/motion/RevealCardDetail';
import { DotPrimaryButton } from '@kp-react-lib/kp-react-common';
import { useTranslation } from 'react-i18next';

export function ExpandingCardDetail({location, title, period, fullsize, reveal}:{location: string, title: string, period: string, fullsize: boolean, reveal: () => void}){
  const {t} = useTranslation()
  return (
    <>
      {fullsize?
        (<RevealCardDetail key='fullsize' trigger={fullsize} delay={0.2} duration={0.8} className={'absolute bottom-0 right-0 m-28 flex flex-col'}>
          <div>
            <h4 className={'float-right pl-[0.5em] clear-both inline-block relative uppercase overflow-hidden mb-[0.3em]'}>{location}</h4>
            <h2 className={'float-right pl-[0.5em] text-4xl clear-both inline-block relative uppercase overflow-hidden mb-[0.3em]'} style={{ color: '#f7ca18'}}>{title}</h2>
            <h5 className={'float-right pl-[0.5em] clear-both inline-block relative uppercase overflow-hidden mb-[0.3em]'}>{period}</h5>
          </div>
          <div className='flex flex-row-reverse mt-4'>
            <DotPrimaryButton text={t('experience.card.reveal')} onClick={reveal} offset={-0.1}/>
          </div>

        </RevealCardDetail>):
        (<RevealCardDetail key='notfulsize' trigger={!fullsize} delay={0} duration={1} className={'absolute bottom-0 left-0 m-2'}>
          <h4 className={'float-left clear-both inline-block relative uppercase overflow-hidden mb-[0.3em]'}>{location}</h4>
          <h2 className={'float-left text-2xl clear-both inline-block relative uppercase overflow-hidden mb-[0.3em]'} style={{ color: '#f7ca18'}}>{title}</h2>
          <h5 className={'float-left clear-both inline-block relative uppercase overflow-hidden mb-[0.3em]'}>{period}</h5>
        </RevealCardDetail>)}
    </>
  )
}

export default ExpandingCardDetail;
