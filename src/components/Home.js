import { AiOutlineGithub } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';

const Home = () => {
  return (
    <section id="home">
      <div className="h-screen flex flex-col justify-center items-center bg-slate-800">
        <h1 className="text-5xl mb-4 text-white">Arseny Nebozhenko</h1>
        <p className="text-xl text-gray-300 mb-6">Frontend Developer</p>
        <ul className="flex">
          <li className="mr-4">
            <a
              className="flex items-center py-2 px-6 border border-blue-400 text-blue-400 rounded text-2xl transition hover:bg-blue-400 hover:text-slate-800"
              href="Resume.pdf"
            >
              <ImProfile className="text-xl mr-2" />
              Resume
            </a>
          </li>
          <li>
            <a
              className="flex items-center py-2 px-6 border border-blue-400 text-blue-400 rounded text-2xl transition hover:bg-blue-400 hover:text-slate-800"
              href="https://github.com/yap8"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub className="text-2xl mr-2" />
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
