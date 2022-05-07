import React from 'react';
import Header from './components/header';
import VideoPanel from './components/video';
import Settings from './components/settings';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <VideoPanel />
      <Settings />
    </div>
  );
};

export default App;
