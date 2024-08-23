/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { Suspense, use } from 'react';

function App() {
  const battery = use(navigator.getBattery());

  return (
    <>
      <h1>Battery status</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul>
          <li>Charging: {battery.charging ? 'Yes' : 'No'}</li>
          <li>Level: {battery.level}</li>
          <li>Charging time (seconds until full): {battery.chargingTime}</li>
          <li>
            Discharging time (seconds until empty): {battery.dischargingTime}
          </li>
        </ul>
      </Suspense>
    </>
  );
}

export default App;
