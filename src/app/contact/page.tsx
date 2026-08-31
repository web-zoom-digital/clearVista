'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Check } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Toll Free', value: '1800-XXX-XXXX', href: 'tel:+911800XXXXXX', desc: 'Mon–Fri 9am–6pm, Sat 10am–4pm' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+91 98XXX XXXXX', href: 'https://wa.me/9198XXXXXXXX', desc: 'Chat with us anytime' },
  { icon: Mail, label: 'Email', value: 'info@clearvista.in', href: 'mailto:info@clearvista.in', desc: 'We reply within 24 hours' },
  { icon: MapPin, label: 'Head Office', value: 'New Delhi, India', href: '#map', desc: 'Pan India presence in 150+ cities' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '', product: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{
          background: 'linear-gradient(135deg, #0A0F1E 0%, #0D1526 100%)',
          padding: '160px 0 80px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 70% 50%, rgba(0,159,227,0.12) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 32 }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.85rem' }}>Home</Link>
              <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
              <span style={{ color: '#45BBFF', fontSize: '0.85rem', fontWeight: 500 }}>Contact</span>
            </div>
            <div className="section-label" style={{ color: '#45BBFF' }}>
              <span style={{ width: 32, height: 2, background: '#45BBFF', borderRadius: 2, display: 'block' }} />
              Get In Touch
            </div>
            <h1 className="text-h1" style={{ color: 'white', marginTop: 16, marginBottom: 16 }}>
              Let&apos;s Discuss Your<br />
              <span style={{ color: '#45BBFF' }}>Project Today</span>
            </h1>
            <p className="text-h4" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500, fontWeight: 400 }}>
              Our experts are ready to help you find the perfect uPVC solution for your home or project.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section style={{ padding: '60px 0', background: 'white' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginTop: -60, position: 'relative', zIndex: 10 }}>
              {contactInfo.map(({ icon: Icon, label, value, href, desc }) => (
                <a key={label} href={href} style={{
                  display: 'block', padding: '28px 24px', background: 'white', borderRadius: 16,
                  boxShadow: '0 10px 40px rgba(0,0,0,0.10)', border: '1px solid #E2E8F0',
                  textDecoration: 'none', transition: 'all 0.3s ease',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,87,184,0.12)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.10)'; }}
                >
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon size={22} color="#0057B8" strokeWidth={1.8} />
                  </div>
                  <p style={{ color: '#94A3B8', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{label}</p>
                  <p style={{ color: '#0F172A', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.95rem', marginBottom: 4 }}>{value}</p>
                  <p style={{ color: '#94A3B8', fontSize: '0.78rem' }}>{desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Map */}
        <section style={{ padding: '80px 0', background: 'var(--color-gray-50)' }} id="quote">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
              {/* Form */}
              <div>
                <div className="section-label">Request a Quote</div>
                <h2 className="text-h2" style={{ marginTop: 12, marginBottom: 32 }}>
                  Get a <span className="title-gradient">Free Quote</span>
                </h2>

                {submitted ? (
                  <div style={{ padding: '48px', background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 16, textAlign: 'center' }}>
                    <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                      <Check size={32} color="white" strokeWidth={2.5} />
                    </div>
                    <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: '#166534', marginBottom: 12 }}>
                      Thank You! We&apos;ll be in touch soon.
                    </h3>
                    <p style={{ color: '#16A34A', fontSize: '0.95rem' }}>
                      Our team will contact you within 24 hours with a customized quote for your requirements.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                      {[
                        { id: 'name', label: 'Full Name *', type: 'text', required: true },
                        { id: 'phone', label: 'Phone Number *', type: 'tel', required: true },
                        { id: 'email', label: 'Email Address', type: 'email', required: false },
                        { id: 'city', label: 'City', type: 'text', required: false },
                      ].map((field) => (
                        <div key={field.id} className="form-group">
                          <input
                            id={`contact-${field.id}`}
                            type={field.type}
                            required={field.required}
                            placeholder=" "
                            className="form-input"
                            value={form[field.id as keyof typeof form]}
                            onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                          />
                          <label htmlFor={`contact-${field.id}`} className="form-label">{field.label}</label>
                        </div>
                      ))}
                    </div>

                    <div className="form-group">
                      <select
                        id="contact-product"
                        className="form-input"
                        value={form.product}
                        onChange={(e) => setForm({ ...form, product: e.target.value })}
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="">Select Product Interest</option>
                        <option value="sliding-windows">Sliding Windows</option>
                        <option value="casement-windows">Casement Windows</option>
                        <option value="sliding-doors">Sliding Doors</option>
                        <option value="swing-doors">Swing Doors</option>
                        <option value="french-doors">French Doors</option>
                        <option value="other">Other / Multiple Products</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <textarea
                        id="contact-message"
                        className="form-input"
                        placeholder=" "
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        style={{ resize: 'vertical', minHeight: 120 }}
                      />
                      <label htmlFor="contact-message" className="form-label">Tell us about your requirements</label>
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={loading}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: '1rem', padding: '16px 32px' }}>
                      {loading ? (
                        <>
                          <div style={{ width: 18, height: 18, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                          Sending...
                        </>
                      ) : (
                        <><Send size={18} /> Send Message</>
                      )}
                    </button>
                    <p style={{ fontSize: '0.8rem', color: '#94A3B8', textAlign: 'center' }}>
                      * We respect your privacy. Your information is secure with us.
                    </p>
                  </form>
                )}
              </div>

              {/* Info + Map */}
              <div>
                <div className="section-label">Visit Us</div>
                <h2 className="text-h2" style={{ marginTop: 12, marginBottom: 32 }}>
                  Our <span className="title-gradient">Offices</span>
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
                  {[
                    { city: 'New Delhi (Head Office)', address: 'Plot No. XX, Industrial Area, New Delhi – 110001', phone: '+91 11-XXXX-XXXX' },
                    { city: 'Mumbai', address: 'Unit XX, Business Park, Andheri East, Mumbai – 400069', phone: '+91 22-XXXX-XXXX' },
                    { city: 'Bangalore', address: 'No. XX, Electronics City, Bangalore – 560100', phone: '+91 80-XXXX-XXXX' },
                  ].map((office) => (
                    <div key={office.city} style={{
                      padding: '20px 24px', background: 'white', borderRadius: 12,
                      border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                        <MapPin size={18} color="#0057B8" style={{ marginTop: 2, flexShrink: 0 }} />
                        <div>
                          <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#0F172A', marginBottom: 4 }}>{office.city}</p>
                          <p style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: 4 }}>{office.address}</p>
                          <a href={`tel:${office.phone}`} style={{ color: '#0057B8', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>{office.phone}</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Business Hours */}
                <div style={{ padding: '24px', background: '#F0F7FF', borderRadius: 12, border: '1px solid #DBEAFE' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                    <Clock size={18} color="#0057B8" />
                    <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: '#0057B8' }}>Business Hours</p>
                  </div>
                  {[
                    { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM' },
                    { day: 'Saturday', time: '10:00 AM – 4:00 PM' },
                    { day: 'Sunday', time: 'Closed' },
                  ].map((h) => (
                    <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #DBEAFE' }}>
                      <span style={{ fontSize: '0.88rem', color: '#475569' }}>{h.day}</span>
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#0F172A' }}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map Embed */}
        <div id="map" style={{ height: 400, background: '#E2E8F0', position: 'relative', overflow: 'hidden' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510164286!2d76.76357260000001!3d28.6439671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ClearVista Office Location"
          />
        </div>
      </main>
      <Footer />

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-info-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .contact-info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
