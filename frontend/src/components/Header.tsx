import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 border-bottom">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <svg className="bi me-2" width="40" height="32" aria-hidden="true">
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4">Simple header</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
