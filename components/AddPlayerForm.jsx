
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddPlayerForm() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('General');
  const [difficulty, setDifficulty] = useState('Easy');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const playerData = { name, category, difficulty };
    localStorage.setItem('playerData', JSON.stringify(playerData));
    navigate('/quiz/start');
  };

  return (
    <form className="player-form" onSubmit={handleSubmit}>
      <h2>Enter Quiz Details</h2>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option>General</option>
        <option>Science</option>
        <option>History</option>
      </select>
      <select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
      <button disabled={!name}>Start</button>
    </form>
  );
}

export default AddPlayerForm;
