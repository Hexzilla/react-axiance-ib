import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { IconButton } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import './styles.scss';

const VideoCard = ({ thumbnail, url, onPlayVideo }) => {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <div className="video-card">
      <img src={thumbnail} alt="" />
      <div className="bottom">
        <div className="icon">
          <IconButton onClick={() => onPlayVideo(url)}>
            <VisibilityIcon />
          </IconButton>
          <div className="txt-preview">Preview</div>
        </div>
        <button
          id="clipboardCopy"
          onClick={() => {
            async function clipboardCopy() {
              await navigator.clipboard.writeText(url);
            }
            document.getElementById('clipboardCopy').addEventListener('click', clipboardCopy);
            enqueueSnackbar('Copied', {
              variant: 'info',
            });
          }}
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
