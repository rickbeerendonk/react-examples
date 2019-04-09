/** @license React vundefined
 * react-events-swipe.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';



if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

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

function createSwipeEvent(type, target, listener, eventData) {
  return objectAssign({
    listener: listener,
    target: target,
    type: type
  }, eventData);
}

function dispatchSwipeEvent(context, name, listener, state, discrete, eventData) {
  var target = state.swipeTarget;
  var syntheticEvent = createSwipeEvent(name, target, listener, eventData);
  context.dispatchEvent(syntheticEvent, { discrete: discrete });
}

var SwipeResponder = {
  targetEventTypes: targetEventTypes,
  createInitialState: function () {
    return {
      direction: 0,
      isSwiping: false,
      lastDirection: 0,
      startX: 0,
      startY: 0,
      touchId: null,
      swipeTarget: null,
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
          if (!state.isSwiping && !context.hasOwnership()) {
            var obj = nativeEvent;
            if (type === 'touchstart') {
              obj = nativeEvent.targetTouches[0];
              state.touchId = obj.identifier;
            }
            var _x = obj.screenX;
            var _y = obj.screenY;

            var shouldEnableSwiping = true;

            if (props.onShouldClaimOwnership && props.onShouldClaimOwnership()) {
              shouldEnableSwiping = context.requestOwnership();
            }
            if (shouldEnableSwiping) {
              state.isSwiping = true;
              state.startX = _x;
              state.startY = _y;
              state.x = _x;
              state.y = _y;
              state.swipeTarget = target;
              context.addRootEventTypes(target.ownerDocument, rootEventTypes);
            } else {
              state.touchId = null;
            }
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
          if (state.isSwiping) {
            var _obj = null;
            if (type === 'touchmove') {
              var targetTouches = nativeEvent.targetTouches;
              for (var i = 0; i < targetTouches.length; i++) {
                if (state.touchId === targetTouches[i].identifier) {
                  _obj = targetTouches[i];
                  break;
                }
              }
            } else {
              _obj = nativeEvent;
            }
            if (_obj === null) {
              state.isSwiping = false;
              state.swipeTarget = null;
              state.touchId = null;
              context.removeRootEventTypes(rootEventTypes);
              return;
            }
            var _x2 = _obj.screenX;
            var _y2 = _obj.screenY;
            if (_x2 < state.x && props.onSwipeLeft) {
              state.direction = 3;
            } else if (_x2 > state.x && props.onSwipeRight) {
              state.direction = 1;
            }
            state.x = _x2;
            state.y = _y2;
            if (props.onSwipeMove) {
              var eventData = {
                diffX: _x2 - state.startX,
                diffY: _y2 - state.startY
              };
              dispatchSwipeEvent(context, 'swipemove', props.onSwipeMove, state, false, eventData);
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
          if (state.isSwiping) {
            if (state.x === state.startX && state.y === state.startY) {
              return;
            }
            if (props.onShouldClaimOwnership) {
              context.releaseOwnership();
            }
            var _direction = state.direction;
            var _lastDirection = state.lastDirection;
            if (_direction !== _lastDirection) {
              if (props.onSwipeLeft && _direction === 3) {
                dispatchSwipeEvent(context, 'swipeleft', props.onSwipeLeft, state, true);
              } else if (props.onSwipeRight && _direction === 1) {
                dispatchSwipeEvent(context, 'swiperight', props.onSwipeRight, state, true);
              }
            }
            if (props.onSwipeEnd) {
              dispatchSwipeEvent(context, 'swipeend', props.onSwipeEnd, state, true);
            }
            state.lastDirection = _direction;
            state.isSwiping = false;
            state.swipeTarget = null;
            state.touchId = null;
            context.removeRootEventTypes(rootEventTypes);
          }
          break;
        }
    }
  }
};

var Swipe = {
  $$typeof: REACT_EVENT_COMPONENT_TYPE,
  displayName: 'Swipe',
  props: null,
  responder: SwipeResponder
};

var Swipe$1 = Object.freeze({
	default: Swipe
});

var Swipe$2 = ( Swipe$1 && Swipe ) || Swipe$1;

var swipe = Swipe$2.default || Swipe$2;

module.exports = swipe;
  })();
}
