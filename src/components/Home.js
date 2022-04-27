const Home = () => {
  return (
    <section id="home">
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl mb-4">Arseny Nebozhenko</h1>
        <p className="text-xl text-gray-300 mb-6">Frontend Developer</p>
        <ul className="flex">
          <li className="mr-4">
            <a
              className="block py-2 px-6 border border-blue-400 text-blue-400 rounded text-2xl transition hover:bg-blue-400 hover:text-slate-800"
              href="Resume.pdf"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              className="block py-2 px-6 border border-blue-400 text-blue-400 rounded text-2xl transition hover:bg-blue-400 hover:text-slate-800"
              href="https://github.com/yap8"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
