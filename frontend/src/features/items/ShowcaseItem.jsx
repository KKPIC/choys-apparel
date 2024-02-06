import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const StyledList = styled.li`
  /* border: 2px solid var(--color-grey-500); */
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  text-align: center;
  list-style-type: none;
  padding: 0.5rem;

  &:hover {
    border: 3px groove var(--color-grey-900);
    cursor: pointer;
    padding: 0.5em;
    border-color: blanchedalmond;
    box-shadow: var(--shadow-lg);
    background-color: var(--color-grey-100);
  }
`;
const StyledImg = styled.img`
  border-radius: var(--border-radius-sm);
  width: 222px;
  height: 200px;
  object-fit: cover;
  object-position: center;
  /* transform: scale(1.5) translateX(-7px); */
`;
const StyledProductTitle = styled.p`
  text-align: center;
`;
const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 0.5fr;
`;
function ShowcaseItem({
  item: {
    _id: productId,
    name,
    description,
    price,
    images,
    genderTag,
    bodyTag,
    otherTags,
    ratingsAverage,
  },
}) {
  const navigate = useNavigate();

  return (
    // <StyledList>
    //   <StyledImg src={`products/${item.images[0]}`} alt={"Loading"} />
    //   <StyledProductTitle>{item.name}</StyledProductTitle>
    //   <StyledDiv>
    //     <p>${item.price}</p>
    //     <button>Buy</button>
    //   </StyledDiv>
    // </StyledList>
    <StyledList onClick={() => navigate(`/showcase/${productId}`)}>
      <StyledImg
        src={`http://127.0.0.1:3000/products/${images[0]}`}
        alt={"Loading"}
      />
      <StyledProductTitle>{name}</StyledProductTitle>
      <StyledDiv>
        <p>${price}</p>
        <p>⭐{ratingsAverage}</p>
      </StyledDiv>
    </StyledList>
  );
}

export default ShowcaseItem;
