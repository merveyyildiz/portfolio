import React, { useEffect } from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme("dark");

  /** set dark mode */
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if(theme === "system" || theme === null) {
      setTheme("dark") ;
    }
  },[])

  return (
    <header className="flex items-center justify-center md:justify-end h-16 px-4 md:px-6 py-4 max-w-5xl mx-auto bg-transparent mb-6">
      <nav className="flex sm:justify-center space-x-2 md:space-x-4">
        {[
          ["Home", "/", 1],
          ["About", "/about", 2],
          ["Projects", "/projects", 3],
        ].map(([title, url, id]) => (
          <a
            href={url}
            key={id}
            className="rounded-lg px-1 md:px-3 py-2 text-slate-700 font-medium dark:text-white hover:text-pink-600 dark:hover:text-pink-600"
          >
            {title}
          </a>
        ))}
      </nav>
      <button
        className="px-6 py-2 font-semibold "
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? (
          <img className="h-5" alt="moon" src="./assets/images/moon.svg" />
        ) : (
          <img className="h-5" alt="sun" src="./assets/images/sun.png" />
        )}
      </button>
    </header>
  );
};

export default Header;
