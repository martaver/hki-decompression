import React from 'react';
import { Client, manageLocal } from 'utils/prismicHelpers';
import { homepageToolbarDocs } from 'utils/prismicToolbarQueries';
import useUpdatePreviewRef from 'utils/hooks/useUpdatePreviewRef';
import useUpdateToolbarDocs from 'utils/hooks/useUpdateToolbarDocs';
import { Wrapper } from 'components-light/Wrapper';
import { Intro } from '../components-light/Intro';
import { Copyright } from '../components-light/Copyright';
import { Footer } from '../components-light/Footer';
import { Main } from '../components-light/Main';
import { Nav } from '../components-light/Nav';
import { Header } from '../components-light/Header';
import { About } from '../components-light/About';
import { Participate } from '../components-light/Participate';
import { Tickets } from '../components-light/Tickets';
import { Grants } from '../components-light/Grants';
import { Program } from '../components-light/Program';
import { Principles } from '../components-light/Principles';
import { Location } from '../components-light/Location';
import { Article } from '../components-light/Article';
import { prismicClient } from '../utils/getPrismicClient';
import { FooQuery, FooQueryVariables } from '../graphql/foo.graphql';
import { FooDocument } from '../__generated__/graphql/foo.graphql';

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

    return (
      <Wrapper>
        <Intro {...{ data }} />
        <Header site_title={data.site_title} />
        <Nav />
        <Main>
          <About />
          <Participate />
          <Grants />
          <Tickets />
          <Program />
          <Principles />
          <Location />
          <section>
            <Article>
              <header
                className="major"
                style={{ maxWidth: '450px', margin: 'auto' }}
              >
                <h2>
                  <a href="#">See you there!</a>
                </h2>
                <p>
                  We look forward to sharing the Decompression experience with
                  you!
                </p>
              </header>
            </Article>
            <ul
              className="icons alt"
              style={{ textAlign: 'center', marginTop: '3em' }}
            >
              <li>
                <a
                  href="#"
                  className="icon alt fa-facebook"
                  style={{ color: '#fff' }}
                >
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="icon alt fa-envelope"
                  style={{ color: '#fff' }}
                >
                  <span className="label">Email</span>
                </a>
              </li>
            </ul>
          </section>
        </Main>
        <Footer />
        <Copyright />
      </Wrapper>
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
  // const client = Client();

  const { currentLang, isMyMainLanguage } = manageLocal(locales, locale);

  const response = await prismicClient.query<FooQuery, FooQueryVariables>({
    query: FooDocument,
    variables: {
      lang: currentLang,
    },
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
