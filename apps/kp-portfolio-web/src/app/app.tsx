import { Routes, Route } from 'react-router';
import Home from '@/app/components/home/home';
import AboutMe from '@/app/components/about-me/about-me';
import Projects from '@/app/components/projects/projects';
import Summary from '@/app/components/summary/summary';
import Freelance from '@/app/components/freelance/freelance';
import ThisPage from '@/app/components/projects/this-page/this-page';
import Skills from '@/app/components/skills/skills';
import Experience from '@/app/components/experience/experience';
import { useEffect } from 'react';
import i18n from '@/i18n';
import KpVerOne from '@/app/components/projects/kp-ver-one/kp-ver-one';
import KpVerTwo from '@/app/components/projects/kp-ver-two/kp-ver-two';

export function App() {
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    } else {
      i18n.changeLanguage('en');
    }
  }, [i18n]);
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/detailed-experience" element={<Experience />}/>
        <Route path="/detailed-skills" element={<Skills />} />
        <Route path="/freelance-projects" element={<Freelance />} />
        <Route path="/project-kp-ver-1" element={<KpVerOne />} />
        <Route path="/project-kp-ver-2" element={<KpVerTwo />} />
        <Route path="/project-va-code" element={<ThisPage />} />
      </Routes>
  );

}

export default App;
