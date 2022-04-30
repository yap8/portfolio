import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai';
import { MdWorkOutline } from 'react-icons/md';
import { Link } from 'react-scroll/modules';
import { BiBook } from 'react-icons/bi';

const links = [
  { to: 'home', Icon: <AiOutlineHome /> },
  { to: 'skills', Icon: <BiBook /> },
  { to: 'projects', Icon: <MdWorkOutline /> },
  { to: 'contact', Icon: <AiOutlineMessage /> },
];

const Header = () => {
  return (
    <header className="fixed inset-x-0 m-auto w-fit bottom-8">
      <nav className="py-4 px-8 bg-slate-600 bg-opacity-80 backdrop-blur-sm rounded-full shadow">
        <ul className="flex justify-center text-2xl text-white">
          {links.map(({ to, Icon }) => (
            <li className="mr-4 last:mr-0 hover:text-blue-400" key={to}>
              <Link
                className="transition cursor-pointer"
                activeClass="text-blue-400"
                to={to}
                spy={true}
                smooth={true}
                duration={500}
              >
                {Icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
