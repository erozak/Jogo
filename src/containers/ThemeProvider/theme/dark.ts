import { createMuiTheme } from '@material-ui/core/styles';
import { rgba, rem } from 'polished';

import { fontFamily } from './common';

const primaryPalette = {
  main: '#26dcd0',
};

const errorPalette = {
  main: '#e83350',
};

const textMainColor = '#fff';

const mainBackgroundColor = '#141414';
const paperBackgroundColor = '#1c1c1c';

export default createMuiTheme({
  palette: {
    type: 'dark',
    divider: rgba('#fff', 0.48),
    primary: primaryPalette,
    error: errorPalette,
    text: {
      primary: rgba(textMainColor, 0.92),
      secondary: rgba(textMainColor, 0.74),
      disabled: rgba(textMainColor, 0.52),
      hint: rgba(textMainColor, 0.52),
    },
    background: {
      default: mainBackgroundColor,
      paper: paperBackgroundColor,
    },
    action: {
      active: rgba('#fff', 0.32),
      hover: rgba('#fff', 0.06),
      hoverOpacity: 0.06,
      selected: rgba('#fff', 0.14),
      disabled: rgba('#fff', 0.26),
      disabledBackground: rgba('#fff', 0.12),
    },
  },
  typography: {
    subtitle1: {
      lineHeight: 1.76,
    },
    body1: {
      lineHeight: 1.52,
    },
    body2: {
      lineHeight: 1.52,
    },
    h1: {
      fontSize: rem(48),
      fontFamily: fontFamily.title,
      lineHeight: 1.52,
    },
    h2: {
      fontSize: rem(36),
      lineHeight: 1.52,
    },
    h3: {
      fontSize: rem(28),
      lineHeight: 1.52,
    },
    h4: {
      fontSize: rem(18),
      lineHeight: 1.52,
    },
    h5: {
      fontSize: rem(16),
      lineHeight: 1.52,
    },
    h6: {
      fontSize: rem(14),
      lineHeight: 1.52,
    },
  },
});
