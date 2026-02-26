"use client";
import React, { useEffect, useState } from 'react';
import Link from "next/link";

function clearHash() {
  if (typeof window !== 'undefined' && window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname || '/');
  }
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    clearHash();
    window.addEventListener('hashchange', clearHash);
    return () => window.removeEventListener('hashchange', clearHash);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { name: 'About', sectionId: 'about', id: '01.' },
    { name: 'Education', sectionId: 'education', id: '02.' },
    { name: 'Experience', sectionId: 'experience', id: '03.' },
    { name: 'Featured Projects', sectionId: 'work', id: '04.' },
    { name: 'Other Projects', sectionId: 'other-projects', id: '05.' },
    { name: 'Contact', sectionId: 'contact', id: '06.' },
  ];

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className="fixed top-0 z-[100] w-full flex justify-between items-center transition-all duration-300 bg-white border-b border-[var(--border)]"
        style={{
          height: 'var(--nav-height)',
          paddingLeft: 'clamp(6px, 1.5vw, 18px)',
          paddingRight: 'clamp(6px, 1.5vw, 18px)',
          backdropFilter: 'saturate(180%) blur(12px)',
        }}
      >
        <Link
          href="/"
          onClick={scrollToTop}
          className="font-mono text-[var(--ink)] text-lg font-medium tracking-tight border border-[var(--ink)] rounded-[var(--radius-sm)] hover:bg-[var(--green-tint)] transition-all shrink-0"
          style={{ padding: '10px 18px' }}
        >
          AT
        </Link>

        <nav className="desktop-nav flex items-center" style={{ gap: '16px', marginRight: '48px' }}>
          <ol className="flex items-center list-none m-0 p-0" style={{ gap: '28px' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href="#"
                  onClick={(e) => scrollToSection(e, link.sectionId)}
                  className="nav-list-link block py-2 px-0"
                >
                  <span className="text-[var(--ink-light)]">{link.id}</span> {link.name}
                </a>
              </li>
            ))}
          </ol>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button shrink-0"
            style={{ marginLeft: '8px' }}
          >
            Resume
          </a>
        </nav>

        <button
          className="mobile-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-bar ${menuOpen ? 'hamburger-bar--open-top' : ''}`} />
          <span className={`hamburger-bar ${menuOpen ? 'hamburger-bar--open-mid' : ''}`} />
          <span className={`hamburger-bar ${menuOpen ? 'hamburger-bar--open-bot' : ''}`} />
        </button>
      </header>

      {/* Mobile menu panel – outside header to avoid backdrop-filter containing block */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? 'mobile-menu-overlay--open' : ''}`}
      >
        <nav className="mobile-menu-nav">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href="#"
              onClick={(e) => scrollToSection(e, link.sectionId)}
              className="mobile-menu-link"
              style={{ transitionDelay: menuOpen ? `${80 + i * 50}ms` : '0ms' }}
            >
              <span className="mobile-menu-link-id">{link.id}</span>{link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
            style={{ marginTop: '8px', transitionDelay: menuOpen ? `${80 + navLinks.length * 50}ms` : '0ms' }}
          >
            Resume
          </a>
        </nav>
      </div>
    </>
  );
}
