/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

// HOC
export function withExtras(WrappedComponent) {
  function WithExtras({ extraColor, ...passThroughProps }) {
    return (
      <div style={{ color: extraColor }}>
        <WrappedComponent {...passThroughProps} />
      </div>
    );
  }

  return WithExtras;
}
