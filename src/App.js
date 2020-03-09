import React from 'react';
import { Weather } from './weather';

function App() {

  const cities = [{
                      name: 'São Paulo',
                      woeid: 455827
                  }, 
                  {
                      name: 'Lisbon',
                      woeid: 742676
                  },
                  {
                      name: 'Berlin',
                      woeid: 638242
                  },
                  {
                      name: 'London',
                      woeid: 44418
                  },
                ];

  return (  
      <Weather cities={cities}>
      </Weather>
  );
}

export default App;
