import { SliceOf } from '../../utils/types';
import React, { FC } from 'react';
import { idOf } from '../../utils/idOf';
import { Article, ArticleProps, isVerticalAlignment } from '../Article';
import { richText } from '../../utils/prismicHelpers';
import { SliceData } from './Slices';
import { bgClass } from '../../utils/bgClass';
import { useNavRegion } from '../useNavTracking';

export type GridData = SliceOf<SliceData, 'HomepageBodyGrid'>;

export type GridProps = {
  slice: GridData;
};

export const Grid: FC<GridProps> = ({ slice }) => {
  const { background, menu_title } = slice.primary;
  const id = idOf(menu_title);
  const ref = useNavRegion(id);
  return (
    <section {...{ id, ref }} className={`posts ${bgClass(background)}`}>
      {slice.fields.map((field, key) => {
        const { text, footer, center, align } = field;
        const props: ArticleProps = {};

        if (align) {
          if (!isVerticalAlignment(align))
            throw new Error(
              `'align' prop was not 'top', 'middle', or 'bottom.`
            );
          props.align = align;
        }

        return (
          <Article {...{ key, ...props }}>
            <div className={center ? 'center' : ''}>{richText(text)}</div>
            <div className={'footer'}>{richText(footer)}</div>
          </Article>
        );
      })}
    </section>
  );
};
