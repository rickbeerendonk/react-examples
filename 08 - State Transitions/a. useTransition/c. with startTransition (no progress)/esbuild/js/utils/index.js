/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

function sleep(delay) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

let wait = 2000;

export function slowAdd(value) {
  const oldWait = wait;
  wait = wait === 1000 ? 2000 : 1000;
  sleep(oldWait);
  return value + 1;
}
