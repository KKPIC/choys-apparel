import styled from "styled-components";

const StyStyledCartList = styled.div`
  max-height: calc(100vh - 200px);
  overflow-y: auto;
`;
const StyledCartListItem = styled.div`
  grid-template-columns: auto auto auto auto;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  align-content: flex-end;
  justify-content: center;
`;
function CartList() {
  return (
    <StyStyledCartList>
      <StyledCartListItem>
        <img src="Apparel logo.png" />
        <h1>Quantity</h1>
        <h1>Price</h1>
        <div>
          <button>see details</button>
          <button>Remove from cart</button>
        </div>
      </StyledCartListItem>
      <StyledCartListItem>
        <img src="Apparel logo.png" />
        <h1>Quantity</h1>
        <h1>Price</h1>
        <div>
          <button>see details</button>
          <button>Remove from cart</button>
        </div>
      </StyledCartListItem>
      <StyledCartListItem>
        <img src="Apparel logo.png" />
        <h1>Quantity</h1>
        <h1>Price</h1>
        <div>
          <button>see details</button>
          <button>Remove from cart</button>
        </div>
      </StyledCartListItem>
      <StyledCartListItem>
        <img src="Apparel logo.png" />
        <h1>Quantity</h1>
        <h1>Price</h1>
        <div>
          <button>see details</button>
          <button>Remove from cart</button>
        </div>
      </StyledCartListItem>
      <StyledCartListItem>
        <img src="Apparel logo.png" />
        <h1>Quantity</h1>
        <h1>Price</h1>
        <div>
          <button>see details</button>
          <button>Remove from cart</button>
        </div>
      </StyledCartListItem>
      <StyledCartListItem>
        <img src="Apparel logo.png" />
        <h1>Quantity</h1>
        <h1>Price</h1>
        <div>
          <button>see details</button>
          <button>Remove from cart</button>
        </div>
      </StyledCartListItem>
      <StyledCartListItem>
        <img src="Apparel logo.png" />
        <h1>Quantity</h1>
        <h1>Price</h1>
        <div>
          <button>see details</button>
          <button>Remove from cart</button>
        </div>
      </StyledCartListItem>
    </StyStyledCartList>
  );
}

export default CartList;
