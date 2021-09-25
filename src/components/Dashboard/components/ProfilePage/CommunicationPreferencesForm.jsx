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
import ComPreferences from './preferences.json';

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

const YellowSlider = withStyles({
  root: {
    color: yellow[600],
    height: 3,
    padding: '13px 0',
  },
  track: {
    height: 3,
    borderRadius: 2,
  },
  thumb: {
    border: '1px solid currentColor',
    boxShadow: '#ebebeb 0 2px 2px',
    '&:focus, &:hover': {
      boxShadow: '#ccc 0 2px 3px 1px',
    },
  },
})(Slider);

const YellowTooltip = withStyles({
  tooltip: {
    color: 'black',
    backgroundColor: yellow[600],
  },
  arrow: {
    color: yellow[600],
  },
})(Tooltip);

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <YellowTooltip open={open} arrow enterTouchDelay={0} placement="top" title={value}>
      {children}
    </YellowTooltip>
  );
}

const CommunicationPreferencesForm = () => {
  const history = useHistory();
  const [availableDays, setAvailableDays] = useState({});
  const [availableHours, setAvailableHours] = useState([7, 20]);
  const [preferences, setPreferences] = useState({
    general: {},
    email: {},
  });

  const handleAvailableDays = (e) => {
    const { name, checked } = e.target;
    setAvailableDays((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handlePreference = (e, category) => {
    const { name, checked } = e.target;
    setPreferences((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [name]: checked,
      },
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log('availabeDays', availableDays);
    console.log('preferences', preferences);
  };

  return (
    <div className="com-preferences">
      <div className="head-line">
        <ArrowBackIcon onClick={() => history.goBack()} />
        <div className="title">Communication Preferences</div>
      </div>
      <div className="sub-title">
        Tell us when, how and why you wish to be contacted by our team.
      </div>

      <form className="com-form" onSubmit={(e) => submit(e)}>
        <div className="availability section">
          <div className="days">
            <h4>Available Days</h4>
            { ComPreferences.days.map((item) => (
              <FormControlLabel
                key={item}
                label={item}
                control={(
                  <YellowCheckbox
                    name={item.toLowerCase()}
                    checked={availableDays[item]}
                    onChange={handleAvailableDays}
                  />
                )}
              />
            ))}
          </div>
          <div className="hours">
            <h4>Available Hours</h4>
            <div className="range-slider">
              <YellowSlider
                value={availableHours}
                min={0}
                max={24}
                valueLabelDisplay="on"
                aria-labelledby="range-slider"
                onChange={(e, u) => setAvailableHours(u)}
                getAriaValueText={(e) => `${e} sdf`}
                valueLabelFormat={valueFormatFn}
                ValueLabelComponent={ValueLabelComponent}
              />
            </div>
          </div>
        </div>

        <div className="section switch-list">
          <h4>General Preference</h4>
          { ComPreferences.general.map((item) => (
            <FormControlLabel
              key={item.name}
              label={item.label}
              control={(
                <YellowSwitch
                  name={item.name}
                  checked={preferences.general[item.name] || false}
                  onChange={(e) => handlePreference(e, 'general')}
                />
              )}
            />
          ))}
        </div>

        <div className="section switch-list">
          <h4>Email Preferences</h4>
          { ComPreferences.email.map((item) => (
            <FormControlLabel
              key={item.name}
              label={item.label}
              control={(
                <YellowSwitch
                  name={item.name}
                  checked={preferences.email[item.name] || false}
                  onChange={(e) => handlePreference(e, 'email')}
                />
              )}
            />
          ))}
        </div>

        <div className="section-button switch-list">
          <button type="submit" className="nd-btn">Save</button>
        </div>
      </form>
    </div>
  );
};

export default CommunicationPreferencesForm;
