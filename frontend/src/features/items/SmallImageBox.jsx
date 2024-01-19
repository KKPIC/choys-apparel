import styled from "styled-components";

const SmallImageBoxLayout = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
const imageTest = `http://127.0.0.1:3000/products/test_image_1}`;
function SmallImageBox({ onChangeImage, image, step, key }) {
  console.log(key);
  return (
    <SmallImageBoxLayout
      onClick={() => onChangeImage(1)}
      style={
        step === key
          ? { width: "60px", height: "60px", border: "2px solid yellow" }
          : null
      }
      src={image ? `http://127.0.0.1:3000/products/${image}` : imageTest}
    />
  );
}

export default SmallImageBox;
