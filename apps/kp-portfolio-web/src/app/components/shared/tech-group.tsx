import { IconComponent, uuid } from '@kp-react-lib/kp-react-common';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Technology {
  icon: IconComponent;
  description: string;
}

interface TechGroupProps {
  techs: Technology[];
  className?: string
}

export function TechGroup({techs, className = 'max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 gap-y-12 mt-24 justify-items-center md:justify-items-stretch'}: TechGroupProps){
  return (
    <div className={className}>
      {techs.map((tech, index) => (
        <div key={uuid()} className="text-center space-y-4">
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
