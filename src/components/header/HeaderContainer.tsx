import React from 'react';

interface HeaderContainerProps {
  isScrolled: boolean;
  children: React.ReactNode;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({ isScrolled, children }) => {
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#1a1a1a]/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-8 h-20 flex items-center">
        {children}
      </div>
    </header>
  );
};

export default HeaderContainer;