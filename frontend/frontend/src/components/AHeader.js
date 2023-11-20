import React from "react";

function AHeader()
{

return(
    <div>

    <nav className="navbar">
    <div className="navbar-logo">
      <img src="profile-image.jpg" alt="Profile" />
      <button className="edit-button">Edit</button>
    </div>
    <ul className="nav-links">
      <li className="nav-item">
        <a href="/dashboard">Dashboard</a>
      </li>
      <li className="nav-item">
        <a href="/register">Register</a>
      </li>
      <li className="nav-item">
        <a href="/view-employees">View Employees</a>
      </li>
    </ul>
  </nav>
    </div>
    
)


}

export default AHeader;