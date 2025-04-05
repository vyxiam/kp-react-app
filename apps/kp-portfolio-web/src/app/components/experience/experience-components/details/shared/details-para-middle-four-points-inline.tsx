import { useTranslation } from 'react-i18next';
import Reveal from '@/app/components/shared/motion/Reveal';

interface PointProps {
  title: string;
  contents: {icon: React.ElementType, title: string, description: string}[];
}

export function DetailsParaMidFourPointsInline({title, contents}: PointProps){
  const {t} = useTranslation()
  return (
    <div className='flex flex-col items-center justify-center'>
      <Reveal duration={0.5} delay={0.1} className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight" dangerouslySetInnerHTML={{__html: t(title)}}>
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-4 px-3 md:px-0 gap-2 max-w-7xl justify-items-center">
        {contents.map((item) => (
          <div key={item.title} className="bg-white/5 p-8 rounded-lg">
            <Reveal duration={0.5} delay={0.1}><item.icon className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-green-900 mb-6" /></Reveal>
            <Reveal duration={0.5} delay={0.1}><h3 className="text-xl lg:text-2xl  font-semibold mb-4 text-green-900">{t(item.title)}</h3></Reveal>
            <Reveal duration={0.5} delay={0.1}><p>{t(item.description)}</p></Reveal>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DetailsParaMidFourPointsInline
