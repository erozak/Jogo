import * as Firebase from 'firebase/app';

export type FirebaseApp = Firebase.app.App;

export interface FirebaseAppConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
}
