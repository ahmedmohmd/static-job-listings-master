import { FC } from "react";
import headerImage from "../../assets/images/bg-header.svg";
import SearchBar from "./SearchBar";

const Header: FC = () => {
  return (
    <div className="h-[130px] sm:h-[100px] lg:h-[110px] xl:h-[200px] bg-[#5da5a4] relative">
      <img
        className="h-full w-full object-cover"
        src={headerImage}
        alt="SVG Pattern"
      />
    </div>
  );
};

export default Header;
