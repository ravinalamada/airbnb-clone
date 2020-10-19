import React from 'react';
import places from '../stays.json';

let data = require('../stays.json')
console.log(data);

function App() {
  return (
    <div>
       {data.map(data => {
          return (
          <h2>{data.city}</h2>
          )
       })}
    </div>


  )
}

export default App;
