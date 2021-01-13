import { _ExternalLink, LinkFragment } from '../graphql/foo.graphql';
import React, { CSSProperties } from 'react';

interface LinkProps {
  linkable: LinkFragment;
  className?: string;
  style?: CSSProperties;
}

export const Link: React.FC<LinkProps> = ({
  linkable,
  className,
  children,
  style,
}) => {
  const { __typename } = linkable;

  if (__typename === '_ExternalLink') {
    const { target, url } = linkable as _ExternalLink;
    return (
      <a href={url} {...{ target, className, style }}>
        {children}
      </a>
    );
  }
};
