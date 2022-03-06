# Unstable functions

## React

### async

- [old] React.unstable_AsyncComponent -> React.unstable_AsyncMode
- [old] React.unstable_AsyncMode -> unstable_ConcurrentMode
- React.unstable_ConcurrentMode

### profiler

- React.unstable_Profiler

## ReactDOM

### async

- ReactDOM.unstable_batchedUpdates
- ReactDOM.createRoot
- ReactDOM.unstable_deferredUpdates
- ReactDOM.unstable_flushControlled
- ReactDOM.unstable_interactiveUpdates
- ReactDOM.unstable_renderSubtreeIntoContainer

## React Cache

### Resource / createResource

Non-primitive keys _do_ require a hash function:

- createResource(loadResource: (K) => Promise<V>, hash?: (K) => H): Resource<K, V>;

Resource:

- read(cache, key)
- preload(cache, key)

### other

- ReactDOM.unstable_createPortal (deprecated, removed in 17+)

## Scheduler

- unstable_scheduleCallback
- unstable_cancelCallback
- unstable_now
- unstable_getFirstCallbackNode
- unstable_pauseExecution
- unstable_continueExecution

## ReactTestRenderer

- ReactTestRenderer.unstable_yield

## ReactTestRendererFiber

ReactTestRendererFiber.unstable_batchedUpdates

- - ReactTestRendererFiber.unstable_flushAll
- ReactTestRendererFiber.unstable_flushSync
- ReactTestRendererFiber.unstable_flushNumberOfYields
- ReactTestRendererFiber.unstable_clearYields
- ReactTestRendererFiber.unstable_yield
- ReactTestRendererFiber.unstable_setNowImplementation

## Other

- unstable_isAsync

- Context.unstable_read
- newProps.unstable_observedBits

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

\_\_SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};

## Copyright

Copyright © 2014-2019 Rick Beerendonk
