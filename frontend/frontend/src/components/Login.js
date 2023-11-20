
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    axios.post('http://127.0.0.1:8000/myadmin/admin_login/', {
      username,
      password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        const {username} = response.data
        const {user} = response.data
        navigate(`admin_home/${username}`,{state : {user}})
        // Log the response data
        // Handle success, e.g., navigate to a new page
        // navigate('/success-page');
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle login error
        // setError('Login failed. Please try again.');
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
