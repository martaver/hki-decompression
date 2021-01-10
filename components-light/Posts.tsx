import { Article } from './Article';
import React from 'react';

export function Art() {
  return (
    <article className="post">
      <header className="major">
        {/*<span className="date">April 25, 2017</span>*/}
        <h2>
          <a href="#">Art</a>
        </h2>
      </header>
      <a href="#" className="image main">
        <img src="images/old/art2BW.png" alt="" />
      </a>
      <p>
        We want to make art again an interactive, participatory and shared
        experience of creative expression. Community-driven, inclusive and
        interactive art is vital to a thriving culture.
      </p>
      <a href={'http://mur.galleria.fi/kuvat/'}>Photo: Mari Mur</a>

      {/*<ul className="actions">*/}
      {/*  <li>*/}
      {/*    <a href="#" className="button big">*/}
      {/*      Full Story*/}
      {/*    </a>*/}
      {/*  </li>*/}
      {/*</ul>*/}
    </article>
  );
}

export function Music() {
  return (
    <article className="post">
      <header className="major">
        {/*<span className="date">April 25, 2017</span>*/}
        <h2>
          <a href="#">Music</a>
        </h2>
      </header>
      <a href="#" className="image main">
        <img src="images/old/music2BW.png" alt="" />
      </a>
      <p>
        To celebrate the life and to relieve the stress levels produced by the
        rat race, the raw expression of music and dance are paramount for
        successful decompression.
      </p>
      <a href={'http://mur.galleria.fi/kuvat/'}>Photo: Mari Mur</a>

      {/*<ul className="actions">*/}
      {/*  <li>*/}
      {/*    <a href="#" className="button big">*/}
      {/*      Full Story*/}
      {/*    </a>*/}
      {/*  </li>*/}
      {/*</ul>*/}
    </article>
  );
}

export function Workshops() {
  return (
    <article className="post">
      <header className="major">
        {/*<span className="date">April 25, 2017</span>*/}
        <h2>
          <a href="#">Workshops</a>
        </h2>
      </header>
      <a href="#" className="image main">
        <img src="images/old/workshopBW.png" alt="" />
      </a>
      <p>
        Through workshops the masters and apprentices meet. By teaching and
        actively taking part we share our expertise and knowledge to others. But
        by teaching we also learn ourselves.
      </p>

      {/*<ul className="actions">*/}
      {/*  <li>*/}
      {/*    <a href="#" className="button big">*/}
      {/*      Full Story*/}
      {/*    </a>*/}
      {/*  </li>*/}
      {/*</ul>*/}
    </article>
  );
}

export function Performances() {
  return (
    <article className="post">
      <header className="major">
        {/*<span className="date">April 25, 2017</span>*/}
        <h2>
          <a href="#">Performances</a>
        </h2>
      </header>
      <a href="#" className="image main">
        <img src="images/old/performancesBW.png" alt="" />
      </a>
      <p>
        Too often performance means the accomplishment of a given task measured.
        Here, performance means creation. Presenting feats of creativity to and
        with the audience.
      </p>

      {/*<ul className="actions">*/}
      {/*  <li>*/}
      {/*    <a href="#" className="button big">*/}
      {/*      Full Story*/}
      {/*    </a>*/}
      {/*  </li>*/}
      {/*</ul>*/}
    </article>
  );
}

export function Posts({ children, className = '' }) {
  return <section className={`posts ${className}`}>{children}</section>;
}
