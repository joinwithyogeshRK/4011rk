import { Link } from 'react-router-dom';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface pixel-border mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-accent font-bold text-lg mb-4">Crypt of the Three Fates</h3>
            <p className="text-surface-foreground">A retro pixel RPG adventure where your choices shape your destiny.</p>
          </div>
          
          <div>
            <h3 className="text-accent font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/quest/1" className="hover:text-accent transition-colors">Quests</Link></li>
              <li><Link to="/inventory" className="hover:text-accent transition-colors">Inventory</Link></li>
              <li><Link to="/profile" className="hover:text-accent transition-colors">Profile</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-accent font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="mailto:info@cryptofthreefates.com" className="hover:text-accent transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-surface-muted mt-6 pt-6 text-center">
          <p className="text-surface-foreground text-sm">&copy; {currentYear} Crypt of the Three Fates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
