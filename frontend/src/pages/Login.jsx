import styled from "styled-components";
import { RiLoginBoxLine } from "react-icons/ri";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";
import FloatingBackButton from "../ui/MoveBackButton";
const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  text-align: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;
function Login() {
  return (
    <>
      <FloatingBackButton />
      <LoginLayout>
        <span>
          <RiLoginBoxLine size={"6rem"} />
        </span>
        <Heading as="h4">Log in your credentials</Heading>
        <LoginForm />
      </LoginLayout>
    </>
  );
}

export default Login;
