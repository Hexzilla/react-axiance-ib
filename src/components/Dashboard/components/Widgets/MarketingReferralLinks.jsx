/* eslint-disable no-use-before-define */
import React from 'react';
import { useSnackbar } from 'notistack';
import './styles.scss';

function MarketingReferralLinks() {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <div className="marketing-referal-links">
      <div className="title">Web Link</div>
      <div className="referralSelectors">
        <div className="selector">
          <label htmlFor="Target Page" className="optionsLabel">
            Target Page
          </label>
          <select className="optionsSelector" id="language">
            <option value={10}>Wordlwide</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </select>
        </div>

        <div className="referralSelectors">
          <div className="selector">
            <label htmlFor="language" className="optionsLabel">
              Language
            </label>
            <select className="optionsSelector" id="language">
              <option value={10}>English</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </select>
          </div>
        </div>
      </div>
      <input id="input" disabled value="https://axiance.com/int/en-us/?fxbl=axianceint&fx=np&fxaffid=5321&fxcid=2g7x9n4q&referral=5321" />
      <button
        id="clipboardCopy"
        onClick={() => {
          document.getElementById('clipboardCopy').addEventListener('click', clipboardCopy);
          async function clipboardCopy() {
            const text = document.querySelector('#input').value;
            await navigator.clipboard.writeText(text);
          }
          enqueueSnackbar('Copied', {
            variant: 'info',
          });
        }}
        className="nd-btn"
        type="button"
      >
        Copy

      </button>

      <div className="title">Mobile Link</div>
      <div className="referralSelectors">
        <div className="selector">
          <label htmlFor="language" className="optionsLabel">
            Target Page
          </label>
          <select className="optionsSelector" id="language">
            <option value={10}>Worldwide</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </select>
        </div>

        <div className="referralSelectors">
          <div className="selector">
            <label htmlFor="language" className="optionsLabel">
              Language
            </label>
            <select className="optionsSelector" id="language">
              <option value={10}>English</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </select>
          </div>
        </div>
      </div>

      <input id="input2" disabled value="https://axiance.com/int/en-us/?fxbl=axianceint&fx=np&fxaffid=5321&fxcid=2g7x9n4q&referral=1000" />
      <button
        id="clipboardCopy2"
        onClick={() => {
          document.getElementById('clipboardCopy2').addEventListener('click', clipboardCopy2);
          async function clipboardCopy2() {
            const text = document.querySelector('#input2').value;
            await navigator.clipboard.writeText(text);
          }
          enqueueSnackbar('Copied', {
            variant: 'info',
          });
        }}
        className="nd-btn"
        type="button"
      >
        Copy

      </button>
    </div>
  );
}

export default MarketingReferralLinks;
