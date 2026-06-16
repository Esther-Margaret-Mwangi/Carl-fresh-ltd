import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';
import Logo from './Logo';

interface DropdownItem {
  label: string;
  path: string;
  icon: string;
}

interface NavItem {
  label: string;
  path?: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  {
    label: 'Quality & Compliance',
    dropdown: [
      { label: 'Quality & Food Safety', path: '/quality', icon: '🛡️' },
      { label: 'Sustainability', path: '/sustainability', icon: '🌿' },
    ],
  },
  {
    label: 'Trade & Logistics',
    dropdown: [
      { label: 'Export Markets', path: '/export-markets', icon: '🌍' },
      { label: 'Packaging & Logistics', path: '/packaging', icon: '📦' },
    ],
  },
  { label: 'News & Insights', path: '/news' },
  { label: 'Gallery', path: '/gallery' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navClass = `navbar ${scrolled || !isHomePage ? 'scrolled' : 'transparent'}`;

  const isActive = (path?: string, dropdown?: DropdownItem[]) => {
    if (path) return location.pathname === path;
    if (dropdown) return dropdown.some(d => location.pathname === d.path);
    return false;
  };

  return (
    <>
      <nav className={navClass} role="navigation" aria-label="Main navigation">
        <div className="container-xl navbar-inner" ref={dropdownRef}>
          {/* Logo */}
          <Link to="/" className="navbar-logo" aria-label="Carl Fresh Produce - Home">
            <Logo height={48} />
          </Link>

          {/* Desktop nav */}
          <ul className="navbar-menu" role="list">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.dropdown ? (
                  <div style={{ position: 'relative' }}>
                    <button
                      className={`navbar-link ${isActive(undefined, item.dropdown) ? 'active' : ''}`}
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <span className="chevron">▾</span>
                    </button>
                    <div className={`dropdown ${openDropdown === item.label ? 'open' : ''}`} role="menu">
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.path}
                          to={d.path}
                          className="dropdown-item"
                          role="menuitem"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <span className="dropdown-icon">{d.icon}</span>
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path!}
                    className={`navbar-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link to="/contact" className="navbar-link navbar-cta" style={{ display: 'none' }}>
            Get a Quote
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Link to="/contact" className="navbar-link navbar-cta">
              Get a Quote
            </Link>
            {/* Hamburger */}
            <button
              className={`navbar-hamburger ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} role="dialog" aria-label="Mobile navigation">
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
          <button
            onClick={() => setMobileOpen(false)}
            style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#333' }}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <ul className="mobile-menu-list" role="list">
          {navItems.map((item) => (
            <li key={item.label} className="mobile-menu-item">
              {item.dropdown ? (
                <>
                  <button
                    className="mobile-menu-link"
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    aria-expanded={mobileExpanded === item.label}
                  >
                    {item.label}
                    <span style={{ fontSize: '0.75rem', transform: mobileExpanded === item.label ? 'rotate(180deg)' : 'none', display: 'inline-block', transition: 'transform 0.2s' }}>▾</span>
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="mobile-submenu">
                      {item.dropdown.map((d) => (
                        <Link key={d.path} to={d.path} className="mobile-submenu-link">
                          {d.icon} {d.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link to={item.path!} className="mobile-menu-link">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="mobile-cta-wrap">
          <Link to="/contact" className="btn-primary" style={{ justifyContent: 'center' }}>
            Get a Quote
          </Link>
          <Link to="/contact" className="btn-secondary" style={{ justifyContent: 'center' }}>
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
