/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

interface WithExtrasProps {
  extraColor: string;
}

// HOC
const withExtras = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithExtras: React.FC<WithExtrasProps & P> = ({
    extraColor,
    ...passThroughProps
  }) => (
    <div style={{ color: extraColor }}>
      <WrappedComponent {...(passThroughProps as P)} />
    </div>
  );

  return WithExtras;
};

export { withExtras };
