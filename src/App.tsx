import { useRecoilValue } from "recoil";
import TemplateToDo from "./components/TemplateToDo";
import { isDarkState } from "./atoms";

function App() {
  const darkMode = useRecoilValue(isDarkState);
  return (
    <>
      <div className={`h-screen pt-20 ${darkMode ? "dark" : "light"}`}>
        <TemplateToDo />
      </div>
    </>
  );
}

export default App;
