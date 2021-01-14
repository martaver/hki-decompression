import { ElementOf } from '@graphql-tools/utils';
import React, { FC } from 'react';
import { Grid } from './Grid';
import { Header } from './Header';
import { Data } from '../../pages';
import { CenteredText } from './CenteredText';
import { FloatingBox } from './FloatingBox';
import { GoogleMap } from './GoogleMap';
import { Icons } from './Icons';

export type SlicesData = Data['body'];

export type SliceData = ElementOf<SlicesData>;

export type SlicesProps = {
  slices: SlicesData;
};

export const Slices: FC<SlicesProps> = ({ slices }) => {
  function SliceHandler(slice: SliceData, key: number) {
    if (slice.__typename === 'HomepageBodyCentered_text') {
      return <CenteredText {...{ key, slice }} />;
    }

    if (slice.__typename === 'HomepageBodyGrid') {
      return <Grid {...{ key, slice }} />;
    }

    if (slice.__typename === 'HomepageBodyHeader') {
      return <Header {...{ key, slice }} />;
    }

    if (slice.__typename === 'HomepageBodyFloating_box') {
      return <FloatingBox {...{ key, slice }} />;
    }

    if (slice.__typename === 'HomepageBodyMap') {
      return <GoogleMap {...{ key, slice }} />;
    }

    if (slice.__typename === 'HomepageBodyIcons') {
      return <Icons {...{ key, slice }} />;
    }
  }
  return <>{slices.map(SliceHandler)}</>;
};
