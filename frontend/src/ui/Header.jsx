import styled from "styled-components";
import { LiaShoppingBagSolid } from "react-icons/lia";
import AuthMenu from "../features/authentication/AuthMenu";
import UserProfile from "../features/authentication/UserProfile";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  margin-bottom: 50px;
  padding: 1.5rem 4.8rem;
  border-bottom: 2px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-evenly;
`;

const SearchBar = styled.input`
  font-size: 16px;
  padding: 8px 12px;
  border: 1px solid #ffe8cc;
  font-family: inherit;
  color: inherit;
  width: 50rem;
`;

function Header() {
  const navigate = useNavigate();
  const user = localStorage.getItem("token");
  return (
    <StyledHeader>
      <ButtonIcon onClick={() => navigate("/")}>
        <LiaShoppingBagSolid size={"5rem"} style={{ cursor: "pointer" }} />
      </ButtonIcon>
      <SearchBar />
      {!user && <AuthMenu />}
      {user && <UserProfile />}
    </StyledHeader>
  );
}

export default Header;
