import React from 'react';
import './App.css';
import { Home } from './Component/home';
import { ThemeProvider } from 'styled-components';
import {theme} from './global/theme'



function App() {

  return <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
}

export default App;
