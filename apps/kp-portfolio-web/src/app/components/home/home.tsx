import HomeWelcome from '@/app/components/home/home-components/welcome-part';
import MouseMoveEffect from '@/app/components/shared/home-mouse-effect';
import { useEffect } from 'react';

export function Home() {
  useEffect(() => {
    // Apply the 'dark' class to the body element when this page is loaded
    document.documentElement.classList.add('dark');
    // Clean up: remove the 'dark' class when leaving the page
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);

  return (
    <div className="bg-background text-foreground antialiased">
      <MouseMoveEffect />
      <HomeWelcome/>
    </div>
  )
}

export default Home;
