import { useRecoilValue, useSetRecoilState } from "recoil";
import { IToDo, categoriesState, toDoState } from "../atoms";

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const categories = useRecoilValue(categoriesState);

  const changeCategory = (event: string) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: event };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  const deleteToDo = (text: string) => {
    if (window.confirm(`${text}를 정말 삭제하시겠어요?`)) {
      setToDos((oldToDos) => {
        const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
        return [
          ...oldToDos.slice(0, targetIndex),
          ...oldToDos.slice(targetIndex + 1),
        ];
      });
    }
  };

  return (
    <div className=" w-full h-[50px] bg-white shadow-md rounded-xl my-4">
      <span>{text}</span>
      {Object.values(categories).map((availableCategory) => (
        <button
          key={availableCategory}
          onClick={() => changeCategory(availableCategory)}
          disabled={availableCategory === category}
          className=" disabled:text-gray-600"
        >
          {availableCategory}
        </button>
      ))}
      <button
        onClick={() => deleteToDo(text)}
        className=" w-7 h-7 text-red-500 font-bold text-center border-[3px] border-red-500 rounded-full"
      >
        X
      </button>
    </div>
  );
};

export default ToDo;
