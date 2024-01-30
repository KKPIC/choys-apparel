import Button from "../../ui/Button";
import { LiaShoppingBagSolid } from "react-icons/lia";
import ButtonIcon from "../../ui/ButtonIcon";
import Modal from "../../ui/Modal";
import CreateItemForm from "../items/CreateItemForm";

function AddOrder() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="order-list">
          <ButtonIcon>
            <LiaShoppingBagSolid size={"5em"} style={{ cursor: "pointer" }} />
          </ButtonIcon>
        </Modal.Open>
        <Modal.Window name="order-list">
          <CreateItemForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddOrder;
