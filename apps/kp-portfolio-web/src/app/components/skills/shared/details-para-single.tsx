import { KPSeparator, Reveal, uuid } from '@kp-react-lib/kp-react-common';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import styles from './../skills.module.css'

interface Props {
  title: string;
  reverse?: boolean;
  description?: string;
  className?: string;
  titleUpClassName?: string;
  titleDownClassName?: string;
  contents: {titleUp: string, titleDown?: string, content: string}[]
}
export function DetailsParaSingle({title, reverse = false, description, contents, titleUpClassName='font-bold text-2xl', titleDownClassName='font-semibold text-xl', className='max-w-[85%] xl:max-w-[80%] 2xl:max-w-7xl mx-auto my-10'}:Props){
  const {t} = useTranslation()
  return (
    <div className={className}>
      <div className='mx-auto'>
        {reverse?
          <div className='flex items-end justify-end'>
            <Reveal tag={'span'} hiddenV = {{filter: 'blur(20px)', opacity: 0 }} visibleV = {{filter: 'blur(0px)', opacity: 1 }} delay={0.3} className={'text-7xl text-slate-800'}>.</Reveal>
            <Reveal tag={'h2'} hiddenV = {{filter: 'blur(20px)', opacity: 0 }} visibleV = {{filter: 'blur(0px)', opacity: 1 }} className={cn('text-5xl', styles.cursive)}>{t(title)}</Reveal>
          </div>:
          <div className='flex items-end'>
            <Reveal tag={'h2'} hiddenV = {{filter: 'blur(20px)', opacity: 0 }} visibleV = {{filter: 'blur(0px)', opacity: 1 }} className={cn('text-5xl', styles.cursive)}>{t(title)}</Reveal>
            <Reveal tag={'span'} hiddenV = {{filter: 'blur(20px)', opacity: 0 }} visibleV = {{filter: 'blur(0px)', opacity: 1 }} delay={0.3} className={'text-7xl text-slate-800'}>.</Reveal>
          </div>}
        <Reveal hiddenV = {{filter: 'blur(20px)', opacity: 0 }} visibleV = {{filter: 'blur(0px)', opacity: 1 }} className={''}><KPSeparator gradient={true}/></Reveal>
      </div>

      <div className="space-y-6 mx-auto">
        {description?
          <Reveal delay={0.3} hiddenV = {{opacity: 0, y: -35, filter: 'blur(20px)'}} visibleV={{opacity: 1, y: 0, filter: 'blur(0)'}}>
            <p className="text-gray-600 xl:text-lg" dangerouslySetInnerHTML={{__html: t(description)}}/>
          </Reveal>:''}
        {contents.map((item, index) => (
          <div className='space-y-4' key={uuid()}>
            <Reveal tag={'h3'} className="text-gray-900 leading-0">
              <span className={titleUpClassName} dangerouslySetInnerHTML={{__html: t(item.titleUp)}}/>
              {item.titleDown?
                <>
                  <br />
                  <span className={titleDownClassName} dangerouslySetInnerHTML={{__html: t(item.titleDown)}}/>
                </>:''}
            </Reveal>
            <Reveal><span className="text-gray-600 xl:text-lg leading-relaxed" dangerouslySetInnerHTML={{__html: t(item.content)}}/></Reveal>
            {(contents.length - 1) !== index?<Reveal><KPSeparator gradient={false}/></Reveal>:''}
          </div>
        ))}

      </div>
    </div>
  )
}

export default DetailsParaSingle
