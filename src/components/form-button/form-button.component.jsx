import React from 'react';

import './form-button.styles.css';


const FormButton = ({ children, ...otherProps }) => (
  <button className="form-button" {...otherProps} >
    {children.toUpperCase()}
  </button>
);


export default FormButton;
