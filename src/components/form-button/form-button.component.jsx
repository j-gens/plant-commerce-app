import React from 'react';

import './form-button.styles.css';


const FormButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} form-button`} {...otherProps} >
    {children.toUpperCase()}
  </button>
);


export default FormButton;
