import React, { FC } from 'react';
import { Icon as MDIIcon } from '@mdi/react';

export interface IconBaseProps {
  path: string;
  color?: string;
  description?: string;
  horizontal?: boolean;
  rotate?: number;
  size?: string | number;
  spin?: number | boolean;
  title?: string;
  vertical?: boolean;
}

const IconBase: FC<IconBaseProps> = props => <MDIIcon {...props} />;

IconBase.defaultProps = {
  size: '1.5em',
  vertical: false,
  spin: false,
  rotate: 0,
  horizontal: false,
  color: 'inherit',
};

export function asIcon(
  path: IconBaseProps['path'],
  defaultProps?: Omit<IconBaseProps, 'path'>,
): FC<Omit<IconBaseProps, 'path'>> {
  return props => <IconBase {...defaultProps} {...props} path={path} />;
}

export default IconBase;
