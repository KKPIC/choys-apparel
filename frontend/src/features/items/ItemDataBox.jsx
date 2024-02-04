import styled from "styled-components";

import StarRating from "../../ui/StarRating";

import axios from "axios";
import ItemImageBox from "./ItemImageBox";
import { useEffect, useState } from "react";
import BuyItemOptions from "./BuyItemOptions";
import Button from "../../ui/Button";
const StyledItemDataBox = styled.section`
  /* Box */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  max-width: 900px;
  margin: 0 auto;
  background-color: var(--color-grey-50);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`;

const LeftSideBox = styled.div`
  padding: 2.2rem;
`;

const RightSideBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;
  padding: 2.2rem;
`;
const Description = styled.p`
  text-align: justify;
  max-width: 20em;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SaleBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;
const DiscountedPrice = styled.h2``;

function ItemDataBox({
  item: {
    _id: productId,
    name,
    description,
    price: itemPrice,
    images,
    genderTag,
    bodyTag,
    otherTags,
  },
}) {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const userID = localStorage.getItem("id");
  const role = localStorage.getItem("role");
  // let prodId = productID;
  let qnty = quantity;
  // let itemPrice = price;
  let totalPrice = itemPrice * quantity;
  // console.log(productId);
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/api/v1/carts?product=${productId}&user=${userID}`
      )
      .then((res) => {
        // console.log(res.data.data.data[0]._id);
        setAddedToCart(res.data.data.data[0].inCart);
        setDeleteId(res.data.data.data[0]._id);
        console.log(res.data.data.data[0]._id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId, userID, addedToCart]);
  function handleOrderItem() {
    // const formData = new FormData();
    // formData.append("product", productID);
    // formData.append("user", userID);
    // formData.append("quantity", quantity);
    // formData.append("price", price);
    // formData.append("totalPrice", totalPrice);
    axios
      .post("http://localhost:3000/api/v1/carts", {
        product: productId,
        user: userID,
        quantity: qnty,
        price: itemPrice,
        totalPrice: totalPrice,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setAddedToCart((e) => !e);
  }
  function handleDeleteCart() {
    axios
      .delete(`http://localhost:3000/api/v1/carts/${deleteId}`)
      .then((res) => {
        console.log(res);
        setAddedToCart(false);
      })
      .catch((err) => console.log(err));
  }
  function handleDeducQuantity() {
    quantity > 1 ? setQuantity((e) => e - 1) : setQuantity(1);
  }
  function handleAddQuantity() {
    setQuantity((e) => e + 1);
  }
  return (
    <StyledItemDataBox>
      <LeftSideBox>
        <ItemImageBox name={name} images={images} />
      </LeftSideBox>
      <RightSideBox>
        <Description>{description}</Description>
        <StarRating maxRating={5} size={24} />
        <PriceBox>
          <DiscountedPrice>₱{itemPrice}.00</DiscountedPrice>
          {/* <SaleBox>
            <OriginalPrice>₱900.00</OriginalPrice>
            <SalePercent>-50%</SalePercent>
          </SaleBox> */}
        </PriceBox>
        {role === "admin" ? (
          <Button variation="secondary">Edit</Button>
        ) : (
          <BuyItemOptions
            quantity={quantity}
            addedTocart={addedToCart}
            onDeduc={handleDeducQuantity}
            onAdd={handleAddQuantity}
            onOrderItem={handleOrderItem}
            onDeleteCart={handleDeleteCart}
          />
        )}
      </RightSideBox>
    </StyledItemDataBox>
  );
}

export default ItemDataBox;
