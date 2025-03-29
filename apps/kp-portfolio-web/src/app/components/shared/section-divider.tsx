import { KPArtDivider } from '@kp-react-lib/kp-react-common';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion"

export function SectionDivider() {
  const [size, setSize] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // 768px corresponds to the 'md' breakpoint in Tailwind
        setSize(45); // New size for md and larger
      }
      else if(window.innerWidth <= 305){
        setSize(10)
      }
      else {
        setSize(20); // Default size for smaller screens
      }
    };

    // Set initial size based on the current screen width
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <motion.div
      initial={{opacity: 0, y: 75}}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{duration: 0.5}}
      viewport={{ once: true }}
    >
      <KPArtDivider code={5} size={size} className={"text-xs lg:text-lg 2xl:text-xl font-bold text-center mb-4 mt-4 select-none text-foreground"}/>
    </motion.div>
  );
}

export default SectionDivider;
