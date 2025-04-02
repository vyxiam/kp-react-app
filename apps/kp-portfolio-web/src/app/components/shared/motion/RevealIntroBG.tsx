import { motion, useAnimation, useInView } from 'framer-motion';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
interface Props {
  cleanup:  Dispatch<SetStateAction<boolean>>
  className?: string;
  duration: number;
  delayShow: number;
  delayHide: number;
}
export function RevealIntroBG({cleanup, duration, delayShow, delayHide, className}: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView){
      const runSequence = async() => {
        await mainControls.start('visible', {delay: delayShow})
        await mainControls.start({ opacity: 1, display: 'block', background:'#ffffff'}, {duration:0.8, delay: delayHide})
        document.documentElement.classList.remove('dark');
        await mainControls.start({ opacity: 1, display: 'none', background: 'transparent'})
        cleanup(true)
      }
      runSequence()
    }
  }, [isInView, mainControls]);

  if(!className){
    className = ''
  }

  return (
    <motion.div
      ref = {ref}
      className={className}
      variants={{
        'hidden': {opacity: 0, display:'block', width:0, height: 0},
        'visible': {opacity: 0, display:'block', width: '100vw', height: '100vh', background: '#020618'}
      }}
      initial='hidden'
      animate={mainControls}
      transition={{duration: duration}}
    >
    </motion.div>
  );
}

export default RevealIntroBG;
