import { useCart } from "./CartContext";

export default function ProductCard({ product }) {
  const { dispatch } = useCart();

  return (
    <div className="card">
      <h4>{product.title}</h4>
      <p>₹ {product.price}</p>
      <p>{product.category}</p>
      <p>{product.stock > 0 ? "In stock" : "Out of stock"}</p>

      <button
        disabled={product.stock === 0}
        onClick={() => dispatch({ type: "ADD", item: product })}
      >
        Add to Cart
      </button>
    </div>
  );
}
