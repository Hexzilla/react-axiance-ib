/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import VideoCard from './VideoCard';
import VideoPlayer from './VideoPlayer';
import Popover from '../CustomPopover';
import './styles.scss';
import videos from './videos';
import videoOptions from '../../../../utils/videoOptions';

const MarketingVideo = () => {
  const [videoSize, setVideoSize] = useState(0);
  const [language, setLanguage] = useState(0);
  const [theme, setTheme] = useState(0);
  const [playState, setPlayState] = useState(false);
  const [videoUrl, setVideoUrl] = useState();
  const [filteredVideos, setFilteredVideos] = useState([]);

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
    setVideoUrl(url);
    setPlayState(true);
  };

  const onStopPlay = () => {
    setPlayState(false);
  };

  const filterVideos = (Videolanguage, size, VideoTheme) => {
    let filtered = videos;
    if (Videolanguage !== 0) {
      const option = videoOptions.languageOptions.find((l) => l.key === Videolanguage);
      if (option) {
        filtered = filtered.filter((v) => v.language === option.name);
      }
    }
    if (size !== 0) {
      const option = videoOptions.sizeOptions.find((it) => it.key === size);
      if (option) {
        filtered = filtered.filter((it) => it.size === option.name);
      }
    }
    if (VideoTheme !== 0) {
      const option = videoOptions.themeOptions.find((it) => it.key === VideoTheme);
      if (option) {
        filtered = filtered.filter((it) => it.theme === option.name);
      }
    }
    return filtered;
  };

  useEffect(() => {
    setFilteredVideos(filterVideos(language, videoSize, theme));
  }, [videoSize, language, theme]);

  return (
    <div className="marketing-video">
      <div className="referralSelectors">
        <div className="selector">
          <label htmlFor="Language" className="optionsLabel">
            Language
          </label>
          <select className="optionsSelector" id="language" value={language} onChange={handleChangeLanguage}>
            {videoOptions.languageOptions.map((option) => (
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
              {videoOptions.sizeOptions.map((option) => (
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
              {videoOptions.themeOptions.map((option) => (
                <option key={option.key} value={option.key}>{option.name}</option>
              ))}
            </select>
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
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} {...video} onPlayVideo={onPlayVideo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingVideo;
