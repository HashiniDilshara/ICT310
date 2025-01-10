//npm install react-router-dom
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Login from './components/Login';
import UserRegistration from './components/UserRegistration';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Welcome</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<UserRegistration />} />
      </Routes>
    </Router>
  );
};

export default App;
