import React from 'react';

import './form-button.styles.css';


const FormButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} form-button`} {...otherProps} >
    {children.toUpperCase()}
  </button>
);


export default FormButton;
