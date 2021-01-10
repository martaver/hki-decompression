import React, { CSSProperties } from 'react';

export function Article({ id = '', children, className = '', center = false }) {
  const style: CSSProperties = center
    ? { display: 'flex', alignItems: 'center', justifyContent: 'center' }
    : {};

  return (
    <article {...{ id, style }} className={`post ${className}`}>
      {children}
    </article>
  );
}
