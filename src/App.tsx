import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './Components/Organisms/AboutMe/AboutMe';
import Contact from './Components/Organisms/Contact/Contact';
import Projects from './Components/Organisms/Projects/Projects';
import Resume from './Components/Organisms/Resume/Resume';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
