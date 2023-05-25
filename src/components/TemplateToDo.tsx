import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import HeadToDo from "./HeadToDo";
import ListToDo from "./ListToDo";
import { isDarkState } from "../atoms";

const TemplateToDo = () => {
  const darkMode = useRecoilValue(isDarkState);
  return (
    <div
      className={`w-[400px] h-[700px] rounded-2xl flex flex-col m-auto p-6 ${
        darkMode ? " bg-black" : "bg-gray-100"
      }`}
    >
      <HeadToDo />
      <ListToDo />
      <CreateToDo />
    </div>
  );
};

export default TemplateToDo;
