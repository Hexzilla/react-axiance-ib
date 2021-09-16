import React from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Popover from '../CustomPopover';
import './styles.scss';
import FilteringDropdown from './new';

const VideoCard = () => (
  <div className="video-card">
    <img src="https://axiance-assets.netlify.app/portal/banners/demo/en/120x240.png" alt="" />
    <div className="bottom">
      <div className="icon">
        <VisibilityIcon />
        <div className="txt-preview">Preview</div>
      </div>
      <button type="button" className="nd-btn">Copy Link</button>
    </div>
  </div>
);

const MarketingVideo = () => (

  <div className="marketing-video">
    <div className="referralSelectors">
      <div className="selector">
        <label htmlFor="Language" className="optionsLabel">
          Language
        </label>
        <select className="optionsSelector" id="language">
          <option value={10}>English</option>
        </select>
      </div>

      <div className="referralSelectors">
        <div className="selector">
          <label htmlFor="size" className="optionsLabel">
            Size
          </label>
          <select className="optionsSelector" id="size">
            <option value={10}>All</option>
            <option value={1}>10x10</option>
            <option value={3}>20x20</option>
          </select>
        </div>
      </div>

      <div className="referralSelectors">
        <div className="selector">
          <label htmlFor="Theme" className="optionsLabel">
            Theme
          </label>
          <select className="optionsSelector" id="theme">

            <option value={10}>All</option>

          </select>
        </div>
      </div>
      <div className="filter-section">
        <div className="filter">
          <button className="nd-btn" type="button">Apply</button>
        </div>
      </div>
      <FilteringDropdown />
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
      <div className="videos">

        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  </div>
);

export default MarketingVideo;
