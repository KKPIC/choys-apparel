import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useItem() {
  const [test, setTest] = useState({});
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();
  console.log(productId);

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchProducts() {
        try {
          setLoading(true);
          const res = await fetch(
            `http://localhost:3000/api/v1/products/${productId}`
          );

          if (!res.ok)
            throw new Error("Something went wrong when fetching products");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Product not found");
          setTest(data.data?.data);
          console.log(data.data?.data);
          setLoading(true);
        } catch (err) {
          if (err.name !== "ABortError") {
            console.log(err.message);
            setLoading(false);
          }
        } finally {
          setLoading(false);
        }
      }
      fetchProducts();

      return function () {
        controller.abort();
      };
    },
    [productId]
  );

  return { test, loading };
}
