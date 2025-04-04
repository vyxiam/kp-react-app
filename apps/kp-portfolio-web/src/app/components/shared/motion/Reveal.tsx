import { motion, useAnimation, useInView, Variant } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';
interface Props {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  hiddenV?: Variant;
  visibleV?: Variant;
}
export function Reveal({children, duration = 0.3, delay = 0.1, className, hiddenV = {opacity: 0, y: 75}, visibleV = {opacity: 1, y: 0}}: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView){
      mainControls.start('visible')
    }
  }, [isInView]);

  if(!delay){
    delay = 0
  }

  if(!className){
    className = ''
  }

  return (
    <motion.div
      ref = {ref}
      className={className}
      variants={{
        'hidden': hiddenV,
        'visible': visibleV
      }}
      initial='hidden'
      animate={mainControls}
      transition={{duration: duration, delay: delay}}
    >{children}
    </motion.div>
  );
}

export default Reveal;
