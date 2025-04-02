import { motion, useAnimation, useInView } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';
interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}
export function RevealParagraph({children, delay, className}: Props) {
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
    <motion.p
      ref = {ref}
      className={className}
      variants={{
        'hidden': {opacity: 0, y: 75},
        'visible': {opacity: 1, y: 0}
      }}
      initial='hidden'
      animate={mainControls}
      transition={{duration: 0.4, delay: delay, ease: 'easeOut'}}
    >{children}
    </motion.p>
  );
}

export default RevealParagraph;
