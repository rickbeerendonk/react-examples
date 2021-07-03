/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import 'regenerator-runtime/runtime.js';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';

import useMousePosition from './mousepos';

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
