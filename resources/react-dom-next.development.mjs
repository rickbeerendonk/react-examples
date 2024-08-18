/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2024 Rick Beerendon      !*/

/* global ReactDOM */

/* eslint-disable react/no-deprecated */

export default ReactDOM;

export const {
  __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, // Rename in React 19
  createPortal,
  flushSync,
  preconnect,
  prefetchDNS,
  preinit,
  preinitModule,
  preload,
  preloadModule,
  requestFormReset, // New in React 19
  unstable_batchedUpdates,
  useFormState,
  useFormStatus,
  version
} = ReactDOM;
