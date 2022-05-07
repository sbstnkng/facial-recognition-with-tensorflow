import React from 'react';
import MuiSwitch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

interface Props {
  checked: boolean;
  label: string;
  onChange: () => void;
}

const Switch: React.FC<Props> = ({ checked, label, onChange }) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<MuiSwitch checked={checked} onChange={onChange} />}
        label={label}
      />
    </FormGroup>
  );
};

export default Switch;
