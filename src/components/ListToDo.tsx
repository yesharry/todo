import { useRecoilValue } from "recoil";
import { toDoSelector } from "../atoms";
import ItemToDo from "./ItemToDo";

const ListToDo = () => {
  const toDos = useRecoilValue(toDoSelector);

  return (
    <>
      <span className=" text-xs text-gray-500 mt-4 mb-3">TO DO LIST</span>
      <div className=" rounded-lg flex-1 overflow-y-auto">
        {toDos.map((toDo) => (
          <ItemToDo key={toDo.id} {...toDo} />
        ))}
      </div>
    </>
  );
};

export default ListToDo;
