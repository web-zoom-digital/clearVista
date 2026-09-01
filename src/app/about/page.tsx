import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Award, Users, MapPin, Clock, Target, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About ClearVista | Our Story, Mission & Team',
  description:
    'Learn about ClearVista — India\'s trusted uPVC windows and doors manufacturer. Our story, mission, values, and the expert team behind every premium product.',
  alternates: { canonical: 'https://www.clearvista.in/about' },
};

const milestones = [
  { year: '2005', event: 'ClearVista founded in New Delhi with a vision to bring European uPVC technology to India' },
  { year: '2008', event: 'Expanded to 10 cities with our first manufacturing plant in Haryana' },
  { year: '2012', event: 'Reached 10,000 installations milestone. Launched aluminium product line' },
  { year: '2016', event: 'Pan-India expansion to 100+ cities. ISO 9001:2015 certification achieved' },
  { year: '2020', event: 'Launched next-gen double and triple glazing technology' },
  { year: '2024', event: '50,000+ happy customers. Serving 150+ cities across India' },
];

const values = [
  { icon: Award, title: 'Quality First', desc: 'Every product is manufactured to the highest European standards and tested rigorously before delivery.' },
  { icon: Users, title: 'Customer-Centric', desc: 'We listen, understand, and deliver solutions tailored to each customer\'s unique requirements.' },
  { icon: Heart, title: 'Passion for Design', desc: 'We believe windows and doors should be beautiful, not just functional.' },
  { icon: Target, title: 'Innovation', desc: 'Continuously investing in R&D to bring the latest uPVC technology to Indian homes.' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{
          background: 'linear-gradient(135deg, #0A0F1E 0%, #003D82 100%)',
          padding: '160px 0 100px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 30% 50%, rgba(0,159,227,0.15) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 32 }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.85rem' }}>Home</Link>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
              <span style={{ color: '#45BBFF', fontSize: '0.85rem', fontWeight: 500 }}>About Us</span>
            </div>
            <div className="about-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
              <div>
                <div className="section-label" style={{ color: '#45BBFF' }}>
                  <span style={{ width: 32, height: 2, background: '#45BBFF', borderRadius: 2, display: 'block' }} />
                  Our Story
                </div>
                <h1 className="text-h1" style={{ color: 'white', marginTop: 16, marginBottom: 24 }}>
                  20 Years of Building<br />
                  <span style={{ color: '#45BBFF' }}>Better Homes</span>
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, fontSize: '1rem', marginBottom: 20 }}>
                  Founded in 2005, ClearVista started with a simple belief: every Indian home deserves windows and doors that are beautiful, durable, and energy-efficient.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                  Today, we are one of India&apos;s leading manufacturers of premium uPVC windows and doors, serving 50,000+ customers across 150+ cities with a team of 500+ skilled professionals.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { n: '20+', l: 'Years Experience' },
                  { n: '50K+', l: 'Happy Customers' },
                  { n: '150+', l: 'Cities Served' },
                  { n: '500+', l: 'Team Members' },
                ].map((s) => (
                  <div key={s.l} style={{
                    background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16,
                    padding: '28px 20px', textAlign: 'center',
                  }}>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '2.5rem', color: '#45BBFF', lineHeight: 1 }}>
                      {s.n}
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: 8 }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section style={{ padding: '100px 0', background: 'white' }}>
          <div className="container">
            <div className="mission-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
              <div style={{ padding: '48px', background: '#F0F7FF', borderRadius: 20, border: '1px solid #DBEAFE' }}>
                <div style={{ fontSize: '2rem', marginBottom: 20 }}>🎯</div>
                <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#0057B8', marginBottom: 16 }}>Our Mission</h2>
                <p style={{ color: '#475569', lineHeight: 1.8 }}>
                  To manufacture and deliver the highest quality uPVC windows and doors that transform homes across India — combining European engineering with Indian innovation to create products that are beautiful, durable, and accessible to every Indian household.
                </p>
              </div>
              <div style={{ padding: '48px', background: '#F0F7FF', borderRadius: 20, border: '1px solid #DBEAFE' }}>
                <div style={{ fontSize: '2rem', marginBottom: 20 }}>🌟</div>
                <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#009FE3', marginBottom: 16 }}>Our Vision</h2>
                <p style={{ color: '#475569', lineHeight: 1.8 }}>
                  To be India&apos;s most trusted and innovative uPVC solutions company by 2030 — setting new standards in energy efficiency, design, and customer experience, while contributing to a sustainable built environment across India.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: '80px 0', background: 'var(--color-gray-50)' }} id="why-us">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>What Drives Us</div>
              <h2 className="text-h2" style={{ marginTop: 12 }}>Our Core <span className="title-gradient">Values</span></h2>
            </div>
            <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} style={{ textAlign: 'center', padding: '32px 24px', background: 'white', borderRadius: 16, border: '1px solid #E2E8F0', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                    <div style={{ width: 60, height: 60, borderRadius: 16, background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                      <Icon size={28} color="#0057B8" strokeWidth={1.8} />
                    </div>
                    <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#0F172A', marginBottom: 12 }}>{v.title}</h3>
                    <p style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.7 }}>{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ padding: '100px 0', background: 'var(--color-darkbase)', overflow: 'hidden' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div className="section-label" style={{ justifyContent: 'center', color: '#45BBFF' }}>
                <span style={{ width: 32, height: 2, background: '#45BBFF', borderRadius: 2, display: 'block' }} />
                Our Journey
              </div>
              <h2 className="text-h2" style={{ color: 'white', marginTop: 12 }}>
                20 Years of <span style={{ color: '#45BBFF' }}>Milestones</span>
              </h2>
            </div>
            <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>
              {/* Timeline line */}
              <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: 'rgba(0,159,227,0.3)', transform: 'translateX(-50%)' }} />
              {milestones.map((m, i) => (
                <div key={m.year} style={{
                  display: 'flex', justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                  marginBottom: 40, position: 'relative',
                }}>
                  {/* Dot */}
                  <div style={{
                    position: 'absolute', left: '50%', top: 20, transform: 'translate(-50%, -50%)',
                    width: 14, height: 14, borderRadius: '50%', background: '#009FE3',
                    boxShadow: '0 0 0 4px rgba(0,159,227,0.2)', zIndex: 1,
                  }} />
                  <div style={{
                    width: '44%',
                    background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 12, padding: '20px 24px',
                  }}>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#009FE3' }}>{m.year}</span>
                    <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: 8, fontSize: '0.9rem', lineHeight: 1.6 }}>{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards */}
        <section style={{ padding: '60px 0', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <p style={{ color: '#94A3B8', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 32 }}>
              Awards & Certifications
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
              {['🏆 Best uPVC Brand 2023', '🥇 ISO 9001:2015 Certified', '✅ BIS Certified Products', '🌱 GRIHA Green Building Partner', '⚡ Energy Star Rated'].map((a) => (
                <div key={a} style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#475569' }}>{a}</div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '80px 0', background: 'var(--color-primary)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: 16 }}>
              Join 50,000+ Happy Customers
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 36 }}>
              Experience the ClearVista difference. Get a free consultation today.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button className="btn btn-white" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  Get Free Quote <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/projects" style={{ textDecoration: 'none' }}>
                <button className="btn" style={{
                  background: 'rgba(255,255,255,0.12)', color: 'white',
                  border: '1.5px solid rgba(255,255,255,0.35)',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <MapPin size={16} /> View Our Projects
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
