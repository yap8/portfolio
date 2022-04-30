import FormField from './FormField';

const Form = ({ classname = '', children, ...props }) => {
  return (
    <form className={`max-w-2xl w-full flex flex-col ${classname}`} {...props}>
      {children}
    </form>
  );
};

export { FormField };
export default Form;
