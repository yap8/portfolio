import CardImage from './CardImage';
import CardTitle from './CardTitle';
import CardDescription from './CardDescription';

const Card = ({ tag: Tag = 'div', className = '', children }) => {
  return (
    <Tag
      className={
        'flex flex-col justify-between py-8 px-6 bg-white rounded-lg shadow ' +
        className
      }
    >
      {children}
    </Tag>
  );
};

export { CardImage, CardTitle, CardDescription };
export default Card;
