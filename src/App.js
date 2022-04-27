import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <ToastContainer position="top-center" />
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
