import CardImage from './CardImage';
import CardTitle from './CardTitle';
import CardDescription from './CardDescription';

const Card = ({ tag: Tag = 'div', className = '', children }) => {
  return (
    <Tag
      className={
        'max-w-xl flex flex-col justify-between flex-1 py-8 px-6 mr-8 bg-white rounded-lg shadow last:mr-0 ' +
        className
      }
    >
      {children}
    </Tag>
  );
};

export { CardImage, CardTitle, CardDescription };
export default Card;
