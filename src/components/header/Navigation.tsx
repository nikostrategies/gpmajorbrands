import React from 'react';
import { navItems } from '../../utils/constants';

const Navigation = () => {
  return (
    <nav className="hidden md:flex items-center justify-end flex-1">
      <ul className="flex items-center space-x-12">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="relative text-white text-[16px] tracking-wider font-light
                       hover:text-blue-300 transition-all duration-200 ease-in-out group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-300 
                           transition-all duration-200 ease-in-out group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;