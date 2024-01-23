import { RiLoginBoxFill } from "react-icons/ri";
import styled from "styled-components";
import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";
import MoveBackButton from "../ui/MoveBackButton";

const SignupLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  text-align: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;
const Container = styled.div`
  padding-top: 5rem;
  text-align: left;
`;
function Signup() {
  return (
    <SignupLayout>
      <MoveBackButton />
      <span>
        <RiLoginBoxFill size={"6rem"} />
      </span>
      <Heading as="h4">Sign up</Heading>
      <Container>
        <SignupForm />
      </Container>
    </SignupLayout>
  );
}

export default Signup;
