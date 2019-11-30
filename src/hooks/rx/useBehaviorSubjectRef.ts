import { useEffect } from 'react';
import { BehaviorSubject } from 'rxjs';

import useImperativeRef from '../useImperativeRef';

export default function useBehaviorSubjectRef<T>(initialValue: T) {
  const subjectRef = useImperativeRef(() => new BehaviorSubject(initialValue));

  useEffect(
    () => () => {
      subjectRef.current.complete();
    },
    [subjectRef],
  );

  return subjectRef;
}
