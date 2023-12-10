/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

function sleep(delay) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

export function slowAdd(value) {
  sleep(1000);
  return value + 1;
}
