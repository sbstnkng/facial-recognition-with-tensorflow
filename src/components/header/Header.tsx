import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import StartButton from './StartButton';

interface Props {
  onSettingsClick: () => void;
}

const Header: React.FC<Props> = ({ onSettingsClick }) => {
  return (
    <AppBar position="static">
      <Container disableGutters={true}>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Facial Recognition with Tensorflow
          </Typography>
          <StartButton />
          <IconButton
            size="large"
            aria-label="settings"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={onSettingsClick}
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
