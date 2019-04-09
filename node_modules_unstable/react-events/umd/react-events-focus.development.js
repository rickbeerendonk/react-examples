/** @license React vundefined
 * react-events-focus.development.js
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
	(global.ReactEventsFocus = factory());
}(this, (function () { 'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;














var REACT_EVENT_COMPONENT_TYPE = hasSymbol ? Symbol.for('react.event_component') : 0xead5;


// React event targets

var targetEventTypes = [{ name: 'focus', passive: true, capture: true }, { name: 'blur', passive: true, capture: true }];

function createFocusEvent(type, target, listener) {
  return {
    listener: listener,
    target: target,
    type: type
  };
}

function dispatchFocusInEvents(event, context, props) {
  var nativeEvent = event.nativeEvent,
      target = event.target;

  if (context.isTargetWithinEventComponent(nativeEvent.relatedTarget)) {
    return;
  }
  if (props.onFocus) {
    var syntheticEvent = createFocusEvent('focus', target, props.onFocus);
    context.dispatchEvent(syntheticEvent, { discrete: true });
  }
  if (props.onFocusChange) {
    var _listener = function () {
      props.onFocusChange(true);
    };
    var _syntheticEvent = createFocusEvent('focuschange', target, _listener);
    context.dispatchEvent(_syntheticEvent, { discrete: true });
  }
}

function dispatchFocusOutEvents(event, context, props) {
  var nativeEvent = event.nativeEvent,
      target = event.target;

  if (context.isTargetWithinEventComponent(nativeEvent.relatedTarget)) {
    return;
  }
  if (props.onBlur) {
    var syntheticEvent = createFocusEvent('blur', target, props.onBlur);
    context.dispatchEvent(syntheticEvent, { discrete: true });
  }
  if (props.onFocusChange) {
    var _listener2 = function () {
      props.onFocusChange(false);
    };
    var _syntheticEvent2 = createFocusEvent('focuschange', target, _listener2);
    context.dispatchEvent(_syntheticEvent2, { discrete: true });
  }
}

var FocusResponder = {
  targetEventTypes: targetEventTypes,
  createInitialState: function () {
    return {
      isFocused: false
    };
  },
  onEvent: function (event, context, props, state) {
    var type = event.type;


    switch (type) {
      case 'focus':
        {
          if (!state.isFocused && !context.hasOwnership()) {
            dispatchFocusInEvents(event, context, props);
            state.isFocused = true;
          }
          break;
        }
      case 'blur':
        {
          if (state.isFocused) {
            dispatchFocusOutEvents(event, context, props);
            state.isFocused = false;
          }
          break;
        }
    }
  }
};

var Focus = {
  $$typeof: REACT_EVENT_COMPONENT_TYPE,
  displayName: 'Focus',
  props: null,
  responder: FocusResponder
};

var Focus$1 = Object.freeze({
	default: Focus
});

var Focus$2 = ( Focus$1 && Focus ) || Focus$1;

var focus = Focus$2.default || Focus$2;

return focus;

})));
