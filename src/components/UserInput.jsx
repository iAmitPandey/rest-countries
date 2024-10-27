import { GrFormSearch } from "react-icons/gr";

const UserInput = ({ searchValue, onSearchValueChange }) => {
  return (
    <>
      <div className="grid grid-cols-5 box-border items-center dark:bg-slate-800 mb-2 rounded w-full  md:rounded-lg dark:text-white md:m-0 md:">
        <GrFormSearch className="mx-2 col-span-1 md:size-6 md:mx-2 " />
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchValue}
          onChange={onSearchValueChange}
          className="col-span-4 items-center box-border w-full  outline-none  text-sm  h-7 rounded md:text-sm md:h-10   dark:bg-slate-800 dark:text-white md:rounded-lg"
        />
      </div>
    </>
  );
};

export default UserInput;
