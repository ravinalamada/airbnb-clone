import React, { useLayoutEffect, useState } from 'react';
import places from '../stays.json';
import Form from "./Form";
import Header from "./Header";
import Stays from "./Stays";

let data = require('../stays.json');
function Main() {
  const [stay, setStay] = useState('');
  const [Guests, setGuests] = useState('');
  const [Results, setResults] = useState([]);

  function handleChange(e) {
    setStay(e.target.value)
    setResults(data.filter(stay => {
      return stay.city.toLocaleLowerCase() === e.target.value.toLocaleLowerCase();
    }))
  }

  function handleChangeNum(e) {
    setGuests(e.target.value)
    setResults(data.filter(guest => {
      return guest.maxGuests.toString() === e.target.value;
    }))
  }

  return (
    <>
      <section className="container">
        <Header />
        <Form handleChange={handleChange}
              number={handleChangeNum}
              inputValue={Guests}
        />
      </section>
      <div className="container">
        <h2>Stays in Finland</h2>
        <p>+12stays</p>
      </div>
      <div className="container">
        {stay || Guests
        ? Results.map(guest => <Stays key={guest.title} {...guest}/>)
        : data.map(data => <Stays key={data.title} {...data}/>)
        }
      </div>
    </>
  )
}

export default Main;
