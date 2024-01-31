import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useItem() {
  const [test, setTest] = useState({});
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();
  // console.log(productId);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/api/v1/products/${productId}`)
      .then((res) => {
        setTest(res.data.data.data);
        // console.log(res.data.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [productId]);

  return { test, loading };
}
