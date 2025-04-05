import Reveal from '@/app/components/shared/motion/Reveal';

export function DetailsParaMiddle({delay = 0.1,title, mainUp, mainDown, body, titleColor = 'text-green-800'}: {delay?: number, title: string, mainUp: string, mainDown: string, body: string, titleColor?: string}){
  return (
    <Reveal duration={0.5} delay={delay} className="max-w-4xl mx-auto text-center my-16">
      <span className={`${titleColor} font-medium tracking-wider`}>
        {title}
      </span>
      <h2 className="text-lg md:text-2xl xl:text-3xl font-bold text-gray-900 mt-2 mb-6">
        {mainUp}
        <br />
        {mainDown}
      </h2>
      <p className="leading-relaxed px-2 lg:px-0 lg:text-lg">{body}</p>
    </Reveal>
  );
}

export default DetailsParaMiddle
