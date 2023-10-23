// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [csrfToken, setCsrfToken] = useState('');

//   // Fetch the CSRF token when the component mounts
//   useEffect(() => {
//     fetch('http://127.0.0.1:8000/get-csrf-token/')
//       .then(response => response.json())
//       .then(data => {
//         setCsrfToken(data.csrfToken);
//       })
//       .catch(error => {
//         console.error('Error fetching CSRF token:', error);
//       });
//   }, []);

//   const handleLogin = () => {
//     fetch('http://127.0.0.1:8000/myadmin/admin_login/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-CSRFToken': csrfToken,
//       },
//       body: JSON.stringify({ username, password }),
//     })
//       .then(response => response.text())
//       .then(data => {
//         console.log(data); // Log the response data
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//       {error && <p>{error}</p>}
//     </div>
//   );
// }

// export default Login;

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
