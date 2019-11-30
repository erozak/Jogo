import loadable from '@loadable/component';

const LoadableSignInPage = loadable(() => import('./SignInPage.component'));

export default LoadableSignInPage;
