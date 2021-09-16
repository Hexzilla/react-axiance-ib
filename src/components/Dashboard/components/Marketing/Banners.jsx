import React, { useState } from 'react';
import './Banners.scss';
import SingleBanner from './SingleBanner';
import BannerOptionsBox from './BannerOptionsBox';

let bannerOptions;
const ibLink = 'https://google.com';
const languageOptions = [{ key: 'en', name: 'English' }, { key: 'es', name: 'Spanish' }];
const themeOptions = [{ key: 'demo', name: 'Demo Account Creation' }];
const sizeOptions = [
  { width: '970', height: '250' },
  { width: '300', height: '600' },
];

const Banners = () => {
  const [language, setLanguage] = useState('es');
  const [size, setSize] = useState({ width: '970', height: '250' });
  const [theme, setTheme] = useState('demo');
  const [showPopupOptions, setShowPopupOptions] = useState(false);
  const [popupOptions, setPopupOptions] = useState({});

  bannerOptions = [{
    ibLink,
    language,
    size,
    theme,
  }];

  if (language === 'all') {
    bannerOptions = [];
    languageOptions.map((languageOption) => (
      bannerOptions.push({
        ibLink,
        language: languageOption.key,
        size,
        theme,
      })
    ));
  }

  function showBannerOptions(options) {
    setShowPopupOptions(true);
    setPopupOptions(options);
  }

  return (
    <div className="banners">
      {showPopupOptions
        ? (
          <BannerOptionsBox
            closeForm={() => setShowPopupOptions(false)}
            theme={popupOptions.theme}
            size={popupOptions.size}
            language={popupOptions.language}
            ibLink={popupOptions.ibLink}
          />
        )
        : null}
      <div className="bannerSelectors">
        <div className="selector">
          <label htmlFor="language" className="optionsLabel">
            Language
          </label>
          <select className="optionsSelector" id="language" onChange={(l) => setLanguage(l.target.value)} value={language}>
            <option value="all">All</option>
            {languageOptions.map((languageOption) => (
              <option value={languageOption.key}>{languageOption.name}</option>
            ))}
          </select>
        </div>

        <div className="selector">
          <label htmlFor="size" className="optionsLabel">
            Size
          </label>
          <select
            className="optionsSelector"
            id="size"
            onChange={(s) => {
              const sizeValue = s.target.value.split('x');
              setSize({ width: sizeValue[0], height: sizeValue[1] });
            }}
            value={`${size.width}x${size.height}`}
          >
            {sizeOptions.map((sizeOption) => (
              <option data-width={sizeOption.width} data-height={sizeOption.height} value={`${sizeOption.width}x${sizeOption.height}`}>
                {sizeOption.width}
                x
                {sizeOption.height}
              </option>
            ))}
          </select>
        </div>
        <div className="selector">
          <label htmlFor="theme" className="optionsLabel">
            Theme
          </label>
          <select className="optionsSelector" id="theme" onChange={(l) => setTheme(l.target.value)} value={theme}>
            {themeOptions.map((themeOption) => (
              <option value={themeOption.key}>{themeOption.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="bannersBox">
        {bannerOptions.map((options) => (
          <div className="singleBannerBox" role="button" tabIndex="0" onClick={() => showBannerOptions(options)} onKeyDown={() => showBannerOptions(options)}>
            <SingleBanner
              theme={options.theme}
              size={options.size}
              language={options.language}
              ibLink={options.ibLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banners;
