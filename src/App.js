import { useState, useMemo } from "react";
import useProducts from "./useProducts";
import { CartProvider } from "./CartContext";
import ProductGrid from "./ProductGrid";
import Filters from "./Filters";
import Cart from "./Cart";
import "./styles.css";

export default function App() {
  const { products, loading } = useProducts();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const filteredProducts = useMemo(() => {
    let data = [...products];

    if (search) {
      data = data.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      data = data.filter((p) => p.category === category);
    }

    if (sort === "low") data.sort((a, b) => a.price - b.price);
    if (sort === "high") data.sort((a, b) => b.price - a.price);

    return data;
  }, [products, search, category, sort]);

  if (loading) return <p>Loading...</p>;

  return (
    <CartProvider>
      <div>
        <h1 className="main-heading">Welcome to Mini E-Commerce Store</h1>
        <p className="sub-heading">
          Browse products and manage your cart easily
        </p>
      </div>

      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 3 }}>
          <ProductGrid products={filteredProducts} />
        </div>
        <div style={{ flex: 1 }}>
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}
