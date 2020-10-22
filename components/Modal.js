import React, { useState } from 'react';

function Modal(props) {
  return (
    <div className="outter-modal">
      <div className="inner-modal">
        {props.content}
        {props.buttons}
      </div>
    </div>
  )
}

export default Modal;
