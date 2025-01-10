
import React from 'react';

const UserRegistration = () => {
  return (
    <form>
      <h2>Register</h2>
      <label>Name:</label>
      <input type="text" placeholder="Enter your name" required />
      <label>Email:</label>
      <input type="email" placeholder="Enter your email" required />
      <label>Password:</label>
      <input type="password" placeholder="Create a password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default UserRegistration;
