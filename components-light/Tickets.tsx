import React from 'react';
import { Posts } from './Posts';
import { Article } from './Article';

export function Tickets() {
  return (
    <>
      <section id={'tickets'} className="post featured">
        <header className="major" style={{ maxWidth: '450px', margin: 'auto' }}>
          {/*<span className="date">April 25, 2017</span>*/}
          <h2>
            <a href="#">Tickets</a>
          </h2>
          <p>Available from XX XXX 2021</p>
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
            The event is about equality and inclusiveness. Everyone is a
            co-creator and makes the event possible. For this reason, everyone
            has to purchase a ticket. Even the DJs, performers, organisers and
            artists buy a ticket.
          </p>

          <p>
            The money from the ticket sales are used to cover the cost of
            hosting the event and given back to the community in the form of art
            grants.
          </p>

          <p>
            But we wouldn't consider it as a payment, but rather as an
            investment in the common dream, because most of the money will be
            given back in the form of grants to those who create the program.
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
            <h3>Get your ticket</h3>
            <p></p>
            <p style={{ textAlign: 'center' }}>
              In the spirit of equality, we require all attendees to buy a
              ticket with the same, flat price of XX euros.
            </p>
            <ul className="actions">
              <li>
                <a href="#" className="button">
                  Buy Tickets
                </a>
              </li>
            </ul>
            <p style={{ textAlign: 'center' }}>
              There is a limit of XXX tickets per person, and tickets are
              checked on entry. Sales end strictly at XXX, so don't be late!
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
      </Posts>
    </>
  );
}
