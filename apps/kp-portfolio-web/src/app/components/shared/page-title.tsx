import { KPArtDivider } from '@kp-react-lib/kp-react-common';
import { useTranslation } from 'react-i18next'
import { RefObject, useEffect, useState } from 'react';
import { motion } from "framer-motion"

interface Props {
  ref?: RefObject<HTMLDivElement | null>;
  title: string
}

export function PageTitle({ref, title}: Props ) {
  const {t} = useTranslation()
  const [size, setSize] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // 768px corresponds to the 'md' breakpoint in Tailwind
        setSize(15); // New size for md and larger
      }
      else if(window.innerWidth <= 305){
        setSize(1)
      }
      else {
        setSize(4); // Default size for smaller screens
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
      ref={ref?ref:null}
      initial={{opacity: 0, y: 75}}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{duration: 0.5}}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 mt-10">{t(title)}</h1>
      <KPArtDivider code={1} size={size}/>
    </motion.div>
  );
}

export default PageTitle;


