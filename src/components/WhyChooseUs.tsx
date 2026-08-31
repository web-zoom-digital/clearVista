'use client';

import { useEffect, useRef, useState } from 'react';
import { Shield, Wind, Zap, Thermometer, Volume2, Droplets } from 'lucide-react';

const stats = [
  { number: 20, suffix: '+', label: 'Years of Excellence' },
  { number: 50000, suffix: '+', label: 'Happy Customers' },
  { number: 150, suffix: '+', label: 'Cities Served' },
  { number: 99, suffix: '%', label: 'Customer Satisfaction' },
];

const features = [
  {
    icon: Shield,
    title: 'Weather Resistant',
    desc: 'Built to withstand extreme Indian weather — rain, heat, dust, and humidity. Corrosion-free uPVC frames last 40+ years.',
    color: '#0057B8',
  },
  {
    icon: Volume2,
    title: 'Superior Soundproofing',
    desc: 'Double-glazed glass reduces outside noise by up to 45dB — perfect for urban homes near busy roads.',
    color: '#009FE3',
  },
  {
    icon: Thermometer,
    title: 'Thermal Insulation',
    desc: 'Multi-chamber uPVC profiles with thermal breaks keep your home cool in summer and warm in winter.',
    color: '#0057B8',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    desc: 'Reduce your AC bills by up to 30% with our energy-efficient windows that minimize heat transfer.',
    color: '#009FE3',
  },
  {
    icon: Wind,
    title: 'Air-Tight Sealing',
    desc: 'Multi-point locking systems with EPDM gaskets ensure zero air and dust infiltration.',
    color: '#0057B8',
  },
  {
    icon: Droplets,
    title: 'Water Tight',
    desc: 'Tested to withstand heavy monsoon rains. No leakage, no seepage — guaranteed.',
    color: '#009FE3',
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

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {target >= 1000 ? count.toLocaleString('en-IN') : count}{suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const { ref: statsRef, inView: statsInView } = useInView();
  const { ref: featuresRef, inView: featuresInView } = useInView();

  return (
    <>
      {/* Stats Section */}
      <section style={{ background: 'var(--color-primary)', padding: '70px 0' }}>
        <div className="container">
          <div ref={statsRef} style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24,
          }}>
            {stats.map((stat, i) => (
              <div key={stat.label} style={{
                textAlign: 'center', padding: '20px 16px',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                opacity: statsInView ? 1 : 0,
                transform: statsInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease ${i * 0.1}s`,
              }}>
                <div style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  color: 'white', lineHeight: 1, marginBottom: 8,
                }}>
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} inView={statsInView} />
                </div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', fontWeight: 500 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '100px 0', background: 'var(--color-gray-50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Why ClearVista</div>
            <h2 className="text-h2" style={{ marginTop: 12 }}>
              The <span className="title-gradient">ClearVista</span> Difference
            </h2>
            <p className="text-p" style={{ color: '#64748B', marginTop: 16, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
              We don't just make windows and doors — we engineer comfort, security, and style into every product.
            </p>
          </div>

          <div ref={featuresRef} style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28,
          }}>
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} style={{
                  background: 'white', borderRadius: 16, padding: '32px 28px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  opacity: featuresInView ? 1 : 0,
                  transform: featuresInView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,87,184,0.12)';
                    e.currentTarget.style.borderColor = '#0057B8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = featuresInView ? 'translateY(0)' : 'translateY(30px)';
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)';
                    e.currentTarget.style.borderColor = '#E2E8F0';
                  }}
                >
                  <div style={{
                    width: 56, height: 56, borderRadius: 14,
                    background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}25)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 20,
                  }}>
                    <Icon size={26} color={feature.color} strokeWidth={1.8} />
                  </div>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.1rem', marginBottom: 10, color: '#0F172A' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: '#64748B', lineHeight: 1.7, fontSize: '0.9rem' }}>
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
