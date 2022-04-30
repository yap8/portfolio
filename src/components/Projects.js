import { AiOutlineGithub } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';
import Card, { CardDescription, CardImage, CardTitle } from './Card';

const projects = [
  {
    image: 'jetro.jpg',
    title: 'Jetro',
    desc: 'Website built with React and styled components',
    repo: 'https://github.com/yap8/react-jetro',
    demo: 'https://yap8.github.io/react-jetro',
  },
  {
    image: 'flashcards.jpg',
    title: 'FlashCards',
    desc: 'Fullstack app built with React and Express',
    repo: 'https://github.com/yap8/flashcards',
    demo: 'https://yap-flashcards.herokuapp.com/',
  },
  {
    image: 'messenger.png',
    title: 'Messenger',
    desc: 'Fullstack messenger app built with React & PHP',
    repo: 'https://github.com/yap8/messenger',
    demo: 'http://h91115tq.beget.tech/',
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="h-screen container py-20 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-blue-400 mb-10">Projects</h1>
        <ul className="flex justify-center w-full">
          {projects.map((project) => (
            <Card tag="li">
              <CardImage src={project.image} alt={project.title} />
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.desc}</CardDescription>
              <ul className="flex justify-center mt-auto">
                <li className="mr-4">
                  <a
                    className="flex items-center py-2 px-6 border border-blue-400 text-blue-400 rounded text-2xl transition hover:bg-blue-400 hover:text-slate-800"
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineGithub className="text-2xl mr-2" />
                    Repo
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center py-2 px-6 border border-blue-400 text-blue-400 rounded text-2xl transition hover:bg-blue-400 hover:text-slate-800"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGlobe className="text-xl mr-2" />
                    Demo
                  </a>
                </li>
              </ul>
            </Card>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
