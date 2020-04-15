import React from 'react';
import { Container } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { deepOrange as primaryColor, green as secondaryColor } from '@material-ui/core/colors';

import './styles.scss';

import Header from './components/Header';
import Timer from './components/Timer';

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: primaryColor,
      secondary: secondaryColor,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header title='PumpkinTimer' />
      <Container className='main-container' component='main' >
        <Timer minutes='1' color='secondary' />
      </Container>
    </ThemeProvider>
  );
}

export default App;
