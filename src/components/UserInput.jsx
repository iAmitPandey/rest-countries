import { GrFormSearch } from "react-icons/gr";

const UserInput = ({ searchValue, onSearchValueChange }) => {
  return (
    <>
      <div className="flex items-center box-border  dark:bg-slate-800 mb-2 rounded w-full  md:rounded-lg dark:text-white">
        <GrFormSearch className="mx-2 md:size-8 md:mx-4" />
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchValue}
          onChange={onSearchValueChange}
          className="flex items-center box-border w-full  text-sm h-7 rounded md:text-xl md:h-10   dark:bg-slate-800 dark:text-white md:rounded-lg"
        />
      </div>
    </>
  );
};

export default UserInput;
