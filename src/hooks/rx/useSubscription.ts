import { useEffect } from 'react';
import { Subscription } from 'rxjs';

import useImperativeRef from '../useImperativeRef';

export default function useSubscription(
  factory: () => Subscription,
): Subscription {
  const subscriptionRef = useImperativeRef(factory);

  useEffect(
    () => () => {
      subscriptionRef.current.unsubscribe();
    },
    [subscriptionRef],
  );

  return subscriptionRef.current;
}
