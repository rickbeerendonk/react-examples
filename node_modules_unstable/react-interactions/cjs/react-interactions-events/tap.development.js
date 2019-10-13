/** @license React vundefined
 * react-interactions-events/tap.development.js
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

var React = require('react');

var DiscreteEvent = 0;
var UserBlockingEvent = 1;

var hasPointerEvents = typeof window !== 'undefined' && window.PointerEvent !== undefined;
var isMac = typeof window !== 'undefined' && window.navigator != null ? /^Mac/.test(window.navigator.platform) : false;
var buttonsEnum = {
  none: 0,
  primary: 1,
  secondary: 2,
  auxiliary: 4
};
function dispatchDiscreteEvent(context, payload, callback) {
  context.dispatchEvent(payload, callback, DiscreteEvent);
}
function dispatchUserBlockingEvent(context, payload, callback) {
  context.dispatchEvent(payload, callback, UserBlockingEvent);
}
function getTouchById(nativeEvent, pointerId) {
  if (pointerId != null) {
    var changedTouches = nativeEvent.changedTouches;

    for (var i = 0; i < changedTouches.length; i++) {
      var touch = changedTouches[i];

      if (touch.identifier === pointerId) {
        return touch;
      }
    }

    return null;
  }

  return null;
}
function hasModifierKey(event) {
  var nativeEvent = event.nativeEvent;
  var altKey = nativeEvent.altKey,
      ctrlKey = nativeEvent.ctrlKey,
      metaKey = nativeEvent.metaKey,
      shiftKey = nativeEvent.shiftKey;
  return altKey === true || ctrlKey === true || metaKey === true || shiftKey === true;
} // Keyboards, Assitive Technologies, and element.click() all produce a "virtual"
// click event. This is a method of inferring such clicks. Every browser except
// IE 11 only sets a zero value of "detail" for click events that are "virtual".
// However, IE 11 uses a zero value for all click events. For IE 11 we rely on
// the quirk that it produces click events that are of type PointerEvent, and
// where only the "virtual" click lacks a pointerType field.

/**
 * Native event dependencies
 */
var targetEventTypes = hasPointerEvents ? ['pointerdown'] : ['mousedown', 'touchstart'];
var rootEventTypes = hasPointerEvents ? ['click_active', 'contextmenu', 'pointerup', 'pointermove', 'pointercancel', 'scroll'] : ['click_active', 'contextmenu', 'mouseup', 'mousemove', 'dragstart', 'touchend', 'touchmove', 'touchcancel', 'scroll'];
/**
 * Responder and gesture state
 */

function createInitialState() {
  return {
    activePointerId: null,
    buttons: 0,
    ignoreEmulatedEvents: false,
    isActive: false,
    isAuxiliaryActive: false,
    initialPosition: {
      x: 0,
      y: 0
    },
    pointerType: '',
    responderTarget: null,
    rootEvents: null,
    shouldPreventDefault: true,
    gestureState: {
      altKey: false,
      ctrlKey: false,
      height: 1,
      metaKey: false,
      pageX: 0,
      pageY: 0,
      pointerType: '',
      pressure: 0,
      screenX: 0,
      screenY: 0,
      shiftKey: false,
      tangentialPressure: 0,
      target: null,
      tiltX: 0,
      tiltY: 0,
      timeStamp: 0,
      twist: 0,
      width: 1,
      x: 0,
      y: 0
    }
  };
}

function createPointerEventGestureState(context, props, state, event) {
  var timeStamp = context.getTimeStamp();
  var nativeEvent = event.nativeEvent;
  var altKey = nativeEvent.altKey,
      ctrlKey = nativeEvent.ctrlKey,
      height = nativeEvent.height,
      metaKey = nativeEvent.metaKey,
      pageX = nativeEvent.pageX,
      pageY = nativeEvent.pageY,
      pointerType = nativeEvent.pointerType,
      pressure = nativeEvent.pressure,
      screenX = nativeEvent.screenX,
      screenY = nativeEvent.screenY,
      shiftKey = nativeEvent.shiftKey,
      tangentialPressure = nativeEvent.tangentialPressure,
      tiltX = nativeEvent.tiltX,
      tiltY = nativeEvent.tiltY,
      twist = nativeEvent.twist,
      width = nativeEvent.width,
      clientX = nativeEvent.clientX,
      clientY = nativeEvent.clientY;
  return {
    altKey: altKey,
    ctrlKey: ctrlKey,
    height: height,
    metaKey: metaKey,
    pageX: pageX,
    pageY: pageY,
    pointerType: pointerType,
    pressure: pressure,
    screenX: screenX,
    screenY: screenY,
    shiftKey: shiftKey,
    tangentialPressure: tangentialPressure,
    target: state.responderTarget,
    tiltX: tiltX,
    tiltY: tiltY,
    timeStamp: timeStamp,
    twist: twist,
    width: width,
    x: clientX,
    y: clientY
  };
}

function createFallbackGestureState(context, props, state, event) {
  var timeStamp = context.getTimeStamp();
  var nativeEvent = event.nativeEvent;
  var eType = event.type;
  var altKey = nativeEvent.altKey,
      ctrlKey = nativeEvent.ctrlKey,
      metaKey = nativeEvent.metaKey,
      shiftKey = nativeEvent.shiftKey;
  var isCancelType = eType === 'dragstart' || eType === 'touchcancel';
  var isEndType = eType === 'mouseup' || eType === 'touchend';
  var isTouchEvent = event.pointerType === 'touch';
  var pointerEvent = nativeEvent;

  if (!hasPointerEvents && isTouchEvent) {
    var touch = getTouchById(nativeEvent, state.activePointerId);

    if (touch != null) {
      pointerEvent = touch;
    }
  }

  var _pointerEvent = pointerEvent,
      pageX = _pointerEvent.pageX,
      pageY = _pointerEvent.pageY,
      radiusX = _pointerEvent.radiusX,
      radiusY = _pointerEvent.radiusY,
      rotationAngle = _pointerEvent.rotationAngle,
      screenX = _pointerEvent.screenX,
      screenY = _pointerEvent.screenY,
      clientX = _pointerEvent.clientX,
      clientY = _pointerEvent.clientY;
  return {
    altKey: altKey,
    ctrlKey: ctrlKey,
    height: !isCancelType && radiusY != null ? radiusY * 2 : 1,
    metaKey: metaKey,
    pageX: isCancelType ? 0 : pageX,
    pageY: isCancelType ? 0 : pageY,
    pointerType: event.pointerType,
    pressure: isEndType || isCancelType ? 0 : isTouchEvent ? 1 : 0.5,
    screenX: isCancelType ? 0 : screenX,
    screenY: isCancelType ? 0 : screenY,
    shiftKey: shiftKey,
    tangentialPressure: 0,
    target: state.responderTarget,
    tiltX: 0,
    tiltY: 0,
    timeStamp: timeStamp,
    twist: rotationAngle != null ? rotationAngle : 0,
    width: !isCancelType && radiusX != null ? radiusX * 2 : 1,
    x: isCancelType ? 0 : clientX,
    y: isCancelType ? 0 : clientY
  };
}

var createGestureState = hasPointerEvents ? createPointerEventGestureState : createFallbackGestureState;
/**
 * Managing root events
 */

function addRootEventTypes(rootEvents, context, state) {
  if (!state.rootEvents) {
    state.rootEvents = rootEvents;
    context.addRootEventTypes(state.rootEvents);
  }
}

function removeRootEventTypes(context, state) {
  if (state.rootEvents != null) {
    context.removeRootEventTypes(state.rootEvents);
    state.rootEvents = null;
  }
}
/**
 * Managing pointers
 */


function getHitTarget(event, context, state) {
  if (!hasPointerEvents && event.pointerType === 'touch') {
    var doc = context.getActiveDocument();
    var nativeEvent = event.nativeEvent;
    var touch = getTouchById(nativeEvent, state.activePointerId);

    if (touch != null) {
      return doc.elementFromPoint(touch.clientX, touch.clientY);
    } else {
      return null;
    }
  }

  return event.target;
}

function isActivePointer(event, state) {
  var nativeEvent = event.nativeEvent;
  var activePointerId = state.activePointerId;

  if (hasPointerEvents) {
    var eventPointerId = nativeEvent.pointerId;

    if (activePointerId != null && eventPointerId != null) {
      return state.pointerType === event.pointerType && activePointerId === eventPointerId;
    } else {
      return true;
    }
  } else {
    if (event.pointerType === 'touch') {
      var touch = getTouchById(nativeEvent, activePointerId);
      return touch != null;
    } else {
      // accept all events that don't have pointer ids
      return true;
    }
  }
}

function isAuxiliary(buttons, event) {
  var nativeEvent = event.nativeEvent;
  var isPrimaryPointer = buttons === buttonsEnum.primary || event.pointerType === 'touch';
  return (// middle-click
    buttons === buttonsEnum.auxiliary || // open-in-new-tab
    isPrimaryPointer && nativeEvent.metaKey || // open-in-new-window
    isPrimaryPointer && nativeEvent.shiftKey
  );
}

function shouldActivate(event) {
  var nativeEvent = event.nativeEvent;
  var isPrimaryPointer = nativeEvent.buttons === buttonsEnum.primary || event.pointerType === 'touch';
  return isPrimaryPointer && !hasModifierKey(event);
}
/**
 * Communicating gesture state back to components
 */


function dispatchStart(context, props, state) {
  var type = 'tap:start';
  var onTapStart = props.onTapStart;

  if (onTapStart != null) {
    var payload = context.objectAssign({}, state.gestureState, {
      type: type
    });
    dispatchDiscreteEvent(context, payload, onTapStart);
  }

  dispatchChange(context, props, state);
}

function dispatchChange(context, props, state) {
  var onTapChange = props.onTapChange;

  if (onTapChange != null) {
    var payload = state.isActive;
    dispatchDiscreteEvent(context, payload, onTapChange);
  }
}

function dispatchUpdate(context, props, state) {
  var type = 'tap:update';
  var onTapUpdate = props.onTapUpdate;

  if (onTapUpdate != null) {
    var payload = context.objectAssign({}, state.gestureState, {
      type: type
    });
    dispatchUserBlockingEvent(context, payload, onTapUpdate);
  }
}

function dispatchEnd(context, props, state) {
  var type = 'tap:end';
  var onTapEnd = props.onTapEnd;
  dispatchChange(context, props, state);

  if (onTapEnd != null) {
    var defaultPrevented = state.shouldPreventDefault === true;
    var payload = context.objectAssign({}, state.gestureState, {
      defaultPrevented: defaultPrevented,
      type: type
    });
    dispatchDiscreteEvent(context, payload, onTapEnd);
  }
}

function dispatchCancel(context, props, state) {
  var type = 'tap:cancel';
  var onTapCancel = props.onTapCancel;
  dispatchChange(context, props, state);

  if (onTapCancel != null) {
    var payload = context.objectAssign({}, state.gestureState, {
      type: type
    });
    dispatchDiscreteEvent(context, payload, onTapCancel);
  }
}

function dispatchAuxiliaryTap(context, props, state) {
  var type = 'tap:auxiliary';
  var onAuxiliaryTap = props.onAuxiliaryTap;

  if (onAuxiliaryTap != null) {
    var payload = context.objectAssign({}, state.gestureState, {
      defaultPrevented: false,
      type: type
    });
    dispatchDiscreteEvent(context, payload, onAuxiliaryTap);
  }
}
/**
 * Responder implementation
 */


var responderImpl = {
  targetEventTypes: targetEventTypes,
  getInitialState: function () {
    return createInitialState();
  },
  onEvent: function (event, context, props, state) {
    if (props.disabled) {
      removeRootEventTypes(context, state);

      if (state.isActive) {
        state.isActive = false;
        dispatchCancel(context, props, state);
      }

      return;
    }

    var nativeEvent = event.nativeEvent;
    var eventTarget = nativeEvent.target;
    var eventType = event.type;

    switch (eventType) {
      // START
      case 'pointerdown':
      case 'mousedown':
      case 'touchstart':
        {
          if (eventType === 'mousedown' && state.ignoreEmulatedEvents) {
            return;
          }

          if (!state.isActive) {
            if (hasPointerEvents) {
              var pointerId = nativeEvent.pointerId;
              state.activePointerId = pointerId; // Make mouse and touch pointers consistent.
              // Flow bug: https://github.com/facebook/flow/issues/8055
              // $FlowExpectedError

              eventTarget.releasePointerCapture(pointerId);
            } else {
              if (eventType === 'touchstart') {
                var targetTouches = nativeEvent.targetTouches;

                if (targetTouches.length === 1) {
                  state.activePointerId = targetTouches[0].identifier;
                } else {
                  return;
                }
              }
            }

            var activate = shouldActivate(event);
            var activateAuxiliary = isAuxiliary(nativeEvent.buttons, event);

            if (activate || activateAuxiliary) {
              state.buttons = nativeEvent.buttons;
              state.pointerType = event.pointerType;
              state.responderTarget = context.getResponderNode();
              addRootEventTypes(rootEventTypes, context, state);

              if (!hasPointerEvents) {
                if (eventType === 'touchstart') {
                  state.ignoreEmulatedEvents = true;
                }
              }
            }

            if (activateAuxiliary) {
              state.isAuxiliaryActive = true;
            } else if (activate) {
              var gestureState = createGestureState(context, props, state, event);
              state.isActive = true;
              state.shouldPreventDefault = props.preventDefault !== false;
              state.gestureState = gestureState;
              state.initialPosition.x = gestureState.x;
              state.initialPosition.y = gestureState.y;
              dispatchStart(context, props, state);
            }
          } else if (!isActivePointer(event, state) || eventType === 'touchstart' && nativeEvent.targetTouches.length > 1) {
            // Cancel the gesture if a second pointer becomes active on the target.
            state.isActive = false;
            dispatchCancel(context, props, state);
          }

          break;
        }
    }
  },
  onRootEvent: function (event, context, props, state) {
    var nativeEvent = event.nativeEvent;
    var eventType = event.type;
    var hitTarget = getHitTarget(event, context, state);

    switch (eventType) {
      // UPDATE
      case 'pointermove':
      case 'mousemove':
      case 'touchmove':
        {
          if (!hasPointerEvents) {
            if (eventType === 'mousemove' && state.ignoreEmulatedEvents) {
              return;
            }
          }

          if (state.isActive && isActivePointer(event, state)) {
            state.gestureState = createGestureState(context, props, state, event);
            var shouldUpdate = true;

            if (!context.isTargetWithinResponder(hitTarget)) {
              shouldUpdate = false;
            } else if (props.maximumDistance != null && props.maximumDistance >= 10) {
              var maxDistance = props.maximumDistance;
              var initialPosition = state.initialPosition;
              var currentPosition = state.gestureState;
              var moveX = initialPosition.x - currentPosition.x;
              var moveY = initialPosition.y - currentPosition.y;
              var moveDistance = Math.sqrt(moveX * moveX + moveY * moveY);

              if (moveDistance > maxDistance) {
                shouldUpdate = false;
              }
            }

            if (shouldUpdate) {
              dispatchUpdate(context, props, state);
            } else {
              state.isActive = false;
              dispatchCancel(context, props, state);
            }
          }

          break;
        }
      // END

      case 'pointerup':
      case 'mouseup':
      case 'touchend':
        {
          if (state.isActive && isActivePointer(event, state)) {
            state.gestureState = createGestureState(context, props, state, event);
            state.isActive = false;

            if (isAuxiliary(state.buttons, event)) {
              dispatchCancel(context, props, state);
              dispatchAuxiliaryTap(context, props, state); // Remove the root events here as no 'click' event is dispatched

              removeRootEventTypes(context, state);
            } else if (!context.isTargetWithinResponder(hitTarget) || hasModifierKey(event)) {
              dispatchCancel(context, props, state);
            } else {
              dispatchEnd(context, props, state);
            }
          } else if (state.isAuxiliaryActive && isAuxiliary(state.buttons, event)) {
            state.isAuxiliaryActive = false;
            state.gestureState = createGestureState(context, props, state, event);
            dispatchAuxiliaryTap(context, props, state); // Remove the root events here as no 'click' event is dispatched

            removeRootEventTypes(context, state);
          }

          if (!hasPointerEvents) {
            if (eventType === 'mouseup') {
              state.ignoreEmulatedEvents = false;
            }
          }

          break;
        }
      // CANCEL

      case 'contextmenu':
      case 'pointercancel':
      case 'touchcancel':
      case 'dragstart':
        {
          if (state.isActive && isActivePointer(event, state)) {
            state.gestureState = createGestureState(context, props, state, event);
            state.isActive = false;
            dispatchCancel(context, props, state);
            removeRootEventTypes(context, state);
          }

          break;
        }
      // CANCEL

      case 'scroll':
        {
          if (state.isActive && state.responderTarget != null && // We ignore incoming scroll events when using mouse events
          state.pointerType !== 'mouse' && // If the scroll target is the document or if the pointer target
          // is within the 'scroll' target, then cancel the gesture
          context.isTargetWithinNode(state.responderTarget, nativeEvent.target)) {
            state.gestureState = createGestureState(context, props, state, event);
            state.isActive = false;
            dispatchCancel(context, props, state);
            removeRootEventTypes(context, state);
          }

          break;
        }

      case 'click':
        {
          if (state.shouldPreventDefault) {
            nativeEvent.preventDefault();
          }

          removeRootEventTypes(context, state);
          break;
        }
    }
  },
  onUnmount: function (context, props, state) {
    removeRootEventTypes(context, state);

    if (state.isActive) {
      state.isActive = false;
      dispatchCancel(context, props, state);
    }
  }
};
var TapResponder = React.unstable_createResponder('Tap', responderImpl);
function useTap(props) {
  return React.unstable_useResponder(TapResponder, props);
}

var Tap = Object.freeze({
	TapResponder: TapResponder,
	useTap: useTap
});

var tap = Tap;

module.exports = tap;
  })();
}
