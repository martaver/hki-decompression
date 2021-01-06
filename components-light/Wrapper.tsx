import React, { useEffect, useLayoutEffect, useState } from 'react';

function appendBodyScript(src: string) {
  const util = document.createElement('script');
  util.src = src;
  document.body.appendChild(util);
}

export const Wrapper: React.FC = ({ children }) => {
  useEffect(() => {
    // Run the light theme's main script after all elements have loaded.
    appendBodyScript('../assets/js/main.js');
  });

  return (
    <div id="wrapper" className="fade-in">
      {children}
    </div>
  );
};
