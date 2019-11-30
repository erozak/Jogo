import React, { memo, FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

const OverviewPageContainer: FC<RouteComponentProps> = () => {
  return <div>Overview</div>;
};

export default memo(OverviewPageContainer);
