import { useState, useEffect } from 'react'
import IconSun from './icons/IconSun'
import IconMoon from './icons/IconMoon'

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(
      (theme === 'light') ? 'dark' : 'light'
    )
  }

  return (
    <label className='swap swap-rotate px-3 md:px-4'>
      {/* this hidden checkbox controls the state */}
      <input type='checkbox' onChange={toggleTheme} checked={theme === 'dark'} />
      <IconSun />
      <IconMoon />
    </label>
  )
}

export default ThemeSwitcher