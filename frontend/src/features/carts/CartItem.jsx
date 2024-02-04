import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledCartListItem = styled.div`
  /* grid-template-columns: auto auto auto auto; */
  /* border: 1px solid black; */
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  align-content: flex-end;
  justify-content: center;
  margin-top: 2rem;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
`;
const ImageAndName = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  align-content: flex-end;
  justify-content: center;
`;
const StyledImg = styled.img`
  width: 178px;
  height: 180px;
  object-fit: cover;
  object-position: center;
`;
const ItemName = styled.h2`
  margin: auto 5rem;
`;
const StyledHeader = styled.h2`
  margin: auto 5rem;
`;
const CartActionButtons = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  align-content: flex-end;
  justify-content: center;
`;
const StyledDetailsButton = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  font-size: 1.4rem;
  padding: 1.2rem 4.1rem;
  height: 5rem;
  font-weight: 500;
  color: var(--color-grey-600);
  background: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);

  &:hover {
    background-color: var(--color-grey-50);
  }
`;
const StyledRemoveButton = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  margin-top: 1.2rem;
  height: 5rem;
  font-weight: 500;

  color: var(--color-red-100);
  background-color: var(--color-red-700);

  &:hover {
    background-color: var(--color-red-800);
  }
`;
function CartItem({
  cartId,
  productId,
  price,
  quantity,
  image,
  onCloseModal,
  onDeleteCart,
}) {
  const navigate = useNavigate();

  function handleDetailsButton(productId) {
    navigate(`/showcase/${productId}`);
    onCloseModal?.();
  }
  return (
    <div>
      <StyledCartListItem>
        <ImageAndName>
          <StyledImg
            src={`http://127.0.0.1:3000/products/${image[0]}`}
            alt={"Loading"}
          />
          <ItemName>Shoes</ItemName>
        </ImageAndName>
        <StyledHeader>x{quantity}</StyledHeader>
        <StyledHeader>₱{price}</StyledHeader>
        <CartActionButtons>
          <StyledDetailsButton
            variation="secondary"
            sizes="medium"
            onClick={() => handleDetailsButton(productId)}
          >
            see details
          </StyledDetailsButton>
          <StyledRemoveButton
            variation="danger"
            sizes="medium"
            onClick={() => onDeleteCart(cartId)}
          >
            Remove from cart
          </StyledRemoveButton>
        </CartActionButtons>
      </StyledCartListItem>
    </div>
  );
}

export default CartItem;
