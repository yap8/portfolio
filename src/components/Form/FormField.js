const FormField = ({
  tag: Tag = 'input',
  disabled,
  className = '',
  ...props
}) => {
  return (
    <Tag
      className={`mb-2 text-blue-400 text-2xl py-2 px-6 rounded bg-transparent border border-blue-400 placeholder:text-blue-400 focus:text-white transition resize-none ${className} ${
        disabled ? ' cursor-no-drop opacity-50' : ''
      }`}
      disabled={disabled}
      {...props}
    />
  );
};

export default FormField;
