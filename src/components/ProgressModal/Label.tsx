import { withStyles } from '@material-ui/core/styles';

import Typography from 'components/Typography';

const ProgressModalLabel = withStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))(Typography);

export default ProgressModalLabel;
