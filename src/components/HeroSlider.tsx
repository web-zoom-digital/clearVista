'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/hero-1.jpg',
    badge: 'Premium uPVC Solutions',
    title: 'Let Light In',
    titleAccent: 'Beautifully',
    subtitle: 'Precision-engineered uPVC windows and doors crafted for every vision',
    cta: { label: 'Explore Windows', href: '/windows' },
    ctaSecondary: { label: 'View Projects', href: '/projects' },
  },
  {
    id: 2,
    image: '/images/hero-2.jpg',
    badge: 'Elegant Doors Collection',
    title: 'Open to New',
    titleAccent: 'Possibilities',
    subtitle: 'Secure, stylish, and built to last — our doors redefine first impressions',
    cta: { label: 'Explore Doors', href: '/doors' },
    ctaSecondary: { label: 'Get Free Quote', href: '/contact' },
  },
  {
    id: 3,
    image: '/images/hero-3.jpg',
    badge: 'Energy Efficient Technology',
    title: 'Built for',
    titleAccent: 'Tomorrow',
    subtitle: 'Double-glazed, thermally insulated uPVC that reduces noise and saves energy',
    cta: { label: 'UPC Products', href: '/upc-products' },
    ctaSecondary: { label: 'About Us', href: '/about' },
  },
];


export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const SLIDE_DURATION = 5000;

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const next = () => goTo((current + 1) % slides.length);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    intervalRef.current = setInterval(next, SLIDE_DURATION);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [current]);

  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100));
      if (elapsed < SLIDE_DURATION) progressRef.current = setTimeout(tick, 30);
    };
    progressRef.current = setTimeout(tick, 30);
    return () => { if (progressRef.current) clearTimeout(progressRef.current); };
  }, [current]);

  const slide = slides[current];

  return (
    <section className="hero-section" id="hero" aria-label="Hero Slider">
      {/* Background Images */}
      {slides.map((s, i) => (
        <div key={s.id} style={{
          position: 'absolute', inset: 0,
          opacity: i === current ? 1 : 0,
          transition: 'opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
          zIndex: 1,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={s.image}
            alt={s.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover',
              transform: i === current ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 6s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="hero-overlay" style={{ zIndex: 2 }} />

      {/* Content */}
      <div className="container" style={{
        position: 'relative', zIndex: 3, height: '100%',
        display: 'flex', alignItems: 'center',
      }}>
        <div style={{ maxWidth: 700 }}>
          {/* Badge */}
          <div key={`badge-${current}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px', borderRadius: 100,
            background: 'rgba(0,159,227,0.25)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(0,159,227,0.4)',
            marginBottom: 24,
            animation: 'fadeInUp 0.6s ease both',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#009FE3', display: 'block' }} />
            <span style={{ color: '#45BBFF', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Outfit, sans-serif' }}>
              {slide.badge}
            </span>
          </div>

          {/* Title */}
          <h1 key={`title-${current}`} className="text-h1" style={{
            color: 'white', marginBottom: 16, lineHeight: 1.05,
            animation: 'fadeInUp 0.7s 0.1s ease both',
          }}>
            {slide.title}{' '}
            <span style={{ color: '#45BBFF' }}>{slide.titleAccent}</span>
          </h1>

          {/* Subtitle */}
          <p key={`sub-${current}`} className="text-h4" style={{
            color: 'rgba(255,255,255,0.8)', marginBottom: 40, maxWidth: 540, fontWeight: 400,
            animation: 'fadeInUp 0.7s 0.2s ease both',
          }}>
            {slide.subtitle}
          </p>

          {/* CTAs */}
          <div key={`cta-${current}`} style={{
            display: 'flex', gap: 16, flexWrap: 'wrap',
            animation: 'fadeInUp 0.7s 0.3s ease both',
          }}>
            <Link href={slide.cta.href} style={{ textDecoration: 'none' }}>
              <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {slide.cta.label} <ArrowRight size={16} />
              </button>
            </Link>
            <Link href={slide.ctaSecondary.href} style={{ textDecoration: 'none' }}>
              <button className="btn" style={{
                background: 'rgba(255,255,255,0.12)', color: 'white',
                border: '1.5px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)',
              }}>
                {slide.ctaSecondary.label}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div style={{
        position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
        zIndex: 4, display: 'flex', alignItems: 'center', gap: 20,
      }}>
        <button onClick={prev} aria-label="Previous slide" style={{
          width: 40, height: 40, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.4)',
          background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)',
          color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.2s ease',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
        >
          <ChevronLeft size={18} />
        </button>

        {/* Counter + Progress */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', minWidth: 24 }}>
            {String(current + 1).padStart(2, '0')}
          </span>
          <div style={{ width: 80, height: 2, background: 'rgba(255,255,255,0.25)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{
              height: '100%', background: '#009FE3', borderRadius: 2,
              width: `${progress}%`, transition: 'width 0.05s linear',
            }} />
          </div>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Outfit, sans-serif', fontWeight: 500, fontSize: '1rem' }}>
            {String(slides.length).padStart(2, '0')}
          </span>
        </div>

        <button onClick={next} aria-label="Next slide" style={{
          width: 40, height: 40, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.4)',
          background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)',
          color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.2s ease',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 40, right: 40, zIndex: 4,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem', fontFamily: 'Outfit, sans-serif',
        letterSpacing: '0.15em', textTransform: 'uppercase',
      }}>
        <div style={{
          width: 1, height: 60, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.5))',
          animation: 'float 2s ease-in-out infinite',
        }} />
        Scroll
      </div>
    </section>
  );
}
