/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import VideoCard from './VideoCard';
import VideoPlayer from './VideoPlayer';
import Popover from '../CustomPopover';
import './styles.scss';
import filterVideos from '../../../../helpers/FilterVideosHelper';
import videoOptions from '../../../../utils/videoOptions';

const MarketingVideo = () => {
  const [videoSize, setVideoSize] = useState(0);
  const [language, setLanguage] = useState(0);
  const [theme, setTheme] = useState(0);
  const [videoUrl, setVideoUrl] = useState();
  const [filteredVideos, setFilteredVideos] = useState([]);

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
          <select
            className="optionsSelector"
            id="language"
            value={language}
            onChange={(e) => setLanguage(Number(e.target.value))}
          >
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
            <select
              className="optionsSelector"
              id="size"
              value={videoSize}
              onChange={(e) => setVideoSize(Number(e.target.value))}
            >
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
            <select
              className="optionsSelector"
              id="theme"
              value={theme}
              onChange={(e) => setTheme(Number(e.target.value))}
            >
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
        <VideoPlayer open={videoUrl != null} url={videoUrl} onClose={() => setVideoUrl(null)} />
        <div className="videos">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} {...video} onPlayVideo={(url) => setVideoUrl(url)} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MarketingVideo;
