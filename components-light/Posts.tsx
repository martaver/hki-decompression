import React from 'react';

export function Posts({ id, children, className = '' }) {
  return (
    <section {...{ id }} className={`posts ${className}`}>
      {children}
    </section>
  );
}
