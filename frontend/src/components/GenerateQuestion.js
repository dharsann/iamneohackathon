import React, { useState } from 'react';
import axios from 'axios';

const GenerateQuestion = () => {
  const [prompt, setPrompt] = useState('');
  const [question, setQuestion] = useState('');
  const [error, setError] = useState('');

  const handleGenerateQuestion = async () => {
    setError('');
    setQuestion('');

    try {
      const response = await axios.post('http://127.0.0.1:5000/generate-question', { prompt });
      setQuestion(response.data.question);
    } catch (err) {
      setError(err.response ? err.response.data.error : 'An error occurred');
    }
  };

  return (
    <div>
      <h1>Generate a Question</h1>
      <div>
        <label htmlFor="prompt">Enter Prompt:</label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <button onClick={handleGenerateQuestion}>Generate Question</button>
      {question && (
        <div>
          <h2>Generated Question:</h2>
          <p>{question}</p>
        </div>
      )}
      {error && (
        <div>
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default GenerateQuestion;
