import React from 'react';
import { manageLocal } from 'utils/prismicHelpers';
import { homepageToolbarDocs } from 'utils/prismicToolbarQueries';
import useUpdatePreviewRef from 'utils/hooks/useUpdatePreviewRef';
import useUpdateToolbarDocs from 'utils/hooks/useUpdateToolbarDocs';
import { Wrapper } from 'components-light/Wrapper';
import { Intro } from '../components-light/Intro';
import { Copyright } from '../components-light/Copyright';
import { PageFooter } from '../components-light/PageFooter';
import { Main } from '../components-light/Main';
import { Nav, NavProvider } from '../components-light/Nav';
import { PageHeader } from '../components-light/PageHeader';
import { prismicClient } from '../utils/getPrismicClient';
import { FooQuery, FooQueryVariables } from '../graphql/foo.graphql';
import { FooDocument } from '../__generated__/graphql/foo.graphql';

import { Slices } from '../components-light/slices/Slices';

export type Data = FooQuery['allHomepages']['edges'][0]['node'];

type HomepageProps = {
  data: Data;
  preview: any;
};

/**
 * Index component
 *
 * menu, lang,
 */
const Homepage: React.FC<HomepageProps> = ({ data, preview }) => {
  if (data && data._meta) {
    useUpdatePreviewRef(preview, data._meta.id);
    useUpdateToolbarDocs(
      homepageToolbarDocs(preview.activeRef, data._meta.lang),
      [data]
    );

    const {
      copyright,
      site_title,
      body,
      extra_nav_links,
      extra_nav_icons,
    } = data;

    return (
      <NavProvider>
        <Wrapper>
          <Intro {...{ data }} />
          <PageHeader site_title={site_title} />
          <Nav
            slices={body}
            extra_links={extra_nav_links}
            extra_icons={extra_nav_icons}
          />
          <Main>
            <Slices slices={body} />
          </Main>
          <PageFooter />
          <Copyright who={copyright} />
        </Wrapper>
      </NavProvider>
    );
  }
};

export async function getStaticProps({
  preview,
  previewData,
  locale,
  locales,
}) {
  const ref = previewData ? previewData.ref : null;
  const isPreview = preview || false;

  const { currentLang, isMyMainLanguage } = manageLocal(locales, locale);

  const response = await prismicClient.query<FooQuery, FooQueryVariables>({
    query: FooDocument,
    variables: {
      lang: currentLang,
    },
    fetchPolicy: 'no-cache',
    context: isPreview
      ? {
          headers: {
            'Prismic-ref': ref,
          },
        }
      : {},
  });

  const data = response.data.allHomepages.edges[0].node;

  return {
    props: {
      data,
      preview: {
        isActive: isPreview,
        activeRef: ref,
      },
      lang: {
        currentLang,
        isMyMainLanguage,
      },
    },
  };
}

export default Homepage;
