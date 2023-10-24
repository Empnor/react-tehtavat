import React, { useState } from 'react';

function lista() {
  const [Tehtävät, setTehtävät] = useState([]);
  const [Tehtävä, setTehtävä] = useState('');

  const addTehtävä = () => {
    if (Tehtävä.trim() !== '') {
    setTehtävät([...Tehtävät, Tehtävä]);
    setTehtävä('');
    }
  };

  const deleteTehtävä = (index) => {
    const updatedTehtävät = Tehtävät.filter((_, i) => i !== index);
    setTehtävät(updatedTehtävät);
  };

  return (
    <div>
      <h1>Tehtävä lista</h1>
      <input
        type="text"
        value={Tehtävä}
        onChange={(e) => setTehtävä(e.target.value)}
      />
      <button onClick={addTehtävä}>Lisää</button>
      <ul>
        {Tehtävät.map((Tehtävä, index) => (
          <li key={index}>
            {Tehtävä}
            <button onClick={() => deleteTehtävä(index)}>Poista</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default lista;
