const CardImage = ({ src, alt }) => {
  return (
    <div className="h-60 lg:h-80 overflow-hidden rounded-lg mb-4 border relative">
      <img
        className="h-full w-full object-cover absolute"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default CardImage;
