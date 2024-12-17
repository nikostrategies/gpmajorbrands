import React from 'react';
import ServiceGrid from './services/ServiceGrid';
import SectionTitle from './shared/SectionTitle';
import SectionTransition from './shared/SectionTransition';
import SplineBackground from './services/SplineBackground';
import { colors } from '../styles/colors';
import FadeInUp from './animations/FadeInUp';

const Services = () => {
  return (
    <section className="relative">
      <div 
        className="py-24 relative overflow-hidden"
        style={{ 
          background: `linear-gradient(180deg, 
            ${colors.black.secondary} 0%, 
            ${colors.black.primary} 100%)`
        }}
      >
        {/* Spline 3D Background */}
        <SplineBackground />
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <FadeInUp>
            <SectionTitle
              title="Our Services"
              subtitle="Crafting Excellence in Every Detail"
            />
          </FadeInUp>
          
          <ServiceGrid />
        </div>
      </div>

      {/* Transition pattern */}
      <SectionTransition />
    </section>
  );
};

export default Services;