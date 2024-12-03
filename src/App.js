// src/App.js
import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';  // Import your Dashboard component

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>AI-Driven Healthcare Platform</h1> {/* Platform Title */}
            </header>
            <main>
                <Dashboard />  {/* Add the Dashboard Component to display health insights */}
            </main>
        </div>
    );
}

export default App;
