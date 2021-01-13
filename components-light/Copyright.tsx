import React from 'react';

export function Copyright({ who }) {
  const date = new Date(Date.now());
  return (
    <div id="copyright">
      <ul>
        <li>
          &copy; {who}, {date.getFullYear()}
        </li>
      </ul>
    </div>
  );
}
