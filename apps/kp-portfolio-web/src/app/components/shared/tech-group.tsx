import { IconComponent, useResize, uuid } from '@kp-react-lib/kp-react-common';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Reveal from '@/app/components/shared/motion/Reveal';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import SectionDivider from '@/app/components/shared/section-divider';

interface Technology {
  icon: IconComponent;
  description: string;
}

interface TechGroupProps {
  techs: Technology[];
  baseDelay?: number;
  className?: string;
  divider?: boolean;
}

let tempDelays: number[] = []
function generateDelays(length: number, widthSize: number, baseDelay: number, baseDelayRatio: number, setDelays:Dispatch<SetStateAction<number[]>>){
  tempDelays.fill(baseDelay)
  if (widthSize >= 2 && widthSize <4){
    const breakPoint: number = Math.floor(length / 2)
    for (let i = breakPoint; i < length ; i++){
      tempDelays[i] = baseDelay + baseDelayRatio
    }
  }
  else if (widthSize < 2){
    const breakPoint: number = Math.floor(length / 3)
    let fillUpTimes = 0
    for (let i = breakPoint; i < length ; i++){
      if (fillUpTimes < 2){
        tempDelays[i] = baseDelay + baseDelayRatio
        fillUpTimes += 1
      }
      else{
        tempDelays[i] = baseDelay + baseDelayRatio*2
      }
    }
  }
  setDelays(tempDelays)
}

export function TechGroup({techs, baseDelay = 0.5, divider = true, className = 'py-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 gap-y-12 justify-items-center md:justify-items-stretch'}: TechGroupProps){
  const widthSize = useResize()
  const baseDelayRatio = 0.1
  const delayInits: number[] = Array(techs.length).fill(baseDelay)
  tempDelays = Array(techs.length).fill(baseDelay)
  const [delays, setDelays] = useState(delayInits)
  useEffect(() => {
    generateDelays(techs.length, widthSize, baseDelay, baseDelayRatio, setDelays)
  }, [widthSize]);

  return (
    <div className='mt-24 max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl mx-auto'>
      {divider?<SectionDivider className={'w-full'}/>:''}
      <Reveal duration={0.5} delay={0.1} className={className}>
        {techs.map((tech, index) => (
          <div key={uuid()} className="text-center space-y-4">
            <TooltipProvider>
              <Tooltip>
                <Reveal key={tech.description} delay={delays[index]}>
                <TooltipTrigger asChild>
                  <div key={tech.description} className="w-20 h-20 bg-slate-400/10 rounded-full flex items-center justify-center mx-auto">
                    <tech.icon className='h-10 w-10'/>
                  </div>
                </TooltipTrigger>
                </Reveal>
                <TooltipContent>
                  <p>{tech.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </Reveal>
      {divider?<SectionDivider className={'w-full'}/>:''}
    </div>
  );
}

export default TechGroup
