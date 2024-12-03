import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard'; // Adjust based on your components

function App() {
    return (
        <div className="App">
            <h1>AI-Driven Healthcare Platform</h1>
            <Dashboard /> {/* Ensure this component renders */}
        </div>
    );
}

export default App;
