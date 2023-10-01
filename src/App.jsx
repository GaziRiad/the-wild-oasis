import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 36px;
  font-weight: 700;
  background-color: red;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => console.log("Chek in")}>Check in</Button>
        <Button onClick={() => console.log("Chek out")}>Check Out</Button>

        <Input type="number" placeholder="number of guests..." />
      </StyledApp>
    </>
  );
}

export default App;
