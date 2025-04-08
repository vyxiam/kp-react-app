import { motion, Variant } from 'framer-motion';
import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
  className?: string;
  duration: number;
  delay?: number;
  trigger: any;
  hiddenV?: Variant;
  visibleV?: Variant;
}
export function RevealCardDetail({children, duration, delay, className, trigger, hiddenV = {opacity: 0, x: -125}, visibleV = {opacity: 1, x: 0}}: Props) {
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
        'hidden': hiddenV,
        'visible': visibleV
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
