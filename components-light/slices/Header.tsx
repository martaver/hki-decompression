import { SliceOf } from '../../utils/types';
import React, { FC } from 'react';
import { richText } from '../../utils/prismicHelpers';
import { SliceData } from './Slices';
import { bgClass } from '../../utils/bgClass';
import { useNavRegion } from '../useNavTracking';
import { idOf } from '../../utils/idOf';

export type HeaderData = SliceOf<SliceData, 'HomepageBodyHeader'>;

export type HeaderProps = {
  slice: HeaderData;
};

export const Header: FC<HeaderProps> = ({ slice }) => {
  const { background, text, menu_title } = slice.primary;
  const id = idOf(menu_title);
  const ref = useNavRegion(id);
  return (
    <section
      {...{ id, ref }}
      className={`post featured ${bgClass(background)}`}
    >
      <header className="major" style={{ maxWidth: '450px', margin: 'auto' }}>
        {richText(text)}
      </header>
    </section>
  );
};
