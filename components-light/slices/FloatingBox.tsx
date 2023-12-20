import { FC } from 'react';

import { SliceData } from 'components-light/slices/Slices';
import { richText } from 'utils/prismicHelpers';
import { SliceOf } from 'utils/types';
import { bgClass } from '../../utils/bgClass';
import { idOf } from '../../utils/idOf';
import { useNavRegion } from '../useNavTracking';

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
  
  const id = idOf(menu_title);
  const ref = useNavRegion(id);

  const bgStyle = background_image ? {
    backgroundImage: `url("${background_image.url}")`,
        backgroundSize: 'cover',
        backgroundPositionX: 'center',
        backgroundPositionY: 'center',
  } : {}

  return (
    <section
      {...{ id, ref }}
      className={bgClass(true)}
      style={{
        ...bgStyle,
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
