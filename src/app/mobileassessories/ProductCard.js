const ProductCard = ({ image, title, price, oldPrice }) => {
    return (
      <div className=" p-4 flex flex-col items-center">
        <img src={image} alt={title} className="w-32 h-32 object-cover mb-4" />
        <h3 className="text-lg font-bold text-center mb-2">{title}</h3>
        {oldPrice && <p className="line-through text-gray-500">{oldPrice} ج</p>}
        <p className="text-xl font-semibold text-red-500">{price} ج</p>
      </div>
    );
  };
  
  export default ProductCard;
  