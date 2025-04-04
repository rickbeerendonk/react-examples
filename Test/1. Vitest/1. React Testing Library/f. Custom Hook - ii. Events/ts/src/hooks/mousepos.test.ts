/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { act } from 'react-test-renderer';

import useMousePosition from './mousepos.js';

/// React Testing Library ///

describe('useMousePosition', () => {
  it('mouse move should update the value', async () => {
    const { result /*, waitForNextUpdate */ } = renderHook(() =>
      useMousePosition()
    );

    expect(result.current).toEqual({ x: undefined, y: undefined });

    // Mouse move
    act(() => {
      let mouseMove = new Event('mousemove');
      mouseMove.pageX = 10;
      mouseMove.pageY = 20;
      window.document.dispatchEvent(mouseMove);
    });

    expect(result.current).toEqual({ x: 10, y: 20 });
  });
});
