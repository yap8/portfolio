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
            <Card tag="li" className="mr-8 last:mr-0">
              <CardTitle>{skill.title}</CardTitle>
              <ul className="flex flex-wrap text-xl list-disc pl-12 pr-4 mb-auto">
                {skill.items.map((item) => (
                  <li className="w-1/2 p-2">{item}</li>
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
