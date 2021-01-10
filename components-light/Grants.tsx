import React from 'react';
import { Posts } from './Posts';
import { Article } from './Article';

export function Grants() {
  return (
    <>
      <section id={'grants'} className="post featured">
        <header className="major" style={{ maxWidth: '450px', margin: 'auto' }}>
          {/*<span className="date">April 25, 2017</span>*/}
          <h2>
            <a href="#">Grants</a>
          </h2>
          <p>Financial support for your project</p>
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
            We aim to give as much of the money gathered from tickets back to
            the community in the form of art grants. Art grants are a financial
            support that each creation can apply for. This might cover some of
            the expenses, but be prepared to handle your own budget.
          </p>

          <p>Not all creations will be granted financial support.</p>

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
            {/*<h3>Apply for a grant</h3>*/}
            {/*<p></p>*/}
            <p style={{ textAlign: 'center' }}>
              More information about the process for grant application will be
              released soon.
            </p>
            {/*<ul className="actions">*/}
            {/*  <li>*/}
            {/*    <a href="#" className="button">*/}
            {/*      Buy Tickets*/}
            {/*    </a>*/}
            {/*  </li>*/}
            {/*</ul>*/}
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
