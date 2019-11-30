import { defaultTo, mapValues, keyBy } from 'lodash';

function booleanRecord<V extends string>(candidates: V[], value: V) {
  const record = mapValues(keyBy(candidates), type => type === value) as Record<
    V,
    boolean
  >;

  return record;
}

export const NODE_ENV = booleanRecord(
  ['development', 'production', 'test'],
  defaultTo(process.env.NODE_ENV, 'development'),
);

export const FIREBASE_CONFIG: {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
} = {
  apiKey: defaultTo(process.env.REACT_APP_FIREBASE_API_KEY, ''),
  authDomain: defaultTo(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN, ''),
  databaseURL: defaultTo(process.env.REACT_APP_FIREBASE_DATA_BASE_URL, ''),
  projectId: defaultTo(process.env.REACT_APP_FIREBASE_PROJECT_ID, ''),
  storageBucket: defaultTo(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET, ''),
  messagingSenderId: defaultTo(
    process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    '',
  ),
};
