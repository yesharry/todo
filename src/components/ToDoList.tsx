import { useRecoilValue, useSetRecoilState } from "recoil";
import CreateToDo from "./CreateToDo";
import { Categories, categoryState, toDoSelector } from "../atoms";
import ToDo from "./ToDo";

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const setCategory = useSetRecoilState(categoryState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <div>
      <h1 className="text-rose-600">TO DO LIST</h1>
      <hr />

      <button value={Categories.TO_DO} onClick={onClick}>
        To Do
      </button>
      <button value={Categories.DOING} onClick={onClick}>
        Doing
      </button>
      <button value={Categories.DONE} onClick={onClick}>
        Done
      </button>

      <CreateToDo />

      {toDos.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
};

export default ToDoList;
