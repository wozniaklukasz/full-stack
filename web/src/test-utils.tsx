import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react'
import {makeStore} from './store/store';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n/i18n';

const AllTheProviders = ({children, store}) => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    </Provider>
  );
};

export const customRender = (ui, {store, ...otherOpts}) => {
  return render(ui, {
    ...otherOpts,
    wrapper: ({children}) => AllTheProviders({children, store})
  });
};

export function makeTestStore(opts = {}) {
  const store = makeStore();
  const origDispatch = store.dispatch;
  // @ts-ignore
  store.dispatch = jest.fn(origDispatch);
  return store;
}

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as testRender}
