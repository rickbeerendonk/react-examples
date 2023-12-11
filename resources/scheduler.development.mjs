/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2023 Rick Beerendonk     !*/

/* global Scheduler */

export default Scheduler;

export const {
  unstable_cancelCallback,
  unstable_continueExecution,
  unstable_getCurrentPriorityLevel,
  unstable_getFirstCallbackNode,
  unstable_IdlePriority,
  unstable_ImmediatePriority,
  unstable_LowPriority,
  unstable_NormalPriority,
  unstable_now,
  unstable_PriorityLevel,
  unstable_runWithPriority,
  unstable_scheduleCallback,
  unstable_shouldYield,
  unstable_UserBlockingPriority,
  unstable_wrapCallback
} = Scheduler;
