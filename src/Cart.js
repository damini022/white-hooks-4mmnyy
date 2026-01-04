import { useCart } from "./CartContext";

export default function Cart() {
  const { cart, dispatch } = useCart();

  // total price calculate
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // empty cart state
  if (cart.length === 0) {
    return (
      <div className="cart">
        <h3>Cart</h3>
        <p>Cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h3>Cart</h3>

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <div>{item.title}</div>

          {/* Quantity input */}
          <input
            type="number"
            min="1"
            value={item.qty}
            onChange={(e) =>
              dispatch({
                type: "UPDATE",
                id: item.id,
                qty: Number(e.target.value),
              })
            }
          />

          <button onClick={() => dispatch({ type: "REMOVE", id: item.id })}>
            Remove
          </button>
        </div>
      ))}

      <h4>Total: ₹ {total.toFixed(2)}</h4>
    </div>
  );
}
