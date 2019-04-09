/** @license React vundefined
 * react-events-press.development.js
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
	(global.ReactEventsPress = factory());
}(this, (function () { 'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;














var REACT_EVENT_COMPONENT_TYPE = hasSymbol ? Symbol.for('react.event_component') : 0xead5;


// React event targets

var DEFAULT_PRESS_END_DELAY_MS = 0;
var DEFAULT_PRESS_START_DELAY_MS = 0;
var DEFAULT_LONG_PRESS_DELAY_MS = 500;

var targetEventTypes = [{ name: 'click', passive: false }, { name: 'keydown', passive: false }, 'pointerdown', 'pointercancel', 'contextmenu'];
var rootEventTypes = [{ name: 'keyup', passive: false }, { name: 'pointerup', passive: false }, 'scroll'];

// If PointerEvents is not supported (e.g., Safari), also listen to touch and mouse events.
if (typeof window !== 'undefined' && window.PointerEvent === undefined) {
  targetEventTypes.push('touchstart', 'touchend', 'mousedown', 'touchcancel');
  rootEventTypes.push({ name: 'mouseup', passive: false });
}

function createPressEvent(type, target, listener) {
  return {
    listener: listener,
    target: target,
    type: type
  };
}

function dispatchEvent(context, state, name, listener) {
  var target = state.pressTarget;
  var syntheticEvent = createPressEvent(name, target, listener);
  context.dispatchEvent(syntheticEvent, { discrete: true });
}

function dispatchPressChangeEvent(context, props, state) {
  var listener = function () {
    props.onPressChange(state.isActivePressed);
  };
  dispatchEvent(context, state, 'presschange', listener);
}

function dispatchLongPressChangeEvent(context, props, state) {
  var listener = function () {
    props.onLongPressChange(state.isLongPressed);
  };
  dispatchEvent(context, state, 'longpresschange', listener);
}

function activate(context, props, state) {
  var wasActivePressed = state.isActivePressed;
  state.isActivePressed = true;

  if (props.onPressStart) {
    dispatchEvent(context, state, 'pressstart', props.onPressStart);
  }
  if (!wasActivePressed && props.onPressChange) {
    dispatchPressChangeEvent(context, props, state);
  }
}

function deactivate(context, props, state) {
  var wasLongPressed = state.isLongPressed;
  state.isActivePressed = false;
  state.isLongPressed = false;

  if (props.onPressEnd) {
    dispatchEvent(context, state, 'pressend', props.onPressEnd);
  }
  if (props.onPressChange) {
    dispatchPressChangeEvent(context, props, state);
  }
  if (wasLongPressed && props.onLongPressChange) {
    dispatchLongPressChangeEvent(context, props, state);
  }
}

function dispatchPressStartEvents(context, props, state) {
  state.isPressed = true;

  if (state.pressEndTimeout !== null) {
    clearTimeout(state.pressEndTimeout);
    state.pressEndTimeout = null;
  }

  var dispatch = function () {
    state.isActivePressStart = true;
    activate(context, props, state);

    if ((props.onLongPress || props.onLongPressChange) && !state.isLongPressed) {
      var _delayLongPress = calculateDelayMS(props.delayLongPress, 10, DEFAULT_LONG_PRESS_DELAY_MS);
      state.longPressTimeout = context.setTimeout(function () {
        state.isLongPressed = true;
        state.longPressTimeout = null;
        if (props.onLongPress) {
          var _listener = function (e) {
            props.onLongPress(e);
            // TODO address this again at some point
            // if (e.nativeEvent.defaultPrevented) {
            //   state.defaultPrevented = true;
            // }
          };
          dispatchEvent(context, state, 'longpress', _listener);
        }
        if (props.onLongPressChange) {
          dispatchLongPressChangeEvent(context, props, state);
        }
      }, _delayLongPress);
    }
  };

  if (!state.isActivePressStart) {
    var _delayPressStart = calculateDelayMS(props.delayPressStart, 0, DEFAULT_PRESS_START_DELAY_MS);
    if (_delayPressStart > 0) {
      state.pressStartTimeout = context.setTimeout(function () {
        state.pressStartTimeout = null;
        dispatch();
      }, _delayPressStart);
    } else {
      dispatch();
    }
  }
}

function dispatchPressEndEvents(context, props, state) {
  var wasActivePressStart = state.isActivePressStart;

  state.isActivePressStart = false;
  state.isPressed = false;

  if (state.longPressTimeout !== null) {
    clearTimeout(state.longPressTimeout);
    state.longPressTimeout = null;
  }

  if (!wasActivePressStart && state.pressStartTimeout !== null) {
    clearTimeout(state.pressStartTimeout);
    state.pressStartTimeout = null;
    // if we haven't yet activated (due to delays), activate now
    activate(context, props, state);
  }

  if (state.isActivePressed) {
    var _delayPressEnd = calculateDelayMS(props.delayPressEnd, 0, DEFAULT_PRESS_END_DELAY_MS);
    if (_delayPressEnd > 0) {
      state.pressEndTimeout = context.setTimeout(function () {
        state.pressEndTimeout = null;
        deactivate(context, props, state);
      }, _delayPressEnd);
    } else {
      deactivate(context, props, state);
    }
  }
}

function isAnchorTagElement(eventTarget) {
  return eventTarget.nodeName === 'A';
}

function isValidKeyPress(key) {
  // Accessibility for keyboards. Space and Enter only.
  return key === ' ' || key === 'Enter';
}

function calculateDelayMS(delay) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var maybeNumber = delay == null ? null : delay;
  return Math.max(min, maybeNumber != null ? maybeNumber : fallback);
}

function unmountResponder(context, props, state) {
  if (state.isPressed) {
    dispatchPressEndEvents(context, props, state);
    context.removeRootEventTypes(rootEventTypes);
  }
}

var PressResponder = {
  targetEventTypes: targetEventTypes,
  createInitialState: function () {
    return {
      defaultPrevented: false,
      isActivePressed: false,
      isActivePressStart: false,
      isAnchorTouched: false,
      isLongPressed: false,
      isPressed: false,
      longPressTimeout: null,
      pressEndTimeout: null,
      pressStartTimeout: null,
      pressTarget: null,
      shouldSkipMouseAfterTouch: false
    };
  },
  onEvent: function (event, context, props, state) {
    var target = event.target,
        type = event.type,
        nativeEvent = event.nativeEvent;


    switch (type) {
      /**
       * Respond to pointer events and fall back to mouse.
       */
      case 'pointerdown':
      case 'mousedown':
        {
          if (!state.isPressed && !context.hasOwnership() && !state.shouldSkipMouseAfterTouch) {
            if (nativeEvent.pointerType === 'mouse' || type === 'mousedown') {
              if (
              // Ignore right- and middle-clicks
              nativeEvent.button === 1 || nativeEvent.button === 2 ||
              // Ignore pressing on hit slop area with mouse
              context.isPositionWithinTouchHitTarget(target.ownerDocument, nativeEvent.x, nativeEvent.y)) {
                return;
              }
            }
            state.pressTarget = target;
            dispatchPressStartEvents(context, props, state);
            context.addRootEventTypes(target.ownerDocument, rootEventTypes);
          }
          break;
        }
      case 'pointerup':
      case 'mouseup':
        {
          if (state.isPressed) {
            if (state.shouldSkipMouseAfterTouch) {
              state.shouldSkipMouseAfterTouch = false;
              return;
            }

            var wasLongPressed = state.isLongPressed;

            dispatchPressEndEvents(context, props, state);

            if (state.pressTarget !== null && props.onPress) {
              if (context.isTargetWithinElement(target, state.pressTarget)) {
                if (!(wasLongPressed && props.onLongPressShouldCancelPress && props.onLongPressShouldCancelPress())) {
                  var _listener2 = function (e) {
                    props.onPress(e);
                    // TODO address this again at some point
                    // if (e.nativeEvent.defaultPrevented) {
                    //   state.defaultPrevented = true;
                    // }
                  };
                  dispatchEvent(context, state, 'press', _listener2);
                }
              }
            }
            context.removeRootEventTypes(rootEventTypes);
          }
          state.isAnchorTouched = false;
          break;
        }

      /**
       * Touch event implementations are only needed for Safari, which lacks
       * support for pointer events.
       */
      case 'touchstart':
        {
          if (!state.isPressed && !context.hasOwnership()) {
            // We bail out of polyfilling anchor tags, given the same heuristics
            // explained above in regards to needing to use click events.
            if (isAnchorTagElement(target)) {
              state.isAnchorTouched = true;
              return;
            }
            state.pressTarget = target;
            dispatchPressStartEvents(context, props, state);
            context.addRootEventTypes(target.ownerDocument, rootEventTypes);
          }
          break;
        }
      case 'touchend':
        {
          if (state.isAnchorTouched) {
            state.isAnchorTouched = false;
            return;
          }
          if (state.isPressed) {
            var _wasLongPressed = state.isLongPressed;

            dispatchPressEndEvents(context, props, state);

            if (type !== 'touchcancel' && props.onPress) {
              // Find if the X/Y of the end touch is still that of the original target
              var changedTouch = nativeEvent.changedTouches[0];
              var doc = target.ownerDocument;
              var fromTarget = doc.elementFromPoint(changedTouch.screenX, changedTouch.screenY);
              if (fromTarget !== null && context.isTargetWithinEventComponent(fromTarget)) {
                if (!(_wasLongPressed && props.onLongPressShouldCancelPress && props.onLongPressShouldCancelPress())) {
                  dispatchEvent(context, state, 'press', props.onPress);
                }
              }
            }
            state.shouldSkipMouseAfterTouch = true;
            context.removeRootEventTypes(rootEventTypes);
          }
          break;
        }

      /**
       * Keyboard interaction support
       * TODO: determine UX for metaKey + validKeyPress interactions
       */
      case 'keydown':
        {
          if (!state.isPressed && !state.isLongPressed && !context.hasOwnership() && isValidKeyPress(nativeEvent.key)) {
            // Prevent spacebar press from scrolling the window
            if (nativeEvent.key === ' ') {
              nativeEvent.preventDefault();
            }
            state.pressTarget = target;
            dispatchPressStartEvents(context, props, state);
            context.addRootEventTypes(target.ownerDocument, rootEventTypes);
          }
          break;
        }
      case 'keyup':
        {
          if (state.isPressed && isValidKeyPress(nativeEvent.key)) {
            var _wasLongPressed2 = state.isLongPressed;
            dispatchPressEndEvents(context, props, state);
            if (state.pressTarget !== null && props.onPress) {
              if (!(_wasLongPressed2 && props.onLongPressShouldCancelPress && props.onLongPressShouldCancelPress())) {
                dispatchEvent(context, state, 'press', props.onPress);
              }
            }
            context.removeRootEventTypes(rootEventTypes);
          }
          break;
        }

      case 'contextmenu':
      case 'pointercancel':
      case 'scroll':
      case 'touchcancel':
        {
          if (state.isPressed) {
            state.shouldSkipMouseAfterTouch = false;
            dispatchPressEndEvents(context, props, state);
            context.removeRootEventTypes(rootEventTypes);
          }
          break;
        }

      case 'click':
        {
          if (state.defaultPrevented) {
            nativeEvent.preventDefault();
            state.defaultPrevented = false;
          }
        }
    }
  },
  onUnmount: function (context, props, state) {
    unmountResponder(context, props, state);
  },

  // TODO This method doesn't work as of yet
  onOwnershipChange: function (context, props, state) {
    unmountResponder(context, props, state);
  }
};

var Press = {
  $$typeof: REACT_EVENT_COMPONENT_TYPE,
  displayName: 'Press',
  props: null,
  responder: PressResponder
};

var Press$1 = Object.freeze({
	default: Press
});

var Press$2 = ( Press$1 && Press ) || Press$1;

var press = Press$2.default || Press$2;

return press;

})));
