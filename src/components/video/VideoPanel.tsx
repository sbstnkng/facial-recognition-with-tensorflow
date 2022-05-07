import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Webcam from 'react-webcam';
import { RootState } from '../../redux/store';
import { SxProps } from '@mui/material';

const VideoPanel: React.FC = () => {
  const webcamRef = useRef(null);
  const isEnabled = useSelector((state: RootState) => state.video.isEnabled);

  const containerStyles: SxProps = {
    mt: 2,
    display: 'flex',
    justifyContent: 'center',
  };
  const videStyles: React.CSSProperties = {
    height: '80vh',
    maxHeight: '80vh',
    maxWidth: '100vw',
    borderRadius: '.5rem',
  };

  return (
    <Container sx={containerStyles}>
      {isEnabled && <Webcam ref={webcamRef} style={videStyles} />}
    </Container>
  );
};

export default VideoPanel;
