/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import PropTypes from 'prop-types';
import React from 'react';

function FallbackDummy({ onShow }) {
  React.useEffect(() => {
    onShow && onShow();
  }, [onShow]);
  return <div />;
}
FallbackDummy.propTypes = {
  onShow: PropTypes.func.isRequired
};

function SuspenseFallback({
  maxDuration,
  fallback,
  fallbackDuration,
  children
}) {
  const [showFallback, setShowFallback] = React.useState(false);

  function handleFallbackShown() {
    setShowFallback(true);
    setTimeout(() => setShowFallback(false), fallbackDuration);
  }

  return showFallback ? (
    fallback
  ) : (
    <React.Suspense
      maxDuration={maxDuration}
      fallback={<FallbackDummy onShow={handleFallbackShown} />}
    >
      {children}
    </React.Suspense>
  );
}
SuspenseFallback.propTypes = {
  maxDuration: PropTypes.number,
  fallback: PropTypes.element,
  fallbackDuration: PropTypes.number,
  children: PropTypes.any.isRequired
};

export default SuspenseFallback;
