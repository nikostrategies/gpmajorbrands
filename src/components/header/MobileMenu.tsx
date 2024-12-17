import React from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../../utils/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onToggle }) => {
  return (
    <div className="md:hidden">
      <button
        className="text-white p-2 hover:text-blue-300 transition-colors duration-200"
        onClick={onToggle}
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <nav className="absolute top-full left-0 right-0 bg-[#1a1a1a]/95 backdrop-blur-sm">
          <ul className="container mx-auto px-8">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block text-white text-[16px] tracking-wider py-4
                           hover:bg-white/5 hover:text-blue-300 transition-all duration-200"
                  onClick={onToggle}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;