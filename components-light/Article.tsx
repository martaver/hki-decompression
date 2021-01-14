import React, { CSSProperties, FC, Ref } from 'react';

export type VerticalAlignment = 'top' | 'middle' | 'bottom';

export const isVerticalAlignment = (s: string): s is VerticalAlignment =>
  s === 'top' || s === 'middle' || s === 'bottom';

export type ArticleProps = {
  id?: string;
  className?: string;
  align?: VerticalAlignment;
  navRef?: Ref<any>;
};

export const Article: FC<ArticleProps> = ({
  id = '',
  children,
  className = '',
  align = 'top',
  navRef,
}) => {
  const style: CSSProperties =
    align === 'middle'
      ? { display: 'flex', alignItems: 'center', justifyContent: 'center' }
      : align === 'bottom'
      ? { display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }
      : {};

  return (
    <article {...{ id, ref: navRef, style }} className={`post ${className}`}>
      {children}
    </article>
  );
};
