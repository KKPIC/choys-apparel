import styled from "styled-components";
import { RiShoppingBag3Line } from "react-icons/ri";
import ButtonIcon from "../../ui/ButtonIcon";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import StarRating from "../../ui/StarRating";
import Button from "../../ui/Button";
import Empty from "../../ui/Empty";
import ItemImageBox from "./ItemImageBox";
import axios from "axios";
import { useState } from "react";
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
const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;
const DiscountedPrice = styled.h2``;
const SaleBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const OriginalPrice = styled.h4`
  text-decoration: line-through;
`;
const SalePercent = styled.p`
  padding-left: 2px;
  font-size: 12px;
  color: red;
`;
const BuyOptions = styled.div`
  gap: 0.2em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
`;
const EditButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
`;

const CircleButton = styled.button`
  height: 60px;
  width: 60px;

  color: var(--color-grey-600);
  background: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);

  &:hover {
    background-color: var(--color-grey-50);
  }
  border-radius: 50%;
  display: inline-block;
`;
const QuantityValue = styled.h1`
  padding: 1.1rem;
  font-size: 26px;
`;
function ItemDataBox({
  item: {
    productID,
    name,
    description,
    price,
    images,
    genderTag,
    bodyTag,
    otherTags,
  },
}) {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const userID = localStorage.getItem("id");
  function handleOrderItem() {
    // axios
    //   .post("http://localhost:3000/api/v1/products", { productID, userID })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    setAddedToCart((e) => !e);
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
          <DiscountedPrice>₱{price}.00</DiscountedPrice>
          {/* <SaleBox>
            <OriginalPrice>₱900.00</OriginalPrice>
            <SalePercent>-50%</SalePercent>
          </SaleBox> */}
        </PriceBox>
        <BuyOptions>
          {!addedToCart && (
            <Button
              variation="secondary"
              sizes="large"
              onClick={handleOrderItem}
            >
              ADD TO CART
            </Button>
          )}
          {addedToCart && (
            <EditButtons>
              <CircleButton onClick={handleDeducQuantity}>
                <FaAngleLeft />
              </CircleButton>
              <QuantityValue>{quantity}</QuantityValue>
              <CircleButton onClick={handleAddQuantity}>
                <FaAngleRight />
              </CircleButton>
              <Button
                variation="secondary"
                sizes="medium"
                onClick={() => setAddedToCart((e) => !e)}
              >
                Remove
              </Button>
            </EditButtons>
          )}
        </BuyOptions>
      </RightSideBox>
    </StyledItemDataBox>
  );
}

export default ItemDataBox;
