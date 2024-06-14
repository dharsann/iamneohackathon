import React from 'react';
import GenerateQuestion from './components/GenerateQuestion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Question Generator</h1>
      </header>
      <main>
        <GenerateQuestion />
      </main>
    </div>
  );
}

export default App;
