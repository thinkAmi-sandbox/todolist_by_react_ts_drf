import React, { FC } from 'react';
import './App.css';

const App: FC = () => {
  const message = 'hello';

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
};

export default App;
