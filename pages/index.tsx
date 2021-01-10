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
                  We look forward to sharing this expanding experience with you!
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
