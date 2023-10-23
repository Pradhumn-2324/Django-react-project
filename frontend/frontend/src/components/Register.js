import React, { useState } from "react";
import axios from "axios";


function Register(){
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [is_staff, setIsStaff] = useState(false);
    const [date_joined, setDateOfJoining] = useState('');
    
    const handleSubmit = () => {
        const formattedDate = new Date(date_joined).toISOString();
        axios.post('http://127.0.0.1:8000/myadmin/register/', {
      name,
      email,
      is_staff,
      date_joined: formattedDate,
      username,
      password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => {
        const {username} = response.data
        const {user} = response.data
        // navigate(`admin_home/${username}`,{state : {user}
    // })
    console.log(response.data)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
        

      
    return (
        
        <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Is Staff:</label>
          <input
            type="checkbox"
            checked={is_staff}
            onChange={(e) => setIsStaff(e.target.checked)}
          />
        </div>
        <div>
          <label>Date of Joining:</label>
          <input
            type="date"
            value={date_joined}
            onChange={(e) => setDateOfJoining(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;