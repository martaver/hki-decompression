import React, { FC } from 'react';

import { Article } from 'components-light/Article';
import { SliceOf } from 'utils/types';
import { richText } from 'utils/prismicHelpers';
import { SliceData } from 'components-light/slices/Slices';
import { bgClass } from '../../utils/bgClass';
import { idOf } from '../../utils/idOf';
import { useNavRegion } from '../useNavTracking';

export type HomepageCenteredTextData = SliceOf<
  SliceData,
  'HomepageBodyCentered_text'
>;

export type AboutProps = {
  slice: HomepageCenteredTextData;
};

export const CenteredText: FC<AboutProps> = ({ slice }) => {
  const { text, menu_title, background } = slice.primary;
  const id = idOf(menu_title);
  const navRef = useNavRegion(id);
  return (
    <Article {...{ id, navRef }} className={bgClass(background)}>
      <header className="major" style={{ maxWidth: '450px', margin: 'auto' }}>
        {richText(text)}
      </header>
    </Article>
  );
};
