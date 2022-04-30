import Card, { CardTitle } from './Card';

const skills = [
  {
    title: 'Frontend',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'Pug',
      'SASS (SCSS)',
      'TypeScript',
      'React',
      'Redux',
      'Tailwind CSS',
      'Material UI',
      'Bootstrap',
      'Webpack',
      'Gulp',
    ],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'PHP', 'MongoDB', 'PostgreSQL', 'MySQL'],
  },
];

const Skills = () => {
  return (
    <section className="bg-slate-100" id="skills">
      <div className="min-h-screen container py-20 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-blue-400 mb-10">Skills</h1>
        <ul className="flex justify-center w-full flex-wrap">
          {skills.map((skill) => (
            <Card
              className="w-full lg:flex-1 mb-8 lg:mr-8 lg:mb-0 last:m-0"
              tag="li"
              key={skill.title}
            >
              <CardTitle>{skill.title}</CardTitle>
              <ul className="flex flex-wrap text-xl list-disc pl-4 lg:pl-12 lg:pr-4 mb-auto">
                {skill.items.map((item) => (
                  <li className="w-1/2 p-1 lg:p-2" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
