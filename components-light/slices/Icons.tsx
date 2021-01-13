import React, { FC } from 'react';

import { Article } from 'components-light/Article';
import { SliceOf } from 'utils/types';
import { richText } from 'utils/prismicHelpers';
import { SliceData } from 'components-light/slices/Slices';
import { bgClass } from '../../utils/bgClass';
import { idOf } from '../../utils/idOf';
import { LinkFragment } from '../../graphql/foo.graphql';
import { Link } from '../Links';

export type IconsData = SliceOf<SliceData, 'HomepageBodyIcons'>;

export type IconsProps = {
  slice: IconsData;
};

export const Icons: FC<IconsProps> = ({ slice }) => {
  const { text, menu_title, background } = slice.primary;
  return (
    <section id={idOf(menu_title)} className={bgClass(background)}>
      <Article>
        <header className="major" style={{ maxWidth: '450px', margin: 'auto' }}>
          {richText(text)}
        </header>
      </Article>
      <ul
        className="icons alt"
        style={{ textAlign: 'center', marginTop: '3em' }}
      >
        {slice.fields.map((field, i) => {
          const { alt_text, faIcon, link } = field;

          return (
            <li key={i}>
              <Link
                linkable={link}
                className={`icon alt ${faIcon}`}
                style={{ color: '#fff', cursor: 'pointer' }}
              >
                <span className="label">{alt_text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
