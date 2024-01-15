import styled from "styled-components";
import { TbArrowBack } from "react-icons/tb";
import ButtonIcon from "./ButtonIcon";
import { useMoveBack } from "../hooks/useMoveBack";
const StyledFloatingButton = styled.div`
  position: fixed;
  top: 4%;
  left: 5%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 1rem 1rem;
  transition: all 0.5s;
`;
function MoveBackButton() {
  const moveBack = useMoveBack();
  return (
    <StyledFloatingButton>
      <ButtonIcon onClick={moveBack}>
        <TbArrowBack />
      </ButtonIcon>
    </StyledFloatingButton>
  );
}

export default MoveBackButton;
