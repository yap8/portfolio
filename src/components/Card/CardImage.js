const CardImage = ({ src, alt }) => {
  return (
    <div className="h-80 overflow-hidden rounded-lg mb-4 border relative">
      <img
        className="h-full w-full object-contain absolute"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default CardImage;
