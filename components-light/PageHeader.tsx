import React from 'react';

export function PageHeader({ site_title }) {
  return (
    <header id="header">
      <a href="/" className="logo">
        {site_title}
      </a>
    </header>
  );
}
