'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'

const footerLinks = {
    Company: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms & Conditions', href: '/terms' },
    ],
}

const LinkedinSVG = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
)

const InstagramSVG = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
)

const XSVG = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.736l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
)

const socialLinks = [
    { icon: <LinkedinSVG />, href: 'https://www.linkedin.com/company/onepath-lab' },
    { icon: <InstagramSVG />, href: 'https://www.instagram.com/onepath.official/' },
    { icon: <XSVG />, href: 'https://x.com/OnePathLab' },
]

export default function Footer() {
    return (
        <footer style={{
            background: '#ffffff',
            borderTop: '1px solid #e2e8f0', 
        }}>
            <div className="container" style={{ padding: '80px 24px 48px', maxWidth: '1200px' }}>
                <div className="footer-grid">

                    <div className="footer-brand">
                        <Link href="/" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            textDecoration: 'none',
                            marginBottom: 24,
                            width: 'fit-content'
                        }}>
                            <Image
                                src="/logo.png"
                                alt="OnePath Lab Logo"
                                width={36}
                                height={36}
                                style={{ objectFit: 'contain' }}
                            />
                            <span style={{
                                fontSize: 24,
                                fontWeight: 800,
                                fontFamily: "'Syne', sans-serif",
                                color: '#0f172a',
                                letterSpacing: '-0.03em',
                            }}>
                                OnePath Lab
                            </span>
                        </Link>

                        <p style={{
                            fontSize: 15,
                            color: '#64748b',
                            lineHeight: 1.7,
                            marginBottom: 32,
                            fontFamily: "'DM Sans', sans-serif",
                            maxWidth: 320,
                        }}>
                            AI-powered pathology lab management software trusted by 2000+ labs across India. Automate. Grow. Scale.
                        </p>

                        {/* Social icons */}
                        <div style={{ display: 'flex', gap: 12 }}>
                            {socialLinks.map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        width: 40, height: 40,
                                        borderRadius: 10,
                                        background: '#f1f5f9',
                                        border: '1px solid #e2e8f0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#64748b',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s',
                                    }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLAnchorElement
                                        el.style.background = 'var(--blue-primary)'
                                        el.style.color = '#ffffff'
                                        el.style.borderColor = 'var(--blue-primary)'
                                        el.style.transform = 'translateY(-2px)'
                                        el.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)'
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLAnchorElement
                                        el.style.background = '#f1f5f9'
                                        el.style.color = '#64748b'
                                        el.style.borderColor = '#e2e8f0'
                                        el.style.transform = 'translateY(0)'
                                        el.style.boxShadow = 'none'
                                    }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info Column (Middle) */}
                    <div className="footer-contact">
                        <h4 style={{
                            fontSize: 14,
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: '#0f172a',
                            marginBottom: 24,
                            fontFamily: "'Syne', sans-serif",
                        }}>
                            Contact Us
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            {[
                                { icon: <Phone size={16} />, text: 'Sales: +91 92173 27134' },
                                { icon: <Phone size={16} />, text: 'Support: +91 72539 28905' },
                                { icon: <Mail size={16} />, text: 'hello@onepath.in' },
                            ].map((c, i) => (
                                <div key={i} style={{
                                    display: 'flex', gap: 12, alignItems: 'center',
                                    fontSize: 15, color: '#475569',
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 500,
                                }}>
                                    <span style={{ color: 'var(--blue-primary)' }}>{c.icon}</span>
                                    {c.text}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Company Links Column (Right) */}
                    {Object.entries(footerLinks).map(([heading, links]) => (
                        <div key={heading} className="footer-links">
                            <h4 style={{
                                fontSize: 14,
                                fontWeight: 700,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                color: '#0f172a',
                                marginBottom: 24,
                                fontFamily: "'Syne', sans-serif",
                            }}>
                                {heading}
                            </h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14, padding: 0 }}>
                                {links.map(link => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            style={{
                                                fontSize: 15,
                                                fontWeight: 500,
                                                color: '#64748b',
                                                textDecoration: 'none',
                                                fontFamily: "'DM Sans', sans-serif",
                                                transition: 'color 0.2s',
                                            }}
                                            onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue-primary)')}
                                            onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom bar */}
            <div style={{
                borderTop: '1px solid #f1f5f9',
                padding: '24px 24px',
                background: '#fafafa' 
            }}>
                <div className="container" style={{
                    maxWidth: '1200px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 16,
                    padding: 0,
                }}>
                    <p style={{
                        fontSize: 14,
                        color: '#64748b',
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 500,
                    }}>
                        © {new Date().getFullYear()} OnePath Lab · All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                        <span style={{ fontSize: 13, color: '#94a3b8', fontFamily: "'DM Sans', sans-serif" }}>
                            Product by
                        </span>
                        <span style={{
                            fontSize: 13,
                            fontWeight: 700,
                            color: '#0f172a',
                            fontFamily: "'Syne', sans-serif",
                            letterSpacing: '0.02em',
                        }}>
                            CoCode Studio Pvt Ltd.
                        </span>
                    </div>
                </div>
            </div>

            <style>{`
                /* Desktop Layout: 3 Columns (Brand, Contact, Links) */
                .footer-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr;
                    gap: 48px;
                }

                /* Tablet Layout */
                @media (max-width: 900px) {
                    .footer-grid {
                        grid-template-columns: 1fr 1fr;
                        row-gap: 48px;
                    }
                    .footer-brand {
                        grid-column: span 2; /* Brand takes full width on top */
                    }
                }

                /* Mobile Layout */
                @media (max-width: 600px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                    .footer-brand {
                        grid-column: span 1;
                    }
                }
            `}</style>
        </footer>
    )
}