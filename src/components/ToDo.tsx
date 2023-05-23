import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);

  const changeCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
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
    <li>
      <button onClick={() => deleteToDo(text)}>x</button>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={changeCategory}>
          TO DO
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={changeCategory}>
          DOING
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={changeCategory}>
          DONE
        </button>
      )}
    </li>
  );
};

export default ToDo;
