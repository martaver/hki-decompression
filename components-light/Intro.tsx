import React from 'react';
import { richText } from '../utils/prismicHelpers';
import { Data } from '../pages';
import { _ExternalLink, _Linkable, LinkFragment } from '../graphql/foo.graphql';
import { Link } from './Links';

interface IntroProps {
  data: Data;
}

function ensureAnchorPrefix(text: string) {
  return text.startsWith('#') ? text : `#${text}`;
}

type Actions = Data['actions'];

function actions(actions: Actions) {
  return (
    <ul className="actions">
      {actions.map((a, i) => (
        <li key={i}>
          <a href={a.href?.__typename === '_ExternalLink' ? a.href.url : ensureAnchorPrefix(a.anchor)} className="button">
            {a.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

type SocialLinks = Data['social_links'];

function social_links(actions: SocialLinks) {
  return (
    <ul className="actions">
      {actions.map((a, i) => (
        <li key={i}>
          <Link linkable={a.link} className={`button icon solo ${a.fa_icon}`}>
            <span className="label">{a.alt}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Intro({ data }: IntroProps) {
  return (
    <div id="intro">
      {richText(data.intro_content)}
      {actions(data.actions)}
      {richText(data.social_title)}
      {social_links(data.social_links)}
    </div>
  );
}
