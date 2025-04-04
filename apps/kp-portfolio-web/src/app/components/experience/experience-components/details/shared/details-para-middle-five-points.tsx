import { Reveal, uuid } from '@kp-react-lib/kp-react-common';
import { useTranslation } from 'react-i18next';

interface PointProps {
  frUpTitle: string;
  frDownTitle: string;
  srTitle: string;
  description: string;
  frContents: {icon: React.ElementType, title: string, description: string}[];
  srContents: {icon: React.ElementType, title: string, description: string}[];
}

export function DetailsParaMidFivePoints({frUpTitle, frDownTitle, srTitle, description, frContents, srContents}: PointProps){
  const {t} = useTranslation()
  return (
    <div className="text-center m-16">
      <Reveal tag={'h2'} className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
        <span>{t(frUpTitle)}</span>
        <br />
        <span>{t(frDownTitle)}</span>
      </Reveal>
      <Reveal className="text-xl max-w-3xl mx-auto mb-8"><p dangerouslySetInnerHTML={{__html: t(description)}}></p></Reveal>

      <div className="grid md:grid-cols-2 gap-8 my-12 mx-auto max-w-4xl">
        {frContents.map((content, index) => (
          <div key={uuid()} className="bg-white/5 p-6 rounded-lg">
            <Reveal className="flex flex-col items-center mb-4">
              <content.icon className="h-8 w-8 text-blue-900 mb-3" />
              <h3 className="text-2xl font-semibold text-blue-900">{t(content.title)}</h3>
            </Reveal>
            <Reveal tag={'p'} className="text-lg">{t(content.description)}</Reveal>
          </div>
        ))}
      </div>

      <Reveal className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight" dangerouslySetInnerHTML={{__html: t(srTitle)}}/>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-8 mx-auto max-w-6xl">
        {srContents.map((content,index) => (
          <Reveal hiddenV = {{filter: 'blur(20px)', opacity: 0 }} visibleV = {{filter: 'blur(0px)', opacity: 1 }} key={uuid()} className="bg-slate-400/10 p-8 rounded-lg flex flex-col items-center">
            <Reveal delay={0.2}><content.icon className="h-12 w-12 text-blue-900 mb-6" /></Reveal>
            <Reveal tag={'h3'} delay={0.2} className="text-2xl font-semibold mb-4 text-blue-900">{t(content.title)}</Reveal>
            <Reveal tag={'p'} delay={0.2}>{t(content.description)}</Reveal>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default DetailsParaMidFivePoints
