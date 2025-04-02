import { motion, useAnimation, useInView } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';
interface Props {
  children: ReactNode;
  className?: string;
  duration: number;
  delayShow: number;
  delayHide: number;
}
export function RevealIntro({children, duration, delayShow, delayHide, className}: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView){
      const runSequence = async() => {
        await mainControls.start('visible', {delay: delayShow})
        await mainControls.start('hidden', { delay: delayHide})
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
        'hidden': {skewX: -45, translateX: -100, scaleX: 0},
        'visible': {skewX: -45, translateX: -100, scaleX: 1}
      }}
      initial='hidden'
      animate={mainControls}
      transition={{duration: duration}}
    >{children}
    </motion.div>
  );
}

export default RevealIntro;
