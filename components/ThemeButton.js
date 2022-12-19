import React from 'react'

const ThemeButton = React.memo(({theme, handleTheme}) => {
  return (
    <button
        className="px-6 py-2 font-semibold "
        onClick={handleTheme}
      >
        {theme === "light" ? (
          <img className="h-5" alt="moon" src="./assets/images/moon.svg" />
        ) : (
          <img className="h-5" alt="sun" src="./assets/images/sun.png" />
        )}
    </button>
  )
})

export default ThemeButton;