'use client'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTA() {
    return (
        <section
            className="cta-section"
            style={{
                position: 'relative',
                padding: '120px 20px',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* Soft Grid Overlay for Texture */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                zIndex: 0,
            }} />

            {/* Premium Glass Container */}
            <div className="container animate-fade-up" style={{
                position: 'relative',
                zIndex: 1,
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                borderRadius: '32px',
                padding: '64px 24px',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,1)',
                maxWidth: '1000px',
                width: '100%',
            }}>

                {/* Pulse Badge */}
                <div style={{ marginBottom: 28, display: 'flex', justifyContent: 'center' }}>
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '100px',
                        padding: '6px 16px',
                        fontSize: '12px',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#475569',
                        fontFamily: "'DM Sans', sans-serif",
                        boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                    }}>
                        <span style={{
                            width: 8, height: 8,
                            background: '#22c55e',
                            borderRadius: '50%',
                            boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.7)',
                            animation: 'pulse-green 2s infinite'
                        }} />
                        No Credit Card Required
                    </span>
                </div>

                {/* Headline */}
                <h2 style={{
                    fontSize: 'clamp(36px, 5vw, 56px)',
                    fontWeight: 800,
                    lineHeight: 1.15,
                    marginBottom: 24,
                    letterSpacing: '-0.02em',
                    color: '#0f172a',
                    fontFamily: "'Syne', sans-serif",
                }}>
                    Smarter Workflows.{' '}
                    <br className="mobile-break" />
                    <span style={{
                        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        Bigger Growth.
                    </span>
                </h2>

                {/* Subtext */}
                <p style={{
                    fontSize: 'clamp(16px, 2vw, 18px)',
                    color: '#475569',
                    maxWidth: 540,
                    margin: '0 auto 48px',
                    lineHeight: 1.7,
                    fontWeight: 500,
                    fontFamily: "'DM Sans', sans-serif",
                }}>
                    Join 200+ labs already running on OnePath. Start your free 1-Months trial today — no setup fees, no commitments.
                </p>

                {/* Interactive Buttons */}
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
                    <Link href="/trial" className="btn-primary cta-btn" style={{
                        padding: '16px 40px',
                        fontSize: '16px',
                        borderRadius: '100px',
                        background: 'var(--blue-primary)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 25px -5px rgba(59, 130, 246, 0.4)',
                    }}>
                        Start Free Trial
                        <ArrowRight size={18} />
                    </Link>

                    <a
                        href="https://api.whatsapp.com/send?phone=9045757272&text=Hello, I'm interested in your Lab software."
                        target="_blank"
                        rel="noreferrer"
                        className="btn-whatsapp"
                        style={{
                            padding: '16px 32px',
                            fontSize: '16px',
                            borderRadius: '100px',
                            background: '#ffffff',
                            color: '#0f172a',
                            border: '1px solid #e2e8f0',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontWeight: 600,
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        <MessageCircle size={20} color="#22c55e" />
                        Chat on WhatsApp
                    </a>
                </div>

                {/* Contact Info (Sleek layout) */}
                <div style={{
                    display: 'flex',
                    gap: 'clamp(20px, 4vw, 48px)',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    paddingTop: '32px',
                    borderTop: '1px solid rgba(15, 23, 42, 0.06)',
                }}>
                    {[
                        { label: 'Sales', value: '+91 9058459848' },
                        { label: 'Support', value: '+91 9045757272' },
                        { label: 'Email', value: 'support@onepathlab.com' },
                    ].map(item => (
                        <div key={item.label} style={{ textAlign: 'center' }}>
                            <div style={{
                                fontSize: 11,
                                color: '#64748b',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 700,
                                marginBottom: 6
                            }}>
                                {item.label}
                            </div>
                            <div style={{
                                fontSize: 15,
                                fontWeight: 700,
                                color: '#0f172a',
                                fontFamily: "'DM Sans', sans-serif"
                            }}>
                                {item.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom Animations & Styles */}
            <style>{`
                /* Soft Premium Color Changing Background */
                .cta-section {
                    background: linear-gradient(-45deg, #e0eaff, #f3e8ff, #e0f2fe, #ffffff);
                    background-size: 300% 300%;
                    animation: gradientMove 12s ease infinite;
                }

                @keyframes gradientMove {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                /* Green Pulse Animation */
                @keyframes pulse-green {
                    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
                    70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
                    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
                }

                /* Button Hover Effects */
                .cta-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 12px 30px -5px rgba(59, 130, 246, 0.5) !important;
                    background: #2563eb !important;
                }

                .btn-whatsapp:hover {
                    transform: translateY(-3px);
                    border-color: #22c55e !important;
                    background: #f0fdf4 !important;
                    box-shadow: 0 10px 20px -5px rgba(34, 197, 94, 0.15) !important;
                }

                /* Responsive Mobile Breaks */
                .mobile-break { display: none; }
                @media (max-width: 600px) {
                    .mobile-break { display: block; }
                }
            `}</style>
        </section>
    )
}