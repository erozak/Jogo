import { useContext, Context } from 'react';
import isNil from 'lodash/isNil';

export default function useSafeContext<T>(context: Context<T | null>): T {
  const contextValue = useContext<T | null>(context);

  if (isNil(contextValue)) {
    throw new TypeError('You forgot to add a provider!');
  }

  return contextValue;
}
