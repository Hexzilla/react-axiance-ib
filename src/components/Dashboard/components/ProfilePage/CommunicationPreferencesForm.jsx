import React, { useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Switch from '@material-ui/core/Switch';

const valueFormatFn = (v) => {
  if (v === 0) {
    return '12:00 AM';
  }
  if (v < 13) {
    return `${v}:00 AM`;
  }
  return `${v - 12}:00 PM`;
};

const YellowCheckbox = withStyles({
  root: {
    color: yellow[400],
    '&$checked': {
      color: yellow[600],
    },
  },
  checked: { },
  // eslint-disable-next-line react/jsx-props-no-spreading
})((props) => <Checkbox color="default" {...props} />);

const YellowSwitch = withStyles({
  switchBase: {
    color: yellow[400],
    '&$checked': {
      color: yellow[600],
    },
    '&$checked + $track': {
      backgroundColor: yellow[600],
    },
  },
  checked: { },
  track: {
    backgroundColor: yellow[800],
  },
})(Switch);

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const CommunicationPreferencesForm = () => {
  const history = useHistory();
  const [value, setValue] = useState([3, 7]);

  return (
    <div className="com-preferences">
      <div className="head-line">
        <ArrowBackIcon onClick={() => history.goBack()} />
        <div className="title">Communication Preferences</div>
      </div>
      <div className="sub-title">
        Tell us when, how and why you wish to be contacted by our team.
      </div>

      <form className="com-form">
        <div className="availability section">
          <div className="days">
            <h4>Available Days</h4>
            <FormControlLabel control={<YellowCheckbox name="checkedG" />} label="Monday" />
            <FormControlLabel control={<YellowCheckbox name="checkedG" />} label="Tuesday" />
            <FormControlLabel control={<YellowCheckbox name="checkedG" />} label="Wednesday" />
            <FormControlLabel control={<YellowCheckbox name="checkedG" />} label="Thursday" />
            <FormControlLabel control={<YellowCheckbox name="checkedG" />} label="Friday" />
          </div>
          <div className="hours">
            <h4>Available Hours</h4>
            <Slider
              value={value}
              min={0}
              max={24}
              valueLabelDisplay="on"
              aria-labelledby="range-slider"
              onChange={(e, u) => setValue(u)}
              getAriaValueText={(e) => `${e} sdf`}
              valueLabelFormat={valueFormatFn}
              ValueLabelComponent={ValueLabelComponent}
            />
          </div>
        </div>

        <div className="section switch-list">
          <h4>General Preference</h4>

          <FormControlLabel control={<YellowSwitch name="checkedA" />} label="E-Mail" />
          <FormControlLabel control={<YellowSwitch name="checkedA" />} label="Phone" />
          <FormControlLabel control={<YellowSwitch name="checkedA" />} label="Telegram" />
          <FormControlLabel control={<YellowSwitch name="checkedA" />} label="WhatsApp" />
          <FormControlLabel control={<YellowSwitch name="checkedA" />} label="Facebook" />
          <FormControlLabel control={<YellowSwitch name="checkedA" />} label="Instagram" />

        </div>

        <div className="section switch-list">
          <h4>Email Preferences</h4>
          <FormControlLabel control={<YellowSwitch name="checkedA" />} label="Market News" />
          <FormControlLabel control={<YellowSwitch name="checkedA" />} label="Information" />
          <FormControlLabel control={<YellowSwitch name="checkedA" />} label="Education" />
          <FormControlLabel control={<YellowSwitch name="checkedA" />} label="Promos & Offers" />
          <FormControlLabel control={<YellowSwitch name="checkedA" />} label="Statistics & Summary" />
        </div>

      </form>
    </div>
  );
};

export default CommunicationPreferencesForm;
