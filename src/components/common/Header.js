import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand text-light h3 mx-4" href="/">
          <i class="fa fa-big fa-thin fa-rss"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li className="nav-item active">
              <a
                className="nav-link active text-light h5"
                aria-current="page"
                href="/"
              >
                RSS-22
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light h5 mx-2" href="/items">
                Articles
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link text-light h5 mx-2" href="/item">
                Ajouter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
