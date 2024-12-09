import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import JobForm from './components/JobForm';
import JobList from './components/JobList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-job" element={<JobForm />} />
        <Route path="/jobs" element={<JobList />} />
      </Routes>
    </Router>
  );
}

export default App;
