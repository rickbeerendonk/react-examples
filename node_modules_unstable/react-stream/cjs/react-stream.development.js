/** @license React vundefined
 * react-stream.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

if (process.env.NODE_ENV !== "production") {
  module.exports = function $$$reconciler($$$hostConfig) {
'use strict';

// This is a host config that's used for the `react-stream` package on npm.
// It is only used by third-party renderers.
//
// Its API lets you pass the host config as an argument.
// However, inside the `react-stream` we treat host config as a module.
// This file is a shim between two worlds.
//
// It works because the `react-stream` bundle is wrapped in something like:
//
// module.exports = function ($$$config) {
//   /* renderer code */
// }
//
// So `$$$config` looks like a global variable, but it's
// really an argument to a top-level wrapping function.
// eslint-disable-line no-undef
var scheduleWork = $$$hostConfig.scheduleWork;
var beginWriting = $$$hostConfig.beginWriting;
var writeChunk = $$$hostConfig.writeChunk;
var completeWriting = $$$hostConfig.completeWriting;
var flushBuffered = $$$hostConfig.flushBuffered;
var close = $$$hostConfig.close;
var convertStringToBuffer = $$$hostConfig.convertStringToBuffer;

// This is a host config that's used for the `react-stream` package on npm.
// It is only used by third-party renderers.
//
// Its API lets you pass the host config as an argument.
// However, inside the `react-stream` we treat host config as a module.
// This file is a shim between two worlds.
//
// It works because the `react-stream` bundle is wrapped in something like:
//
// module.exports = function ($$$config) {
//   /* renderer code */
// }
//
// So `$$$config` looks like a global variable, but it's
// really an argument to a top-level wrapping function.
// eslint-disable-line no-undef
var formatChunk = $$$hostConfig.formatChunk;

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;





 // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

function createRequest(children, destination) {
  return {
    destination: destination,
    children: children,
    completedChunks: [],
    flowing: false
  };
}

function performWork(request) {
  var element = request.children;
  request.children = null;

  if (element && element.$$typeof !== REACT_ELEMENT_TYPE) {
    return;
  }

  var type = element.type;
  var props = element.props;

  if (typeof type !== 'string') {
    return;
  }

  request.completedChunks.push(formatChunk(type, props));

  if (request.flowing) {
    flushCompletedChunks(request);
  }

  flushBuffered(request.destination);
}

function flushCompletedChunks(request) {
  var destination = request.destination;
  var chunks = request.completedChunks;
  request.completedChunks = [];
  beginWriting(destination);

  try {
    for (var i = 0; i < chunks.length; i++) {
      var chunk = chunks[i];
      writeChunk(destination, chunk);
    }
  } finally {
    completeWriting(destination);
  }

  close(destination);
}

function startWork(request) {
  request.flowing = true;
  scheduleWork(function () {
    return performWork(request);
  });
}
function startFlowing(request, desiredBytes) {
  request.flowing = false;
  flushCompletedChunks(request);
}

var ReactFizzStreamer = Object.freeze({
	createRequest: createRequest,
	startWork: startWork,
	startFlowing: startFlowing
});

// This entry point is intentionally not typed. It exists only for third-party
// renderers. The renderers we ship (such as React DOM) instead import a named
// "inline" entry point (for example, `react-stream/inline.dom`). It uses
// the same code, but the Flow configuration redirects the host config to its
// real implementation so we can check it against exact intended host types.
//
// Only one renderer (the one you passed to `yarn flow <renderer>`) is fully
// type-checked at any given time. The Flow config maps the
// `react-stream/inline.<renderer>` import (which is *not* Flow typed) to
// `react-stream/inline-typed` (which *is*) for the current renderer.
// On CI, we run Flow checks for each renderer separately.


 // TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.


var reactStream = ReactFizzStreamer.default || ReactFizzStreamer;

module.exports = reactStream;
    var $$$renderer = module.exports;
    module.exports = $$$reconciler;
    return $$$renderer;
  };
}
