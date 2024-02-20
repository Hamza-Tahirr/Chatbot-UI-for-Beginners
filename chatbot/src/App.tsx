// App.tsx
import React from 'react';
import Sidebar from './Sidebar';
import HomeScreen from './HomeScreen';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <HomeScreen />
    </div>
  );
}

export default App;
