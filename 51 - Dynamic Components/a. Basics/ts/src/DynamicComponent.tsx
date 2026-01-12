/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { forwardRef, ElementType, ComponentPropsWithoutRef, Ref } from 'react';
import { jsx } from 'react/jsx-runtime';

// Key is not available in props
type DynamicComponentProps<T extends ElementType> = {
  as: T;
} & ComponentPropsWithoutRef<T>;

const DynamicComponent = forwardRef(
  <T extends ElementType>(
    { as, ...otherProps }: DynamicComponentProps<T>,
    ref: Ref<any>
  ) => {
    return jsx(as, { ref, ...otherProps });
  }
);

export default DynamicComponent;
