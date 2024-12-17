import React, { useState, useEffect } from 'react';
import HeaderContainer from './header/HeaderContainer';
import Logo from './header/Logo';
import Navigation from './header/Navigation';
import MobileMenu from './header/MobileMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <div className="flex items-center justify-between w-full">
        <Logo />
        <Navigation />
        <MobileMenu 
          isOpen={isMobileMenuOpen}
          onToggle={toggleMobileMenu}
        />
      </div>
    </HeaderContainer>
  );
};

export default Header;