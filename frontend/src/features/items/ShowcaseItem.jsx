import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const StyledList = styled.li`
  border: 2px solid var(--color-grey-500);
  text-align: center;
  list-style-type: none;
  /* padding: 7.2rem; */

  &:hover {
    border: 3px groove var(--color-grey-900);
    cursor: pointer;
    padding: 0.5em;
    border-color: blanchedalmond;
    background-color: var(--color-grey-300);
  }
`;
const StyledImg = styled.img`
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
