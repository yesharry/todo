import { useRecoilValue } from "recoil";
import TemplateToDo from "./components/TemplateToDo";
import { isDarkState } from "./atoms";

function App() {
  const darkMode = useRecoilValue(isDarkState);
  return (
    <>
      {/*  bg-[#dcdfe0] dark:bg-[#28282c] */}
      <div className={`h-screen pt-24 ${darkMode ? "dark" : "light"}`}>
        <TemplateToDo />
      </div>
    </>
  );
}

export default App;
