/* eslint-disable no-console */
/* eslint-disable global-require */
/* eslint-disable no-shadow */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import VideoCard from './VideoCard';
import VideoPlayer from './VideoPlayer';
import Popover from '../CustomPopover';
import './styles.scss';

const languageOptions = [
  { key: 0, name: 'All' },
  { key: 1, name: 'English' },
  { key: 2, name: 'Spanish' },
];
const sizeOptions = [
  { key: 0, name: 'All' },
  { key: 1, name: '1920x1080' },
  { key: 2, name: '1080x1080' },
  { key: 3, name: '1080x1920' },
];
const themeOptions = [
  { key: 0, name: 'All' },
  { key: 1, name: 'Promotional' },
  { key: 2, name: 'Educational' },
  { key: 3, name: 'Other' },
];

const MarketingVideo = () => {
  const [videos, setVideos] = useState([]);
  const [videoSize, setVideoSize] = useState(0);
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState(0);
  const [playState, setPlayState] = useState(false);
  const [videoUrl, setVideoUrl] = useState();

  useEffect(() => {
    const samples = require('./videos.json');
    setVideos(samples);
  }, []);

  const handleChangeLanguage = (event) => {
    setLanguage(Number(event.target.value));
  };

  const handleChangeSize = (event) => {
    setVideoSize(Number(event.target.value));
  };

  const handleChangeTheme = (event) => {
    setTheme(Number(event.target.value));
  };

  const onPlayVideo = (url) => {
    // eslint-disable-next-line no-console
    console.log('onPlayVideo', url);
    setVideoUrl(url);
    setPlayState(true);
  };

  const onStopPlay = () => {
    // eslint-disable-next-line no-console
    console.log('onStopPlay');
    setPlayState(false);
  };

  const filterVidoes = (language, size, theme) => {
    let filtered = videos;
    if (language !== 0) {
      const option = languageOptions.find((it) => it.key === language);
      if (option) {
        filtered = filtered.filter((it) => it.language === option.name);
      }
    }
    if (size !== 0) {
      const option = sizeOptions.find((it) => it.key === size);
      if (option) {
        filtered = filtered.filter((it) => it.size === option.name);
      }
    }
    if (theme !== 0) {
      const option = themeOptions.find((it) => it.key === theme);
      if (option) {
        filtered = filtered.filter((it) => it.theme === option.name);
      }
    }
    return filtered;
  };
  const filteredVidoes = filterVidoes(language, videoSize, theme);

  return (
    <div className="marketing-video">
      <div className="referralSelectors">
        <div className="selector">
          <label htmlFor="Language" className="optionsLabel">
            Language
          </label>
          <select className="optionsSelector" id="language" value={language} onChange={handleChangeLanguage}>
            {languageOptions.map((option) => (
              <option key={option.key} value={option.key}>{option.name}</option>
            ))}
          </select>
        </div>

        <div className="referralSelectors">
          <div className="selector">
            <label htmlFor="size" className="optionsLabel">
              Size
            </label>
            <select className="optionsSelector" id="size" value={videoSize} onChange={handleChangeSize}>
              {sizeOptions.map((option) => (
                <option key={option.key} value={option.key}>{option.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="referralSelectors">
          <div className="selector">
            <label htmlFor="Theme" className="optionsLabel">
              Theme
            </label>
            <select className="optionsSelector" id="theme" value={theme} onChange={handleChangeTheme}>
              {themeOptions.map((option) => (
                <option key={option.key} value={option.key}>{option.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="filter-section">
          <div className="filter">
            <button className="nd-btn" type="button">Apply</button>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="campaign-name">
          <div className="label">CAMPAIGN NAME</div>
          <div className="campaign-name-input">
            <input className="" />
            <span>
              Additional Parameters (optional)
              <Popover
                className="warning-popover"
                showArrow
                triggerNode={<ErrorOutlineIcon />}
                trigger="click"
              >
                <div className="champaign-name-popover">
                  Add tracking parameters to know which users came through this creative
                </div>
              </Popover>
            </span>
          </div>
        </div>
        <VideoPlayer open={playState} url={videoUrl} onClose={onStopPlay} />
        <div className="videos">
          {filteredVidoes.map((video) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <VideoCard key={video.id} {...video} onPlayVideo={onPlayVideo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingVideo;
