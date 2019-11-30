import React, { FC } from 'react';

import {
  Redirect as ReactRouterRedirect,
  RedirectProps as ReactRouterRedirectProps,
} from 'react-router-dom';

export interface RedirectProps extends ReactRouterRedirectProps {
  referred?: boolean;
}

const Redirect: FC<RedirectProps> = ({ referred, ...otherProps }) => {
  return <ReactRouterRedirect {...otherProps} />;
};

Redirect.defaultProps = {
  referred: false,
};

export default Redirect;
