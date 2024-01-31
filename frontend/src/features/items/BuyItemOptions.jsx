import { RiShoppingBag3Line } from "react-icons/ri";
import ButtonIcon from "../../ui/ButtonIcon";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Button from "../../ui/Button";
import Empty from "../../ui/Empty";
import styled from "styled-components";

const StyledBuyOptions = styled.div`
  gap: 0.2em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
`;
const OriginalPrice = styled.h4`
  text-decoration: line-through;
`;
const SalePercent = styled.p`
  padding-left: 2px;
  font-size: 12px;
  color: red;
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
function BuyItemOptions({
  quantity,
  addedTocart,
  onDeduc,
  onAdd,
  onOrderItem,
}) {
  return (
    <StyledBuyOptions>
      {!addedTocart && (
        <EditButtons>
          <CircleButton onClick={onDeduc}>
            <FaAngleLeft />
          </CircleButton>
          <QuantityValue>{quantity}</QuantityValue>
          <CircleButton onClick={onAdd}>
            <FaAngleRight />
          </CircleButton>
          <Button variation="secondary" sizes="large" onClick={onOrderItem}>
            ADD TO CART
          </Button>
        </EditButtons>
      )}
      {addedTocart && (
        <EditButtons>
          <Button
            variation="secondary"
            sizes="medium"
            // onClick={() => setAddedToCart((e) => !e)}
          >
            Remove from cart
          </Button>
        </EditButtons>
      )}
    </StyledBuyOptions>
  );
}

export default BuyItemOptions;
