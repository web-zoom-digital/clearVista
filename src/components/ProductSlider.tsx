'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const bySpaceSlides = [
  { label: 'Living Room', href: '/windows#living-room', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80' },
  { label: 'Bedroom', href: '/windows#bedroom', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80' },
  { label: 'Kitchen', href: '/windows#kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80' },
  { label: 'Bathroom', href: '/windows#bathroom', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80' },
  { label: 'Balcony', href: '/windows#balcony', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80' },
  { label: 'Office', href: '/windows#office', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80' },
];

const byCollectionSlides = [
  { label: 'Sliding Windows', href: '/windows#sliding', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80' },
  { label: 'Casement Windows', href: '/windows#casement', image: 'https://images.unsplash.com/photo-1618219944342-824e40a13285?w=900&q=80' },
  { label: 'Sliding Doors', href: '/doors#sliding', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80' },
  { label: 'Swing Doors', href: '/doors#swing', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=80' },
  { label: 'French Doors', href: '/doors#french', image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=900&q=80' },
  { label: 'Fixed Windows', href: '/windows#fixed', image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=900&q=80' },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function ProductSlider() {
  const [activeTab, setActiveTab] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref, inView } = useInView();
  const slides = activeTab === 0 ? bySpaceSlides : byCollectionSlides;
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: dir === 'left' ? -400 : 400, behavior: 'smooth' });
  };

  return (
    <section style={{ padding: '100px 0', background: 'white', overflow: 'hidden' }}>
      <div className="container" ref={ref}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Browse Our Collection
          </div>
          <h2 className="text-h2" style={{ marginTop: 12 }}>
            Find Your{' '}
            <span className="title-gradient">Perfect Fit</span>
          </h2>
        </div>

        {/* Tab Switch */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
          <div style={{
            display: 'inline-flex', background: '#F1F5F9', borderRadius: 100,
            padding: 6, gap: 4, position: 'relative',
          }}>
            {['By Space', 'By Collection'].map((tab, i) => (
              <button key={tab} onClick={() => setActiveTab(i)} style={{
                padding: '10px 28px', borderRadius: 100, border: 'none', cursor: 'pointer',
                fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.95rem',
                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                background: activeTab === i ? 'var(--color-primary)' : 'transparent',
                color: activeTab === i ? 'white' : '#64748B',
                boxShadow: activeTab === i ? '0 4px 12px rgba(0,87,184,0.3)' : 'none',
              }}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Panorama Slider */}
      <div style={{ position: 'relative' }}>
        <div
          ref={sliderRef}
          style={{
            display: 'flex', gap: 20, overflowX: 'auto', padding: '0 max(24px, calc((100vw - 1320px) / 2))',
            scrollbarWidth: 'none', msOverflowStyle: 'none',
          }}
          className="hide-scrollbar"
        >
          {slides.map((slide, i) => (
            <Link key={`${activeTab}-${i}`} href={slide.href} style={{ textDecoration: 'none', flexShrink: 0 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{
                width: 320, height: 420, borderRadius: 16, overflow: 'hidden',
                position: 'relative', cursor: 'pointer',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.97)',
                transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`,
                boxShadow: hovered === i ? '0 20px 60px rgba(0,0,0,0.2)' : '0 4px 20px rgba(0,0,0,0.08)',
              }}>
                {/* Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={slide.image} alt={slide.label} style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transform: hovered === i ? 'scale(1.08)' : 'scale(1)',
                  transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                }} />

                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(10,15,30,0.8) 0%, rgba(10,15,30,0.1) 50%, transparent 100%)',
                }} />

                {/* Caption */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '24px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <p style={{ color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '1.05rem', margin: 0 }}>
                    {slide.label}
                  </p>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%', background: '#009FE3',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transform: hovered === i ? 'translateX(0) scale(1.1)' : 'translateX(0)',
                    transition: 'transform 0.3s ease',
                  }}>
                    <ArrowRight size={16} color="white" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Scroll buttons */}
        <button onClick={() => scroll('left')} aria-label="Scroll left" style={{
          position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
          width: 44, height: 44, borderRadius: '50%', border: 'none', cursor: 'pointer',
          background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2,
          transition: 'all 0.2s ease',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#0057B8'; e.currentTarget.style.color = 'white'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#0F172A'; }}
        >
          ‹
        </button>
        <button onClick={() => scroll('right')} aria-label="Scroll right" style={{
          position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
          width: 44, height: 44, borderRadius: '50%', border: 'none', cursor: 'pointer',
          background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2,
          transition: 'all 0.2s ease',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#0057B8'; e.currentTarget.style.color = 'white'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#0F172A'; }}
        >
          ›
        </button>
      </div>

      <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
}
