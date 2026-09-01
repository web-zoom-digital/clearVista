import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'uPVC Windows | Sliding, Casement & Fixed Windows',
  description:
    'Explore ClearVista\'s complete range of premium uPVC windows including sliding windows, casement windows, tilt-and-turn, and fixed windows. Energy-efficient and soundproof. Get a free quote!',
  alternates: { canonical: 'https://www.clearvista.in/windows' },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProductCollection',
  name: 'ClearVista uPVC Windows Collection',
  description: 'Premium uPVC windows including sliding, casement, tilt & turn, and fixed windows for residential and commercial use.',
  brand: { '@type': 'Brand', name: 'ClearVista' },
};

const windows = [
  {
    id: 'sliding',
    name: 'Sliding Windows',
    desc: 'Space-saving horizontal sliding windows ideal for living rooms, bedrooms, and balconies. Smooth glide system with multi-point locking.',
    features: ['Smooth roller system', 'Fly-mesh option', 'Multi-point lock', 'Double glazing available'],
    image: '/images/product-window.jpg',
    badge: 'Most Popular',
  },
  {
    id: 'casement',
    name: 'Casement Windows',
    desc: 'Outward or inward opening windows that provide maximum ventilation. Perfect for kitchens, bathrooms, and study rooms.',
    features: ['360° ventilation', 'Friction stays', 'EPDM gaskets', 'Tilt & turn option'],
    image: '/images/hero-2.jpg',
    badge: 'Premium',
  },
  {
    id: 'fixed',
    name: 'Fixed/Picture Windows',
    desc: 'Non-operable windows that provide unobstructed views and maximum light. Excellent thermal and sound insulation.',
    features: ['Maximum light', 'No air leakage', 'Custom sizes', 'Triple glazing available'],
    image: '/images/hero-3.jpg',
    badge: 'View Maximizer',
  },
  {
    id: 'tilt-turn',
    name: 'Tilt & Turn Windows',
    desc: 'European-style dual-function windows that tilt inward for ventilation or swing open fully. Extremely versatile.',
    features: ['Dual functionality', 'Safe ventilation', 'Easy cleaning', 'High security'],
    image: '/images/who-homeowner.jpg',
    badge: 'European Style',
  },
  {
    id: 'bay',
    name: 'Bay & Bow Windows',
    desc: 'Projecting windows that add architectural interest and extra space. Creates a beautiful focal point in any room.',
    features: ['Adds floor space', 'Panoramic views', 'Custom angles', 'Premium finish'],
    image: '/images/project-2.jpg',
    badge: 'Architectural',
  },
  {
    id: 'louver',
    name: 'Louver Windows',
    desc: 'Slatted windows that allow maximum airflow while maintaining privacy. Perfect for bathrooms and utility areas.',
    features: ['Maximum ventilation', 'Privacy glass', 'Low maintenance', 'Rust-free'],
    image: '/images/project-1.jpg',
    badge: 'Utility',
  },
];

export default function WindowsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{
          background: 'linear-gradient(135deg, #0A0F1E 0%, #0D1526 100%)',
          padding: '160px 0 100px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 0, right: 0, width: '50%', height: '100%',
            background: 'radial-gradient(ellipse at top right, rgba(0,87,184,0.2) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 32 }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.85rem' }}>Home</Link>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
              <span style={{ color: '#45BBFF', fontSize: '0.85rem', fontWeight: 500 }}>Windows</span>
            </div>
            <div className="section-label" style={{ color: '#45BBFF' }}>
              <span style={{ width: 32, height: 2, background: '#45BBFF', borderRadius: 2, display: 'block' }} />
              uPVC Windows Collection
            </div>
            <h1 className="text-h1" style={{ color: 'white', marginTop: 16, marginBottom: 20 }}>
              Windows Designed for<br />
              <span style={{ color: '#45BBFF' }}>Your Every Need</span>
            </h1>
            <p className="text-h4" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 600, fontWeight: 400, marginBottom: 36 }}>
              From sleek sliding windows to architectural bay windows — explore our complete range of precision-engineered uPVC windows.
            </p>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                Get Free Quote <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </section>

        {/* Products Grid */}
        <section style={{ padding: '100px 0', background: 'white' }}>
          <div className="container">
            <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
              {windows.map((win) => (
                <div key={win.id} id={win.id} className="product-card" style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #E2E8F0' }}>
                  {/* Image */}
                  <div className="product-card-img" style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={win.image} alt={win.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                    <span style={{
                      position: 'absolute', top: 16, left: 16,
                      padding: '4px 12px', borderRadius: 100,
                      background: '#0057B8', color: 'white',
                      fontSize: '0.75rem', fontWeight: 600, fontFamily: 'Outfit, sans-serif',
                    }}>
                      {win.badge}
                    </span>
                  </div>
                  {/* Body */}
                  <div style={{ padding: '24px' }}>
                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.2rem', fontWeight: 700, marginBottom: 10, color: '#0F172A' }}>
                      {win.name}
                    </h2>
                    <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 20 }}>
                      {win.desc}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {win.features.map((f) => (
                        <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: '#475569' }}>
                          <Check size={14} color="#009FE3" strokeWidth={2.5} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" style={{ textDecoration: 'none' }}>
                      <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', padding: '12px 20px', fontSize: '0.9rem' }}>
                        Get Quote for {win.name}
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '80px 0', background: 'var(--color-primary)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: 16 }}>
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 36, fontSize: '1rem' }}>
              We offer custom uPVC window solutions tailored to your specific requirements.
            </p>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button className="btn btn-white" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Talk to Our Experts <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
