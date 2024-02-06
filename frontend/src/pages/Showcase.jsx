import { useEffect, useState } from "react";
import styled from "styled-components";
import ShowcaseItem from "../features/items/ShowcaseItem";
import ProductTableOperations from "../features/items/ProductTableOperations";
import axios from "axios";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import { useProducts } from "../features/items/useProducts";
import { useSearchParams } from "react-router-dom";
import Pagination from "../ui/Pagination";

const StyledTop = styled.ul``;
const StyledShowcase = styled.ul`
  /* border: 2px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-200); */
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  padding: 3.2rem 4rem;
  transition: all 0.5s;

  max-width: 60%;
  margin: 1rem auto;
  gap: 0.3em;
  grid-template-columns: auto auto auto auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  align-content: flex-end;
  justify-content: center;
`;

function Showcase() {
  // const [test, setTest] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [filter, setFilter] = useState("");

  // function handleFilterChange(change) {
  //   setFilter(change);
  //   // console.log(filter);
  // }

  // const filterParams = filter != "All" ? `?bodyTag=${filter}` : "";
  // const sortParams = filter != "All" ? `&price[lte]=500` : `?price[lte]=500`;
  // useEffect(
  //   function () {
  //     const controller = new AbortController();
  //     async function fetchProducts() {
  //       try {
  //         setLoading(true);
  //         const res = await fetch(
  //           `http://localhost:3000/api/v1/products${filterParams}${sortParams}`,
  //           {
  //             signal: controller.signal,
  //           }
  //         );

  //         if (!res.ok)
  //           throw new Error("Something went wrong when fetching products");

  //         const data = await res.json();
  //         if (data.Response === "False") throw new Error("Product not found");
  //         setTest(data.data.data);
  //         console.log(data.data.data);
  //       } catch (err) {
  //         if (err.name !== "ABortError") {
  //           console.log(err.message);
  //         }
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //     fetchProducts();

  //     return function () {
  //       controller.abort();
  //     };
  //   },
  //   [filter]
  // );

  const { test, handleFilterChange, handlePageChange, count, filter } =
    useProducts();
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">SHOP NOW!</Heading>
        <ProductTableOperations
          handleFilterChange={handleFilterChange}
          handlePageChange={handlePageChange}
        />
      </Row>
      <StyledShowcase>
        {test.map((test, index) => (
          <ShowcaseItem item={test} key={test._id} />
        ))}
        <Pagination
          handlePageChange={handlePageChange}
          count={count}
          filter={filter}
        />
      </StyledShowcase>
    </>
  );
}

export default Showcase;
