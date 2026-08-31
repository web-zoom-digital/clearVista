import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'uPVC Doors | Sliding, Swing, French & Casement Doors',
  description:
    'Explore ClearVista\'s premium uPVC doors collection — sliding doors, swing doors, French doors, and casement doors. Secure, stylish, and weather-resistant. Get a free quote!',
  alternates: { canonical: 'https://www.clearvista.in/doors' },
};

const doors = [
  {
    id: 'sliding',
    name: 'Sliding Doors',
    desc: 'Effortlessly gliding uPVC sliding doors that connect indoor and outdoor spaces beautifully. Perfect for balconies and patios.',
    features: ['Smooth glide rollers', 'Fly-mesh integrated', 'Multi-point locking', 'Large panel sizes'],
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    badge: 'Best Seller',
  },
  {
    id: 'swing',
    name: 'Swing Doors',
    desc: 'Classic inward or outward swinging uPVC doors with premium hardware. Available in single and double leaf options.',
    features: ['360° opening', 'Weather stripping', 'Anti-burglar hinges', 'Custom sizes'],
    image: 'https://images.unsplash.com/photo-1600607687644-c7f34b5063c7?w=800&q=80',
    badge: 'Classic',
  },
  {
    id: 'french',
    name: 'French Doors',
    desc: 'Elegant double-leaf French doors that flood rooms with natural light. Perfect for terraces and garden-facing rooms.',
    features: ['Double leaf design', 'Floor-to-ceiling option', 'Multi-glazing', 'Elegant hardware'],
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80',
    badge: 'Architectural',
  },
  {
    id: 'casement',
    name: 'Casement Doors',
    desc: 'Hinged uPVC doors offering a traditional appearance with modern performance. Great for internal and external use.',
    features: ['Traditional style', 'Superior sealing', 'Custom colors', 'Low threshold'],
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
    badge: 'Traditional',
  },
  {
    id: 'lift-slide',
    name: 'Lift & Slide Doors',
    desc: 'Premium large-format doors with lift-and-slide mechanism for seamless indoor-outdoor living. Available in 6m+ spans.',
    features: ['Extra large spans', 'Effortless operation', 'Triple glazing', 'Premium sealing'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    badge: 'Premium',
  },
  {
    id: 'bi-fold',
    name: 'Bi-Fold Doors',
    desc: 'Space-saving accordion-style uPVC doors that fold away to create a wide, unobstructed opening.',
    features: ['Full-width opening', 'Space-saving', 'Multiple panels', 'Smooth folding'],
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
    badge: 'Modern',
  },
];

export default function DoorsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{
          background: 'linear-gradient(135deg, #003D82 0%, #0057B8 100%)',
          padding: '160px 0 100px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(0,159,227,0.2) 0%, transparent 50%)',
            pointerEvents: 'none',
          }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 32 }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.85rem' }}>Home</Link>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
              <span style={{ color: '#45BBFF', fontSize: '0.85rem', fontWeight: 500 }}>Doors</span>
            </div>
            <div className="section-label" style={{ color: '#45BBFF' }}>
              <span style={{ width: 32, height: 2, background: '#45BBFF', borderRadius: 2, display: 'block' }} />
              uPVC Doors Collection
            </div>
            <h1 className="text-h1" style={{ color: 'white', marginTop: 16, marginBottom: 20 }}>
              Doors That Make a<br />
              <span style={{ color: '#45BBFF' }}>Grand Statement</span>
            </h1>
            <p className="text-h4" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 580, fontWeight: 400, marginBottom: 36 }}>
              First impressions matter. Our uPVC doors combine security, insulation, and elegance for every entrance.
            </p>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button className="btn" style={{
                background: 'white', color: '#0057B8', display: 'flex', alignItems: 'center', gap: 8,
              }}>
                Get Free Quote <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </section>

        {/* Products Grid */}
        <section style={{ padding: '100px 0', background: 'white' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
              {doors.map((door) => (
                <div key={door.id} id={door.id} className="product-card" style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #E2E8F0' }}>
                  <div style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={door.image} alt={door.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                    <span style={{
                      position: 'absolute', top: 16, left: 16,
                      padding: '4px 12px', borderRadius: 100,
                      background: '#009FE3', color: 'white',
                      fontSize: '0.75rem', fontWeight: 600, fontFamily: 'Outfit, sans-serif',
                    }}>
                      {door.badge}
                    </span>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.2rem', fontWeight: 700, marginBottom: 10, color: '#0F172A' }}>
                      {door.name}
                    </h2>
                    <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 20 }}>
                      {door.desc}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {door.features.map((f) => (
                        <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: '#475569' }}>
                          <Check size={14} color="#009FE3" strokeWidth={2.5} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" style={{ textDecoration: 'none' }}>
                      <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', padding: '12px 20px', fontSize: '0.9rem' }}>
                        Get Quote for {door.name}
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
