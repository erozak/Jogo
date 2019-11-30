import React from 'react';

import Typography, { TypographyProps } from 'components/Typography';

export interface AppTitleProps extends TypographyProps {}

const AppTitle: React.FC<AppTitleProps> = props => (
  <Typography variant="h1" color="primary" {...props}>
    JYGO
  </Typography>
);

export default AppTitle;
