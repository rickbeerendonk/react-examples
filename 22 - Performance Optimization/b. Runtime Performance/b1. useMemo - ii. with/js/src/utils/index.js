/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

function sleep(delay) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

export function slowDivision(numerator, denominator) {
  /* eslint no-console:0 */
  console.log('Division: ', numerator, '/', denominator);

  sleep(1000);
  return numerator / denominator;
}
