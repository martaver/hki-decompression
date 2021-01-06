import React from 'react';
import { Client, manageLocal } from 'utils/prismicHelpers';
import { homepageToolbarDocs } from 'utils/prismicToolbarQueries';
import useUpdatePreviewRef from 'utils/hooks/useUpdatePreviewRef';
import useUpdateToolbarDocs from 'utils/hooks/useUpdateToolbarDocs';
import { Wrapper } from 'components-light/Wrapper';
import { Intro } from '../components-light/Intro';
import { Copyright } from '../components-light/Copyright';
import { Footer } from '../components-light/Footer';
import { Pagination } from '../components-light/Pagination';
import { FeaturedPost } from '../components-light/FeaturedPost';
import { Posts } from '../components-light/Posts';
import { Main } from '../components-light/Main';
import { Nav } from '../components-light/Nav';
import { Header } from '../components-light/Header';

/**
 * Homepage component
 */
const Homepage = ({ doc, menu, lang, preview }) => {
  if (doc && doc.data) {
    useUpdatePreviewRef(preview, doc.id);
    useUpdateToolbarDocs(homepageToolbarDocs(preview.activeRef, doc.lang), [
      doc,
    ]);

    return (
      <Wrapper>
        <Intro />
        <Header />
        <Nav />
        <Main>
          <FeaturedPost />
          <Posts />
          <Pagination />
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
  const client = Client();
  const doc =
    (await client.getSingle(
      'homepage',
      ref ? { ref, lang: locale } : { lang: locale }
    )) || {};
  const menu =
    (await client.getSingle(
      'top_menu',
      ref ? { ref, lang: locale } : { lang: locale }
    )) || {};

  const { currentLang, isMyMainLanguage } = manageLocal(locales, locale);

  return {
    props: {
      menu,
      doc,
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
