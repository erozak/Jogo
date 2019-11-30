import React, { FC } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Helmet from './App.Helmet';
import Switch from './App.Switch';

import './App.styles.css';

const App: FC = () => (
  <>
    <CssBaseline />
    <Helmet />
    <Switch />
  </>
);

export default App;
