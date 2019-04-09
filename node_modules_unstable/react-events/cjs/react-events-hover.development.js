/** @license React vundefined
 * react-events-hover.development.js
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

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;














var REACT_EVENT_COMPONENT_TYPE = hasSymbol ? Symbol.for('react.event_component') : 0xead5;


// React event targets

var DEFAULT_HOVER_END_DELAY_MS = 0;
var DEFAULT_HOVER_START_DELAY_MS = 0;

var targetEventTypes = ['pointerover', 'pointermove', 'pointerout', 'pointercancel'];

// If PointerEvents is not supported (e.g., Safari), also listen to touch and mouse events.
if (typeof window !== 'undefined' && window.PointerEvent === undefined) {
  targetEventTypes.push('touchstart', 'mouseover', 'mouseout');
}

function createHoverEvent(type, target, listener) {
  return {
    listener: listener,
    target: target,
    type: type
  };
}

function dispatchHoverChangeEvent(event, context, props, state) {
  var listener = function () {
    props.onHoverChange(state.isActiveHovered);
  };
  var syntheticEvent = createHoverEvent('hoverchange', event.target, listener);
  context.dispatchEvent(syntheticEvent, { discrete: true });
}

function dispatchHoverStartEvents(event, context, props, state) {
  var nativeEvent = event.nativeEvent,
      target = event.target;

  if (context.isTargetWithinEventComponent(nativeEvent.relatedTarget)) {
    return;
  }

  state.isHovered = true;

  if (state.hoverEndTimeout !== null) {
    clearTimeout(state.hoverEndTimeout);
    state.hoverEndTimeout = null;
  }

  var activate = function () {
    state.isActiveHovered = true;

    if (props.onHoverStart) {
      var syntheticEvent = createHoverEvent('hoverstart', target, props.onHoverStart);
      context.dispatchEvent(syntheticEvent, { discrete: true });
    }
    if (props.onHoverChange) {
      dispatchHoverChangeEvent(event, context, props, state);
    }
  };

  if (!state.isActiveHovered) {
    var _delayHoverStart = calculateDelayMS(props.delayHoverStart, 0, DEFAULT_HOVER_START_DELAY_MS);
    if (_delayHoverStart > 0) {
      state.hoverStartTimeout = context.setTimeout(function () {
        state.hoverStartTimeout = null;
        activate();
      }, _delayHoverStart);
    } else {
      activate();
    }
  }
}

function dispatchHoverEndEvents(event, context, props, state) {
  var nativeEvent = event.nativeEvent,
      target = event.target;

  if (context.isTargetWithinEventComponent(nativeEvent.relatedTarget)) {
    return;
  }

  state.isHovered = false;

  if (state.hoverStartTimeout !== null) {
    clearTimeout(state.hoverStartTimeout);
    state.hoverStartTimeout = null;
  }

  var deactivate = function () {
    state.isActiveHovered = false;

    if (props.onHoverEnd) {
      var syntheticEvent = createHoverEvent('hoverend', target, props.onHoverEnd);
      context.dispatchEvent(syntheticEvent, { discrete: true });
    }
    if (props.onHoverChange) {
      dispatchHoverChangeEvent(event, context, props, state);
    }
  };

  if (state.isActiveHovered) {
    var _delayHoverEnd = calculateDelayMS(props.delayHoverEnd, 0, DEFAULT_HOVER_END_DELAY_MS);
    if (_delayHoverEnd > 0) {
      state.hoverEndTimeout = context.setTimeout(function () {
        deactivate();
      }, _delayHoverEnd);
    } else {
      deactivate();
    }
  }
}

function calculateDelayMS(delay) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var maybeNumber = delay == null ? null : delay;
  return Math.max(min, maybeNumber != null ? maybeNumber : fallback);
}

var HoverResponder = {
  targetEventTypes: targetEventTypes,
  createInitialState: function () {
    return {
      isActiveHovered: false,
      isHovered: false,
      isInHitSlop: false,
      isTouched: false,
      hoverStartTimeout: null,
      hoverEndTimeout: null
    };
  },
  onEvent: function (event, context, props, state) {
    var type = event.type,
        target = event.target,
        nativeEvent = event.nativeEvent;


    switch (type) {
      /**
       * Prevent hover events when touch is being used.
       */
      case 'touchstart':
        {
          if (!state.isTouched) {
            state.isTouched = true;
          }
          break;
        }

      case 'pointerover':
      case 'mouseover':
        {
          if (!state.isHovered && !state.isTouched && !context.hasOwnership()) {
            if (nativeEvent.pointerType === 'touch') {
              state.isTouched = true;
              return;
            }
            if (context.isPositionWithinTouchHitTarget(target.ownerDocument, nativeEvent.x, nativeEvent.y)) {
              state.isInHitSlop = true;
              return;
            }
            dispatchHoverStartEvents(event, context, props, state);
          }
          break;
        }
      case 'pointerout':
      case 'mouseout':
        {
          if (state.isHovered && !state.isTouched) {
            dispatchHoverEndEvents(event, context, props, state);
          }
          state.isInHitSlop = false;
          state.isTouched = false;
          break;
        }

      case 'pointermove':
        {
          if (state.isHovered && !state.isTouched) {
            if (state.isInHitSlop) {
              if (!context.isPositionWithinTouchHitTarget(target.ownerDocument, nativeEvent.x, nativeEvent.y)) {
                dispatchHoverStartEvents(event, context, props, state);
                state.isInHitSlop = false;
              }
            } else if (state.isHovered && context.isPositionWithinTouchHitTarget(target.ownerDocument, nativeEvent.x, nativeEvent.y)) {
              dispatchHoverEndEvents(event, context, props, state);
              state.isInHitSlop = true;
            }
          }
          break;
        }

      case 'pointercancel':
        {
          if (state.isHovered && !state.isTouched) {
            dispatchHoverEndEvents(event, context, props, state);
            state.isTouched = false;
          }
          break;
        }
    }
  }
};

var Hover = {
  $$typeof: REACT_EVENT_COMPONENT_TYPE,
  displayName: 'Hover',
  props: null,
  responder: HoverResponder
};

var Hover$1 = Object.freeze({
	default: Hover
});

var Hover$2 = ( Hover$1 && Hover ) || Hover$1;

var hover = Hover$2.default || Hover$2;

module.exports = hover;
  })();
}
