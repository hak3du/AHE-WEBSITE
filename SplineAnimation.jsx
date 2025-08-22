import React from 'react';
import Spline from '@splinetool/react-spline';

export const SplineAnimation = () => {
  return (
    <div style={{ 
      width: "700px", 
      height: "700px", 
      overflow: "visible", 
      position: "relative" 
    }}>
      <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
    </div>
  );
};

export default SplineAnimation;