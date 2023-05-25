import { createGlobalStyle } from "styled-components";
import TemplateToDo from "./components/TemplateToDo";

const GlobalStyle = createGlobalStyle`
  body {
    background: #dcdfe0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TemplateToDo />
    </>
  );
}

export default App;
