import React, { CSSProperties, FC } from 'react';

export type VerticalAlignment = 'top' | 'middle' | 'bottom';

export const isVerticalAlignment = (s: string): s is VerticalAlignment =>
  s === 'top' || s === 'middle' || s === 'bottom';

export type ArticleProps = {
  id?: string;
  className?: string;
  align?: VerticalAlignment;
};

export const Article: FC<ArticleProps> = ({
  id = '',
  children,
  className = '',
  align = 'top',
}) => {
  const style: CSSProperties =
    align === 'middle'
      ? { display: 'flex', alignItems: 'center', justifyContent: 'center' }
      : align === 'bottom'
      ? { display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }
      : {};

  return (
    <article {...{ id, style }} className={`post ${className}`}>
      {children}
    </article>
  );
};
