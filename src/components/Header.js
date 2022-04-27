import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai';
import { MdWorkOutline } from 'react-icons/md';
import { BiBook } from 'react-icons/bi';

const Header = () => {
  return (
    <header className="fixed bottom-8 w-full">
      <nav className="m-auto w-fit py-4 px-8 bg-slate-600 bg-opacity-60 backdrop-blur-sm rounded-full">
        <ul className="flex justify-center">
          <li className="mr-4">
            <a href="#skills">
              <AiOutlineHome />
            </a>
          </li>
          <li className="mr-4">
            <a href="#projects">
              <BiBook />
            </a>
          </li>
          <li className="mr-4">
            <a href="#skills">
              <MdWorkOutline />
            </a>
          </li>
          <li>
            <a href="#contact">
              <AiOutlineMessage />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
