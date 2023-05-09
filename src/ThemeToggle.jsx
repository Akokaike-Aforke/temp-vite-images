import React, { useState } from 'react'
import { useGlobalContext } from './context';
import { FaSun, FaMoon } from 'react-icons/fa'
const ThemeToggle = () => {
    const {darkTheme, toggleDarkTheme} = useGlobalContext();
    console.log(`dark theme: ${darkTheme}`)
  return (
      <section className='toggle-container'>
          <button className="dark-toggle" onClick={toggleDarkTheme}>
              {darkTheme ? (<FaSun className='toggle-icon' />) :
              (<FaMoon className='toggle-icon' />)}
              </button>
      </section>
  )
}

export default ThemeToggle