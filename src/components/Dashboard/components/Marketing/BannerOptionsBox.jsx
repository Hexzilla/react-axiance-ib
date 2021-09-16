import React, { useState, useEffect } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import './Banners.scss';

const languageOptions = [{ key: 'en', name: 'English' }, { key: 'es', name: 'Spanish' }, { key: 'gr', name: 'Greek' }];
// const themeOptions = [{ key: 'demo', name: 'Demo Account Creation' }];
const sizeOptions = [
  { width: '970', height: '250' },
  { width: '300', height: '600' },
];

const BannerOptionsBox = ({
  theme, size, language, ibLink, closeForm,
}) => {
  const [bannerSize, setBannerSize] = useState({ width: size.width, height: size.height });
  const [bannerLanguage, setBannerLanguage] = useState(language);

  useEffect(() => {
    setBannerLanguage(language);
    setBannerSize({
      width: size.width,
      height: size.height,
    });
  }, [theme, size, language, ibLink]);

  const shareLink = `<a href="${ibLink}"> <img src="https://axiance-assets.netlify.app/portal/banners/${theme}/${bannerLanguage}/${bannerSize.width}x${bannerSize.height}.png" width="${bannerSize.width}" height="${bannerSize.height}" alt="Axiance Banner"/> </a>`;

  return (
    <div className="singleBannerOptions">
      <div className="singleBannerOptionsInner">
        <CancelIcon className="close-icon" onClick={closeForm} />
        <div className="imageBox">
          <img
            key={bannerLanguage}
            src={`https://axiance-assets.netlify.app/portal/banners/${theme}/${bannerLanguage}/${bannerSize.width}x${bannerSize.height}.png`}
            width={bannerSize.width}
            height={bannerSize.height}
            alt="banner"
            className="bannerImage"
          />
          <code className="codeSnippet">
            {shareLink}
          </code>
        </div>
        <div className="optionsBox">
          <label htmlFor="size" className="optionsLabel">
            Size
          </label>
          <select
            className="optionsSelector"
            onChange={(value) => {
              const sizeValue = value.target.value.split('x');
              setBannerSize({
                width: sizeValue[0],
                height: sizeValue[1],
              });
            }}
            id="size"
            value={`${bannerSize.width}x${bannerSize.height}`}
          >
            {sizeOptions.map((sizeOption) => (
              <option data-width={sizeOption.width} data-height={sizeOption.height} value={`${sizeOption.width}x${sizeOption.height}`}>
                {sizeOption.width}
                x
                {sizeOption.height}
              </option>
            ))}
          </select>
          <label htmlFor="language" className="optionsLabel">
            Language
          </label>
          <select className="optionsSelector" id="language" onChange={(l) => setBannerLanguage(l.target.value)} value={bannerLanguage}>
            {languageOptions.map((languageOption) => (
              <option value={languageOption.key}>{languageOption.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default BannerOptionsBox;
