import Image from "next/image";

const ProductCard = (product: { product: { thumbnail: string; title: string; description: string } }) => {
  return (
    <div className="product-card">
      <Image
        src={product.product.thumbnail}
        alt={product.product.title}
        className="product-image"
        width={200}
        height={200}
        unoptimized
      />
      <h3>{product.product.title}</h3>
      <p>{product.product.description}</p>
      <p className="price">$19.99</p>
    </div>
  );
};

export default ProductCard;
