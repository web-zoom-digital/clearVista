'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const audienceCards = [
  {
    id: 'homeowner',
    label: 'I\'m a Homeowner',
    hint: 'Find windows & doors for your home',
    href: '/windows',
    image: '/images/who-homeowner.jpg',
    color: '#C8A05C',
  },
  {
    id: 'architect',
    label: 'I\'m an Architect',
    hint: 'Explore technical specs & designs',
    href: '/upc-products',
    image: '/images/who-architect.jpg',
    color: '#D4AF37',
  },
  {
    id: 'builder',
    label: 'I\'m a Builder',
    hint: 'Bulk orders & project partnerships',
    href: '/contact',
    image: '/images/who-builder.jpg',
    color: '#C8A05C',
  },
  {
    id: 'exploring',
    label: 'Just Exploring',
    hint: 'Browse our complete collection',
    href: '/upc-products',
    image: '/images/who-fabricator.jpg',
    color: '#D4AF37',
  },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function WhoAreYou() {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section style={{ background: 'var(--color-darkbase)', padding: '100px 0', overflow: 'hidden', position: 'relative' }}>
      {/* Decorative BG */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '40vw', height: '100%',
        background: 'radial-gradient(ellipse at top right, rgba(200, 160, 92,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, width: '30vw', height: '50%',
        background: 'radial-gradient(ellipse at bottom left, rgba(212, 175, 55,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" ref={ref}>
        {/* Header */}
        <div style={{ maxWidth: 560, marginBottom: 64 }}>
          <div className="section-label" style={{ color: '#F0D16E' }}>
            <span style={{ width: 32, height: 2, background: '#F0D16E', borderRadius: 2, display: 'block' }} />
            Begin Your Journey
          </div>
          <h2 className="text-h2" style={{ color: 'white', marginTop: 12 }}>
            Tell us who you are,{' '}
            <span style={{ color: '#F0D16E' }}>we&apos;ll guide you</span>
          </h2>
          <p className="text-p" style={{ color: 'rgba(255,255,255,0.6)', marginTop: 16 }}>
            Whether you&apos;re a homeowner, architect, or builder — ClearVista has the perfect uPVC solution for your needs.
          </p>
        </div>

        {/* Diamond Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 32,
        }}>
          {audienceCards.map((card, i) => (
            <Link key={card.id} href={card.href} style={{ textDecoration: 'none' }}
              onMouseEnter={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
                cursor: 'pointer',
              }}>
                {/* Diamond Image */}
                <div style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    overflow: 'hidden',
                    transform: hovered === card.id ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={card.image}
                      alt={card.label}
                      style={{
                        width: '100%', height: '100%', objectFit: 'cover',
                        transform: hovered === card.id ? 'scale(1.12)' : 'scale(1)',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    {/* Overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'rgba(10, 10, 10,0.25)',
                      transition: 'opacity 0.3s ease',
                      opacity: hovered === card.id ? 0 : 1,
                    }} />
                  </div>

                  {/* Diamond Border SVG */}
                  <svg
                    viewBox="0 0 260 260"
                    style={{
                      position: 'absolute', inset: 0, width: '100%', height: '100%',
                      opacity: hovered === card.id ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                      pointerEvents: 'none',
                    }}
                  >
                    <path
                      d="M130 4 L256 130 L130 256 L4 130 Z"
                      fill="none"
                      stroke="#F0D16E"
                      strokeWidth="3"
                      strokeLinejoin="miter"
                    />
                  </svg>
                </div>

                {/* Label */}
                <div style={{ marginTop: 20, textAlign: 'center' }}>
                  <h4 style={{
                    fontFamily: 'Outfit, sans-serif', fontWeight: 700,
                    fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
                    color: hovered === card.id ? 'white' : 'rgba(255,255,255,0.5)',
                    transition: 'color 0.3s ease',
                    marginBottom: 4,
                  }}>
                    {card.label}
                  </h4>
                  <p style={{
                    fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)',
                    fontFamily: 'Inter, sans-serif',
                    opacity: hovered === card.id ? 1 : 0,
                    transform: hovered === card.id ? 'translateY(0)' : 'translateY(4px)',
                    transition: 'all 0.3s ease',
                  }}>
                    {card.hint} <ArrowRight size={12} style={{ display: 'inline', verticalAlign: 'middle' }} />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .audience-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .audience-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
