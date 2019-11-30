import React from 'react';
import MaterialBox, {
  BoxProps as MaterialBoxProps,
} from '@material-ui/core/Box';

interface BoxRenderProps {
  className: string;
}

export interface BoxProps extends MaterialBoxProps {
  children: (props: BoxRenderProps) => React.ReactNode;
}

const Box: React.FC<BoxProps> = props => <MaterialBox {...props} />;

export default Box;
