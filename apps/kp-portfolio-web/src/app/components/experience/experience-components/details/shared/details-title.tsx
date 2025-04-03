import { motion } from 'framer-motion';
import styles from './../details.module.css'

export function DetailsTitle({title, position}: {title: string, position: string}){
  return (
    <div className="relative w-full overflow-hidden mt-32">
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className={"mb-6 text-6xl font-bold tracking-tighter sm:text-7xl lg:text-8xl " + styles.cursive}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="max-w-[600px] text-lg text-gray-400 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {position}
        </motion.p>
      </div>
    </div>
  )
}

export default DetailsTitle
