import RevealCardDetail from '@/app/components/shared/motion/RevealCardDetail';
import { DotPrimaryButton, GlitchTitle } from '@kp-react-lib/kp-react-common';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface CardProps{
  logo: string;
  type: string;
  title: string;
  period: string;
  completed: boolean;
  fullsize: boolean;
  reveal: () => void
}

export function ElasticCardDetail({logo, type, title, period, completed, fullsize, reveal}: CardProps){
  const {t} = useTranslation()
  const [showStatus, setShowStatus] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStatus(true); // Set the state to show the title after 3 seconds
    }, 800); // 3000 ms = 3 seconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty depend
  return (
    <>
      {fullsize?
        (<RevealCardDetail
          key='fullsize' hiddenV={{opacity: 0, filter: 'blur(20px)'}} visibleV={{opacity: 1, filter: 'blur(0)'}}
          trigger={fullsize} delay={0.2} duration={0.8}
          className={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col'}>
          <div className='text-slate-50 flex flex-col justify-center items-center'>
            <img src={logo} alt={t(title)} className="!opacity-100 object-fit max-w-[200px] rounded-full mb-8"/>
            <h4 className={'clear-both inline-block relative uppercase overflow-hidden mb-[0.3em]'}>{type}</h4>
            <h2 className={'text-blue-200 text-4xl clear-both inline-block relative uppercase overflow-hidden mb-[0.3em]'}>{title}</h2>
            <h5 className={'clear-both inline-block relative overflow-hidden mb-[0.3em]'} dangerouslySetInnerHTML={{__html: period}}></h5>
            {/*<h3 className={'clear-both inline-block relative overflow-hidden mb-[0.3em] ' + `${completed?'text-green-500':'text-yellow-400'}`}>{completed?t('freelance.projects.completed'):t('freelance.projects.development')}</h3>*/}

            <div className='h-8 mb-[1em]'>
              {showStatus &&
                (<GlitchTitle
                  tag={'h3'}
                  randomColor={`${completed ? 'text-green-500' : 'text-yellow-400'}`}
                  className={`text-2xl ${completed?'text-green-500':'text-yellow-400'}`}
                  title={completed?t('freelance.projects.completed'):t('freelance.projects.development')}/>)}
            </div>

          </div>
          <div className='flex justify-center z-50'>
            <DotPrimaryButton text={t('freelance.projects.check.out')} onClick={reveal} offset={-0.07}/>
          </div>

        </RevealCardDetail>):
        (<RevealCardDetail
          key='notfulsize' hiddenV={{opacity: 0, filter: 'blur(20px)'}} visibleV={{opacity: 1, filter: 'blur(0)'}}
          trigger={!fullsize} delay={0} duration={1}
          className={'absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col'}>
          <div className='text-slate-50 hidden xl:block'>
            <h4 className={'float-left clear-both inline-block text-sm 2xl:text-[16px] relative uppercase overflow-hidden mb-[0.3em]'}>{type}</h4>
            <h2 className={'text-blue-200 float-left text-lg 2xl:text-xl clear-both inline-block relative uppercase overflow-hidden mb-[0.3em]'}>{title}</h2>
            <h5 className={'float-left clear-both inline-block text-sm 2xl:text-[16px] relative uppercase overflow-hidden mb-[0.3em]'}>{period}</h5>
          </div>
        </RevealCardDetail>)}
    </>
  )
}

export default ElasticCardDetail;
