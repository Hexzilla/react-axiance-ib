import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { userController } from '../../../../controllers';
import Popover from '../CustomPopover';
import './styles.scss';

function YourPartnerLink({ entity }) {
  const { enqueueSnackbar } = useSnackbar();
  const [affiliateUrl, setAffiliateUrl] = useState('');
  const [campaign, setCampaign] = useState();
  const [campaignOptions, setCampaignOptions] = useState([]);
  const [affiliateData, setAffiliateData] = useState();
  const [page, setPage] = useState('registration');

  useEffect(async () => {
    const affiliateDataFetch = await JSON.parse(
      localStorage.getItem('affiliateData'),
    );
    setAffiliateData(affiliateDataFetch);
    setCampaign(Object.keys(affiliateDataFetch.campaigns)[0]);
    setCampaignOptions(Object.keys(affiliateDataFetch.campaigns));
  }, []);

  useEffect(async () => {
    if (affiliateData) {
      try {
        const affiliateUrlFetch = await userController.generateAffiliateUrl(
          affiliateData.refid,
          campaign,
          page,
          entity,
        );
        setAffiliateUrl(affiliateUrlFetch);
      } catch (error) {
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
      }
    }
  }, [campaign, page]);

  function copyCode(code) {
    navigator.clipboard.writeText(code);
    enqueueSnackbar('Code copied!', {
      variant: 'success',
    });
  }

  return (
    <div className="widget your-partner-link">
      <h1 className="title">Your Partner Link</h1>
      <div className="selectorBox">
        <label htmlFor="campaign" className="optionsLabel">
          Campaign
        </label>
        <select
          variant="outlined"
          native
          className="optionsSelector"
          value={campaign}
          onChange={(c) => setCampaign(c.target.value)}
        >
          {campaignOptions.map((campaignOption) => (
            <option key={campaignOption} value={campaignOption}>
              {affiliateData.campaigns[campaignOption].description}
            </option>
          ))}
        </select>
        <label htmlFor="page" className="optionsLabel">
          Page
        </label>
        <select
          variant="outlined"
          native
          id="page"
          value={page}
          className="optionsSelector"
          onChange={(p) => setPage(p.target.value)}
        >
          <option value="registration">Registration Page</option>
          <option value="home">Home Page</option>
        </select>
      </div>

      <span className="sign-up-link">
        <p className="text">Sign Up Link</p>
        <Popover
          className="warning-popover"
          showArrow
          triggerNode={<ErrorOutlineIcon />}
          trigger="click"
        >
          <div className="campaign-name-popover">
            <p>Use this link to enroll clients under a specific trending campaign</p>
          </div>
        </Popover>
      </span>
      <div className="urlBox">
        <code className="urlSnippet">
          {affiliateUrl}
        </code>
        <button type="button" className="green-cta" onClick={() => copyCode(affiliateUrl)}>
          Copy
        </button>
      </div>
    </div>
  );
}

export default YourPartnerLink;
