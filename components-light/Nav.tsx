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
          <a href="#program">Program</a>
        </li>
        <li>
          <a href="#principles">Principles</a>
        </li>
        <li>
          <a href="#location">Location</a>
        </li>
        <li>
          <a href="#regionals">BM Regionals</a>
        </li>
        <li>
          <a href="elements">Elements</a>
        </li>
      </ul>
      <ul className="icons">
        {/*<li>*/}
        {/*  <a href="#" className="icon fa-twitter">*/}
        {/*    <span className="label">Twitter</span>*/}
        {/*  </a>*/}
        {/*</li>*/}
        <li>
          <a href="#" className="icon fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        {/*<li>*/}
        {/*  <a href="#" className="icon fa-instagram">*/}
        {/*    <span className="label">Instagram</span>*/}
        {/*  </a>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <a href="#" className="icon fa-github">*/}
        {/*    <span className="label">GitHub</span>*/}
        {/*  </a>*/}
        {/*</li>*/}
      </ul>
    </nav>
  );
}
