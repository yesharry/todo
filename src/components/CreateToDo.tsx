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
      { text: value, id: Date.now(), category },
      ...oldToDo,
    ]);
    setValue("");
  };

  return (
    <form onSubmit={onSubmit} className=" w-full flex justify-between pt-2">
      <input
        onChange={onChange}
        value={value}
        placeholder="Write a to do"
        className=" w-3/4 h-[40px] rounded-lg p-3 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:border-[3px]"
      />
      <button className=" w-[70px] bg-[#ffbcc3] text-white rounded-lg font-bold">
        ADD
      </button>
    </form>
  );
};

export default CreateToDo;
