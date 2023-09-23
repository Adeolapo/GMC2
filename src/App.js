import React from 'react';
import './App.css';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React User List App</h1>
      </header>
      <main>
        <UserList />
        <h1>Hello</h1>
      </main>
    </div>
  );
}

export default App;
