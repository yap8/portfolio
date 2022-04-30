import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai';
import { MdWorkOutline } from 'react-icons/md';
import { Link } from 'react-scroll/modules';
import { BiBook } from 'react-icons/bi';

const Header = () => {
  return (
    <header className="fixed inset-x-0 m-auto w-fit bottom-8">
      <nav className="py-4 px-8 bg-slate-600 bg-opacity-80 backdrop-blur-sm rounded-full shadow">
        <ul className="flex justify-center text-2xl text-white">
          <li className="mr-4">
            <Link
              className="transition"
              activeClass="text-blue-400"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              <AiOutlineHome />
            </Link>
          </li>
          <li className="mr-4">
            <Link
              className="transition"
              activeClass="text-blue-400"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
            >
              <BiBook />
            </Link>
          </li>
          <li className="mr-4">
            <Link
              className="transition"
              activeClass="text-blue-400"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              <MdWorkOutline />
            </Link>
          </li>
          <li>
            <Link
              className="transition"
              activeClass="text-blue-400"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              <AiOutlineMessage />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
