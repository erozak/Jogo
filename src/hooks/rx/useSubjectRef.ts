import { useEffect, MutableRefObject } from 'react';
import { Subject } from 'rxjs';

import useImperativeRef from '../useImperativeRef';

export default function useSubjectRef<T>(): MutableRefObject<Subject<T>> {
  const subjectRef = useImperativeRef(() => new Subject<T>());

  useEffect(
    () => () => {
      subjectRef.current.complete();
    },
    [subjectRef],
  );

  return subjectRef;
}
