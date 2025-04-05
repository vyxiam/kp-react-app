import { Reveal, uuid } from '@kp-react-lib/kp-react-common';
import { useTranslation } from 'react-i18next';

interface Props {
  title: string;
  description: string;
  pointImage: string;
  contents: {icon: React.ElementType, content: string}[]
}
export function DetailsParaPoints({title, description, contents, pointImage}: Props){
  const {t} = useTranslation()
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center m-14 max-w-7xl mx-auto px-4">
      <Reveal hiddenV = {{filter: 'blur(20px)', opacity: 0 }} visibleV = {{filter: 'blur(0px)', opacity: 1 }} className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
        <img
          src={pointImage}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
      </Reveal>
      <div className="space-y-8">
        <div className="space-y-4">
          <Reveal tag={'h3'} className="text-xl md:text-2xl font-bold">{t(title)}</Reveal>
          <Reveal className="leading-relaxed">
            <p className='lg:text-lg' dangerouslySetInnerHTML={{__html: t(description) }}/>
          </Reveal>
        </div>
        <ul className="space-y-4">
          {contents.map((item, index) => (
            <li key={uuid()}>
              <Reveal delay={0.1 + 0.1*index} className="flex items-center gap-3">
                <item.icon className="h-5 w-5 text-green-800 flex-shrink-0" />
                <span>{t(item.content)}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DetailsParaPoints
