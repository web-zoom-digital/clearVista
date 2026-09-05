'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Phone, ChevronDown, Home, LayoutGrid, MessageCircle, Mail } from 'lucide-react';

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string; hint?: string }[];
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Windows', href: '/windows' },
  { label: 'Doors', href: '/doors' },
  { label: 'All Products', href: '/upc-products' },
  { label: 'Projects', href: '/projects' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
          display: 'flex', flexDirection: 'column'
        }}
      >
        {/* Top Bar */}
        <div style={{
          background: '#0F172A',
          color: 'white',
          fontSize: '0.8rem',
          fontFamily: 'Inter, sans-serif',
          height: scrolled ? 0 : 36,
          overflow: 'hidden',
          transition: 'height 0.3s ease',
          display: 'flex', alignItems: 'center'
        }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div style={{ display: 'flex', gap: 16 }}>
              <a href="mailto:clearvistadoors@gmail.com" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                <Mail size={12} /> <span className="topbar-text">clearvistadoors@gmail.com</span>
              </a>
              <div style={{ color: 'rgba(255,255,255,0.3)' }}>|</div>
              <a href="tel:+919871770357" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                <Phone size={12} /> <span className="topbar-text">+91 98717 70357</span>
              </a>
            </div>
            <div className="topbar-hide-mobile" style={{ display: 'flex', gap: 16, color: 'rgba(255,255,255,0.8)' }}>
               Welcome to ClearVista Building Systems
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1480, width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 80, padding: '0 32px' }}>
          {/* LEFT: Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0, paddingRight: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C8A05C' }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 21V10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10V21" strokeLinecap="round" />
                <path d="M12 10V21" strokeLinecap="round" />
                <circle cx="9" cy="16" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 800,
                fontSize: '1.4rem',
                color: scrolled ? '#C8A05C' : 'white',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                transition: 'color 0.3s ease',
              }}>
                ClearVista
              </span>
              <span style={{
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                color: scrolled ? '#1E293B' : 'rgba(255,255,255,0.7)',
                marginTop: 2,
              }}>
                DOORS & WINDOWS
              </span>
            </div>
          </Link>

          {/* CENTER: Desktop Nav */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 34, flex: 1 }} ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.label} style={{ position: 'relative' }}
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link href={item.href} className="nav-link"
                    style={{ 
                      color: scrolled ? '#1E293B' : 'rgba(255,255,255,0.9)', 
                      display: 'flex', alignItems: 'center', gap: 4,
                      padding: '8px 4px',
                      fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.96rem',
                      textDecoration: 'none', transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = scrolled ? '#C8A05C' : 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.color = scrolled ? '#1E293B' : 'rgba(255,255,255,0.9)'}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="nav-link"
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: scrolled ? '#1E293B' : 'rgba(255,255,255,0.9)',
                      display: 'flex', alignItems: 'center', gap: 6, padding: '8px 4px',
                      fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.96rem',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = scrolled ? '#C8A05C' : 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.color = scrolled ? '#1E293B' : 'rgba(255,255,255,0.9)'}
                  >
                    {item.label}
                    <ChevronDown size={16} style={{ transition: 'transform 0.2s', transform: activeDropdown === item.label ? 'rotate(180deg)' : 'rotate(0)' }} />
                  </button>
                )}

                {/* Dropdown */}
                {item.children && (
                  <div style={{
                    position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                    width: 240, background: 'white', borderRadius: 12,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid #F1F5F9',
                    opacity: activeDropdown === item.label ? 1 : 0,
                    visibility: activeDropdown === item.label ? 'visible' : 'hidden',
                    transition: 'all 0.2s ease', transformOrigin: 'top center',
                    marginTop: 12, paddingTop: 10, paddingBottom: 10, zIndex: 100,
                  }}>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} style={{
                        display: 'flex', flexDirection: 'column', gap: 2,
                        padding: '12px 20px', textDecoration: 'none',
                        color: '#334155', transition: 'background 0.2s'
                      }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#F8FAFC'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.95rem' }}>{child.label}</span>
                        <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{child.hint}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT: Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0, paddingLeft: 40 }}>
            <a href="tel:+919871770357" style={{ textDecoration: 'none' }} className="desktop-quote-btn">
              <button className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap', borderRadius: 10 }}>
                <Phone size={16} />
                Call Now
              </button>
            </a>
            
            <a href="https://wa.me/919871770357" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="desktop-quote-btn">
              <button style={{ 
                padding: '10px 24px', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap',
                background: '#25D366', color: 'white', border: 'none', borderRadius: 10, fontWeight: 600, fontFamily: 'Outfit, sans-serif', cursor: 'pointer', transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </button>
            </a>

            {/* Premium Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              style={{
                display: 'none', 
                padding: '8px 16px', borderRadius: '100px', border: 'none',
                background: scrolled ? 'rgba(200, 160, 92,0.08)' : 'rgba(255,255,255,0.15)',
                color: scrolled ? '#C8A05C' : 'white',
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C8A05C' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 21V10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10V21" strokeLinecap="round" />
                <path d="M12 10V21" strokeLinecap="round" />
                <circle cx="9" cy="16" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#C8A05C', letterSpacing: '-0.02em' }}>ClearVista</span>
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
          <a href="https://wa.me/919871770357" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
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
            background: 'linear-gradient(135deg, #C8A05C, #D4AF37)',
            color: 'white', boxShadow: '0 8px 25px rgba(200, 160, 92,0.4)',
            border: '4px solid white'
           }}>
            <Phone size={24} fill="currentColor" />
          </Link>
        </div>
        <a href="https://wa.me/919871770357" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, textDecoration: 'none', color: '#25D366' }}>
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
