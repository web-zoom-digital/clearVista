import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import WhoAreYou from '@/components/WhoAreYou';
import ProductSlider from '@/components/ProductSlider';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProjectsGallery from '@/components/ProjectsGallery';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ClearVista | Premium uPVC Windows & Doors in India',
  description:
    "ClearVista is India's trusted manufacturer of premium uPVC windows and doors. Energy-efficient, soundproof, and stylish. Get a free quote today!",
  alternates: { canonical: 'https://www.clearvista.in' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are uPVC windows and doors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'uPVC (Unplasticized Polyvinyl Chloride) windows and doors are made from a rigid, durable plastic material. They are energy-efficient, weather-resistant, soundproof, and require minimal maintenance compared to wooden or aluminium frames.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do uPVC windows last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ClearVista uPVC windows and doors are designed to last 40+ years with minimal maintenance. They do not warp, rot, corrode, or fade, making them an excellent long-term investment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do uPVC windows reduce noise?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! ClearVista double-glazed uPVC windows can reduce outside noise by up to 45dB, providing excellent soundproofing for homes near busy roads, airports, or commercial areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are uPVC windows energy efficient?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Our uPVC windows use multi-chamber profiles with thermal breaks and double or triple glazing to minimize heat transfer. This can reduce your air conditioning costs by up to 30%.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide installation services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, ClearVista provides complete installation services across 150+ cities in India. Our trained installation teams ensure proper fitting and sealing for optimal performance.',
      },
    },
  ],
};

const brands = [
  { name: 'Indian Green Building Council', logo: '🏢' },
  { name: 'BIS Certified', logo: '✅' },
  { name: 'ISO 9001:2015', logo: '🏅' },
  { name: 'Energy Star', logo: '⚡' },
  { name: 'GRIHA', logo: '🌱' },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />
      <main>
        {/* 1. Hero Slider */}
        <HeroSlider />

        {/* 2. Who Are You Section */}
        <WhoAreYou />

        {/* 3. Product Panorama Slider */}
        <ProductSlider />

        {/* 4. Why Choose Us (Stats + Features) */}
        <WhyChooseUs />

        {/* 5. Projects Gallery */}
        <ProjectsGallery limit={5} />

        {/* 6. Certifications / Trust Bar */}
        <section style={{ padding: '40px 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 60, flexWrap: 'wrap' }}>
              <p style={{ color: '#94A3B8', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0 }}>
                Certifications & Standards
              </p>
              {brands.map((b) => (
                <div key={b.name} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#64748B' }}>
                  <span style={{ fontSize: '1.5rem' }}>{b.logo}</span>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.85rem' }}>{b.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Testimonials */}
        <Testimonials />

        {/* 8. FAQ Section (AEO) */}
        <section style={{ padding: '100px 0', background: 'var(--color-gray-50)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>Common Questions</div>
              <h2 className="text-h2" style={{ marginTop: 12 }}>
                Frequently Asked{' '}
                <span className="title-gradient">Questions</span>
              </h2>
            </div>

            <div style={{ maxWidth: 840, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {faqSchema.mainEntity.map((faq, i) => (
                <details key={i} style={{
                  background: 'white', borderRadius: 12, border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}>
                  <summary style={{
                    padding: '20px 24px', cursor: 'pointer',
                    fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '1rem',
                    color: '#0F172A', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    userSelect: 'none',
                  }}>
                    {faq.name}
                    <span style={{ color: '#0057B8', fontSize: '1.4rem', lineHeight: 1 }}>+</span>
                  </summary>
                  <div style={{ padding: '0 24px 20px', color: '#64748B', lineHeight: 1.75, fontSize: '0.95rem' }}>
                    {faq.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Final CTA */}
        <section style={{
          padding: '100px 0', position: 'relative', overflow: 'hidden',
          background: 'linear-gradient(135deg, #0057B8 0%, #003D82 50%, #0057B8 100%)',
        }}>
          {/* BG pattern */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,159,227,0.15) 0%, transparent 50%)',
            pointerEvents: 'none',
          }} />
          <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)', justifyContent: 'center', marginBottom: 16 }}>
              Take the First Step
            </div>
            <h2 style={{
              color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: 20, lineHeight: 1.1,
            }}>
              Transform Your Home with<br />
              <span style={{ color: '#45BBFF' }}>Premium uPVC Windows & Doors</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', marginBottom: 48, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
              Get a free consultation, measurement, and quote from our expert team. No obligation, no pressure.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button className="btn btn-white" style={{ fontSize: '1.05rem', padding: '16px 36px', display: 'flex', alignItems: 'center', gap: 8 }}>
                  Get Free Quote <ArrowRight size={18} />
                </button>
              </Link>
              <a href="tel:+919871770357" style={{ textDecoration: 'none' }}>
                <button className="btn" style={{
                  fontSize: '1.05rem', padding: '16px 36px',
                  background: 'rgba(255,255,255,0.12)', color: 'white',
                  border: '1.5px solid rgba(255,255,255,0.35)',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <Phone size={18} /> Call Us Now
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
