import React from "react";

const Navbar = () => (
    <nav class="navbar navbar-expand-lg navbar-light bg-warning text-dark h-auto">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Auction System</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    
)

  export default Navbar