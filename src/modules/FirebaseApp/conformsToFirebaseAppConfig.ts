import conformsTo from 'lodash/conformsTo';
import isString from 'lodash/isString';

import { FirebaseAppConfig } from './FirebaseApp.model';

export default function conformsToFirebaseAppConfig(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  source: any,
): source is FirebaseAppConfig {
  return conformsTo(source, {
    apiKey: isString,
    authDomain: isString,
    databaseURL: isString,
    projectId: isString,
    storageBucket: isString,
    messagingSenderId: isString,
  });
}
