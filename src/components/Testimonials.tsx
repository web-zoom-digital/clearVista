'use client';

import { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Homeowner, New Delhi',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    quote: "We replaced all 14 windows in our 3BHK with ClearVista uPVC windows. The noise reduction is incredible — we live near a main road and now it's like a different home. Highly recommended!",

  },
  {
    id: 2,
    name: 'Priya Mehta',
    role: 'Interior Designer, Mumbai',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80',
    quote: 'I\'ve recommended ClearVista to over 30 of my clients. The quality is consistent, delivery is on time, and the installation team is professional. My clients are always happy.',
  },
  {
    id: 3,
    name: 'Suresh Kumar',
    role: 'Builder, Bangalore',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    quote: 'We\'ve been using ClearVista for our residential projects for 5 years. The bulk pricing is competitive and product quality is top-notch. Our buyers specifically ask for ClearVista windows now.',
  },
  {
    id: 4,
    name: 'Anita Gupta',
    role: 'Architect, Hyderabad',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    quote: 'The custom sizing options and color choices are excellent. ClearVista can match any design brief I give them. The thermal insulation performance is better than anything else I\'ve specified.',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Homeowner, Pune',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    quote: 'After monsoons last year, not a single drop of water came through. The sliding doors are smooth and the locking mechanism feels premium. Worth every rupee spent.',
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

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, inView } = useInView();

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[(current) % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section style={{ padding: '100px 0', background: 'var(--color-darkbase)', position: 'relative', overflow: 'hidden' }}>
      {/* BG Decoration */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw', height: '60vw',
        background: 'radial-gradient(circle, rgba(0,87,184,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" ref={ref}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div className="section-label" style={{ color: '#45BBFF' }}>
              <span style={{ width: 32, height: 2, background: '#45BBFF', borderRadius: 2, display: 'block' }} />
              Customer Stories
            </div>
            <h2 className="text-h2" style={{ color: 'white', marginTop: 12 }}>
              What Our Customers{' '}
              <span style={{ color: '#45BBFF' }}>Say</span>
            </h2>
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={prev} aria-label="Previous" style={{
              width: 48, height: 48, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.2)',
              background: 'rgba(255,255,255,0.05)', color: 'white', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#0057B8'; e.currentTarget.style.borderColor = '#0057B8'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
            >
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} aria-label="Next" style={{
              width: 48, height: 48, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.2)',
              background: 'rgba(255,255,255,0.05)', color: 'white', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#0057B8'; e.currentTarget.style.borderColor = '#0057B8'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {visible.map((t, i) => (
            <div key={`${t.id}-${current}`} style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20, padding: '32px 28px',
              backdropFilter: 'blur(10px)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(30px)',
              transition: `all 0.5s ease ${i * 0.1}s`,
              position: 'relative',
            }}>
              {/* Quote icon */}
              <div style={{
                position: 'absolute', top: 24, right: 24,
                color: 'rgba(0,159,227,0.2)',
              }}>
                <Quote size={40} />
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} fill="#FFB800" color="#FFB800" />
                ))}
              </div>

              {/* Quote */}
              <p style={{
                color: 'rgba(255,255,255,0.8)', lineHeight: 1.75,
                fontSize: '0.95rem', marginBottom: 28, fontStyle: 'italic',
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.image} alt={t.name} style={{
                  width: 48, height: 48, borderRadius: '50%', objectFit: 'cover',
                  border: '2px solid rgba(0,159,227,0.4)',
                }} />
                <div>
                  <p style={{ color: 'white', fontWeight: 700, fontFamily: 'Outfit, sans-serif', fontSize: '0.95rem', marginBottom: 2 }}>{t.name}</p>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 40 }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to testimonial ${i + 1}`} style={{
              width: i === current ? 24 : 8, height: 8, borderRadius: 4, border: 'none',
              background: i === current ? '#009FE3' : 'rgba(255,255,255,0.2)',
              cursor: 'pointer', transition: 'all 0.3s ease', padding: 0,
            }} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
