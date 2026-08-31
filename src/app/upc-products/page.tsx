import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Check, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'UPC Products | Complete uPVC Windows & Doors Catalog',
  description:
    'Browse ClearVista\'s complete uPVC product catalog — windows, doors, accessories, and hardware. Premium quality, BIS certified, and available across 150+ cities in India.',
  alternates: { canonical: 'https://www.clearvista.in/upc-products' },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'ClearVista Complete uPVC Product Catalog',
  numberOfItems: 12,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'uPVC Sliding Windows', url: 'https://www.clearvista.in/windows#sliding' },
    { '@type': 'ListItem', position: 2, name: 'uPVC Casement Windows', url: 'https://www.clearvista.in/windows#casement' },
    { '@type': 'ListItem', position: 3, name: 'uPVC Sliding Doors', url: 'https://www.clearvista.in/doors#sliding' },
    { '@type': 'ListItem', position: 4, name: 'uPVC Swing Doors', url: 'https://www.clearvista.in/doors#swing' },
  ],
};

const allProducts = [
  { id: 'sw', name: 'Sliding Windows', category: 'Windows', price: '₹850/sq.ft onwards', rating: 4.9, reviews: 2341, badge: 'Bestseller', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', features: ['Weather-proof', 'Fly-mesh', 'Double glazing', 'Multi-lock'], href: '/windows#sliding' },
  { id: 'cw', name: 'Casement Windows', category: 'Windows', price: '₹950/sq.ft onwards', rating: 4.8, reviews: 1892, badge: 'Premium', image: 'https://images.unsplash.com/photo-1618219944342-824e40a13285?w=600&q=80', features: ['360° ventilation', 'EPDM gaskets', 'Tilt & turn', 'Custom colors'], href: '/windows#casement' },
  { id: 'fw', name: 'Fixed Windows', category: 'Windows', price: '₹750/sq.ft onwards', rating: 4.7, reviews: 1102, badge: '', image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=600&q=80', features: ['Maximum light', 'No infiltration', 'Custom sizes', 'Triple glazing'], href: '/windows#fixed' },
  { id: 'ttw', name: 'Tilt & Turn Windows', category: 'Windows', price: '₹1100/sq.ft onwards', rating: 4.9, reviews: 876, badge: 'European Style', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80', features: ['Dual function', 'Safe ventilation', 'Easy clean', 'High security'], href: '/windows#tilt-turn' },
  { id: 'sd', name: 'Sliding Doors', category: 'Doors', price: '₹1200/sq.ft onwards', rating: 4.9, reviews: 3102, badge: 'Top Rated', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80', features: ['Smooth rollers', 'Fly-mesh', 'Multi-lock', 'Large panels'], href: '/doors#sliding' },
  { id: 'swd', name: 'Swing Doors', category: 'Doors', price: '₹1350/sq.ft onwards', rating: 4.8, reviews: 2213, badge: '', image: 'https://images.unsplash.com/photo-1600607687644-c7f34b5063c7?w=600&q=80', features: ['Anti-burglar', 'Weather-strip', 'Custom sizes', '360° swing'], href: '/doors#swing' },
  { id: 'fd', name: 'French Doors', category: 'Doors', price: '₹1500/sq.ft onwards', rating: 4.8, reviews: 987, badge: 'Elegant', image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80', features: ['Double leaf', 'Floor-to-ceiling', 'Multi-glazing', 'Premium look'], href: '/doors#french' },
  { id: 'ls', name: 'Lift & Slide Doors', category: 'Doors', price: '₹1800/sq.ft onwards', rating: 5.0, reviews: 432, badge: 'Ultra Premium', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80', features: ['6m+ spans', 'Triple glazing', 'Effortless', 'Luxury seal'], href: '/doors#lift-slide' },
  { id: 'bfw', name: 'Bay & Bow Windows', category: 'Specialty', price: 'Custom pricing', rating: 4.9, reviews: 312, badge: 'Architectural', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80', features: ['Panoramic view', 'Adds space', 'Custom angles', 'Premium finish'], href: '/windows#bay' },
  { id: 'bf', name: 'Bi-Fold Doors', category: 'Specialty', price: 'Custom pricing', rating: 4.8, reviews: 267, badge: 'Modern', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80', features: ['Full width open', 'Space-saving', 'Multi-panel', 'Smooth fold'], href: '/doors#bi-fold' },
  { id: 'lw', name: 'Louver Windows', category: 'Specialty', price: '₹700/sq.ft onwards', rating: 4.6, reviews: 543, badge: '', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80', features: ['Max ventilation', 'Privacy glass', 'Rust-free', 'Low maintenance'], href: '/windows#louver' },
  { id: 'cd', name: 'Casement Doors', category: 'Doors', price: '₹1100/sq.ft onwards', rating: 4.7, reviews: 745, badge: '', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', features: ['Traditional look', 'Superior seal', 'Custom colors', 'Low threshold'], href: '/doors#casement' },
];

const categories = ['All', 'Windows', 'Doors', 'Specialty'];

export default function UPCProductsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{
          background: 'linear-gradient(135deg, #003D82 0%, #0A0F1E 100%)',
          padding: '160px 0 80px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 50% 50%, rgba(0,159,227,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 32, justifyContent: 'center' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.85rem' }}>Home</Link>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
              <span style={{ color: '#45BBFF', fontSize: '0.85rem', fontWeight: 500 }}>UPC Products</span>
            </div>
            <div className="section-label" style={{ color: '#45BBFF', justifyContent: 'center' }}>
              <span style={{ width: 32, height: 2, background: '#45BBFF', borderRadius: 2, display: 'block' }} />
              Complete Product Catalog
            </div>
            <h1 className="text-h1" style={{ color: 'white', marginTop: 16, marginBottom: 16 }}>
              All ClearVista <span style={{ color: '#45BBFF' }}>uPVC Products</span>
            </h1>
            <p className="text-h4" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 560, margin: '0 auto 36px', fontWeight: 400 }}>
              Browse our complete range of BIS-certified premium uPVC windows, doors, and specialty products.
            </p>
          </div>
        </section>

        {/* Products */}
        <section style={{ padding: '80px 0', background: 'white' }}>
          <div className="container">
            {/* Category filter is static in SSR - JS-free progressive enhancement */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28 }}>
              {allProducts.map((product) => (
                <Link key={product.id} href={product.href} style={{ textDecoration: 'none' }}>
                  <div className="product-card" style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #E2E8F0', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Image */}
                    <div style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                      {product.badge && (
                        <span style={{
                          position: 'absolute', top: 12, left: 12,
                          padding: '3px 10px', borderRadius: 100,
                          background: '#0057B8', color: 'white',
                          fontSize: '0.72rem', fontWeight: 600, fontFamily: 'Outfit, sans-serif',
                        }}>
                          {product.badge}
                        </span>
                      )}
                      <span style={{
                        position: 'absolute', top: 12, right: 12,
                        padding: '3px 10px', borderRadius: 100,
                        background: 'rgba(255,255,255,0.9)',
                        fontSize: '0.72rem', fontWeight: 600, color: '#475569',
                      }}>
                        {product.category}
                      </span>
                    </div>

                    {/* Body */}
                    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 700, marginBottom: 8, color: '#0F172A' }}>
                        {product.name}
                      </h2>

                      {/* Rating */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                        <div style={{ display: 'flex', gap: 2 }}>
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={12} fill={s <= Math.floor(product.rating) ? '#FFB800' : '#E2E8F0'} color={s <= Math.floor(product.rating) ? '#FFB800' : '#E2E8F0'} />
                          ))}
                        </div>
                        <span style={{ fontSize: '0.75rem', color: '#64748B' }}>{product.rating} ({product.reviews.toLocaleString('en-IN')})</span>
                      </div>

                      {/* Features */}
                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: 5 }}>
                        {product.features.slice(0, 3).map((f) => (
                          <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', color: '#64748B' }}>
                            <Check size={12} color="#009FE3" strokeWidth={2.5} />
                            {f}
                          </li>
                        ))}
                      </ul>

                      {/* Price */}
                      <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px solid #F1F5F9' }}>
                        <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: '#0057B8', fontSize: '0.9rem' }}>
                          {product.price}
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8, color: '#0057B8', fontWeight: 600, fontSize: '0.85rem' }}>
                          Get Quote <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
