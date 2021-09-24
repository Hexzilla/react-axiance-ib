/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from 'react';

import {
  Banner1, Banner2, Banner3, Banner4,
} from '../../../../media/images/banner/index';
import './styles.scss';

const banners = [Banner1, Banner2, Banner3, Banner4];
const delay = 2500;

export default function MarketingCarousel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1)),
      delay,
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="marketing-carousel">
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {banners.map((banner) => (
            <div
              className="slide"
              style={{ backgroundImage: `url(${banner})` }}
            />
          ))}
        </div>

        <div className="slideshowDots">
          {banners.map((_, idx) => (
            <input
              type="button"
              className={`slideshowDot${index === idx ? ' active' : ''}`}
              onClick={() => {
                setIndex(idx);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
