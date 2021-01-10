import React from 'react';
import { Posts } from './Posts';
import { Article } from './Article';

export function Principles() {
  return (
    <>
      <section id={'principles'} className="post featured">
        <header className="major" style={{ maxWidth: '450px', margin: 'auto' }}>
          {/*<span className="date">April 25, 2017</span>*/}
          <h2>
            <a href="#">Principles</a>
          </h2>
          <p>The foundation of the Burning Man tradition</p>
        </header>
        {/*<a href="#" className="image main">*/}
        {/*  <img src="/light/images/pic01.jpg" alt="" />*/}
        {/*</a>*/}
        {/*<ul className="actions">*/}
        {/*  <li>*/}
        {/*    <a href="#" className="button big">*/}
        {/*      Full Story*/}
        {/*    </a>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </section>
      <Article center={true} className={'bg-solid'}>
        <p>
          Burning Man has established ten principles over which it has built the
          Burning Man culture. They were crafted not as a dictate of how people
          should be and act, but as a reflection of the community’s ethos and
          culture as it had organically developed since the event’s inception.
          Helsinki Decompression is built over these fundamental principles.
        </p>
      </Article>
      <Posts className={'bg-solid'}>
        <Article>
          <header>
            <h3>Gifting</h3>
          </header>
          <p style={{ textAlign: 'center' }}>
            Burning Man is devoted to acts of gift giving. The value of a{' '}
            <strong>gift is unconditional</strong>. Gifting does not contemplate
            a return or an exchange for something of equal value.
          </p>
        </Article>
        <Article>
          <header>
            <h3>Participation</h3>
          </header>
          <p style={{ textAlign: 'center' }}>
            Our community is committed to a radically participatory ethic. We
            believe that transformative change, whether in the individual or in
            society, can occur only through the medium of deeply personal
            participation. We achieve being through doing. Everyone is invited
            to work. <strong>Everyone is invited</strong> to play. We make the
            world real through actions that open the heart.
          </p>
        </Article>
        <Article>
          <header>
            <h3>Radical Self-expression</h3>
          </header>
          <p style={{ textAlign: 'center' }}>
            Radical self-expression arises from the unique{' '}
            <strong>gifts of the individual</strong>. No one other than the
            individual or a collaborating group can determine its content. It is
            offered as a gift to others. In this spirit, the giver should
            respect the rights and liberties of the recipient.
          </p>
        </Article>
        <Article>
          <header>
            <h3>RADICAL SELF-RELIANCE</h3>
          </header>
          <p style={{ textAlign: 'center' }}>
            Burning Man encourages the individual to discover, exercise and rely
            on his or her <strong>inner resources</strong>.
          </p>
        </Article>
        <Article>
          <header>
            <h3>DECOMMODIFICATION</h3>
          </header>
          <p style={{ textAlign: 'center' }}>
            In order to preserve the spirit of gifting, our community seeks to
            create social environments that are unmediated by commercial
            sponsorships, transactions, or advertising. We stand ready to
            <strong>protect our culture from such exploitation</strong>. We
            resist the substitution of consumption for participatory experience.
          </p>
        </Article>
        <Article>
          <header>
            <h3>CIVIC RESPONSIBILITY</h3>
          </header>
          <p style={{ textAlign: 'center' }}>
            We value civil society. Community members who organize events should
            <strong>assume responsibility</strong> for public welfare and
            endeavour to communicate civic responsibilities to participants.
            They must also assume responsibility for conducting events in
            accordance with local, state and federal laws.
          </p>
        </Article>
        <Article>
          <header>
            <h3>RADICAL INCLUSION</h3>
          </header>
          <p style={{ textAlign: 'center' }}>
            Anyone may be a part of Burning Man. We{' '}
            <strong>welcome and respect</strong> the stranger. No prerequisites
            exist for participation in our community.
          </p>
        </Article>
        <Article>
          <header>
            <h3>COMMUNAL EFFORT</h3>
          </header>
          <p style={{ textAlign: 'center' }}>
            Our community values <strong>creative cooperation</strong> and
            collaboration. We strive to produce, promote and protect social
            networks, public spaces, works of art, and methods of communication
            that support such interaction.
          </p>
        </Article>
        <Article>
          <header>
            <h3>LEAVING NO TRACE</h3>
          </header>
          <p style={{ textAlign: 'center' }}>
            Our community <strong>respects the environment</strong>. We are
            committed to leaving no physical trace of our activities wherever we
            gather. We clean up after ourselves and endeavour, whenever
            possible, to leave such places in a better state than when we found
            them.
          </p>
        </Article>
        <Article>
          <header>
            <h3>IMMEDIACY</h3>
          </header>
          <p style={{ textAlign: 'center' }}>
            Immediate <strong>experience</strong> is, in many ways, the most
            important touchstone of value in our culture. We seek to overcome
            barriers that stand between us and a recognition of our inner
            selves, the <strong>reality</strong> of those around us,
            participation in society, and contact with a naturalworld exceeding
            human powers. No idea can substitute for this experience.
          </p>
        </Article>
      </Posts>
    </>
  );
}
