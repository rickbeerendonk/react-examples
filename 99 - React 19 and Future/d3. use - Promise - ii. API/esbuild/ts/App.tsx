/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { Suspense, use } from 'react';

function Battery() {
  const battery = use(navigator.getBattery());
  return (
    <ul>
      <li>Charging: {battery.charging ? 'Yes' : 'No'}</li>
      <li>Level: {battery.level}</li>
      <li>Charging time (seconds until full): {battery.chargingTime}</li>
      <li>Discharging time (seconds until empty): {battery.dischargingTime}</li>
    </ul>
  );
}

export default function App() {
  return (
    <>
      <h1>Battery status</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Battery />
      </Suspense>
    </>
  );
}
