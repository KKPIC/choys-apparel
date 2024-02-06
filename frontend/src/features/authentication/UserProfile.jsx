import styled from "styled-components";
import Logout from "./Logout";
import Button from "../../ui/Button";
import AddItem from "../items/AddItem";
import { LiaShoppingBagSolid } from "react-icons/lia";
import ButtonIcon from "../../ui/ButtonIcon";
import CartMenu from "../carts/CartMenu";
import toast from "react-hot-toast";
const StyledUserProfile = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);

  &:hover {
    cursor: pointer;
  }
`;
const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;
function UserProfile() {
  const user = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  return (
    <StyledUserProfile>
      {role === "admin" && <AddItem />}
      {role === "user" && <CartMenu />}
      <Avatar
        src={"default-user.jpg"}
        alt="Avatar"
        onClick={() => toast("In development.", { icon: "⚒" })}
      />
      <span onClick={() => toast("In development.", { icon: "⚒" })}>
        Sample name
      </span>
      {user && <Logout />}
    </StyledUserProfile>
  );
}

export default UserProfile;
