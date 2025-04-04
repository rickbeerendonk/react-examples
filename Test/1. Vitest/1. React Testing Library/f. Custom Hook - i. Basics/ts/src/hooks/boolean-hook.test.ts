/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { describe, it, expect } from 'vitest';
import 'regenerator-runtime/runtime.js';
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
});
