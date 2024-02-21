import React from "react";

const Navbar =() => (
<nav class="navbar navbar-expand-lg text-info h-auto nav">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">AUCTION SYSTEM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto menu">
        <li class="nav-item">
          <a class="nav-link " href="/"><i class="fa fa-home"></i> Home</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fas fa-eject"></i> About</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/routes">
              <i class="fas fa-route"></i> Routes 
            </a>
          </li>
      </ul>
      <li class="nav-item">
            <a className="nav-link nav-link-end" href="https://github.com/sradha010/auc-sys" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i>
              </a></li>
    
    </div>
  </div>
</nav>
)

export default Navbar