import React from 'react';

export function Article() {
  return (
    <article className="post featured">
      <header className="major">
        <span className="date">April 25, 2017</span>
        <h2>
          <a href="#">
            Sit ante ut mus
            <br />
            commodo accumsan
          </a>
        </h2>
        <p>
          Aenean ornare velit lacus varius enim ullamcorper proin aliquam
          <br />
          facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor
          <br />
          amet nullam sed etiam veroeros.
        </p>
      </header>
      <a href="#" className="image main">
        <img src="assets/images/pic01.jpg" alt="" />
      </a>
      <ul className="actions">
        <li>
          <a href="#" className="button big">
            Full Story
          </a>
        </li>
      </ul>
    </article>
  );
}
