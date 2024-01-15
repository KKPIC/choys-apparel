import styled from "styled-components";
import { IoClose } from "react-icons/io5";

const StyledTag = styled.li`
  padding: 0.4em;
  margin: 0.2em;
  border: 1px groove var(--color-grey-200);
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-sm);
`;
const TagName = styled.span``;
const DeleteButton = styled.div`
  cursor: pointer;
  text-decoration: none;
  background: none;
  border: none;

  margin-left: 5px;
  float: right;
`;
function Tag({ tag, onDeleteTag }) {
  return (
    <StyledTag>
      <TagName>{tag.tagName}</TagName>
      <DeleteButton onClick={() => onDeleteTag(tag.id)}>
        <IoClose size={19} />
      </DeleteButton>
    </StyledTag>
  );
}

export default Tag;
