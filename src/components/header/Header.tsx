import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Stop from '@mui/icons-material/Stop';

interface Props {
  isPlaying: boolean;
  onButtonClick: () => void;
}

const Header: React.FC<Props> = ({ isPlaying, onButtonClick }) => {
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
          <Button
            variant={isPlaying ? 'contained' : 'outlined'}
            startIcon={isPlaying ? <Stop /> : <PlayArrow />}
            color={isPlaying ? 'secondary' : 'inherit'}
            onClick={onButtonClick}
          >
            {isPlaying ? 'Stop' : 'Start'}
          </Button>
          <IconButton
            size="large"
            aria-label="settings"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
