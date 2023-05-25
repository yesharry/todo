import { useRecoilState, useRecoilValue } from "recoil";
import { categoriesState, categoryState, isDarkState } from "../atoms";

const HeadToDo = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const categories = useRecoilValue(categoriesState);
  const [darkMode, setDarkMode] = useRecoilState(isDarkState);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const onClick = (category: string) => {
    setCategory(category);
  };
  return (
    <>
      <div className=" flex justify-between items-center pt-6">
        <h1 className="text-4xl font-bold">TO DO LIST</h1>
        {darkMode ? (
          <div className=" w-[51px] h-[31px] border-[3px] border-[#333333] rounded-full">
            <button
              onClick={toggleDarkMode}
              className=" w-[25px] h-[25px] bg-[#333333] text-xs rounded-full absolute transition duration-300 translate-x-0"
            >
              🌝
            </button>
          </div>
        ) : (
          <div className=" w-[51px] h-[31px] border-[3px] border-white rounded-full shadow-md">
            <button
              onClick={toggleDarkMode}
              className=" w-[25px] h-[25px] bg-white text-xs rounded-full absolute transition ease-in translate-x-5"
            >
              🌞
            </button>
          </div>
        )}
      </div>
      <div className=" flex flex-col">
        <span className=" text-xs text-gray-500 mt-5">CATEGORIES</span>
        <div className=" flex justify-between mt-2">
          {categories.map((availableCategory) => (
            <button
              key={availableCategory}
              onClick={() => onClick(availableCategory)}
              disabled={availableCategory === category}
              className={` w-[110px] h-[45px] rounded-xl shadow-md hover:shadow-inner disabled:shadow-md text-sm font-bold disabled:text-white  ${
                darkMode
                  ? " bg-[#333333] hover:text-[#ff55ad] disabled:bg-[#ff55ad]"
                  : " bg-white hover:text-[#24d6e3] disabled:bg-[#24d6e3]"
              }`}
            >
              {availableCategory}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeadToDo;
