import React from 'react';

const Loader: React.FC = () => {
  return (
    <>
      <div id="loader" aria-hidden="true">
        <div className="top">
          <span className="mono">Initializing experience</span>
          <span className="mono">VM. / 2026</span>
        </div>
        <div className="count" id="loadCount">000</div>
        <div className="bar" id="loadBar"></div>
      </div>
      <div className="cur" id="cur"></div>
      <div className="cur-dot" id="curDot"></div>
      <canvas id="net" aria-hidden="true"></canvas>
    </>
  );
};

export default Loader;
