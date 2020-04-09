import React from 'react';
import { Container } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

import './styles.css';

import Header from './components/Header';
import Timer from './components/Timer';

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: blue,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header title='PumpkinTimer' />
      <Container className='main-container' component='main'>
        <Timer minutes='1' />
      </Container>
    </ThemeProvider>
  );
}

export default App;
