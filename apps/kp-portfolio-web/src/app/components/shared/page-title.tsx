import { KPArtDivider } from '@kp-react-lib/kp-react-common';
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react';

export function PageTitle({title}: {title: string} ) {
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
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 mt-10">{t(title)}</h1>
      <KPArtDivider code={1} size={size}/>
    </>
  );
}

export default PageTitle;


