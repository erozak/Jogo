import { useMemo } from 'react';
import nanoid from 'nanoid';

export default function useId(size?: number) {
  return useMemo(() => nanoid(size), []); // eslint-disable-line react-hooks/exhaustive-deps
}
