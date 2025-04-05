import { useTranslation } from 'react-i18next';
import Reveal from '@/app/components/shared/motion/Reveal';

interface FourPointProps {
  titleUp: string;
  titleDown: string;
  description: string;
  contents: {icon: React.ElementType, title: string, description: string}[];
}

export function DetailsParaMidFourPoint({titleUp, titleDown, description, contents}: FourPointProps){
  const {t} = useTranslation()
  return (
    <div className="mx-auto max-w-6xl py-20">
      <div className="text-center mb-20">
        <Reveal duration={0.5}>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            <span>{titleUp}</span>
            <br />
            <span>{titleDown}</span>
          </h2>
        </Reveal>
        <Reveal duration={0.5} delay={0.1}>
          <p className="md:text-lg xl:text-xl px-2 md:px-0 max-w-4xl mx-auto mb-8" dangerouslySetInnerHTML={{__html: t(description)}}>
          </p>
        </Reveal>
      </div>


      <div className="grid md:grid-cols-2 px-2 xl:px-0 gap-6 xl:gap-12">
        {contents.map((feature) => (
          <Reveal duration={0.5} delay={0.1} key={feature.title} className="flex flex-col space-y-4">
            <div className="flex items-center gap-1 md:gap-2 lg:gap-4">
              <feature.icon className="h-8 w-8 text-green-900" />
              <h3 className="text-xl lg:text-2xl font-semibold text-green-900">{t(feature.title)}</h3>
            </div>
            <p className="lg:text-lg pl-12">{t(feature.description)}</p>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default DetailsParaMidFourPoint
