import React from 'react';

const Loader: React.FC = () => {
  return (
    <>
      <div id="loader" aria-hidden="true">
        <div className="top" style={{ alignItems: 'center' }}>

          <span className="mono">VM. / 2026</span>
        </div>
        <div className="loader-center">
          <div className="center-text-logo">
            <span className="char" style={{ animationDelay: '0s' }}>V</span>
            <span className="char" style={{ animationDelay: '0.15s' }}>M</span>
            <div className="logo-dot" style={{ animationDelay: '0.3s' }}></div>
          </div>
        </div>
        <div className="bar" id="loadBar"></div>
      </div>
      <div className="cur" id="cur"></div>
      <div className="cur-dot" id="curDot"></div>
      <canvas id="net" aria-hidden="true"></canvas>
    </>
  );
};

export default Loader;
