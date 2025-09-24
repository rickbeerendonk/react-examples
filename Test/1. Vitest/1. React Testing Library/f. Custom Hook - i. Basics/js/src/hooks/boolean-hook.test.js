/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { renderHook } from '@testing-library/react';
import { act } from 'react-test-renderer';

import useBoolean from './boolean-hook';

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

  it('toggle should always remain the same', async () => {
    // Check useCallback is used for toggle()

    const { result /*, waitForNextUpdate */ } = renderHook(() =>
      useBoolean(false)
    );

    const toggleOriginal = result.current[1];

    // toggle()
    act(() => result.current[1]());

    expect(result.current[1]).toEqual(toggleOriginal);
  });
});
