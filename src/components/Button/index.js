const Button = ({
  tag: Tag = 'button',
  className = '',
  disabled,
  children,
  ...props
}) => {
  return (
    <Tag
      className={`flex items-center justify-center py-2 px-6 border border-blue-400 text-blue-400 rounded text-2xl transition hover:bg-blue-400 hover:text-slate-800 ${className} ${
        disabled
          ? ' cursor-no-drop opacity-50 hover:bg-transparent hover:text-blue-400'
          : ''
      }`}
      disabled={disabled}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Button;
