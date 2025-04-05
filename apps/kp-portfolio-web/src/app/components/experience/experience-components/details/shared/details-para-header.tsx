import { motion } from "framer-motion"
import { ReactNode } from 'react';

export function DetailsParaHeader({title, description, children}: {title: string, description: string, children: ReactNode}){
  return (
    <>
      <div className='relative'>
        <motion.div
          style={{
            position: 'absolute',
            left: '1.528em',
            top: '50%',
            borderLeft: '10px solid #FFCA00',
            transformOrigin: '50% 50%',
            height: '80%',
            zIndex: 1
          }}
          initial={{ translateY: '-50%', scaleY: 0}} // Initial state: height = 0 (invisible)
          whileInView={{ translateY: '-50%', scaleY: -1 }} // Final state: scaleY = 1 (full height)
          transition={{ duration: 0.6 }} // Animation duration
          viewport={{ once: true }}
        ></motion.div>
        <motion.div
          className='p-5 pl-12 bg-slate-200 h-full'
          style={{transformOrigin: 'left center'}}
          initial={{ width: 0 }} // Start off-screen to the left
          whileInView={{ width: '100%' }} // Move to the original position (slide in)
          transition={{
            duration: 0.75, // Duration of the animation
            ease: [0.03, 0.98, 0.5, 1], // Cubic Bezier easing function
          }}
          viewport={{ once: true }}
        >
          <div className='overflow-hidden pl-2'>
            <motion.div
              initial={{ x: '-10vw', opacity: 0 }} // Initial state: offscreen left and hidden
              whileInView={{ x: 0, opacity: 1 }} // Final state: move to original position and become visible
              transition={{
                duration: 0.25, // Animation duration
                ease: 'easeOut', // Easing function (similar to 'ease-out')
                delay: 0.1
              }}
            >
              <h2 className='text-xl xl:text-2xl font-bold uppercase'>{title}</h2>
            </motion.div>
            <motion.div
              initial={{ x: '-10vw', opacity: 0 }} // Initial state: offscreen left and hidden
              whileInView={{ x: 0, opacity: 1 }} // Final state: move to original position and become visible
              transition={{
                duration: 0.25, // Animation duration
                ease: 'easeOut', // Easing function (similar to 'ease-out')
                delay: 0.2
              }}
            >
              <p>{description}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className='pl-16 py-5'>{children}</div>
    </>
  );
}

export default DetailsParaHeader
