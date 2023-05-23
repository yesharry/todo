import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const [value, setValue] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value) {
      alert("Please write a to do");
      return;
    }
    setToDos((oldToDo) => [
      { text: value, id: Date.now(), category: category },
      ...oldToDo,
    ]);
    setValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={value} placeholder="Write a to do" />
      <button>ADD</button>
    </form>
  );
};

export default CreateToDo;
