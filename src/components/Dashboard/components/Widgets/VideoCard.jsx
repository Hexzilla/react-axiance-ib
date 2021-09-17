import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { IconButton } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import './styles.scss';

const VideoCard = ({ thumbnail, url, onPlayVideo }) => {
  const { enqueueSnackbar } = useSnackbar();
  function copyCode(code) {
    navigator.clipboard.writeText(code);
    enqueueSnackbar('Url copied!', {
      variant: 'success',
    });
  }
  return (
    <div className="video-card">
      <button type="button" className="bottom" onClick={() => onPlayVideo(url)}>
        <img src={thumbnail} alt="" />
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
  );
};

export default VideoCard;
