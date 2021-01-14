import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import { SlicesData } from './slices/Slices';
import { idOf } from '../utils/idOf';
import { Data } from '../pages';
import { Link } from './Links';

export type NavProps = {
  slices: SlicesData;
  extra_links: Data['extra_nav_links'];
  extra_icons: Data['extra_nav_icons'];
};

interface Navable {
  menu_title?: string;
}

type NavState = { hash: string | undefined; setHash: (hash: string) => void };

export const NavContext = createContext<NavState>({
  hash: undefined,
  setHash: () => {},
});

export const NavProvider: FC = ({ children }) => {
  const initialHash =
    typeof window !== 'undefined' ? window.location.hash : undefined;
  const [hash, setHash] = useState<string | undefined>(initialHash);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(
        'hashchange',
        () => {
          setHash(window.location.hash);
        },
        false
      );
    }
  }, []);

  return (
    <NavContext.Provider value={{ hash, setHash }}>
      {children}
    </NavContext.Provider>
  );
};

type NavItemProps = {
  title: string;
};

const NavAnchor: FC<NavItemProps> = ({ title }) => {
  const href = `#${idOf(title)}`;

  const [className, setClassName] = useState(undefined);
  const { hash } = useContext(NavContext);

  useEffect(() => {
    const isActive = hash === href;
    setClassName(isActive ? 'active' : '');
  }, [hash]);

  return (
    <li {...{ className }}>
      <a {...{ href }}>{title}</a>
    </li>
  );
};

export const Nav: FC<NavProps> = ({ slices, extra_links, extra_icons }) => {
  const titles = slices
    .map((s) => s.primary as Navable)
    .filter((p) => p.menu_title)
    .map((p) => p.menu_title)
    .filter((item, i, ar) => ar.indexOf(item) === i);

  return (
    <nav id="nav" style={{ position: 'sticky', top: 0 }}>
      <ul className="links">
        {titles.map((title, index) => {
          return <NavAnchor {...{ title, key: index }} />;
        })}

        {extra_links.map((l, key) => {
          const { menu_title, link } = l;
          return (
            <li {...{ key }}>
              <Link linkable={link}>{menu_title}</Link>
            </li>
          );
        })}
      </ul>
      <ul className="icons">
        {extra_icons.map((l, key) => {
          const { fa_icon, link, alt } = l;
          return (
            <li {...{ key }}>
              <Link linkable={link} className={`icon ${fa_icon}`}>
                <span className="label">{alt}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
