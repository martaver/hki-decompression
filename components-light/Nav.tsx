import React from 'react';

export function Nav() {
  return (
    <nav id="nav" style={{ position: 'sticky', top: 0 }}>
      <ul className="links">
        <li className="active">
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#participate">Participate</a>
        </li>
        <li>
          <a href="#tickets">Tickets</a>
        </li>
        <li>
          <a href="#program">Program</a>
        </li>
        <li>
          <a href="#principles">Principles</a>
        </li>
        <li>
          <a href="#location">Location</a>
        </li>
        <li>
          <a href="http://regionals.burningman.org/" target={'__blank'}>
            BM Regionals
          </a>
        </li>
      </ul>
      <ul className="icons">
        <li>
          <a href="#" className="icon fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
