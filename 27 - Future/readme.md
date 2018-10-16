# Unstable functions

## React

### async

* React.unstable_AsyncComponent
* React.unstable_AsyncMode

### profiler

* React.unstable_Profiler

### other

* enableGetDerivedStateFromCatch
* Lifecycle method: getDerivedStateFromCatch

## ReactDOM

### async

* ReactDOM.unstable_batchedUpdates
* ReactDOM.unstable_createRoot
* ReactDOM.unstable_deferredUpdates
* ReactDOM.unstable_flushControlled
* ReactDOM.unstable_interactiveUpdates
* ReactDOM.unstable_renderSubtreeIntoContainer

### other

* ReactDOM.unstable_createPortal (deprecated, removed in 17+)

## ReactTestRenderer

* ReactTestRenderer.unstable_yield

## ReactTestRendererFiber

ReactTestRendererFiber.unstable_batchedUpdates
* * ReactTestRendererFiber.unstable_flushAll
* ReactTestRendererFiber.unstable_flushSync
* ReactTestRendererFiber.unstable_flushNumberOfYields
* ReactTestRendererFiber.unstable_clearYields
* ReactTestRendererFiber.unstable_yield
* ReactTestRendererFiber.unstable_setNowImplementation


## Other

* unstable_isAsync

* Context.unstable_read
* newProps.unstable_observedBits


## React object

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,
  lazy: lazy,
  pure: pure,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  unstable_ConcurrentMode: REACT_CONCURRENT_MODE_TYPE,
  unstable_Suspense: REACT_SUSPENSE_TYPE,
  unstable_Profiler: REACT_PROFILER_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};
