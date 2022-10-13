import { FC, useContext } from "react";
import AppContext from "../../utils/AppConext";

interface Props {
  name: string;
}

const Tag: FC<Props> = ({ name }) => {
  const context = useContext(AppContext);

  return (
    <div className="rounded-md py-2 px-3 bg-[#eff5f5] flex justify-center items-center overflow-hidden  gap-2">
      <span className="font-bold text-[#57a7a4]">{name}</span>
      <span
        onClick={() => context?.onDelete(name)}
        className="flex justify-center items-center overflow-hidden bg-[#57a7a4] hover:cursor-pointer duration-200 hover:bg-[#293938] rounded-md p-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="#fff"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    </div>
  );
};

export default Tag;
