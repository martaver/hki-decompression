import React from 'react';
import { Client, manageLocal } from 'utils/prismicHelpers';
import { homepageToolbarDocs } from 'utils/prismicToolbarQueries';
import useUpdatePreviewRef from 'utils/hooks/useUpdatePreviewRef';
import useUpdateToolbarDocs from 'utils/hooks/useUpdateToolbarDocs';
// import { Layout, SliceZone } from 'components'
import { Wrapper } from 'components-light/Wrapper';
import { Intro } from '../components-light/Intro';

function Header() {
  return (
    <header id="header">
      <a href="index.html" className="logo">
        Massively
      </a>
    </header>
  );
}

function Nav() {
  return (
    <nav id="nav">
      <ul className="links">
        <li className="active">
          <a href="index.html">This is Massively</a>
        </li>
        <li>
          <a href="generic.html">Generic Page</a>
        </li>
        <li>
          <a href="elements.html">Elements Reference</a>
        </li>
      </ul>
      <ul className="icons">
        <li>
          <a href="#" className="icon fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

function Main({ children }) {
  return <div id="main">{children}</div>;
}

function Article() {
  return (
    <article className="post featured">
      <header className="major">
        <span className="date">April 25, 2017</span>
        <h2>
          <a href="#">
            Sit ante ut mus
            <br />
            commodo accumsan
          </a>
        </h2>
        <p>
          Aenean ornare velit lacus varius enim ullamcorper proin aliquam
          <br />
          facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor
          <br />
          amet nullam sed etiam veroeros.
        </p>
      </header>
      <a href="#" className="image main">
        <img src="assets/images/pic01.jpg" alt="" />
      </a>
      <ul className="actions">
        <li>
          <a href="#" className="button big">
            Full Story
          </a>
        </li>
      </ul>
    </article>
  );
}

function FeaturedPost() {
  return <Article />;
}

function Posts() {
  return (
    <section className="posts">
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </section>
  );
}

function Pagination() {
  return (
    <footer>
      <div className="pagination">
        {/*<a href="#" className="previous">Prev</a>*/}
        <a href="#" className="page active">
          1
        </a>
        <a href="#" className="page">
          2
        </a>
        <a href="#" className="page">
          3
        </a>
        <span className="extra">&hellip;</span>
        <a href="#" className="page">
          8
        </a>
        <a href="#" className="page">
          9
        </a>
        <a href="#" className="page">
          10
        </a>
        <a href="#" className="next">
          Next
        </a>
      </div>
    </footer>
  );
}

function Footer() {
  return (
    <footer id="footer">
      <section>
        <form method="post" action="#">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={3} />
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split contact">
        <section className="alt">
          <h3>Address</h3>
          <p>
            1234 Somewhere Road #87257
            <br />
            Nashville, TN 00000-0000
          </p>
        </section>
        <section>
          <h3>Phone</h3>
          <p>
            <a href="#">(000) 000-0000</a>
          </p>
        </section>
        <section>
          <h3>Email</h3>
          <p>
            <a href="#">info@untitled.tld</a>
          </p>
        </section>
        <section>
          <h3>Social</h3>
          <ul className="icons alt">
            <li>
              <a href="#" className="icon alt fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon alt fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon alt fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon alt fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
        </section>
      </section>
    </footer>
  );
}

function Copyright() {
  return (
    <div id="copyright">
      <ul>
        <li>&copy; Eldis Ry, 2021</li>
      </ul>
    </div>
  );
}

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
      // <Layout
      //   altLangs={doc.alternate_languages}
      //   lang={lang}
      //   menu={menu}
      //   isPreview={preview.isActive}
      // >
      //   <SliceZone sliceZone={doc.data.body} />
      // </Layout>
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
