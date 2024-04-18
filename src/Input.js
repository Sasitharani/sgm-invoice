// Input.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Input = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with inputValue
    console.log('Form submitted with input value:', inputValue);
  };

  return (
    <div className="container">
      {/* Input Field */}
      <div className="row">
        <div className="col-md-6 border">
          <label htmlFor="customInput">Custom Input</label>
          <input
            type="text"
            id="customInput"
            className="form-control"
            value={inputValue}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Submit Button */}
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
