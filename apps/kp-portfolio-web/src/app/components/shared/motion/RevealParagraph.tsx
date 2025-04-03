import { DynamicTag } from '@kp-react-lib/kp-react-common';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';

interface Props {
  children: ReactNode;
  tag?: string;
  className?: string;
  divClassName?: string;
  delay?: number;
}
export function RevealParagraph({children, delay, className, divClassName = '', tag = 'p'}: Props) {
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
      className={divClassName}
      variants={{
        'hidden': {opacity: 0, y: 75},
        'visible': {opacity: 1, y: 0}
      }}
      initial='hidden'
      animate={mainControls}
      transition={{duration: 0.4, delay: delay, ease: 'easeOut'}}
    >{ tag.toLowerCase() === 'div'?
      (children)
      :
      (<DynamicTag className={className} tag={tag}>{children}</DynamicTag>)}
    </motion.div>
  );
}

export default RevealParagraph;
