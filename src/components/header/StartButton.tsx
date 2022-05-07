import React from 'react';
import Button from '@mui/material/Button';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Stop from '@mui/icons-material/Stop';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { start, stop } from '../../redux/videoSlice';

const StartButton: React.FC = () => {
  const isEnabled = useSelector((state: RootState) => state.video.isEnabled);
  const dispatch = useDispatch();

  if (isEnabled) {
    return (
      <Button
        variant="contained"
        startIcon={<Stop />}
        color="secondary"
        onClick={() => dispatch(stop())}
      >
        Stop
      </Button>
    );
  } else {
    return (
      <Button
        variant="outlined"
        startIcon={<PlayArrow />}
        color="inherit"
        onClick={() => dispatch(start())}
      >
        Start
      </Button>
    );
  }
};

export default StartButton;
