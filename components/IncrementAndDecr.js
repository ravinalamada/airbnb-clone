import React, { useState } from 'react';

function IncrementAndDecr() {
  const [countChildren, setCountChildren] = useState(0);
  const [countAdults, setCountAdults] = useState(0);

  function Increment() {
    setCountChildren((prev) => prev + 1)
  }

  function Decrement() {
    setCountChildren((prev) => prev - 1)
  }

  function IncremenAdultst() {
    setCountAdults((prev) => prev + 1)
  }

  function DecrementAdults() {
    setCountAdults((prev) => prev - 1)
  }

  return (
    <>
      <div className="btn-container">
        <h3>Adults</h3>
        <span>Age 13 or above</span>
        <div className="btn-wrapper">
          <button onClick={DecrementAdults}>-</button>
          <h1>{countAdults}</h1>
          <button onClick={IncremenAdultst}>+</button>
        </div>
      </div>
      <div className="btn-container">
        <h3>Children</h3>
        <span>Age 2-12 </span>
        <div className="btn-wrapper">
          <button onClick={Decrement}>-</button>
          <h1>{countChildren}</h1>
          <button onClick={Increment}>+</button>
        </div>
      </div>

    </>
  )
}

export default IncrementAndDecr;
