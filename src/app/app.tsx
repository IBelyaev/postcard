import React, { useState, useEffect } from 'react';

import SettingsPanel from './ui/settings-panel';
import WorkingDirectory from './ui/working-directory';
import { TextStyle } from './types';
import { getDataFromLocalStorageBtKeys } from './formatter';

import './app.css';

function App() {
  const [textStyle, setTextStyle] = useState<TextStyle>();

  const handleChangeTextStyle = (settings: TextStyle) => setTextStyle(settings);

  useEffect(() => {
    const stateFromStorage = getDataFromLocalStorageBtKeys();
    
    setTextStyle(stateFromStorage);
  }, []);

  if (!textStyle) {
    return null;
  }

  return (
    <div className='app'>
      <WorkingDirectory textStyle={textStyle} />
      <SettingsPanel textStyle={textStyle} onChange={handleChangeTextStyle} />
    </div>
  );
}

export default App;
