import { useRecoilState, useRecoilValue } from "recoil";
import { categoriesState, categoryState } from "../atoms";

const HeadToDo = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const categories = useRecoilValue(categoriesState);

  const onClick = (category: string) => {
    setCategory(category);
  };

  return (
    <div className="">
      <h1 className="text-4xl font-bold">TO DO LIST</h1>
      <div className=" flex flex-col">
        <span className=" text-xs text-gray-500">CATEGORIES</span>
        <div className=" flex justify-between">
          {categories.map((availableCategory) => (
            <button
              key={availableCategory}
              onClick={() => onClick(availableCategory)}
              disabled={availableCategory === category}
              className=" w-[110px] h-[45px] bg-white rounded-xl shadow-md font-bold disabled:bg-[#24d6e3] disabled:text-white"
            >
              {availableCategory}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeadToDo;
