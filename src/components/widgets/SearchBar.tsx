import Tag from "../atoms/Tag";
import { FC, useContext } from "react";
import AppContext from "../../utils/AppConext";

const SearchBar: FC = () => {
  const context = useContext(AppContext);

  return (
    <div className="container mx-auto px-4 md:px-14 lg:px-28 relative -translate-y-8">
      <div className="min-h-[75px] rounded-xl bg-white flex justify-between items-center px-8 py-4 shadow-lg shadow-[#d4e9ec]">
        <div className="flex justify-center items-center gap-2 flex-wrap">
          {context?.tags.map((tage: any) => (
            <Tag key={tage} name={tage} />
          ))}
        </div>
        <button
          onClick={context?.onClear}
          className="font-semibold text-gray-500 hover:text-[#64babb] duration-100 hover:underline hover:underline-offset-2"
        >
          clear
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
