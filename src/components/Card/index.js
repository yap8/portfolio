import CardImage from './CardImage';
import CardTitle from './CardTitle';
import CardDescription from './CardDescription';

const Card = ({ tag: Tag = 'div', children }) => {
  return (
    <Tag className="flex flex-col justify-between flex-1 py-8 px-6 mr-8 bg-slate-900 rounded-lg last:mr-0">
      {children}
    </Tag>
  );
};

export { CardImage, CardTitle, CardDescription };
export default Card;
