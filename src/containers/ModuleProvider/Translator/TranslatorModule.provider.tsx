import React, { FC } from 'react';
import { I18nextProvider, I18nextProviderProps } from 'react-i18next';

import translator from 'modules/Translator';

const TranslatorModuleProvider: FC<Omit<
  I18nextProviderProps,
  'i18n'
>> = props => <I18nextProvider {...props} i18n={translator} />;

export default TranslatorModuleProvider;
