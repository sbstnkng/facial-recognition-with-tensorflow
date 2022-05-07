import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import StartButton from './StartButton';
import SettingsButton from './SettingsButton';

const Header: React.FC = () => {
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
          <SettingsButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
