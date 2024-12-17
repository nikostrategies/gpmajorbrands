import React from 'react';
import Spline from '@splinetool/react-spline';

const SplineBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute inset-0 w-full h-full opacity-30">
        <Spline 
          scene="https://prod.spline.design/ez70MSlPT-gG1mrq/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      
      {/* Overlay gradient to ensure content readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"
        style={{ mixBlendMode: 'multiply' }}
      />
    </div>
  );
};

export default SplineBackground;