import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Showcase from "../pages/Showcase";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const StyledAppLayout = styled.div`
  overflow: auto;
  height: 100vh;
`;

// const StyledHeaderMenu = styled.ul`
//   display: flex;
//   gap: 0.4rem;
// `;
const Main = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  /* background-color: var(--color-grey-50); */
  /* overflow: scroll; */
  /* will only scroll the element that has the overflow scroll property */
`;
function AppLayout() {
  return (
    <>
      <StyledAppLayout>
        <Header />
        <Main>
          <Outlet />
        </Main>
        {/* <Showcase /> */}
        {/* <Signup /> */}
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
