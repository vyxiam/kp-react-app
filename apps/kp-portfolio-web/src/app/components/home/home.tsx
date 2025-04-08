import HomeWelcome from '@/app/components/home/home-components/welcome-part';
import MouseMoveEffect from '@/app/components/shared/home-mouse-effect';
import { useEffect, useState } from 'react';

export function Home() {
  const [toggleBG, setToggleBG] = useState(false)
  useEffect(() => {
    // Apply the 'dark' class to the body element when this page is loaded
    document.documentElement.classList.add('dark');
    // Clean up: remove the 'dark' class when leaving the page
    return () => {
      if (toggleBG){
        document.documentElement.classList.remove('dark');
      }
    };
  }, [toggleBG]);

  return (
    <div className="bg-background text-foreground antialiased">
      <MouseMoveEffect />
      <HomeWelcome toggleRequest={setToggleBG}/>
    </div>
  )
}

export default Home;
