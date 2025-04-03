import { IconComponent, uuid } from '@kp-react-lib/kp-react-common';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Technology {
  icon: IconComponent;
  description: string;
}

interface TechGroupProps {
  techs: Technology[];
  length: number
}

export function TechGroup({techs, length}: TechGroupProps){
  return (
    <div className={'grid grid-cols-1 md:grid-cols-6 gap-8 mt-24'}>
      {techs.map((tech, index) => (
        <div key={uuid()} className="text-center space-y-4">
          {/*<div className="w-20 h-20 bg-slate-400/10 rounded-full flex items-center justify-center mx-auto">*/}
          {/*  <tech.icon className='h-10 w-10'/>*/}
          {/*</div>*/}
          {/*<h4 className="text-xl font-bold text-gray-900">*/}
          {/*  {tech.description}*/}
          {/*</h4>*/}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-20 h-20 bg-slate-400/10 rounded-full flex items-center justify-center mx-auto">
                  <tech.icon className='h-10 w-10'/>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{tech.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ))}
    </div>
  );
}

export default TechGroup
