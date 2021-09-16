import React from 'react';
import './styles.scss';
import { FixedSizeList as List } from 'react-window';

const Row = ({ style }) => (
  <div className="grid-row" style={style}>
    <div className="title">
      <div className="unit">NZD/USD</div>
      <div className="time">1.12PM</div>
    </div>
    <div className="text">
      Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Alias architecto corporis
    </div>
  </div>
);

const MarketAnalysis = () => (
  <div className="market-analysis widget">
    <h3 className="name">Markets Analysis</h3>

    <div className="list">
      <List
        height={250}
        itemCount={10}
        itemSize={80}
      >
        {Row}
      </List>
    </div>

    <button className="nd-btn" type="button">Read More</button>
  </div>
);

export default MarketAnalysis;
