import React, { useState } from 'react';

function App() {
  const [hex, setHex] = useState('');
  const [rgb, setRgb] = useState(null);
  const [error, setError] = useState('');

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
        document.body.style.backgroundColor = value;
      } else {
        setRgb(null);
        setError('Ошибка! Введите корректный HEX-цвет.');
        document.body.style.backgroundColor = '';
      }
    } else {
      setRgb(null);
      setError('');
      document.body.style.backgroundColor = '';
    }
  };

  return (
    <div>
      <input
        type="text"
        value={hex}
        onChange={handleChange}
        placeholder="#000000"
        maxLength={7}
      />
      {error && <div className="result error">{error}</div>}
      {rgb && (
        <div className="result">
          rgb({rgb.r}, {rgb.g}, {rgb.b})
        </div>
      )}
    </div>
  );
}

export default App;