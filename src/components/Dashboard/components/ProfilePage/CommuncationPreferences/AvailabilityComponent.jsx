import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Tooltip from '@material-ui/core/Tooltip';
import Slider from '@material-ui/core/Slider';

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
  checked: {},
  // eslint-disable-next-line react/jsx-props-no-spreading
})((props) => <Checkbox color="default" {...props} />);

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

const availableDayList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const AvailabilityComponent = ({
  availableDays,
  setAvailableDays,
  availableHours,
  setAvailableHours,
}) => {
  const handleAvailableDays = (e) => {
    const { name, checked } = e.target;
    setAvailableDays((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className="availability section">
      <div className="days">
        <h4>Available Days</h4>
        { availableDayList.map((item) => (
          <FormControlLabel
            key={item}
            label={item}
            control={(
              <YellowCheckbox
                name={item.toLowerCase()}
                checked={availableDays[item.toLowerCase()] || false}
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
            onChange={(e, u) => setAvailableHours(u)}
            valueLabelFormat={valueFormatFn}
            ValueLabelComponent={ValueLabelComponent}
          />
        </div>
      </div>
    </div>
  );
};
export default AvailabilityComponent;
