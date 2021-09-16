import React from 'react';
import './styles.scss';

/* eslint-disable jsx-a11y/label-has-associated-control */
const BannerCarousel = () => (
  <div className="marketing-carousel">

    <div className="carousel">
      <ul className="slides">
        <input type="radio" name="radio-buttons" id="img-4" checked />
        <li className="slide-container">
          <div className="slide-image">
            <div className="img" style={{ backgroundImage: 'url("/assets/dashboard/marketing-banner/commosities@2x.png")' }} />
          </div>
          <div className="carousel-controls">
            <label htmlFor="img-3" className="prev-slide">
              <span>&lsaquo;</span>
            </label>
            <label htmlFor="img-2" className="next-slide">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>
        <input type="radio" name="radio-buttons" id="img-5" />
        <li className="slide-container">
          <div className="slide-image">
            <div className="img" style={{ backgroundImage: 'url("/assets/dashboard/marketing-banner/trading-central-banner@2x.png")' }} />
          </div>
          <div className="carousel-controls">
            <label htmlFor="img-1" className="prev-slide">
              <span>&lsaquo;</span>
            </label>
            <label htmlFor="img-3" className="next-slide">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>
        <input type="radio" name="radio-buttons" id="img-6" />
        <li className="slide-container">
          <div className="slide-image">
            <div className="img" style={{ backgroundImage: 'url("/assets/dashboard/marketing-banner/welcome-banner@2x.png")' }} />
          </div>
          <div className="carousel-controls">
            <label htmlFor="img-4" className="prev-slide">
              <span>&lsaquo;</span>
            </label>
            <label htmlFor="img-5" className="next-slide">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>
        <div className="carousel-dots">
          <label htmlFor="img-4" className="carousel-dot" id="img-dot-4" />
          <label htmlFor="img-5" className="carousel-dot" id="img-dot-5" />
          <label htmlFor="img-6" className="carousel-dot" id="img-dot-6" />
        </div>
      </ul>
    </div>
  </div>
);

export default BannerCarousel;
