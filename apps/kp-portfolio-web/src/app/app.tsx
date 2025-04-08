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

export function App() {
  useEffect(() => {
    console.log('Setup lang')
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
        <Route path="/freelance-this-page" element={<ThisPage />} />
      </Routes>
  );

}

export default App;
