import React, { useState } from 'react';
import Header from './components/header';

const App: React.FC = () => {
  const [isPlaying, setPlaying] = useState(false);

  return (
    <div className="App">
      <Header
        isPlaying={isPlaying}
        onButtonClick={() => setPlaying(!isPlaying)}
      />
    </div>
  );
};

export default App;
