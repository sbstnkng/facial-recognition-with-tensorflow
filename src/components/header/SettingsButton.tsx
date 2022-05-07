import React from 'react';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch } from 'react-redux';
import { openPanel } from '../../redux/settingsSlice';

const SettingsButton: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <IconButton
      size="large"
      aria-label="settings"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
      onClick={() => dispatch(openPanel())}
    >
      <SettingsIcon />
    </IconButton>
  );
};

export default SettingsButton;
