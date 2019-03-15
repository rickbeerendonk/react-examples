/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

function sleep(delay) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

export function slowEcho(value) {
  sleep(250);
  return value;
}
