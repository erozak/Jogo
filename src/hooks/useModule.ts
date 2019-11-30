import { Store } from '@datorama/akita';
import { useMemo, useEffect } from 'react';
import { method, forEach } from 'lodash';

export interface Module<St extends Store, Qr, Sv> {
  store: St;
  query: Qr;
  service: Sv;
}

export default function useModule<St extends Store, Qr, Sv>(
  factory: () => Module<St, Qr, Sv>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inputs: any[] = [],
): Module<St, Qr, Sv> {
  const module = useMemo(factory, inputs);

  useEffect(
    () => () => {
      forEach(module, method('destroy'));
    },
    [module],
  );

  return module;
}
