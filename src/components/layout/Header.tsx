import { Moon, ShoppingBag, Sun } from 'lucide-react';
import logo from '../../assets/shopa-icon.svg';
import useTheme from '../../features';

const Header = () => {
  const { theme, toggle } = useTheme();

  return (
    <header className="bg-surface px-6 py-4 border-border border-b sticky top-0">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 h-7">
          <img className="max-h-full" src={logo} alt="logo" />
          <span className="font-extrabold text-xl tracking-[-0.03em]">
            SHOPA
          </span>
        </div>
        <div className="flex gap-1 items-center text-secondary">
          <button
            className="flex w-10 h-10 justify-center items-center hover:text-text hover:bg-surface-2 rounded-md"
            aria-label="Toggle theme"
            onClick={toggle}
          >
            {theme === 'light' ? (
              <Moon className="h-5" />
            ) : (
              <Sun className="h-5" />
            )}
          </button>
          <button
            className="flex w-10 h-10 justify-center items-center hover:text-text hover:bg-surface-2 rounded-md"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
