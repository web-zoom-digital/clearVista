import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectsGallery from '@/components/ProjectsGallery';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects & Stories | ClearVista Window & Door Installations',
  description:
    'Explore ClearVista\'s portfolio of completed uPVC window and door installation projects across India — residential homes, commercial offices, and luxury hotels.',
  alternates: { canonical: 'https://www.clearvista.in/projects' },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{
          background: 'linear-gradient(135deg, #0A0A0A 0%, #111111 100%)',
          padding: '160px 0 80px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 60% 50%, rgba(212, 175, 55,0.1) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 32 }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.85rem' }}>Home</Link>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
              <span style={{ color: '#F0D16E', fontSize: '0.85rem', fontWeight: 500 }}>Projects</span>
            </div>
            <div className="section-label" style={{ color: '#F0D16E' }}>
              <span style={{ width: 32, height: 2, background: '#F0D16E', borderRadius: 2, display: 'block' }} />
              Our Portfolio
            </div>
            <h1 className="text-h1" style={{ color: 'white', marginTop: 16, marginBottom: 16 }}>
              Projects &{' '}
              <span style={{ color: '#F0D16E' }}>Stories</span>
            </h1>
            <p className="text-h4" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 560, fontWeight: 400 }}>
              Thousands of homes, offices, and hotels transformed across India. Here&apos;s a glimpse of our finest work.
            </p>
          </div>
        </section>

        {/* Gallery (all projects, no limit) */}
        <ProjectsGallery />

        {/* CTA */}
        <section style={{ padding: '80px 0', background: 'var(--color-primary)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: 16 }}>
              Want Your Project Featured Here?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 36 }}>
              Get a free consultation from our experts and join thousands of satisfied ClearVista customers.
            </p>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button className="btn btn-white" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Start Your Project <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
