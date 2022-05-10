import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

interface ThemeType {
  theme: string;
  toggleTheme: () => void
}

function ToggleButton() {
  // @ts-ignore
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <button
      className="bg-slate-800"
      onClick={toggleTheme}
    >
      Toggle to {theme === 'light' ? 'dark' : 'light'}
    </button>
  )
}

export default ToggleButton;