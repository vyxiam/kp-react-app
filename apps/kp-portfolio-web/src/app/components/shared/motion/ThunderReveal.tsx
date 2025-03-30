import { motion, useAnimation, useInView } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';

export function ThunderReveal({children}:{children: ReactNode}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView){
      mainControls.start('visible')
      slideControls.start('visible')
    }
  }, [isInView]);

  return (
    <div ref={ref} className='relative'>
      <motion.div
        variants={{
          'hidden': {opacity: 0, y: 75},
          'visible': {opacity: 1, y: 0}
        }}
        initial='hidden'
        animate={mainControls}
        transition={{duration: 0.3}}
      >{children}
      </motion.div>
      <motion.div
        variants={{
          'hidden': {left: '35%', opacity: 0},
          'visible': {left: '100%', opacity: 1}
        }}
        initial='hidden'
        animate={slideControls}
        transition={{duration: 0.3, delay: 0.3, ease: 'easeIn'}}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: '5px solid #f7ca18',
          borderBottom: '5px solid #f7ca18',
          borderBottomRightRadius: '5px',
          background: 'transparent',
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
}

export default ThunderReveal;
