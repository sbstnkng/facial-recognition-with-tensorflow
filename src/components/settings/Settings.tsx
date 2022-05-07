import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import Switch from './Switch';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Settings: React.FC<Props> = ({ isOpen, onClose }) => {
  const [state, setState] = useState(false);

  return (
    <Drawer anchor="bottom" open={isOpen} onClose={onClose}>
      <Container maxWidth="sm" sx={{ py: 3 }}>
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <SettingsIcon fontSize="inherit" sx={{ mr: 1 }} />
          <span>Settings</span>
        </Typography>
        <Switch
          checked={state}
          label="Setting 1"
          onChange={() => setState(!state)}
        />
      </Container>
    </Drawer>
  );
};

export default Settings;
