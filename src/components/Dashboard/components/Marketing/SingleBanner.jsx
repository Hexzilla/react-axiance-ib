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

  useEffect(() => {
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
          key={bannerLanguage}
          src={`https://axiance-assets.netlify.app/portal/banners/${theme}/${bannerLanguage}/${bannerSize.width}x${bannerSize.height}.png`}
          width={bannerSize.width}
          height={bannerSize.height}
          alt="banner"
          className="bannerImage"
        />
      </div>
    </div>
  );
};

export default SingleBannerOptions;
