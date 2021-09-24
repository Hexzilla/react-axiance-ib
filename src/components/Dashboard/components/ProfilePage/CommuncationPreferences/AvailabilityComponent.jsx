import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Slider from '@material-ui/core/Slider';

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

const AvailabilityComponent = () => {
  const [availableData, setAvailableData] = useState({
    availableFrom: new Date(2021, 4, 20, 0, 0, 0),
    availableTo: new Date(2021, 4, 20, 0, 0, 0),
  });

  function valuetext(availableFrom) {
    return `${availableFrom}`;
  }

  return (
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
          value={valuetext}
          min={0}
          max={24}
          valueLabelDisplay="on"
          aria-labelledby="range-slider"
          onChange={(val) => setAvailableData((prevState) => ({
            ...prevState,
            availableFrom: val,
          }))}
          getAriaValueText={(e) => `${e} sdf`}
        />
        <Slider
          value={availableData.availableTo}
          min={0}
          max={24}
          ampm={false}
          valueLabelDisplay="on"
          aria-labelledby="range-slider"
          onChange={(val) => setAvailableData((prevState) => ({
            ...prevState,
            availableTo: val,
          }))}
          getAriaValueText={(e) => `${e} sdf`}
        />
      </div>
    </div>
  );
};
export default AvailabilityComponent;
