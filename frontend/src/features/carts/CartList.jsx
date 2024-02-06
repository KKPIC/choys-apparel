import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const StyStyledCartList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  /* align-content: flex-end; */
  justify-content: center;

  padding: 2rem;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
`;
const CheckoutButton = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  font-size: 1.4rem;
  padding: 1.2rem 4.1rem;
  margin-top: 1em;
  height: 5rem;
  font-weight: 500;
  color: var(--color-grey-600);
  background: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);

  &:hover {
    background-color: var(--color-grey-50);
  }
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
      {carts.length
        ? carts.map((cart) => (
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
          ))
        : "Start adding to cart now!!!"}
      {carts.length ? (
        <CheckoutButton
          onClick={() =>
            toast("Under development", {
              icon: "⚒",
            })
          }
        >
          Check Out Now!!!
        </CheckoutButton>
      ) : (
        ""
      )}
    </StyStyledCartList>
  );
}

export default CartList;
