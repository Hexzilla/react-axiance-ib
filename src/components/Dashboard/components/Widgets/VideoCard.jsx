import React, { useState } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { IconButton } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import './styles.scss';

const VideoCard = ({ thumbnail, url, onPlayVideo }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [videoLoaded, setVideoLoaded] = useState(false);
  function copyCode(code) {
    navigator.clipboard.writeText(code);
    enqueueSnackbar('Video Link copied!', {
      variant: 'success',
    });
  }
  return (
    <div className="video-card">
      <div className={videoLoaded ? 'video-loaded' : 'video-loaded video-loading'}>
        <button type="button" className="button-video" onClick={() => onPlayVideo(url)}>
          <img
            src={thumbnail}
            alt=""
            onLoad={() => setTimeout(() => setVideoLoaded(true), 250)}
          />
        </button>
        <div className="bottom">
          <div className="icon">
            <IconButton onClick={() => onPlayVideo(url)}>
              <VisibilityIcon />
            </IconButton>
            <div className="txt-preview">Preview</div>
          </div>
          <button
            id="clipboardCopy"
            onClick={() => copyCode(url)}
            className="nd-btn"
            type="button"
          >
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
