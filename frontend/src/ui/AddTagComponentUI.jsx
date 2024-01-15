import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";
import Tag from "../features/items/Tag";
import { useState } from "react";
const StyledTagLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  /* background-color: var(--color-grey-200); */
`;

const OtherTagsContainer = styled.div`
  margin: 0.2em;
  max-width: 100%;
  position: relative;
`;

const StyledInput = styled.input`
  max-width: 70px;
  padding: 0.4em;
  margin: 0.2em;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
`;
const StyledAddButton = styled.div`
  cursor: pointer;
  padding: 0.3em;
  margin: 0 0.2em;
  border: 1px groove var(--color-grey-200);
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-sm);
  aspect-ratio: 1;
  position: absolute;
  right: -41%;
  top: 6%;
`;
function AddTagComponentUI({ tags, onAddtags, onDeleteTag }) {
  const [tagName, setTagName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!tagName) return;
    const newTag = { tagName, id: Date.now() };
    onAddtags(newTag);

    setTagName("");
  }
  return (
    <StyledTagLists>
      {tags.map((tag) => (
        <Tag tag={tag} key={tag.id} onDeleteTag={onDeleteTag} />
      ))}

      {/* <StyledTag>
        <TagName>Headssss</TagName>
        <DeleteButton>
          <IoClose size={19} />
        </DeleteButton>
      </StyledTag>
      <StyledTag>
        <TagName>Headssss</TagName>
        <DeleteButton>
          <IoClose size={19} />
        </DeleteButton>
      </StyledTag>
      <StyledTag>
        <TagName>Headssss</TagName>
        <DeleteButton>
          <IoClose size={19} />
        </DeleteButton>
      </StyledTag>
      <StyledTag>
        <TagName>Headssss</TagName>
        <DeleteButton>
          <IoClose size={19} />
        </DeleteButton>
      </StyledTag>
      <StyledTag>
        <TagName>Head</TagName>
        <DeleteButton>
          <IoClose size={19} />
        </DeleteButton>
      </StyledTag> */}

      <OtherTagsContainer>
        <StyledInput
          type="text"
          placeholder="Tag..."
          value={tagName}
          onChange={(e) => setTagName(e.target.value)}
        />
        <StyledAddButton onClick={handleSubmit}>
          <IoMdAdd size={19} />
        </StyledAddButton>
      </OtherTagsContainer>
    </StyledTagLists>
  );
}

export default AddTagComponentUI;
