import { FC, useContext } from "react";
import AppContext from "../../utils/AppConext";

interface Porps {
  altText: string;
  jobData: any;
}

const JobCard: FC<Porps> = ({
  altText,
  jobData: {
    company,
    logo,
    new: isNew,
    featured: isFeatured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
  },
}) => {
  const context = useContext(AppContext);

  return (
    <div className="w-full shadow-xl shadow-[#d4e9ec] rounded-xl">
      <div className=" bg-white px-4 rounded-xl py-8 flex justify-between flex-col gap-6 md:flex-row items-center">
        <div className="flex justify-center items-center gap-4  rounded-xl flex-col md:flex-row">
          <img src={logo} alt={altText} />
          <div className="flex justify-center items-center flex-col gap-3 md:items-start">
            <div className="flex  justify-start items-center gap-2">
              <span className="text-lg font-bold text-[#57a7a4]">
                {company}
              </span>
              {isNew && (
                <span className="py-1 px-2 text-sm rounded-2xl bg-[#57a7a4] text-white font-semibold">
                  New!
                </span>
              )}
              {isFeatured && (
                <span className="py-1 px-2 text-sm rounded-2xl bg-[#2b3a38] text-white font-semibold">
                  Featured
                </span>
              )}
            </div>
            <h1 className="font-bold text-[#57a7a4] text-2xl md:text-start text-center">
              {position}
            </h1>
            <p className="font-semibold text-[#868e8c]">
              {postedAt} . {contract} . {location}
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-2">
          <button
            onClick={() => context?.onAdd(role)}
            className="p-2 rounded-md bg-[#edf2f4] hover:bg-[#57a7a4] text-[#57a7a4] hover:text-white font-semibold"
          >
            {role}
          </button>
          <button
            onClick={() => context?.onAdd(level)}
            className="p-2 rounded-md bg-[#edf2f4] hover:bg-[#57a7a4] text-[#57a7a4] hover:text-white font-semibold"
          >
            {level}
          </button>
          {languages.map((language) => {
            return (
              <button
                key={language}
                onClick={() => context?.onAdd(language)}
                className="p-2 rounded-md bg-[#edf2f4] hover:bg-[#57a7a4] text-[#57a7a4] hover:text-white font-semibold"
              >
                {language}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
