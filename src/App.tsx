import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import Header from './components/header';

const App: React.FC = () => {
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
        <Container sx={{ mt: 2 }}>
          {isPlaying && (
            <Alert severity="warning">
              Video is currently not supported — Support is coming soon!
            </Alert>
          )}
        </Container>
      </main>
    </div>
  );
};

export default App;
