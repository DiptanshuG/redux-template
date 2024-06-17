import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/actions/authActions';

const Signup = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(credentials));
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={credentials.email} onChange={handleChange} placeholder="Email" />
        <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
