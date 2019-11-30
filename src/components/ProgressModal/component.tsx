import React from 'react';

import CircularProgress, {
  CircularProgressProps,
} from 'components/CircularProgress';

import Wrapper, { ProgressModalWrapperProps } from './Wrapper';
import Label from './Label';
import Inner from './Inner';

export interface ProgressModalProps extends ProgressModalWrapperProps {
  variant?: CircularProgressProps['variant'];
  children?: React.ReactNode;
}

const ProgressModal: React.FC<ProgressModalProps> = ({
  children,
  variant,
  opacity,
  position,
  ...otherProps
}) => (
  <Wrapper {...otherProps}>
    <Inner maxWidth="sm">
      <CircularProgress
        size={96}
        thickness={2.8}
        color="primary"
        variant={variant}
      />
      {children && (
        <Label color="inherit" variant="body1">
          {children}
        </Label>
      )}
    </Inner>
  </Wrapper>
);

export default ProgressModal;
