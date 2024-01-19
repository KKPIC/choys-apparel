import { RiShoppingBag3Line } from "react-icons/ri";
import ButtonIcon from "../../ui/ButtonIcon";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import { useState } from "react";
// import SmallImageBox from "./SmallImageBox";

const SmallImageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const SmallImageBox = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
const SmallSelectedImageBox = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;
const ItemName = styled.h2``;
const ImageBox = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: center;
`;

const image = `http://127.0.0.1:3000/products/test_image_1}`;

function ItemImageBox({ name, images }) {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    if (step === 0) setStep(1);
  }
  function handleNext() {
    if (step < 4) setStep((s) => s + 1);
    if (step === 5) setStep(4);
  }
  function handleFirstSmallImage(change) {
    setStep(change);
  }
  return (
    <>
      <ItemName>{name}</ItemName>
      <ImageBox
        src={
          images ? `http://127.0.0.1:3000/products/${images[step - 1]}` : image
        }
      />
      <SmallImageContainer>
        <ButtonIcon
          onClick={handlePrevious}
          disabled={step != 1 ? false : true}
        >
          <FaChevronLeft />
        </ButtonIcon>
        {/* {images?.map((image, index) => (
          <SmallImageBox
            onChangeImage={handleFirstSmallImage}
            image={image}
            step={step}
            key={index}
          />
        ))} */}
        <SmallImageBox
          onClick={() => handleFirstSmallImage(1)}
          style={
            step === 1
              ? { width: "60px", height: "60px", border: "2px solid yellow" }
              : null
          }
          src={images ? `http://127.0.0.1:3000/products/${images[0]}` : image}
        />
        <SmallImageBox
          onClick={() => handleFirstSmallImage(2)}
          style={
            step === 2
              ? { width: "60px", height: "60px", border: "2px solid yellow" }
              : null
          }
          src={images ? `http://127.0.0.1:3000/products/${images[1]}` : image}
        />
        <SmallImageBox
          onClick={() => handleFirstSmallImage(3)}
          style={
            step === 3
              ? { width: "60px", height: "60px", border: "2px solid yellow" }
              : null
          }
          src={images ? `http://127.0.0.1:3000/products/${images[2]}` : image}
        />
        <SmallImageBox
          onClick={() => handleFirstSmallImage(4)}
          style={
            step === 4
              ? { width: "60px", height: "60px", border: "2px solid yellow" }
              : null
          }
          src={images ? `http://127.0.0.1:3000/products/${images[3]}` : image}
        />
        <ButtonIcon onClick={handleNext} disabled={step != 4 ? false : true}>
          <FaChevronRight />
        </ButtonIcon>
      </SmallImageContainer>
    </>
  );
}

export default ItemImageBox;
