import React, { FC } from 'react';
import { Sticky } from 'react-sticky';

const isClient = typeof window !== 'undefined';

function isSafari() {
  if (!isClient) return false;
  return !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
}

function isOs() {
  if (!isClient) return false;
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
  );
}

export const StickyContent: FC<{ style?: React.CSSProperties }> = ({
  style,
  children,
}) => (
  <Sticky relative={true}>
    {({ isSticky, style: stickyStyle }) => {
      const stickyFixed: React.CSSProperties = isSticky
        ? { ...stickyStyle }
        : {};

      // The following fixes the problems with 'fixed' when parent elements have transition CSS properties.
      // https://stackoverflow.com/questions/28389048/fixed-positioning-with-parent-element-having-transformations
      // https://stackoverflow.com/questions/42660332/css-transform-parent-and-fixed-child
      delete stickyFixed.left;

      if (isSafari() || isOs()) {
        stickyFixed.top = 0;
      }

      return <div style={{ ...stickyFixed, ...style }}>{children}</div>;
    }}
  </Sticky>
);
