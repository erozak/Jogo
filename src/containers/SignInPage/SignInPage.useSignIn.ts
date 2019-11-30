import { useCallback } from 'react';
import * as firebase from 'firebase/app';
import { forEach, property } from 'lodash';
import { defer, of, throwError, EMPTY } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { useSubjectRef, useSubscription } from 'hooks';
import { useFirebase } from 'containers/ModuleProvider/Firebase';

enum SIGN_IN_TYPE {
  google,
}

export default function useSignInPageSignIn() {
  const { auth } = useFirebase();

  const signInEvent$Ref = useSubjectRef<{ type: SIGN_IN_TYPE }>();

  useSubscription(() => {
    const signInWithPropup = (provider: firebase.auth.AuthProvider) =>
      defer(() => auth.signInWithPopup(provider)).pipe(
        map(property('user')),
        catchError((error: firebase.auth.Error) => {
          switch (error.code) {
            case 'auth/cancelled-popup-request':
            case 'auth/popup-closed-by-user':
              return of(null);
            default:
              return throwError(error);
          }
        }),
      );

    const signInWithGoogle = (config: { scopes: string[] }) =>
      defer(() => {
        const provider = new firebase.auth.GoogleAuthProvider();

        forEach(config.scopes, scope => {
          provider.addScope(scope);
        });

        return signInWithPropup(provider);
      });

    return signInEvent$Ref.current
      .pipe(
        switchMap(({ type }) => {
          switch (type) {
            case SIGN_IN_TYPE.google:
              return signInWithGoogle({ scopes: ['email', 'profile'] });
            default:
              return EMPTY;
          }
        }),
      )
      .subscribe();
  });

  return {
    signInWithGoogle: useCallback(() => {
      signInEvent$Ref.current.next({ type: SIGN_IN_TYPE.google });
    }, [signInEvent$Ref]),
  };
}
