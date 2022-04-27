const Skills = () => {
  return (
    <section>
      <div className="container flex flex-col justify-center items-center">
        <h1 className="text-4xl text-blue-400 mb-10">Skills</h1>
        <ul className="flex justify-center w-full">
          <li className="flex-1 py-8 px-6 mr-8 bg-slate-900 rounded-lg">
            <h2 className="text-3xl text-center text-blue-400 mb-2">
              Frontend
            </h2>
            <ul className="flex flex-wrap text-xl list-disc pl-12 pr-4">
              <li className="w-1/2 p-2">HTML, CSS, JS</li>
              <li className="w-1/2 p-2">Pug, SASS (SCSS)</li>
              <li className="w-1/2 p-2">TypeScript</li>
              <li className="w-1/2 p-2">React, Redux + thunk</li>
              <li className="w-1/2 p-2">Tailwind CSS</li>
              <li className="w-1/2 p-2">Material UI</li>
              <li className="w-1/2 p-2">Bootstrap</li>
              <li className="w-1/2 p-2">Webpack, Gulp</li>
            </ul>
          </li>
          <li className="flex-1 py-8 px-6 bg-slate-900 rounded-lg">
            <h2 className="text-3xl text-center text-blue-400 mb-2">Backend</h2>
            <ul className="flex flex-wrap text-xl list-disc pl-12 pr-4">
              <li className="w-1/2 p-2">Node.js</li>
              <li className="w-1/2 p-2">Express</li>
              <li className="w-1/2 p-2">PHP</li>
              <li className="w-1/2 p-2">MongoDB</li>
              <li className="w-1/2 p-2">PostgreSQL, MySQL</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
