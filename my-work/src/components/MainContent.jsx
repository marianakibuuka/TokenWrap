import React from 'react';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="cards">
        <div className="card">
          <h3>TokenBalance</h3>
          <p> 90Tokens</p>
        </div>
        <div className="card">
          <h3>SwapBox</h3>
          <p>Swap</p>
        </div>
        <div className="card">
          <h3>GasTracker</h3>
          <p>50%</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
