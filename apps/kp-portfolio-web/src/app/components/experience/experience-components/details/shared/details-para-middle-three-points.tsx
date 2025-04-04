import { useTranslation } from 'react-i18next';
import Reveal from '@/app/components/shared/motion/Reveal';

interface ThreePointProps {
  title: string;
  contents: {icon: React.ElementType, title: string, description: string}[];
}

export function DetailsParaMidThreePoints({title, contents}: ThreePointProps){
  const {t} = useTranslation()
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight" dangerouslySetInnerHTML={{__html: t(title)}}>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl justify-items-center">
        {contents.map((item) => (
          <div key={item.title} className="bg-white/5 p-8 rounded-lg">
            <Reveal duration={0.5} delay={0.1}><item.icon className="h-12 w-12 text-green-900 mb-6" /></Reveal>
            <Reveal duration={0.5} delay={0.1}><h3 className="text-2xl font-semibold mb-4 text-green-900">{t(item.title)}</h3></Reveal>
            <Reveal duration={0.5} delay={0.1}><p>{t(item.description)}</p></Reveal>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DetailsParaMidThreePoints
