'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Phone, ChevronDown, Home, LayoutGrid, MessageCircle } from 'lucide-react';

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
          top: 0, left: 0,
          width: '100%',
          zIndex: 1000,
          transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 34, height: 34,
              background: 'linear-gradient(135deg, #0057B8, #009FE3)',
              borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="8" height="8" rx="1" fill="white" opacity="0.9"/>
                <rect x="13" y="3" width="8" height="8" rx="1" fill="white" opacity="0.6"/>
                <rect x="3" y="13" width="8" height="8" rx="1" fill="white" opacity="0.6"/>
                <rect x="13" y="13" width="8" height="8" rx="1" fill="white" opacity="0.9"/>
              </svg>
            </div>
            <span style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 800,
              fontSize: '1.3rem',
              color: scrolled ? '#0057B8' : 'white',
              letterSpacing: '-0.02em',
              transition: 'color 0.3s ease',
            }}>
              Clear<span style={{ color: '#009FE3' }}>Vista</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 4 }} ref={dropdownRef}>
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
                    position: 'absolute', top: '100%', left: 0, marginTop: 8,
                    background: 'white', borderRadius: 12,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                    border: '1px solid rgba(0,0,0,0.06)',
                    padding: '12px 8px', minWidth: 220,
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              style={{
                width: 40, height: 40, borderRadius: '50%', border: 'none', cursor: 'pointer',
                background: scrolled ? 'rgba(0,87,184,0.08)' : 'rgba(255,255,255,0.15)',
                color: scrolled ? '#0057B8' : 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s ease', flexShrink: 0,
              }}
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            <Link href="/contact" style={{ textDecoration: 'none' }} className="desktop-quote-btn">
              <button className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}>
                <Phone size={14} />
                Get Free Quote
              </button>
            </Link>

            {/* Premium Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              style={{
                display: 'none', 
                padding: '8px 16px', borderRadius: '100px', border: 'none',
                background: scrolled ? 'rgba(0,87,184,0.08)' : 'rgba(255,255,255,0.15)',
                color: scrolled ? '#0057B8' : 'white',
                cursor: 'pointer', alignItems: 'center', justifyContent: 'center', gap: 6,
                flexShrink: 0, transition: 'all 0.3s ease'
              }}
              id="mobile-hamburger"
              aria-label="Open menu"
            >
              <span style={{ fontSize: '0.85rem', fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}>Menu</span>
              <Menu size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {searchOpen && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(10,15,30,0.85)', zIndex: 2000,
          display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 100,
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
                width: '100%', padding: '18px 24px', fontSize: '1.1rem',
                border: 'none', borderRadius: 12, outline: 'none',
                fontFamily: 'Outfit, sans-serif', boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              }}
            />
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      <div style={{
        position: 'fixed', top: 0, right: 0, height: '100dvh', width: '100%', maxWidth: 340,
        background: 'white', zIndex: 2000,
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        boxShadow: '-20px 0 60px rgba(0,0,0,0.15)',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Drawer Header */}
        <div style={{ padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F1F5F9' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 30, height: 30, background: 'linear-gradient(135deg, #0057B8, #009FE3)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="8" height="8" rx="1" fill="white" opacity="0.9"/>
                <rect x="13" y="3" width="8" height="8" rx="1" fill="white" opacity="0.6"/>
                <rect x="3" y="13" width="8" height="8" rx="1" fill="white" opacity="0.6"/>
                <rect x="13" y="13" width="8" height="8" rx="1" fill="white" opacity="0.9"/>
              </svg>
            </div>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#0057B8' }}>ClearVista</span>
          </div>
          <button onClick={() => setMobileOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748B', padding: 4 }}>
            <X size={24} />
          </button>
        </div>

        {/* Nav Links */}
        <nav style={{ padding: '12px 0', flex: 1, overflowY: 'auto' }}>
          {navItems.map((item) => (
            <div key={item.label}>
              {item.href ? (
                <Link href={item.href} onClick={() => setMobileOpen(false)} style={{
                  display: 'block', padding: '14px 20px', textDecoration: 'none',
                  fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '1rem',
                  color: '#0F172A', borderBottom: '1px solid #F1F5F9',
                }}>
                  {item.label}
                </Link>
              ) : (
                <>
                  <div style={{ padding: '12px 20px 6px', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94A3B8' }}>
                    {item.label}
                  </div>
                  {item.children?.map((child) => (
                    <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)} style={{
                      display: 'flex', flexDirection: 'column', gap: 2,
                      padding: '10px 28px 10px 32px', textDecoration: 'none',
                      fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '0.92rem',
                      color: '#334155', borderBottom: '1px solid #F8FAFC',
                    }}>
                      <span>{child.label}</span>
                      <span style={{ fontSize: '0.73rem', color: '#94A3B8' }}>{child.hint}</span>
                    </Link>
                  ))}
                </>
              )}
            </div>
          ))}
        </nav>

        {/* Drawer Footer */}
        <div style={{ padding: '16px 20px 40px', borderTop: '1px solid #F1F5F9', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Link href="/contact" onClick={() => setMobileOpen(false)} style={{ textDecoration: 'none' }}>
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.95rem' }}>
              <Phone size={16} /> Get Free Quote
            </button>
          </Link>
          <a href="https://wa.me/919800000000" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              padding: '12px', borderRadius: 4, border: 'none',
              background: '#25D366', color: 'white', fontFamily: 'Outfit, sans-serif',
              fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </button>
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1999, backdropFilter: 'blur(2px)' }}
          onClick={() => setMobileOpen(false)} />
      )}

      {/* Mobile Sticky Bottom Bar */}
      <div id="mobile-bottom-bar" style={{
        position: 'fixed',
        bottom: 0, left: 0, width: '100%',
        background: 'white',
        borderTop: '1px solid #F1F5F9',
        boxShadow: '0 -10px 30px rgba(0,0,0,0.05)',
        display: 'none', // Shown via CSS media query
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '12px 0',
        paddingBottom: 'calc(12px + env(safe-area-inset-bottom))',
        zIndex: 1500,
      }}>
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, textDecoration: 'none', color: '#64748B' }}>
          <Home size={22} strokeWidth={2} />
          <span style={{ fontSize: '0.65rem', fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}>Home</span>
        </Link>
        <Link href="/upc-products" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, textDecoration: 'none', color: '#64748B' }}>
          <LayoutGrid size={22} strokeWidth={2} />
          <span style={{ fontSize: '0.65rem', fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}>Products</span>
        </Link>
        <div style={{ position: 'relative', top: -24 }}>
          <Link href="/contact" style={{ 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 56, height: 56, borderRadius: '50%',
            background: 'linear-gradient(135deg, #0057B8, #009FE3)',
            color: 'white', boxShadow: '0 8px 25px rgba(0,87,184,0.4)',
            border: '4px solid white'
           }}>
            <Phone size={24} fill="currentColor" />
          </Link>
        </div>
        <a href="https://wa.me/919800000000" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, textDecoration: 'none', color: '#25D366' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span style={{ fontSize: '0.65rem', fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}>WhatsApp</span>
        </a>
        <button onClick={() => setMobileOpen(true)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, background: 'none', border: 'none', color: '#64748B', cursor: 'pointer' }}>
          <Menu size={22} strokeWidth={2} />
          <span style={{ fontSize: '0.65rem', fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}>Menu</span>
        </button>
      </div>
    </>
  );
}
