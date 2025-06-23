import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const r = JSON.parse(localStorage.getItem('allScores')) || [];
    setRecords(r);
  }, []);

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr><th>Name</th><th>Score</th><th>Date</th></tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={i}><td>{r.name}</td><td>{r.score}</td><td>{r.date}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;


