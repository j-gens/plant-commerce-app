import React from 'react';

import './form-input.styles.css';


const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="form-input">
    <input className="form-input-field" onChange={handleChange} {...otherProps} />
    {
      label ?
      (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
        {label}
      </label>)
      : null
    }
  </div>
);


export default FormInput;
