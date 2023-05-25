import CreateToDo from "./CreateToDo";
import HeadToDo from "./HeadToDo";
import ListToDo from "./ListToDo";

const TemplateToDo = () => {
  return (
    <div className="w-[400px] h-[650px] rounded-2xl bg-gray-100 border-2 border-white flex flex-col m-auto p-5">
      <HeadToDo />
      <ListToDo />
      <CreateToDo />
    </div>
  );
};

export default TemplateToDo;
