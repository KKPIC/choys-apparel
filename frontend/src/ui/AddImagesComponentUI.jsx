import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import ItemImage from "../features/items/ItemImage";

const StyledAddImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 0.2em;
`;
const AddImageInput = styled.input`
  display: none;
  visibility: none;
`;
const StyledLabel = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  border-radius: 1px;
  border: 1px solid var(--color-grey-400);
`;

function AddImagesComponentUi({ onSelectFile, selectedImages, onDeleteImage }) {
  return (
    <StyledAddImages>
      {selectedImages.length < 4 && (
        <>
          <StyledLabel htmlFor="images">
            <FaPlus size={19} />
            <span style={{ fontSize: "8px" }}>up to 4 images</span>
          </StyledLabel>
          <AddImageInput
            type="file"
            name="images"
            id="images"
            onChange={onSelectFile}
            multiple
            accept="image/png, image/jpeg, image/webp"
          />
        </>
      )}
      {selectedImages.map((image, index) => (
        <ItemImage image={image} onDeleteImage={onDeleteImage} key={index} />
      ))}
    </StyledAddImages>
  );
}

export default AddImagesComponentUi;
