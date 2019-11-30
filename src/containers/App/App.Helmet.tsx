import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import { messages } from './App.messages';

const AppHelmet: FC = () => (
  <Helmet
    titleTemplate={messages.helmet.template}
    defaultTitle={messages.helmet.defaultTitle}
  />
);

export default AppHelmet;
