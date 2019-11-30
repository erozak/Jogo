import { useState, useEffect } from 'react';
import * as firebase from 'firebase/app';
import { produce } from 'immer';

import { useFirebase } from './FirebaseModule.context';

interface UseFirebaseUserState {
  loading: boolean;
  user: firebase.User | null;
  error: null;
}

export default function useFirebaseUser(): UseFirebaseUserState {
  const { auth } = useFirebase();
  const [state, setState] = useState<UseFirebaseUserState>({
    user: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    const setUserOf = (user: firebase.User | null) =>
      produce(draft => {
        draft.loading = false;
        draft.user = user;
      });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const setErrorOf = (error: any) =>
      produce(draft => {
        draft.loading = false;
        draft.error = error;
      });

    return auth.onIdTokenChanged(
      user => setState(setUserOf(user)),
      error => setState(setErrorOf(error)),
    );
  }, [auth]);

  return state;
}
