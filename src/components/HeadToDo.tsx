import { useRecoilState, useRecoilValue } from "recoil";
import { categoriesState, categoryState } from "../atoms";

const HeadToDo = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const categories = useRecoilValue(categoriesState);

  const onClick = (category: string) => {
    setCategory(category);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold pt-7">TO DO LIST</h1>
      <div className=" flex flex-col">
        <span className=" text-xs text-gray-500 mt-5">CATEGORIES</span>
        <div className=" flex justify-between mt-2">
          {categories.map((availableCategory) => (
            <button
              key={availableCategory}
              onClick={() => onClick(availableCategory)}
              disabled={availableCategory === category}
              className=" w-[110px] h-[45px] bg-white disabled:bg-[#24d6e3] rounded-xl shadow-md hover:shadow-inner disabled:shadow-md text-sm font-bold hover:text-[#24d6e3] disabled:text-white"
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
