import React, { useRef, useState, useEffect } from 'react';
import './LanguageSelector.css';
import { StaticImage } from 'gatsby-plugin-image';
import {I18nextContext, Link, useI18next} from 'gatsby-plugin-react-i18next';

const langs = [
  {
    code: 'en',
    label: 'English',
    flag: (
      <StaticImage
        src="../images/flags/en.svg"
        alt="English"
        width={30}
        height={20}
        placeholder="none"
      />
    ),
  },
  {
    code: 'es',
    label: 'Español',
    flag: (
      <StaticImage
        src="../images/flags/es.svg"
        alt="Español"
        width={30}
        height={20}
        placeholder="none"
      />
    ),
  },
];

export default function LanguageSelector() {
  const {languages, changeLanguage} = useI18next();
  const context = React.useContext(I18nextContext);
  let currentLang = context.language;

  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const current = langs.find(l => l.code === currentLang)!;
  const others = langs.filter(l => l.code !== currentLang);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="language-selector">
      <button
        className="language-visible-button"
        onClick={() => setOpen(!open)}
      >
        <div className="language-current">
          {current.flag}
          <p>{current.label}</p>
        </div>
        <img
          className={`arrow ${open ? 'rotated' : ''}`}
          src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath d='M12 15.5a1.993 1.993 0 0 1-1.414-.585L5.293 9.621 6.707 8.207 12 13.5l5.293-5.293 1.414 1.414-5.293 5.293A1.993 1.993 0 0 1 12 15.5Z'/%3e%3c/svg%3e"
          alt=""
        />
      </button>
      {open && (
        <div className="language-dropdown">
          {others.map(lang => (
            <button
              key={lang.code}
              className="language-option"
              onClick={() => {
                changeLanguage(lang.code);
                setOpen(false);
              }}
            >
              {lang.flag}
              <p>{lang.label}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
