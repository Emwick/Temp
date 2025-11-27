import React from 'react'
import { useTheme } from '../context/ThemeContext.jsx';

function ThemeComponents() {
    const {theme, toggleTheme} = useTheme();

  return (
    <div className={`theme-component ${theme}`}>
        <h2 className={`theme-text ${theme}`}>Current Theme: {theme}</h2>
        <button OnClick={toggleTheme}>Toggle Theme</button>
    </div>

  )
}

export default ThemeComponents