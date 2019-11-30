import { useRef, MutableRefObject } from 'react';

export default function useImperativeRef<T>(
  generator: () => T,
): MutableRefObject<T> {
  const ref = useRef<T>();

  if (typeof ref.current === 'undefined') {
    ref.current = generator();
  }

  return ref as MutableRefObject<T>;
}
