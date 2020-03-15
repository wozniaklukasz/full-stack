import React from 'react';
import {makeTestStore, testRender} from '../test-utils';
import Footer from './Footer';

describe('Footer tests.', () => {
  test('Footer renders correct text.', () => {
    const store = makeTestStore();
    const {getByText} = testRender(<Footer/>, {store});

    expect(getByText('footer test pl')).toBeTruthy();
  });
});
