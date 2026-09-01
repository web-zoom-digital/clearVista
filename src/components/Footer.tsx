'use client';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';


const footerLinks = {
  Products: [
    { label: 'uPVC Sliding Windows', href: '/windows#sliding' },
    { label: 'uPVC Casement Windows', href: '/windows#casement' },
    { label: 'Fixed Windows', href: '/windows#fixed' },
    { label: 'Sliding Doors', href: '/doors#sliding' },
    { label: 'Swing Doors', href: '/doors#swing' },
    { label: 'French Doors', href: '/doors#french' },
  ],
  Company: [
    { label: 'About ClearVista', href: '/about' },
    { label: 'Our Projects', href: '/projects' },
    { label: 'Why Choose Us', href: '/about#why-us' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
  ],
  Support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Get Free Quote', href: '/contact#quote' },
    { label: 'Installation Guide', href: '/support/installation' },
    { label: 'Warranty Policy', href: '/support/warranty' },
    { label: 'FAQs', href: '/support/faqs' },
  ],
};

const socials = [
  { href: 'https://facebook.com/clearvista', label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  { href: 'https://instagram.com/clearvista', label: 'Instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zm1.5-4.87h.01M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z' },
  { href: 'https://youtube.com/@clearvista', label: 'YouTube', path: 'M22.54 6.42A2.78 2.78 0 0 0 20.58 4.4C18.88 4 12 4 12 4s-6.88 0-8.58.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.42 19.6C5.12 20 12 20 12 20s6.88 0 8.58-.46a2.78 2.78 0 0 0 1.96-2.02A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
  { href: 'https://linkedin.com/company/clearvista', label: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
  { href: 'https://twitter.com/clearvista', label: 'Twitter (X)', path: 'M4 4l16 16M4 20L20 4' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#06101F', color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>
      {/* CTA Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #0057B8 0%, #009FE3 100%)',
        padding: '60px 0',
      }}>
        <div className="container cta-banner-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <h2 style={{ color: 'white', fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, marginBottom: 8 }}>
              Ready to Transform Your Space?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>
              Get a free consultation and quote from our experts today.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button className="btn btn-white" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                Get Free Quote <ArrowRight size={16} />
              </button>
            </Link>
            <a href="tel:+911800XXXXXX" style={{ textDecoration: 'none' }}>
              <button className="btn" style={{
                background: 'rgba(255,255,255,0.15)', color: 'white',
                border: '1.5px solid rgba(255,255,255,0.4)',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <Phone size={16} /> Call Now
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container" style={{ padding: '70px 24px 40px' }}>
        <div className="footer-main-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 56 }}>
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: 'linear-gradient(135deg, #0057B8, #009FE3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="8" height="8" rx="1" fill="white" opacity="0.9"/>
                  <rect x="13" y="3" width="8" height="8" rx="1" fill="white" opacity="0.6"/>
                  <rect x="3" y="13" width="8" height="8" rx="1" fill="white" opacity="0.6"/>
                  <rect x="13" y="13" width="8" height="8" rx="1" fill="white" opacity="0.9"/>
                </svg>
              </div>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: 'white' }}>
                Clear<span style={{ color: '#009FE3' }}>Vista</span>
              </span>
            </div>
            <p style={{ lineHeight: 1.8, fontSize: '0.9rem', marginBottom: 24, maxWidth: 280 }}>
              India&apos;s trusted manufacturer of premium uPVC windows and doors. Engineering comfort, security, and beauty for every home.
            </p>

            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="tel:+911800XXXXXX" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#009FE3'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)'; }}
              >
                <Phone size={15} color="#009FE3" /> 1800-XXX-XXXX (Toll Free)
              </a>
              <a href="mailto:info@clearvista.in" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#009FE3'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)'; }}
              >
                <Mail size={15} color="#009FE3" /> info@clearvista.in
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.88rem' }}>
                <MapPin size={15} color="#009FE3" style={{ marginTop: 2, flexShrink: 0 }} />
                <span>New Delhi, India (and 150+ cities pan India)</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h5 style={{ color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.95rem', marginBottom: 20, letterSpacing: '0.02em' }}>
                {title}
              </h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} style={{
                      color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: '0.87rem',
                      transition: 'color 0.2s ease', display: 'inline-block',
                    }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#009FE3'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar" style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 32,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20,
        }}>
          <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} ClearVista Building Systems Pvt. Ltd. All rights reserved. |{' '}
            <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Privacy Policy</Link> |{' '}
            <Link href="/terms" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Terms of Use</Link>
          </p>

          {/* Socials */}
          <div style={{ display: 'flex', gap: 12 }}>
            {socials.map(({ href, label, path }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={{
                width: 36, height: 36, borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0057B8';
                  e.currentTarget.style.borderColor = '#0057B8';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
