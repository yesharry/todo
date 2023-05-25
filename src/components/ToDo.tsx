import CreateToDo from "./CreateToDo";
import HeadToDo from "./HeadToDo";
import ToDoList from "./ToDoList";

const ToDo = () => {
  return (
    <div className="w-[400px] h-[650px] rounded-2xl bg-gray-100 border-2 border-white px-6 py-5">
      <HeadToDo />
      <ToDoList />
      <CreateToDo />
    </div>
  );
};

export default ToDo;
