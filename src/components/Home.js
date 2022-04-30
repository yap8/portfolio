import { AiOutlineGithub } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';

import Button from './Button';

const links = [
  {
    text: 'Resume',
    href: 'Resume.pdf',
    Icon: <ImProfile className="text-xl mr-2" />,
  },
  {
    text: 'GitHub',
    href: 'https://github.com/yap8',
    Icon: <AiOutlineGithub className="text-2xl mr-2" />,
  },
];

const Home = () => {
  return (
    <section className="bg-slate-800" id="home">
      <div className="h-screen container flex flex-col justify-center items-center">
        <h1 className="text-5xl mb-4 text-white">Arseny Nebozhenko</h1>
        <p className="text-xl text-gray-300 mb-6">Frontend Developer</p>
        <ul className="flex">
          {links.map(({ text, href, Icon }) => (
            <li className="mr-4 last:mr-0">
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
