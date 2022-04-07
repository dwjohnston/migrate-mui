import React from 'react';

import './App.css';

import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { MyComponent } from './MyComponent';

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MyComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
