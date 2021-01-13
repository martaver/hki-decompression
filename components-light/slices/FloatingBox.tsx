import React, { FC } from 'react';

import { Article } from 'components-light/Article';
import { SliceOf } from 'utils/types';
import { richText } from 'utils/prismicHelpers';
import { SliceData } from 'components-light/slices/Slices';
import { bgClass } from '../../utils/bgClass';

export type FloatingBoxData = SliceOf<SliceData, 'HomepageBodyFloating_box'>;

export type FloatingBoxProps = {
  slice: FloatingBoxData;
};

type Image = {
  dimensions: {
    width: number;
    height: number;
  };
  alt?: string;
  copyright?: string;
  url: string;
};

export const FloatingBox: FC<FloatingBoxProps> = ({ slice }) => {
  const { text, menu_title, background_image } = slice.primary;
  const { url } = background_image as Image;
  return (
    <section
      className={bgClass(true)}
      id={menu_title}
      style={{
        backgroundImage: `url("${url}")`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10em',
        paddingBottom: '10em',
      }}
    >
      <div
        style={{
          border: '2px solid white',
          borderRadius: '3px',
          padding: '3em 4em 1em 4em',
          textAlign: 'center',
          backgroundColor: 'rgba(0,0,0,0.6)',
        }}
      >
        {richText(text)}
      </div>
    </section>
  );
};
