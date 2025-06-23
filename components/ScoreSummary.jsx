import React from 'react';

function ScoreSummary() {
  const { score } = JSON.parse(localStorage.getItem('lastScore')) || {};
  const { name } = JSON.parse(localStorage.getItem('playerData')) || {};

  return (
    <div className="summary">
      <h2>Well done, {name}!</h2>
      <p>Final Score: {score}</p>
      <p>{score > 2 ? 'Quiz Champion!' : 'More caffeine, maybe?'}</p>
      <button onClick={() => window.location.href = '/'}>Play Again</button>
    </div>
  );
}

export default ScoreSummary;

