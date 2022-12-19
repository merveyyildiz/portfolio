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
      {/** Desktop Menu */}
      <nav className="sm:justify-center space-x-2 md:space-x-4 hidden lg:flex">
        {Menu.map(([title, url, id]) => (
          <a
            href={url}
            key={id}
            className="rounded-lg px-1 md:px-3 py-2 text-slate-700 font-medium dark:text-white hover:text-pink-600 dark:hover:text-pink-600"
          >
            {title}
          </a>
        ))}
        <ThemeButton theme={theme} handleTheme={handleTheme}/>
      </nav>

      {/** Mobile Menu */}
      <nav className="sm:justify-center space-x-2 md:space-x-4 flex lg:hidden dark:text-white cursor-pointer">
        <a onClick={handleToggle}><MenuIcon className={`${toggleMenu ? "hidden" : "block" } w-7 h-7 fill-current`}/></a>

        <div className={`${toggleMenu ? "block" : "hidden" } h-full border-r-gray-600`}>
          <a onClick={handleToggle}><CloseIcon className="w-7 h-7 fill-current" /></a>
          <div className="flex flex-col  gap-5 mt-8 justify-start items-center absolute right-0 w-full pt-4 bg-primary-light dark:bg-gray-900" style={{"height": "calc(100% - 300px)"}}>
            {Menu.map(([title, url, id]) => (
                <a
                  href={url}
                  key={id}
                  className="rounded-lg px-1 md:px-3 py-2 text-slate-700 font-medium dark:text-white hover:text-pink-600 dark:hover:text-pink-600"
                >
                  {title}
                </a>
            ))}
            <ThemeButton theme={theme} handleTheme={handleTheme}/>
           </div> 
        </div>
      </nav>

    </header>
  );
};

export default Header;
