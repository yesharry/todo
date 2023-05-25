import { useRecoilValue, useSetRecoilState } from "recoil";
import { IToDo, categoriesState, toDoState } from "../atoms";

const ItemToDo = ({ text, category, id }: IToDo) => {
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
    <div className=" bg-white shadow-md rounded-xl p-3 mb-4">
      {/* 여기 아직 비어있음 위에 div */}
      <span className=" text-lg pl-1">{text}</span>
      <div className=" mt-1">
        {Object.values(categories).map((availableCategory) => (
          <button
            key={availableCategory}
            onClick={() => changeCategory(availableCategory)}
            disabled={availableCategory === category}
            className=" w-[60px] h-7 bg-[#e0e0e0] disabled:bg-[#f1f1f1] text-xs disabled:text-[#8a8a8a] font-bold rounded-md mr-1"
          >
            {availableCategory}
          </button>
        ))}
        <button
          onClick={() => deleteToDo(text)}
          className=" w-7 h-7  text-xs text-red-500 font-bold text-center bg-red-200 rounded-md"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ItemToDo;
