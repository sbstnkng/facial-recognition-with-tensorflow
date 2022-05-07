import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Webcam from 'react-webcam';
import Header from './components/header';
import Settings from './components/settings';
import { RootState } from './redux/store';

const App: React.FC = () => {
  const webcamRef = useRef(null);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const isEnabled = useSelector((state: RootState) => state.video.isEnabled);

  return (
    <div className="App">
      <Header onSettingsClick={() => setSettingsOpen(true)} />
      <Container sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
        {isEnabled && <Webcam ref={webcamRef} style={{ maxWidth: '100vw' }} />}
      </Container>
      <Settings
        isOpen={isSettingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
    </div>
  );
};

export default App;
