import { useEffect, useState } from "react";
import Row from "../../ui/Row";
import ItemDataBox from "./ItemDataBox";
import { useParams } from "react-router-dom";
import { useItem } from "./useItem";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";

function ItemDetail() {
  const { test = [], loading } = useItem();
  if (loading) return <Spinner />;
  if (!test) return <Empty resourceName="test" />;

  const { name, _id } = test;
  console.log(name);
  console.log(test);
  return (
    <>
      <ItemDataBox item={test} loading={loading} key={_id} />;
    </>
  );
}

export default ItemDetail;
