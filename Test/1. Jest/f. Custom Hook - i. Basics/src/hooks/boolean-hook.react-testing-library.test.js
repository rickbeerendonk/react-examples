/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { renderHook } from '@testing-library/react-hooks';

import useBoolean from './boolean-hook';
import { act } from 'react-test-renderer';

/// React Testing Library ///

describe('useBoolean', () => {
  it('returned value should match the initial value', async () => {
    const { result /*, waitForNextUpdate */ } = renderHook(() =>
      useBoolean(false)
    );

    expect(result.current[0]).toEqual(false);
  });

  it('toggle should update the value', async () => {
    const { result /*, waitForNextUpdate */ } = renderHook(() =>
      useBoolean(false)
    );

    expect(result.current[0]).toEqual(false);

    // toggle()
    act(() => result.current[1]());

    expect(result.current[0]).toEqual(true);
  });
});
