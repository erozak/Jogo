import React from 'react';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { rgba } from 'polished';
import defaultTo from 'lodash/defaultTo';

import alphaValue from 'utils/theme/alphaValue';

import moduleClasses from './Wrapper.module.scss';

export interface ProgressModalWrapperProps {
  className?: string;
  opacity?: number;
  children?: React.ReactNode;
  position?: 'absolute' | 'fixed' | 'relative';
}

interface StyleProps {
  position?: ProgressModalWrapperProps['position'];
  opacity?: ProgressModalWrapperProps['opacity'];
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: ({ opacity }: StyleProps) =>
      rgba(theme.palette.background.default, alphaValue(opacity, 1)),
    position: ({ position }: StyleProps) => defaultTo(position, 'fixed'),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const ProgressModalWrapper: React.FC<ProgressModalWrapperProps> = ({
  className,
  opacity,
  position,
  ...otherProps
}) => {
  const materialClasses = useStyles({ opacity, position });

  return (
    <div
      {...otherProps}
      className={classnames(
        moduleClasses.root,
        materialClasses.root,
        className,
      )}
    />
  );
};

export default ProgressModalWrapper;
