import Button from "../../ui/Button";
import { LiaShoppingBagSolid } from "react-icons/lia";
import ButtonIcon from "../../ui/ButtonIcon";
import Modal from "../../ui/Modal";
import CreateItemForm from "../items/CreateItemForm";
import CartList from "./CartList";

function CartMenu() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cart-list">
          <ButtonIcon>
            <LiaShoppingBagSolid size={"5em"} style={{ cursor: "pointer" }} />
          </ButtonIcon>
        </Modal.Open>
        <Modal.Window name="cart-list">
          <CartList />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default CartMenu;
