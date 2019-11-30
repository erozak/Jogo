import * as FirebaseApp from 'firebase/app';

import conformsToConfig from './conformsToFirebaseAppConfig';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function createFirebaseApp(config: any) {
  if (!conformsToConfig(config)) {
    throw new TypeError('Got invalid firebase config.');
  }

  return FirebaseApp.initializeApp(config);
}
