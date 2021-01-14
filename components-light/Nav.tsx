import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import { SlicesData } from './slices/Slices';
import { idOf } from '../utils/idOf';

export type NavProps = {
  slices: SlicesData;
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

  console.log('Current hash: ', hash);

  return (
    <NavContext.Provider value={{ hash, setHash }}>
      {children}
    </NavContext.Provider>
  );
};

type NavItemProps = {
  title: string;
};

const NavItem: FC<NavItemProps> = ({ title }) => {
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

export const Nav: FC<NavProps> = ({ slices }) => {
  const titles = slices
    .map((s) => s.primary as Navable)
    .filter((p) => p.menu_title)
    .map((p) => p.menu_title)
    .filter((item, i, ar) => ar.indexOf(item) === i);

  return (
    <nav id="nav" style={{ position: 'sticky', top: 0 }}>
      <ul className="links">
        {titles.map((title, index) => {
          return <NavItem {...{ title, key: index }} />;
        })}

        <li>
          <a href="http://regionals.burningman.org/" target={'__blank'}>
            BM Regionals
          </a>
        </li>
      </ul>
      <ul className="icons">
        <li>
          <a href="#" className="icon fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
