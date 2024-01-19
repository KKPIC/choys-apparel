import { IoClose } from "react-icons/io5";
import styled from "styled-components";
const StyledDiv = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 1px;
  border: 1px solid var(--color-grey-300);
  position: relative;
`;
const StyledImg = styled.img`
  object-fit: cover;
  object-position: center;
  height: 69px;
  width: 69px;
  border-radius: 1px;
  border: 1px solid var(--color-grey-300);
  position: relative;
`;
const DeleteButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  cursor: pointer;
  margin: 0 0.2em;
  border: 1px groove var(--color-grey-200);
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-sm);
  position: absolute;
  right: -10%;
  top: -10%;
`;
function ItemImage({ image, onDeleteImage }) {
  return (
    <StyledDiv>
      <StyledImg src={image} />
      <DeleteButton onClick={() => onDeleteImage(image)}>
        <IoClose size={16} color={"var(--color-red-800)"} />
      </DeleteButton>
    </StyledDiv>
  );
}

export default ItemImage;
