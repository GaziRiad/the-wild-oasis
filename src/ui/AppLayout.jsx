import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import styled from "styled-components";

const Main = styled.main`
  background-color: var(--color-grey-50);

  padding: 4rem 4.8rem 6.4rem;
`;

const StyleAppLayour = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

function AppLayout() {
  return (
    <StyleAppLayour>
      <Header />
      <SideBar />

      <Main>
        <Outlet />
      </Main>
    </StyleAppLayour>
  );
}

export default AppLayout;
