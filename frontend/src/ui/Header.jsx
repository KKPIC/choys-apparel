import styled from "styled-components";

import AuthMenu from "../features/authentication/AuthMenu";
import UserProfile from "../features/authentication/UserProfile";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.5rem 4.8rem;
  border-bottom: 2px solid var(--color-grey-300);
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
const StyledImg = styled.img`
  width: 200px;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
`;
function Header() {
  const navigate = useNavigate();
  const user = localStorage.getItem("token");
  return (
    <StyledHeader>
      <StyledImg src="Apparel logo.png" onClick={() => navigate("/")} />

      <SearchBar onClick={() => toast("In development.", { icon: "⚒" })} />
      {!user && <AuthMenu />}
      {user && <UserProfile />}
    </StyledHeader>
  );
}

export default Header;
