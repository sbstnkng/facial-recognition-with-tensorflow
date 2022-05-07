import React from 'react';
import Drawer from '@mui/material/Drawer';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector, useDispatch } from 'react-redux';
import Switch from './Switch';
import { RootState } from '../../redux/store';
import { closePanel, toggleSettings1 } from '../../redux/settingsSlice';

const Settings: React.FC = () => {
  const isOpen = useSelector((state: RootState) => state.settings.isOpen);
  const isSettings1Enabled = useSelector(
    (state: RootState) => state.settings.isSettings1Enabled
  );
  const dispatch = useDispatch();

  return (
    <Drawer
      anchor="bottom"
      open={isOpen}
      onClose={() => dispatch(closePanel())}
    >
      <Container maxWidth="sm" sx={{ py: 3 }}>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <SettingsIcon fontSize="inherit" sx={{ mr: 1 }} />
          <span>Settings</span>
        </Typography>
        <Switch
          checked={isSettings1Enabled}
          label="Setting 1"
          onChange={() => dispatch(toggleSettings1())}
        />
      </Container>
    </Drawer>
  );
};

export default Settings;
