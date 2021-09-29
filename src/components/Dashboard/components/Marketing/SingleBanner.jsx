import React, { useState, useEffect } from 'react';
import './Banners.scss';

const SingleBannerOptions = ({
  theme, size, language, ibLink,
}) => {
  const [bannerSize, setBannerSize] = useState({
    width: size.width,
    height: size.height,
  });
  const [bannerLanguage, setBannerLanguage] = useState(language);
  const [bannerLoaded, setBannerLoaded] = useState(false);

  useEffect(() => {
    setBannerLoaded(false);
    setBannerLanguage(language);
    setBannerSize({
      width: size.width,
      height: size.height,
    });
  }, [theme, size, language, ibLink]);

  return (
    <div className="singleBanner">
      <div className="imageBox">
        <img
          alt={`Banner-${theme}`}
          src={`https://axiance-assets.netlify.app/portal/banners/${theme}/${bannerLanguage}/${bannerSize.width}x${bannerSize.height}.png`}
          width={bannerSize.width}
          height={bannerSize.height}
          className={bannerLoaded ? 'bannerImage' : 'bannerImage bannerLoading'}
          onLoad={() => setTimeout(() => setBannerLoaded(true), 250)}
        />
      </div>
    </div>
  );
};

export default SingleBannerOptions;
