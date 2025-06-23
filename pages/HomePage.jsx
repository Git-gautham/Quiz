// pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

function HomePage() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Test Your Knowledge!</h1>
        <p>Challenge yourself with fun and exciting quizzes.</p>
        <button onClick={() => navigate('/addplayer')}>Start Quiz</button>
      </div>
      <div className="hero-img">
        <img src="/quiz.svg" alt="Quiz Illustration" />
      </div>
    </section>
  );
}

export default HomePage;
