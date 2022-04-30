const FormField = ({ tag: Tag = 'input', className = '', ...props }) => {
  return (
    <Tag
      className={`mb-2 text-blue-400 text-2xl py-2 px-6 rounded bg-transparent border border-blue-400 placeholder:text-blue-400 focus:text-white resize-none ${className}`}
      {...props}
    />
  );
};

export default FormField;
