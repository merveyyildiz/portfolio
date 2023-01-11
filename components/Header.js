import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import MenuIcon from "../components/icons/MenuIcon";
import CloseIcon from "./icons/CloseIcon";
import ThemeButton from "./ThemeButton";

const Menu = [
  ["Home", "/", 1],
  ["About", "/about", 2],
  ["Projects", "/projects", 3],
  ["Contact", "/contact", 4],
];

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { theme, setTheme } = useTheme("dark");

  /** set dark mode */
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if(theme === "system" || theme === null) {
      setTheme("dark") ;
    }
  },[])

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  }

  const handleTheme = (event) => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <header className="flex justify-end h-16 px-4 md:px-6 py-4 max-w-5xl mx-auto bg-transparent mb-6">

      <nav className="sm:justify-center space-x-2 md:space-x-4 lg:flex md:cursor-pointer">
        <a onClick={handleToggle} className="md:inline-block lg:hidden">
          <MenuIcon className={`${toggleMenu ? "hidden" : "block" } w-7 h-7 fill-current`}/>
        </a>

        <div className={`md:${toggleMenu  ? "inline-block" : "hidden"} hidden lg:block md:h-full md:border-r-gray-600`}>
          <a onClick={handleToggle} className={`md:${toggleMenu  ? "inline-block" : "hidden"} hidden lg:hidden`} >
            <CloseIcon className="w-7 h-7 fill-current" />
          </a>
          
          <div className="flex flex-col lg:flex-row md:w-full md:gap-5 mt-8 lg:mt-1 lg:mr-3 justify-start lg:justify-end md:items-center md:absolute md:right-0 md:pt-4 lg:pt-0 md:bg-primary-light md:dark:bg-gray-900 duration-300" >
            {
              Menu.map(([title, url, id]) => (
                <a
                  href={url}
                  key={id}
                  className="rounded-lg px-1 md:px-3 py-2 text-slate-700 font-medium dark:text-white hover:text-pink-600 dark:hover:text-pink-600 duration-300"
                >
                  {title}
                </a>
              ))
            }
          
            <ThemeButton theme={theme} handleTheme={handleTheme}/>
  
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
