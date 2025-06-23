import React, { useState, useEffect } from 'react';
import questions from '../data/questions';

function QuizEngine() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [answers, setAnswers] = useState([]);

  const questionSet = questions;
  const q = questionSet[current];

  useEffect(() => {
    if (timeLeft === 0) {
      next();
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const next = () => {
    setAnswers([...answers, { ...q, selected }]);
    if (selected === q.correct) setScore(score + 1);
    setSelected(null);
    setTimeLeft(15);
    if (current + 1 < questionSet.length) setCurrent(current + 1);
    else {
      localStorage.setItem('lastScore', JSON.stringify({ score, answers }));
      window.location.href = '/scores';
    }
  };

  return (
    <div className="quiz">
      <h2>{q.question}</h2>
      <ul>
        {q.options.map((opt, idx) => (
          <li key={idx} onClick={() => setSelected(opt)} className={selected === opt ? 'selected' : ''}>{opt}</li>
        ))}
      </ul>
      <p>Time left: {timeLeft}s</p>
      <button onClick={next} disabled={!selected}>Next</button>
    </div>
  );
}

export default QuizEngine;
