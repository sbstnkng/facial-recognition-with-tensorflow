import React, { useState } from 'react';
import Header from './components/header';
import VideoPanel from './components/video';
import Settings from './components/settings';

const App: React.FC = () => {
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="App">
      <Header onSettingsClick={() => setSettingsOpen(true)} />
      <VideoPanel />
      <Settings
        isOpen={isSettingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
    </div>
  );
};

export default App;
