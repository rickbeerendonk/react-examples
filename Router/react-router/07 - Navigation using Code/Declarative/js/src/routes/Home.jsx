/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2024 Rick Beerendonk !*/

import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  function goToPage1() {
    navigate('/page1');
  }

  function goToPage2() {
    navigate('/page2');
  }

  return (
    <>
      <h2>Home</h2>
      <p>
        <button onClick={goToPage1}>Navigate to Page 1</button>{' '}
        <button onClick={goToPage2}>Navigate to Page 2</button>
      </p>
    </>
  );
}

export default Home;
