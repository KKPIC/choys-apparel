import { useEffect, useState } from "react";

export function useProducts() {
  const [test, setTest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("All");

  function handleFilterChange(change) {
    setFilter(change);
  }

  const filterParams = filter != "All" ? `?bodyTag=${filter}` : "";
  const sortParams = filter != "All" ? `&price[lte]=500` : `?price[lte]=500`;
  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchProducts() {
        try {
          setLoading(true);
          const res = await fetch(`http://localhost:3000/api/v1/products`, {
            signal: controller.signal,
          });

          if (!res.ok)
            throw new Error("Something went wrong when fetching products");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Product not found");
          setTest(data.data.data);
          console.log(data.data.data);
        } catch (err) {
          if (err.name !== "ABortError") {
            console.log(err.message);
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
    [filterParams]
  );

  return { test, loading, handleFilterChange };
}
