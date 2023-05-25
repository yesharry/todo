import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoSelector } from "../atoms";
import ToDo from "./ToDo";
import HeadToDo from "./HeadToDo";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);

  return (
    <div className="w-[400px] h-[650px] rounded-2xl bg-gray-100 border-2 border-white p-6">
      <HeadToDo />
      <CreateToDo />
      <span className=" text-xs text-gray-500">TO DO LIST</span>
      {toDos.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
};

export default ToDoList;
