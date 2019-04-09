/** @license React vundefined
 * react-events-drag.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ReactEventsDrag = factory());
}(this, (function () { 'use strict';

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;














var REACT_EVENT_COMPONENT_TYPE = hasSymbol ? Symbol.for('react.event_component') : 0xead5;


// React event targets

var targetEventTypes = ['pointerdown', 'pointercancel'];
var rootEventTypes = ['pointerup', { name: 'pointermove', passive: false }];

// In the case we don't have PointerEvents (Safari), we listen to touch events
// too
if (typeof window !== 'undefined' && window.PointerEvent === undefined) {
  targetEventTypes.push('touchstart', 'touchend', 'mousedown', 'touchcancel');
  rootEventTypes.push('mouseup', 'mousemove', {
    name: 'touchmove',
    passive: false
  });
}

function createDragEvent(type, target, listener, eventData) {
  return objectAssign({
    listener: listener,
    target: target,
    type: type
  }, eventData);
}

function dispatchDragEvent(context, name, listener, state, discrete, eventData) {
  var target = state.dragTarget;
  var syntheticEvent = createDragEvent(name, target, listener, eventData);
  context.dispatchEvent(syntheticEvent, { discrete: discrete });
}

var DragResponder = {
  targetEventTypes: targetEventTypes,
  createInitialState: function () {
    return {
      dragTarget: null,
      isPointerDown: false,
      isDragging: false,
      startX: 0,
      startY: 0,
      x: 0,
      y: 0
    };
  },
  onEvent: function (event, context, props, state) {
    var target = event.target,
        type = event.type,
        nativeEvent = event.nativeEvent;


    switch (type) {
      case 'touchstart':
      case 'mousedown':
      case 'pointerdown':
        {
          if (!state.isDragging) {
            if (props.onShouldClaimOwnership) {
              context.releaseOwnership();
            }
            var obj = type === 'touchstart' ? nativeEvent.changedTouches[0] : nativeEvent;
            var _x = state.startX = obj.screenX;
            var _y = state.startY = obj.screenY;
            state.x = _x;
            state.y = _y;
            state.dragTarget = target;
            state.isPointerDown = true;

            if (props.onDragStart) {
              dispatchDragEvent(context, 'dragstart', props.onDragStart, state, true);
            }

            context.addRootEventTypes(target.ownerDocument, rootEventTypes);
          }
          break;
        }
      case 'touchmove':
      case 'mousemove':
      case 'pointermove':
        {
          if (event.passive) {
            return;
          }
          if (state.isPointerDown) {
            var _obj = type === 'touchmove' ? nativeEvent.changedTouches[0] : nativeEvent;
            var _x2 = _obj.screenX;
            var _y2 = _obj.screenY;
            state.x = _x2;
            state.y = _y2;
            if (!state.isDragging && _x2 !== state.startX && _y2 !== state.startY) {
              var shouldEnableDragging = true;

              if (props.onShouldClaimOwnership && props.onShouldClaimOwnership()) {
                shouldEnableDragging = context.requestOwnership();
              }
              if (shouldEnableDragging) {
                state.isDragging = true;
                if (props.onDragChange) {
                  var dragChangeEventListener = function () {
                    props.onDragChange(true);
                  };
                  dispatchDragEvent(context, 'dragchange', dragChangeEventListener, state, true);
                }
              } else {
                state.dragTarget = null;
                state.isPointerDown = false;
                context.removeRootEventTypes(rootEventTypes);
              }
            } else {
              if (props.onDragMove) {
                var eventData = {
                  diffX: _x2 - state.startX,
                  diffY: _y2 - state.startY
                };
                dispatchDragEvent(context, 'dragmove', props.onDragMove, state, false, eventData);
              }
              nativeEvent.preventDefault();
            }
          }
          break;
        }
      case 'pointercancel':
      case 'touchcancel':
      case 'touchend':
      case 'mouseup':
      case 'pointerup':
        {
          if (state.isDragging) {
            if (props.onShouldClaimOwnership) {
              context.releaseOwnership();
            }
            if (props.onDragEnd) {
              dispatchDragEvent(context, 'dragend', props.onDragEnd, state, true);
            }
            if (props.onDragChange) {
              var _dragChangeEventListener = function () {
                props.onDragChange(false);
              };
              dispatchDragEvent(context, 'dragchange', _dragChangeEventListener, state, true);
            }
            state.isDragging = false;
          }
          if (state.isPointerDown) {
            state.dragTarget = null;
            state.isPointerDown = false;
            context.removeRootEventTypes(rootEventTypes);
          }
          break;
        }
    }
  }
};

var Drag = {
  $$typeof: REACT_EVENT_COMPONENT_TYPE,
  displayName: 'Drag',
  props: null,
  responder: DragResponder
};

var Drag$1 = Object.freeze({
	default: Drag
});

var Drag$2 = ( Drag$1 && Drag ) || Drag$1;

var drag = Drag$2.default || Drag$2;

return drag;

})));
