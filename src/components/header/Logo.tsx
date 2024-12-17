import React from 'react';
import companyLogo from '../../logo.png';

const Logo = () => {
  return (
    <a 
      href="/" 
      className="block transition-transform duration-200 ease-in-out hover:scale-105"
      aria-label="GP Pacific Contracting Group LTD - Home"
    >
      <img
        src={companyLogo}
        alt="GP Pacific Contracting Group LTD"
        className="h-[45px] w-auto object-contain"
        style={{ imageRendering: 'crisp-edges' }}
      />
    </a>
  );
};

export default Logo;