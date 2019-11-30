import { createContext, useContext } from 'react';
import * as firebase from 'firebase/app';

import { createFirebaseApp } from 'modules/FirebaseApp';
import { FIREBASE_CONFIG } from 'environment';

export interface FirebaseContextValue {
  app: firebase.app.App;
  auth: firebase.auth.Auth;
  store: firebase.firestore.Firestore;
}

const firebaseApp = createFirebaseApp(FIREBASE_CONFIG);

export const FirebaseContext = createContext<FirebaseContextValue>({
  app: firebaseApp,
  auth: firebase.auth(firebaseApp),
  store: firebase.firestore(firebaseApp),
});

export function useFirebase() {
  return useContext(FirebaseContext);
}
