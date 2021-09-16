import React from 'react';
import './styles/blue-stripe.scss';

const ProcessStep = ({ tag, name, svg }) => (
  <div className="nd-process-item">
    <img src={`/assets/dashboard/${svg}-icon.svg`} alt={svg} />
    <span className="nd-tag">{tag}</span>
    <span className="nd-text">{name}</span>
  </div>
);

const BlueStripe = () => (
  <div className="nd-blue-stripe">
    <div className="nd-section-1">
      <img src="/assets/dashboard/exclamation-mark-yellow.svg" alt="exclamation" />
      <div className="nd-text">
        Please complete the following steps in order to make your first deposit and start trading.
      </div>
    </div>
    <div className="nd-section-2">
      {/* <ProcessStep name="Register" svg="personal-info" tag="i" />
      <span className="nd-separator" /> */}
      <ProcessStep name="Personal Profile" svg="personal-info" tag="1" />
      <span className="nd-separator" />
      <ProcessStep name="Company's Details" svg="company-details" tag="2" />
      <span className="nd-separator" />
      {/* <ProcessStep name="Questionnaire" svg="questionnaire" tag="4" />
      <span className="nd-separator" /> */}
      <ProcessStep name="Proof of ID" svg="proof-of-id" tag="3" />
    </div>
    <div className="nd-verify-section">
      <button className="nd-btn-basic" type="button">
        Verify
      </button>
    </div>
  </div>
);

export default BlueStripe;
