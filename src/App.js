import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <ToastContainer position="top-center" />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
