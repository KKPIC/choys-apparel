import styled from "styled-components";
import { RiShoppingBag3Line } from "react-icons/ri";
import ButtonIcon from "../../ui/ButtonIcon";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import StarRating from "../../ui/StarRating";
import Button from "../../ui/Button";
import Empty from "../../ui/Empty";
import ItemImageBox from "./ItemImageBox";
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
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

function ItemDataBox({
  item: {
    _id: productId,
    name,
    description,
    price,
    images,
    genderTag,
    bodyTag,
    otherTags,
  },
}) {
  return (
    <StyledItemDataBox>
      <LeftSideBox>
        <ItemImageBox name={name} images={images} />
      </LeftSideBox>
      <RightSideBox>
        <Description>{description}</Description>
        <StarRating maxRating={5} size={24} />
        <PriceBox>
          <DiscountedPrice>₱{500}.00</DiscountedPrice>
          <SaleBox>
            <OriginalPrice>₱900.00</OriginalPrice>
            <SalePercent>-50%</SalePercent>
          </SaleBox>
        </PriceBox>
        <BuyOptions>
          <Button>BUY NOW</Button>
          <Button>ADD TO CART</Button>
        </BuyOptions>
      </RightSideBox>
    </StyledItemDataBox>
  );
}

export default ItemDataBox;
