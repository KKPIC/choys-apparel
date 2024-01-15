import styled from "styled-components";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const StyledAuthMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function AuthMenu() {
  const navigate = useNavigate();
  return (
    <StyledAuthMenu>
      <li>
        <Button
          sizes={"medium"}
          variation="primary"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </li>
      <li>
        <Button onClick={() => navigate("/signup")}>Sign up</Button>
      </li>
    </StyledAuthMenu>
  );
}

export default AuthMenu;
