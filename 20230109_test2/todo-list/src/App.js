import styled, { ThemeProvider } from "styled-components";
import "./index.css";
import Todos from "./Todos/Todos";
import { theme } from "./style";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Todos />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f2f2f2;
`;

export default App;
