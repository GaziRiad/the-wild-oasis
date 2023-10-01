import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>

        <Heading as="h2">Check in and out</Heading>
        <Button onClick={() => console.log("Chek in")}>Check in</Button>
        <Button onClick={() => console.log("Chek out")}>Check Out</Button>

        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="number of guests..." />
      </StyledApp>
    </>
  );
}

export default App;
