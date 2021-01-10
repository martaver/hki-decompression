import React from 'react';
import { Posts } from './Posts';
import { Article } from './Article';

export function Program() {
  return (
    <>
      <section id={'program'} className="post featured">
        <header className="major" style={{ maxWidth: '450px', margin: 'auto' }}>
          {/*<span className="date">April 25, 2017</span>*/}
          <h2>
            <a href="#">Program</a>
          </h2>
          <p>What awaits you within?</p>
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
      <Article center={true} className={'bg-solid'}>
        <header>
          <p style={{ textAlign: 'center' }}>
            It's early days. Watch this space for more information about the
            program.
          </p>
        </header>

        {/*<ul className="actions">*/}
        {/*  <li>*/}
        {/*    <a href="#" className="button big">*/}
        {/*      Full Story*/}
        {/*    </a>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </Article>
    </>
  );
}
