import {makeTestStore, mockStore} from '../test-utils';
import {setLanguage} from './appSlice';

describe('Change language tests.', () => {
  test('Change language fires only setLanguage action.', async () => {
    const requestPayload = 'newLanguage';
    const store = mockStore({
      app: {
        language: ''
      }
    });
    const expectedActions = [
      setLanguage(requestPayload)
    ];

    await store.dispatch(setLanguage(requestPayload));

    expect(store.getActions()).toEqual(expectedActions);
  });

  test('State is changed correctly.', async () => {
    const requestPayload = 'newLanguage';
    const store = makeTestStore({
      app: {
        language: 'zzz'
      }
    });
    const expectedStore = mockStore({
      app: {
        language: requestPayload
      }
    });

    await store.dispatch(setLanguage(requestPayload));

    expect(store.getState()).toEqual(expectedStore.getState());
  });
});
