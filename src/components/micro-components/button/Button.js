import React from 'react';

import './button.scss'

function Button(props) {
  return (
    <div className="button">
      {props.children}
    </div>
  );
}

export default Button;
