import React from 'react'
import {Link} from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" id="nav">
  <div className="container-fluid">
    <img id="img" alt="..."src="favicon-32x32.png"/>
    <Link className="navbar-brand" id="daily" to="/">Daily Stories</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item  App">
          <Link className="nav-link active" id="weather" aria-current="page" to="/">Weather</Link>
        </li>
        <li className="nav-item dropdown  App">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            News
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="news">Home</Link></li>
            
            <li><Link className="dropdown-item" to="world">World</Link></li>
            <li><Link className="dropdown-item" to="business">Business</Link></li>
            <li><Link className="dropdown-item" to="entertainment">Entertainment</Link></li>
            <li><Link className="dropdown-item" to="sports">Sports</Link></li>
            <li><Link className="dropdown-item" to="science">Science</Link></li>
            <li><Link className="dropdown-item" to="health">Health</Link></li>
          </ul>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
