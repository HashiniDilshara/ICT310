import React from 'react';

const Login = () => {
  return (
    <form>
      <h2>Login</h2>
      <label>Email:</label>
      <input type="email" placeholder="Enter your email" required />
      <label>Password:</label>
      <input type="password" placeholder="Enter your password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
