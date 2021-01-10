import {
  Art,
  Music,
  Performances,
  Posts,
  Workshops,
} from '../components-light/Posts';
import React from 'react';
import { Article } from './Article';

export function About() {
  return (
    <>
      <Article id={'about'} className="bg-solid">
        <header className="major" style={{ maxWidth: '450px', margin: 'auto' }}>
          {/*<span className="date">April 25, 2017</span>*/}
          {/*<h2>*/}
          {/*  <a href="#">*/}
          {/*    Sit ante ut mus*/}
          {/*    <br />*/}
          {/*    commodo accumsan*/}
          {/*  </a>*/}
          {/*</h2>*/}
          <p>
            Decompression is an event that brings together the community to
            co-create and participate. This space becomes an immersive
            experience of art, performances, music and workshops.
          </p>
          <p>
            The primary focus is to bring together people to participate and
            expressive themselves in a safe and open environment, allowing
            everyone to decompress the weight of everyday life.
          </p>
          <p>
            Helsinki Decompression is a{' '}
            <a href={'http://regionals.burningman.org/'}>regional</a> Burning
            Man event in Finland, and allows you to experience the Burning Man
            culture and embrace the principles.
          </p>
          <p>
            Together, You, I and we will co-create and participate in an
            immersive experience that will allow us to re-think and re-create
            our everyday reality.
          </p>
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
      </Article>

      <Posts className={'bg-solid'}>
        <Art />
        <Performances />
        <Workshops />
        <Music />
      </Posts>
    </>
  );
}
