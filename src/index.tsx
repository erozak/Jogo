import React from 'react';
import { akitaDevtools, enableAkitaProdMode } from '@datorama/akita';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import vhCheck from 'vh-check';

import 'firebase/auth';
import 'firebase/firestore';

import App from './containers/App';
import ThemeProvider from './containers/ThemeProvider';
import TranslatorProvider from './containers/ModuleProvider/Translator';
import * as serviceWorker from './serviceWorker';
import { NODE_ENV } from './environment';
import configHistory from './configHistory';

const history = configHistory();

if (NODE_ENV.production) {
  enableAkitaProdMode();
} else {
  akitaDevtools();
}

vhCheck();

ReactDOM.render(
  <TranslatorProvider>
    <Router history={history}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  </TranslatorProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
