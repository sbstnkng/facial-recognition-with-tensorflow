import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Webcam from 'react-webcam';
import { RootState } from '../../redux/store';

const VideoPanel: React.FC = () => {
  const webcamRef = useRef(null);
  const isEnabled = useSelector((state: RootState) => state.video.isEnabled);

  return (
    <Container sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
      {isEnabled && <Webcam ref={webcamRef} style={{ maxWidth: '100vw' }} />}
    </Container>
  );
};

export default VideoPanel;
