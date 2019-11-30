import loadable from '@loadable/component';

const LoadableOverviewPage = loadable(() => import('./OverviewPage.component'));

export default LoadableOverviewPage;
