import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';

const App: React.FC = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const play = () => {
    return window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);  
  }

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{colorScheme}} withGlobalStyles withNormalizeCSS>

      <button onClick={() => {toggleColorScheme(); play()}}>Toggle color scheme</button>

    </MantineProvider>
  </ColorSchemeProvider>
      
  );
}

window.electron.ipcRenderer.on('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg, 'client');
});

export default App;
