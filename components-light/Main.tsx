import React from 'react';

export function Main({ children }) {
  return (
    <div id="main" className={'bg-transparent'}>
      {children}
    </div>
  );
}
