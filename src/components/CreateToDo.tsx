import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, isDarkState, toDoState } from "../atoms";
import { useState } from "react";

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const [value, setValue] = useState("");
  const darkMode = useRecoilValue(isDarkState);

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
    <>
      <form onSubmit={onSubmit} className=" w-full flex justify-between mt-4">
        <input
          onChange={onChange}
          value={value}
          placeholder="Write a to do"
          className={` w-3/4 h-[40px] rounded-lg p-3 shadow-md border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[3px] ${
            darkMode
              ? " text-black focus:border-[#ff55ad]"
              : " focus:border-[#24d6e3]"
          }`}
        />
        <button
          className={` w-[75px] shadow-md hover:shadow-inner rounded-lg text-sm text-white font-bold ${
            darkMode ? " bg-[#ff55ad]" : " bg-[#24d6e3]"
          }`}
        >
          ADD
        </button>
      </form>
    </>
  );
};

export default CreateToDo;
