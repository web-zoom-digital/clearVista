'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'Residential', 'Commercial', 'Hospitality'];

const projects = [
  { id: 1, title: 'Modern Villa, Delhi', category: 'Residential', type: 'Casement Windows + Sliding Doors', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', span: 'large' },
  { id: 2, title: 'Tech Office, Bengaluru', category: 'Commercial', type: 'Floor-to-Ceiling Fixed Windows', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', span: 'small' },
  { id: 3, title: 'Luxury Apartment, Mumbai', category: 'Residential', type: 'Sliding Windows + Swing Doors', image: 'https://images.unsplash.com/photo-1600607687644-c7f34b5063c7?w=800&q=80', span: 'small' },
  { id: 4, title: 'Boutique Hotel, Goa', category: 'Hospitality', type: 'French Doors + Casement Windows', image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80', span: 'medium' },
  { id: 5, title: 'IT Campus, Hyderabad', category: 'Commercial', type: 'Curtain Wall + Sliding Windows', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', span: 'medium' },
  { id: 6, title: 'Heritage Home Renovation, Jaipur', category: 'Residential', type: 'Custom uPVC Windows', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80', span: 'small' },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function ProjectsGallery({ limit }: { limit?: number }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref, inView } = useInView();

  const filtered = projects
    .filter((p) => activeFilter === 'All' || p.category === activeFilter)
    .slice(0, limit);

  return (
    <section style={{ padding: '100px 0', background: 'white' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div className="section-label">Our Work</div>
            <h2 className="text-h2" style={{ marginTop: 12 }}>
              Projects &{' '}
              <span className="title-gradient">Stories</span>
            </h2>
          </div>
          <Link href="/projects" style={{ textDecoration: 'none' }}>
            <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              View All Projects <ArrowRight size={16} />
            </button>
          </Link>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 40, flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveFilter(cat)} style={{
              padding: '8px 20px', borderRadius: 100, border: 'none', cursor: 'pointer',
              fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.88rem',
              transition: 'all 0.25s ease',
              background: activeFilter === cat ? 'var(--color-primary)' : '#F1F5F9',
              color: activeFilter === cat ? 'white' : '#64748B',
              boxShadow: activeFilter === cat ? '0 4px 12px rgba(0,87,184,0.25)' : 'none',
            }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {filtered.map((project, i) => (
            <div key={project.id}
              style={{
                borderRadius: 16, overflow: 'hidden',
                position: 'relative', cursor: 'pointer',
                gridColumn: project.span === 'large' ? 'span 2' : 'span 1',
                aspectRatio: project.span === 'large' ? '2/1.3' : '1/1.1',
                opacity: inView ? 1 : 0,
                transform: inView ? 'scale(1)' : 'scale(0.96)',
                transition: `all 0.5s ease ${i * 0.07}s`,
              }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt={project.title} style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transform: hovered === project.id ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
              }} />

              {/* Overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: hovered === project.id
                  ? 'linear-gradient(to top, rgba(0,87,184,0.85) 0%, rgba(0,87,184,0.3) 60%, transparent 100%)'
                  : 'linear-gradient(to top, rgba(10,15,30,0.7) 0%, transparent 60%)',
                transition: 'background 0.4s ease',
              }} />

              {/* Caption */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 20px',
                transform: 'translateY(0)', transition: 'transform 0.3s ease',
              }}>
                <span style={{
                  display: 'inline-block', padding: '3px 10px', borderRadius: 100,
                  background: 'rgba(0,159,227,0.3)', backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(0,159,227,0.4)',
                  color: '#45BBFF', fontSize: '0.72rem', fontWeight: 600,
                  letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8,
                }}>
                  {project.category}
                </span>
                <h3 style={{ color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.05rem', marginBottom: 4 }}>
                  {project.title}
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem',
                  opacity: hovered === project.id ? 1 : 0,
                  transform: hovered === project.id ? 'translateY(0)' : 'translateY(8px)',
                  transition: 'all 0.3s ease',
                }}>
                  {project.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
