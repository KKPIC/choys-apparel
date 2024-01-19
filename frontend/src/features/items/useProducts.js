import axios, { all } from "axios";
import { useEffect, useState } from "react";

export function useProducts() {
  const [test, setTest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("All");
  // const [filteredCount, setFilteredCount] = useState(0);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState("1");

  function handleFilterChange(change) {
    setFilter(change);
  }
  function handlePageChange(e) {
    setPage(e);
  }

  const defaultParams = `http://localhost:3000/api/v1/products?page=${page}&limit=12`;
  let selectedParams = ``;
  const filterParams = filter != "All" ? `?bodyTag=${filter}` : "";

  if (filter != "All") {
    selectedParams = defaultParams + `&bodyTag=${filter}`;
  } else {
    selectedParams = defaultParams;
  }

  // console.log(page);
  // console.log(Math.ceil(selectedCount / 10));
  // console.log(selectedParams);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/products${filterParams}`)
      .then((res) => {
        setCount(res.data.data.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [filterParams]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(selectedParams)
      .then((res) => {
        setTest(res.data.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [selectedParams]);

  return { test, loading, handleFilterChange, handlePageChange, count, filter };
}
