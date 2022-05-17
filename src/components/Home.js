import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';

import Button from './Button';

const links = [
  {
    text: 'Resume',
    href: 'Nebozhenko_Frontend_Resume.pdf',
    Icon: <ImProfile className="text-xl mr-2" />,
  },
  {
    text: 'GitHub',
    href: 'https://github.com/yap8',
    Icon: <AiOutlineGithub className="text-2xl mr-2" />,
  },
  {
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/arseny-nebozhenko-693b16223/',
    Icon: <AiFillLinkedin className="text-2xl mr-2" />,
  },
];

const Home = () => {
  return (
    <section className="bg-slate-800" id="home">
      <div className="min-h-screen container flex flex-col justify-center items-center">
        <h1 className="text-5xl mb-4 text-white text-center">
          Arseny Nebozhenko
        </h1>
        <p className="text-xl text-gray-300 mb-6">Frontend Developer</p>
        <ul className="flex-col flex lg:flex-row">
          {links.map(({ text, href, Icon }) => (
            <li className="w-full mb-2 lg:mb-0 lg:mr-4 lg:last:mr-0" key={text}>
              <Button tag="a" href={href} target="_blank" rel="noreferrer">
                {Icon}
                {text}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
