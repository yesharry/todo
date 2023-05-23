import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { Categories, categoryState, toDoSelector } from "../atoms";
import ToDo from "./ToDo";

const ToDoList = () => {
  const category = useRecoilValue(categoryState);
  const [toDo, doing, done] = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>TO DO LIST</h1>
      <hr />
      <CreateToDo />

      <h2>To Do</h2>
      {category === Categories.TO_DO && (
        <ul>
          {toDo.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </ul>
      )}
      <hr />

      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />

      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default ToDoList;
