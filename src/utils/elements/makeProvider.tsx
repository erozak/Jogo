import React, { ReactNode } from 'react';
import invariant from 'invariant';
import { isFunction } from 'lodash';

export interface ProviderProps<V> {
  children: ReactNode | ((value: V) => ReactNode);
}

export interface ProviderConfig {
  name: string;
}

export default function makeProvider<
  V,
  P extends ProviderProps<V> = ProviderProps<V>
>(
  Context: React.Context<V>,
  useFactory: (props: Omit<P, 'children'>) => NonNullable<V>,
  { name = 'Provider' }: Partial<ProviderConfig> = {},
) {
  const Provider: React.FC<P> = ({ children, ...otherProps }) => {
    const value = useFactory(otherProps);

    invariant(value, `You probably forgot to return a value for ${name}`);

    return (
      <Context.Provider value={value}>
        {isFunction(children) ? children(value) : children}
      </Context.Provider>
    );
  };

  Provider.displayName = name;

  return Provider;
}
