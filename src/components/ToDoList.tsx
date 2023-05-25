import { useRecoilValue } from "recoil";
import { toDoSelector } from "../atoms";
import ItemToDo from "./ItemToDo";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);

  return (
    <div className=" h-[380px] mt-3">
      <span className=" text-xs text-gray-500">TO DO LIST</span>
      {toDos.map((toDo) => (
        <ItemToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
};

export default ToDoList;
