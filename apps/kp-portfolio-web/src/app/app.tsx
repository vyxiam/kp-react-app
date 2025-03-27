import { Routes, Route } from 'react-router-dom';
import Home from '@/app/components/home/home';

export function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/about-me" element={<AboutMe />} />*/}
        {/*<Route path="/projects" element={<Projects />} />*/}
        {/*<Route path="/summary" element={<Summary />} />*/}
        {/*<Route path="/detailed-experience" element={<Experience />} />*/}
        {/*<Route path="/detailed-skills" element={<Skills />} />*/}
        {/*<Route path="/freelance-projects" element={<Freelance />} />*/}
        {/*<Route path="/freelance-this-page" element={<FreelanceWebPage />} />*/}
      </Routes>
  );

}

export default App;
