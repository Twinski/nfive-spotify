import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-static';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';

import store from 'redux/config';
import { theme } from 'config';
import history from './history';

import 'globalStyles.js';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Routes />
      </Router>
    </ThemeProvider>
  </Provider>
);

export default hot(module)(App);