import React, { useState } from 'react';
import './index.css';

function App() {
  const [hex, setHex] = useState('');
  const [rgb, setRgb] = useState(null);
  const [error, setError] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');

  const handleChange = (e) => {
    const value = e.target.value;
    setHex(value);

    if (value.length === 7) {
      if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
        const r = parseInt(value.slice(1, 3), 16);
        const g = parseInt(value.slice(3, 5), 16);
        const b = parseInt(value.slice(5, 7), 16);
        setRgb({ r, g, b });
        setError('');
        setBgColor(value);
      } else {
        setRgb(null);
        setError('Ошибка! Введите корректный HEX-цвет.');
        setBgColor('#ffffff');
      }
    } else {
      setRgb(null);
      setError('');
      setBgColor('#ffffff');
    }
  };

  return (
    <div className="app-wrapper" style={{ backgroundColor: bgColor }}>
      <div className="converter-card">
        <input
          type="text"
          className="hex-input"
          value={hex}
          onChange={handleChange}
          placeholder="#000000"
          maxLength={7}
        />
        <div className="result-box">
          {error && <span className="error-text">{error}</span>}
          {rgb && (
            <span className="rgb-text">
              rgb({rgb.r}, {rgb.g}, {rgb.b})
            </span>
          )}
          {!error && !rgb && <span className="placeholder-text">Введите цвет</span>}
        </div>
      </div>
    </div>
  );
}

export default App;
