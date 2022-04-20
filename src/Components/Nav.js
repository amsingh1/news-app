import React from 'react'
import {Link} from 'react-router-dom'

export default function () {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand">NewsToday</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to='/'  className="nav-link" > General</Link>
        <Link to='/technology' className="nav-link"> Technology</Link>
        <Link to='/sports' className="nav-link"> Sports</Link>
        <Link to='/science' className="nav-link"> Science</Link>
        <Link to='/health' className="nav-link"> Health</Link>
        <Link to='/business' className="nav-link"> Business</Link>
        <Link to='/entertainment' className="nav-link"> Entertainment</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
