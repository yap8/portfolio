import { AiOutlineGithub } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';
import Button from './Button';
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
    <section className="bg-slate-100" id="projects">
      <div className="min-h-screen container py-20 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-blue-400 mb-10">Projects</h1>
        <ul className="flex justify-center w-full flex-wrap">
          {projects.map((project) => (
            <Card
              className="mb-8 mr-8 last:mr-0 last:mb-0 lg:max-w-xl xl:mb-0"
              tag="li"
            >
              <CardImage src={project.image} alt={project.title} />
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.desc}</CardDescription>
              <ul className="flex justify-center mt-auto">
                <li className="mr-4">
                  <Button
                    className="hover:text-white"
                    tag="a"
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineGithub className="text-2xl mr-2" />
                    Repo
                  </Button>
                </li>
                <li>
                  <Button
                    className="hover:text-white"
                    tag="a"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGlobe className="text-xl mr-2" />
                    Demo
                  </Button>
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
