import React from 'react'
import { useTheme } from 'next-themes';

const Header = () => {

  const {theme, setTheme} = useTheme("dark");

  return (
    <header className='flex items-center justify-end h-16 px-6 py-4 max-w-5xl mx-auto bg-transparent'>
        <span></span>
        <button 
            className='px-6 py-2 bg-pink-600 text-white rounded-md font-semibold uppercase'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === 'light' ?  'Dark' : 'Light'}
            </button>
    </header>
  )
}

export default Header