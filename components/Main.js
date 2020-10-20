import React from 'react';
import places from '../stays.json';

let data = require('../stays.json');

function Main() {
  return (
    <section>
      <h2>Stays in Finland</h2>
      <div className="container">
        {data.map(data => {
          return (
            <div key={data.title} className="cards">
              <img src={data.photo}></img>
              <div className="wrapper">
                <div className="contents">
                {data.superHost === true && <p><a href="/super-host" className="superHost">Super Host</a></p>}
                  <p className="desc">{data.type}</p>
                  <p className="desc">.{data.beds} beds</p>
                </div>
                <div className="wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#EB5757" />
                  </svg>
                  <span className="rating">{data.rating}</span>
                </div>
              </div>
              <p>{data.title}</p>
            </div>
          )
        })}
      </div>
    </section>


  )
}

export default Main;
