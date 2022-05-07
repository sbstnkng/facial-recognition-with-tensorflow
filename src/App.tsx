import React, { useState, useRef } from 'react';
import Container from '@mui/material/Container';
import Webcam from 'react-webcam';
import Header from './components/header';
import Settings from './components/settings';

const App: React.FC = () => {
  const webcamRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="App">
      <header>
        <Header
          isPlaying={isPlaying}
          onStartStopClick={() => setPlaying(!isPlaying)}
          onSettingsClick={() => setSettingsOpen(true)}
        />
      </header>
      <main>
        <Container sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          {isPlaying && (
            <Webcam ref={webcamRef} style={{ maxWidth: '100vw' }} />
          )}
        </Container>
      </main>
      <Settings
        isOpen={isSettingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
    </div>
  );
};

export default App;
