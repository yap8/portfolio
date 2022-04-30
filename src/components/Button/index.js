const Button = ({ tag: Tag = 'button', children, ...props }) => {
  return (
    <Tag
      className="flex items-center py-2 px-6 border border-blue-400 text-blue-400 rounded text-2xl transition hover:bg-blue-400 hover:text-slate-800"
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Button;
