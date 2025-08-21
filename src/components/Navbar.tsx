import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Sword, Backpack, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const navLinks = [
    { path: '/', name: 'Home', icon: <Home className="h-5 w-5 mr-2" /> },
    { path: '/quest/1', name: 'Quests', icon: <Sword className="h-5 w-5 mr-2" /> },
    { path: '/inventory', name: 'Inventory', icon: <Backpack className="h-5 w-5 mr-2" /> },
    { path: '/profile', name: 'Profile', icon: <User className="h-5 w-5 mr-2" /> },
  ];

  return (
    <nav className="bg-surface pixel-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-accent font-bold text-xl">Crypt of the Three Fates</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button 
                  variant={location.pathname === link.path ? "default" : "outline"}
                  className={`flex items-center ${location.pathname === link.path ? 'bg-primary' : 'bg-surface hover:bg-primary/50'}`}
                >
                  {link.icon}
                  {link.name}
                </Button>
              </Link>
            ))}
            <Button 
              variant="outline" 
              onClick={toggleTheme}
              className="bg-surface hover:bg-primary/50"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button 
              variant="outline" 
              onClick={toggleMenu}
              className="bg-surface hover:bg-primary/50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 animate-pixel-fade">
            <div className="flex flex-col space-y-3 pixel-border p-4 bg-surface">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                >
                  <Button 
                    variant={location.pathname === link.path ? "default" : "outline"}
                    className={`w-full flex items-center justify-start ${location.pathname === link.path ? 'bg-primary' : 'bg-surface hover:bg-primary/50'}`}
                  >
                    {link.icon}
                    {link.name}
                  </Button>
                </Link>
              ))}
              <Button 
                variant="outline" 
                onClick={toggleTheme}
                className="w-full flex items-center justify-start bg-surface hover:bg-primary/50"
              >
                {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
