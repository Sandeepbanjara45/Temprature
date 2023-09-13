import React, { useState } from 'react';

const Temperature = () => {
  const [Celsius, setCelsius] = useState(0);
  const [Fahrenheit, setFahrenheit] = useState(32);

  const handleFahrenheit = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(ftoc(value));
  };

  const handleCelsius = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(ctof(value));
  };

  const ftoc = (Fahrenheit) => {
    return ((Fahrenheit - 32) * 5) / 9;
  };

  const ctof = (Celsius) => {
    return (Celsius * 9) / 5 + 32;
  };

  return (
    <div className="container">
    <div className="temperature-card">
      <div className="card-title">Temperature Converter</div>
      <div className="input-group">
        <label>Celsius:</label>
        <input type="text" value={Celsius} onChange={handleCelsius} />
      </div>
      <div className="input-group">
        <label>Fahrenheit:</label>
        <input type="text" value={Fahrenheit} onChange={handleFahrenheit} />
      </div>
    </div>
    </div>
  );
};

export default Temperature;
