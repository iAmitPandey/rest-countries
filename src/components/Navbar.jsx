import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

const Navbar = () => {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <>
      <ul className="w-full flex justify-between box-border text-xs  font-bold p-4 dark:bg-slate-800 dark:text-white sm:text-sm md:text-xl md:p-8 xl:px-12 xl:text-xl">
        <li>Where in the world?</li>
        <li className="flex">
          <button onClick={() => darkModeHandler()}>
            {dark && (
              <div className="flex items-center">
                <IoSunny />
                <p className="pl-2"> Light Mode </p>
              </div>
            )}

            {!dark && (
              <div className="flex items-center">
                <IoMoon />
                <p className="pl-2"> Dark Mode</p>
              </div>
            )}
          </button>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
