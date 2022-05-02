import React, { useState, useRef } from 'react';
import Container from '@mui/material/Container';
import Webcam from 'react-webcam';
import Header from './components/header';

const App: React.FC = () => {
  const webcamRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);

  return (
    <div className="App">
      <header>
        <Header
          isPlaying={isPlaying}
          onButtonClick={() => setPlaying(!isPlaying)}
        />
      </header>
      <main>
        <Container sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          {isPlaying && (
            <Webcam ref={webcamRef} style={{ maxWidth: '100vw' }} />
          )}
        </Container>
      </main>
    </div>
  );
};

export default App;
