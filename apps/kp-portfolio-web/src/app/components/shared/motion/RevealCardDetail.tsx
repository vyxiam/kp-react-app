import { motion } from 'framer-motion';
import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
  className?: string;
  duration: number;
  delay?: number;
  trigger: any
}
export function RevealCardDetail({children, duration, delay, className, trigger}: Props) {
  if(!delay){
    delay = 0
  }

  if(!className){
    className = ''
  }

  return (
    <motion.div
      className={className}
      key={trigger}
      variants={{
        'hidden': {opacity: 0, x: -125},
        'visible': {opacity: 1, x: 0}
      }}
      initial='hidden'
      animate='visible'
      exit='hidden'
      transition={{duration: duration, delay: delay}}
    >{children}
    </motion.div>
  );
}

export default RevealCardDetail;
