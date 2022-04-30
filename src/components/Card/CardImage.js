const CardImage = ({ src, alt }) => {
  return (
    <div className="h-80 overflow-hidden rounded-lg mb-4">
      <img
        style={{ minHeight: '100%', minWidth: '100%' }}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default CardImage;
