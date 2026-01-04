import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const withStock = data.map((p) => ({
          ...p,
          stock: Math.floor(Math.random() * 5) + 1,
        }));
        setProducts(withStock);
        setLoading(false);
      });
  }, []);

  return { products, loading };
}
