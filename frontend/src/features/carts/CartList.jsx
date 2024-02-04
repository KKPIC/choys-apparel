import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const StyStyledCartList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  /* align-content: flex-end; */
  justify-content: center;

  padding: 2rem;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
`;

function CartList({ onCloseModal }) {
  const [carts, setCarts] = useState([]);
  const [inCart, setInCart] = useState(false);
  const userID = localStorage.getItem("id");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/carts?user=${userID}`)
      .then((res) => {
        setCarts(res.data.data.data);
        console.log(res.data.data.data);
      })
      .catch((err) => console.log(err));
  }, [userID]);
  function handleDeleteCart(deleteId) {
    axios
      .delete(`http://localhost:3000/api/v1/carts/${deleteId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    onCloseModal?.();
    navigate(`/showcase/${deleteId}`);
  }
  return (
    <StyStyledCartList>
      {carts.map((cart) => (
        <CartItem
          key={cart._id}
          cartId={cart._id}
          productId={cart.product._id}
          price={cart.totalPrice}
          quantity={cart.quantity}
          image={cart.product.images}
          onCloseModal={onCloseModal}
          onDeleteCart={handleDeleteCart}
        />
      ))}
    </StyStyledCartList>
  );
}

export default CartList;
