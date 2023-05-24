import { useSetRecoilState } from "recoil";
import { Categories, categoryState } from "../atoms";

const HeadToDo = () => {
  const setCategory = useSetRecoilState(categoryState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <div className="pb-5">
      <h1 className="text-3xl text-gray-700 font-bold pb-5">TO DO LIST</h1>
      <div className=" flex justify-between">
        <button
          value={Categories.TO_DO}
          onClick={onClick}
          className=" w-[110px] h-[50px] bg-white hover:bg-[#96c9ff] hover:text-white focus:bg-[#65b0ff] focus:text-white rounded-xl font-bold "
        >
          TODO
        </button>
        <button
          value={Categories.DOING}
          onClick={onClick}
          className=" w-[110px] h-[50px] bg-white hover:bg-[#96c9ff] hover:text-white rounded-xl font-bold "
        >
          DOING
        </button>
        <button
          value={Categories.DONE}
          onClick={onClick}
          className=" w-[110px] h-[50px] bg-white hover:bg-[#96c9ff] hover:text-white rounded-xl font-bold "
        >
          DONE
        </button>
      </div>
    </div>
  );
};

export default HeadToDo;
