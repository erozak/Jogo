import { withStyles } from '@material-ui/core/styles';

import Container from 'components/Container';

const ProgressModalInner = withStyles(theme => ({
  root: {
    textAlign: 'center',
  },
}))(Container);

export default ProgressModalInner;
