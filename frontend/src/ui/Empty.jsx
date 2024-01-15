import { useMoveBack } from "../hooks/useMoveBack";
import Button from "./Button";

function Empty({ resourceName }) {
  const moveBack = useMoveBack();
  return (
    <>
      <p>No {resourceName} could be found.</p>
      <Button onClick={moveBack}>Go back</Button>
    </>
  );
}

export default Empty;
