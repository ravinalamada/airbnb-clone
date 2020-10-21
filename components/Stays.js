import React from "react";

function Stays(props) {
  return (
    <div className="cards">
      <img src={props.photo}></img>
      <div className="wrapper">
        <div className="contents">
          {props.superHost === true && <p><a href="/super-host" className="superHost">Super Host</a></p>}
          <p className="desc">{props.type}</p>
          <p className="desc">.{props.beds} beds</p>
        </div>
        <div className="wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#EB5757" />
          </svg>
          <span className="rating">{props.rating}</span>
        </div>
      </div>
      <p>{props.title}</p>
    </div>
  )
}

export default Stays;
