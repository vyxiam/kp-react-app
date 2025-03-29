import { motion, useAnimation, useInView } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';
interface Props {
  children: ReactNode;
  delay?: number;
}
export function Reveal({children, delay}: Props) {
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

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          'hidden': {opacity: 0, y: 75},
          'visible': {opacity: 1, y: 0}
        }}
        initial='hidden'
        animate={mainControls}
        transition={{duration: 0.3, delay: delay}}
      >{children}
      </motion.div>

    </div>
  );
}

export default Reveal;
