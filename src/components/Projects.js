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
    <section>
      <div className="container flex flex-col justify-center items-center">
        <h1 className="text-4xl text-blue-400 mb-10">Projects</h1>
        <ul className="flex justify-center w-full">
          {projects.map((project, index) => (
            <li className="flex flex-col justify-between flex-1 py-8 px-6 mr-8 bg-slate-900 rounded-lg last:mr-0">
              <div className="h-80 overflow-hidden rounded-lg mb-4">
                <img
                  style={{ minHeight: '100%', minWidth: '100%' }}
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <h2 className="text-3xl text-blue-400 mb-2">{project.title}</h2>
              <p className="text-xl mb-5">{project.desc}</p>
              <ul className="flex mt-auto">
                <li className="mr-4">
                  <a
                    className="block py-2 px-6 border border-blue-400 text-blue-400 rounded text-2xl transition hover:bg-blue-400 hover:text-slate-800"
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repo
                  </a>
                </li>
                <li>
                  <a
                    className="block py-2 px-6 border border-blue-400 text-blue-400 rounded text-2xl transition hover:bg-blue-400 hover:text-slate-800"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
