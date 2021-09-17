import React, { useState, useEffect } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import { useSnackbar } from 'notistack';
import { bannerHelper } from '../../../../helpers';
import './Banners.scss';

const BannerOptionsBox = ({
  theme, size, language, ibLink, closeForm,
}) => {
  const [bannerSize, setBannerSize] = useState({ width: size.width, height: size.height });
  const [bannerLanguage, setBannerLanguage] = useState(language);
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [sizeOptions, setSizeOptions] = useState([]);
  const [languageOptions, setLanguageOptions] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setBannerLanguage(language);
    setBannerSize({
      width: size.width,
      height: size.height,
    });
  }, [theme, size, language, ibLink]);

  useEffect(async () => {
    const themeSizeOptions = await bannerHelper.getSizeByThemeLng(theme, bannerLanguage);
    setSizeOptions(themeSizeOptions);
  }, [bannerLanguage]);

  useEffect(async () => {
    const themeLanguageOptions = await bannerHelper.getLanguageByThemeSize(theme, bannerSize);
    setLanguageOptions(themeLanguageOptions);
  }, [bannerSize]);

  useEffect(() => {
    setBannerLoaded(false);
  }, [bannerLanguage, bannerSize]);

  function copyCode(code) {
    navigator.clipboard.writeText(code);
    enqueueSnackbar('Code copied!', {
      variant: 'success',
    });
  }

  const shareLink = `<a href="${ibLink}"> <img src="https://axiance-assets.netlify.app/portal/banners/${theme}/${bannerLanguage}/${bannerSize.width}x${bannerSize.height}.png" width="${bannerSize.width}" height="${bannerSize.height}" alt="Axiance Banner"/> </a>`;

  return (
    <div className="singleBannerOptions">
      <div className="singleBannerOptionsInner">
        <CancelIcon className="close-icon" onClick={closeForm} />
        <div className="imageBox">
          <img
            src={`https://axiance-assets.netlify.app/portal/banners/${theme}/${bannerLanguage}/${bannerSize.width}x${bannerSize.height}.png`}
            width={bannerSize.width}
            height={bannerSize.height}
            alt={`Banner-${theme}`}
            className={bannerLoaded ? 'bannerImage' : 'bannerImage bannerLoading'}
            onLoad={() => setTimeout(() => setBannerLoaded(true), 250)}
          />
          <div className="optionsBox">
            <div className="optionWrap">
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
            </div>
            <div className="optionWrap">
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
        <div className="codeBox">
          <code className="codeSnippet">
            {shareLink}
          </code>
          <button type="button" className="green-cta" onClick={() => copyCode(shareLink)}>
            Copy Code
          </button>
        </div>

      </div>
    </div>
  );
};

export default BannerOptionsBox;
