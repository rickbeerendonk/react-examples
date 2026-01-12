/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function slowAddAsync(value) {
  return delay(1000).then(() => value + 1);
}
