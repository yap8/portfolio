const skills = [
  {
    title: 'Frontend',
    items: [
      'HTML, CSS, JS',
      'Pug, SASS (SCSS)',
      'TypeScript',
      'React, Redux + thunk',
      'Tailwind CSS',
      'Material UI',
      'Bootstrap',
      'Webpack, Gulp',
    ],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'PHP', 'MongoDB', 'PostgreSQL, MySQL'],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="h-screen container py-20 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-blue-400 mb-10">Skills</h1>
        <ul className="flex justify-center w-full">
          {skills.map((skill) => (
            <li className="flex-1 py-8 px-6 mr-8 bg-slate-900 rounded-lg">
              <h2 className="text-3xl text-center text-blue-400 mb-2">
                {skill.title}
              </h2>
              <ul className="flex flex-wrap text-xl list-disc pl-12 pr-4">
                {skill.items.map((item) => (
                  <li className="w-1/2 p-2">{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
