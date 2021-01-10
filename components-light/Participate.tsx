import React from 'react';
import { Posts } from './Posts';
import { Article } from './Article';

export function Participate() {
  return (
    <>
      <section id={'participate'} className="post featured">
        <header className="major" style={{ maxWidth: '450px', margin: 'auto' }}>
          {/*<span className="date">April 25, 2017</span>*/}
          <h2>
            <a href="#">Participate</a>
          </h2>
          <p>Big or small, all ideas are welcome!</p>
        </header>
        {/*<a href="#" className="image main">*/}
        {/*  <img src="/light/images/pic01.jpg" alt="" />*/}
        {/*</a>*/}
        {/*<ul className="actions">*/}
        {/*  <li>*/}
        {/*    <a href="#" className="button big">*/}
        {/*      Full Story*/}
        {/*    </a>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </section>
      <Posts className={'bg-solid'}>
        <Article>
          <p>
            You are welcome to join Decompression just as you are, and you are
            free to contribute in just the shape of form that you feel
            comfortable with. Creativity is not a performance sport. No one will
            rate you, no one will demand anything from you.
          </p>
          <p>
            We encourage you all to contribute in your own way to this
            magnificent experience. It could be an interactive art project,
            DJ-ing, music performance, free hugs, a trolley for give away
            smoothies, an army of friendly drones, improvised performances or
            just a silent place to meditate.
          </p>

          {/*<ul className="actions">*/}
          {/*  <li>*/}
          {/*    <a href="#" className="button big">*/}
          {/*      Full Story*/}
          {/*    </a>*/}
          {/*  </li>*/}
          {/*</ul>*/}
        </Article>
        <Article center={true}>
          <header className={'bg-solid'}>
            <h3>Submit your creation</h3>
            <p></p>
            <p style={{ textAlign: 'center' }}>
              There is limited floorspace at Decompression and so workshops and
              installations must be reserved in advance and are subject to
              placement.
            </p>
            <ul className="actions">
              <li>
                <a href="#" className="button">
                  Program / Workshop / Installation
                </a>
              </li>
            </ul>
            <p style={{ textAlign: 'center' }}>
              If you're a performer, DJ or an artist, your must apply so that we
              can schedule your works in the most impactful way.
            </p>
            <ul className="actions">
              <li>
                <a href="#" className="button">
                  Performer, DJ, Artist
                </a>
              </li>
            </ul>
          </header>
          {/*<ul className="actions">*/}
          {/*  <li>*/}
          {/*    <a href="#" className="button big">*/}
          {/*      Full Story*/}
          {/*    </a>*/}
          {/*  </li>*/}
          {/*</ul>*/}
        </Article>
      </Posts>
    </>
  );
}
