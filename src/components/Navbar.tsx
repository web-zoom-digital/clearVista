'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Phone, ChevronDown } from 'lucide-react';

const navItems = [
  {
    label: 'Products',
    children: [
      { label: 'uPVC Windows', href: '/windows', hint: 'Sliding, Casement & more' },
      { label: 'uPVC Doors', href: '/doors', hint: 'Sliding, Swing & French' },
      { label: 'All UPC Products', href: '/upc-products', hint: 'Full product catalog' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        id="site-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          background: scrolled
            ? 'rgba(255,255,255,0.97)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 36, height: 36,
              background: 'linear-gradient(135deg, #0057B8, #009FE3)',
              borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="8" height="8" rx="1" fill="white" opacity="0.9"/>
                <rect x="13" y="3" width="8" height="8" rx="1" fill="white" opacity="0.6"/>
                <rect x="3" y="13" width="8" height="8" rx="1" fill="white" opacity="0.6"/>
                <rect x="13" y="13" width="8" height="8" rx="1" fill="white" opacity="0.9"/>
              </svg>
            </div>
            <span style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 800,
              fontSize: '1.4rem',
              color: scrolled ? '#0057B8' : 'white',
              letterSpacing: '-0.02em',
              transition: 'color 0.3s ease',
            }}>
              Clear<span style={{ color: '#009FE3' }}>Vista</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.label} style={{ position: 'relative' }}
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link href={item.href} className="nav-link"
                    style={{ color: scrolled ? '#1E293B' : 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', gap: 4 }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="nav-link"
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: scrolled ? '#1E293B' : 'rgba(255,255,255,0.9)',
                      display: 'flex', alignItems: 'center', gap: 4,
                      fontFamily: 'Outfit, sans-serif', fontWeight: 500, fontSize: '0.95rem',
                    }}
                  >
                    {item.label}
                    <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: activeDropdown === item.label ? 'rotate(180deg)' : 'rotate(0)' }} />
                  </button>
                )}

                {/* Dropdown */}
                {item.children && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    marginTop: 8,
                    background: 'white',
                    borderRadius: 12,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                    border: '1px solid rgba(0,0,0,0.06)',
                    padding: '12px 8px',
                    minWidth: 220,
                    opacity: activeDropdown === item.label ? 1 : 0,
                    pointerEvents: activeDropdown === item.label ? 'auto' : 'none',
                    transform: activeDropdown === item.label ? 'translateY(0)' : 'translateY(-8px)',
                    transition: 'all 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                    zIndex: 100,
                  }}>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} style={{
                        display: 'flex', flexDirection: 'column', gap: 2,
                        padding: '10px 16px', borderRadius: 8,
                        textDecoration: 'none', transition: 'background 0.2s ease',
                      }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = '#F0F7FF')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                      >
                        <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0F172A' }}>{child.label}</span>
                        <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{child.hint}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              style={{
                width: 40, height: 40, borderRadius: '50%', border: 'none', cursor: 'pointer',
                background: scrolled ? 'rgba(0,87,184,0.08)' : 'rgba(255,255,255,0.15)',
                color: scrolled ? '#0057B8' : 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                <Phone size={15} />
                Get Free Quote
              </button>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              style={{
                display: 'none', width: 40, height: 40, borderRadius: 8, border: 'none',
                background: scrolled ? 'rgba(0,87,184,0.08)' : 'rgba(255,255,255,0.15)',
                color: scrolled ? '#0057B8' : 'white',
                cursor: 'pointer', alignItems: 'center', justifyContent: 'center',
              }}
              id="mobile-hamburger"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {searchOpen && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(10,15,30,0.8)', zIndex: 2000,
          display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 120,
          backdropFilter: 'blur(8px)',
        }}
          onClick={() => setSearchOpen(false)}
        >
          <div style={{ width: '90%', maxWidth: 600 }} onClick={(e) => e.stopPropagation()}>
            <input
              autoFocus
              type="text"
              placeholder="Search windows, doors, products..."
              style={{
                width: '100%', padding: '20px 24px', fontSize: '1.2rem',
                border: 'none', borderRadius: 12, outline: 'none',
                fontFamily: 'Outfit, sans-serif', boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              }}
            />
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      <div style={{
        position: 'fixed', top: 0, right: 0, height: '100dvh', width: '100%', maxWidth: 360,
        background: 'white', zIndex: 2000,
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        boxShadow: '-20px 0 60px rgba(0,0,0,0.15)',
        display: 'flex', flexDirection: 'column',
        overflowY: 'auto',
      }}>
        <div style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F1F5F9' }}>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#0057B8' }}>ClearVista</span>
          <button onClick={() => setMobileOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748B' }}>
            <X size={24} />
          </button>
        </div>
        <nav style={{ padding: '16px 0' }}>
          {navItems.map((item) => (
            <div key={item.label}>
              {item.href ? (
                <Link href={item.href} onClick={() => setMobileOpen(false)} style={{
                  display: 'block', padding: '14px 24px', textDecoration: 'none',
                  fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '1.05rem',
                  color: '#0F172A', borderBottom: '1px solid #F1F5F9',
                }}>
                  {item.label}
                </Link>
              ) : (
                <>
                  <div style={{ padding: '14px 24px 8px', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94A3B8' }}>
                    {item.label}
                  </div>
                  {item.children?.map((child) => (
                    <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)} style={{
                      display: 'block', padding: '10px 32px', textDecoration: 'none',
                      fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '0.95rem',
                      color: '#334155', borderBottom: '1px solid #F8FAFC',
                    }}>
                      {child.label}
                    </Link>
                  ))}
                </>
              )}
            </div>
          ))}
        </nav>
        <div style={{ padding: 24, marginTop: 'auto', borderTop: '1px solid #F1F5F9' }}>
          <Link href="/contact" onClick={() => setMobileOpen(false)} style={{ textDecoration: 'none' }}>
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <Phone size={16} /> Get Free Quote
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile overlay backdrop */}
      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1999 }}
          onClick={() => setMobileOpen(false)} />
      )}

      <style>{`
        @media (max-width: 1024px) {
          nav { display: none !important; }
          #mobile-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
