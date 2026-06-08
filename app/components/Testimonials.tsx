'use client'
import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        name: 'Mr. Chetan Tayal',
        lab: 'Tayal Pathology',
        stars: 5,
        text: 'OnePath has proven to be an exceptional choice for diagnostic labs. The fast service significantly enhances operations, allowing for rapid turnaround times that are crucial in the medical field.',
    },
    {
        name: 'Mr. Devpal Yadav',
        lab: 'Meditest',
        stars: 5,
        text: 'User-friendly, automates report generation, and even delivers reports via WhatsApp. Their support team is responsive and always ready to help.',
    },
    {
        name: 'Dr. Dilip Sanghvi',
        lab: 'Apex Diagnostics',
        stars: 5,
        text: 'Even during Diwali, when most services are unavailable, their team resolved our issue without any delay. Exceptional customer support.',
    },
    {
        name: 'Mr. Harneet Singh',
        lab: 'Diagnocare',
        stars: 5,
        text: 'OnePath gives all premium features — machine interfacing, barcode tracking, doctor commission, and multi-branch management — at a very fair price.',
    },
    {
        name: 'Dr. Supriya Tiwari',
        lab: 'Zen Health',
        stars: 5,
        text: 'We easily manage 500+ daily samples with bulk registration, bulk report downloads, and corporate logins all in one place. Truly the best for high-volume labs.',
    },
    {
        name: 'Mr. Edwin Tembo',
        lab: 'Summit Medical Diagnostics',
        stars: 5,
        text: 'Other software just shows high or low values. OnePath AI Smart Reports analyze data intelligently and give personalized suggestions. Next-generation lab reporting.',
    },
]

function StarRating({ count }: { count: number }) {
    return (
        <div style={{ display: 'flex', gap: 4 }}>
            {Array.from({ length: count }).map((_, i) => (
                <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
            ))}
        </div>
    )
}

export default function Testimonials() {
    return (
        <section style={{ padding: '96px 20px', background: '#f8fafc' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>

                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: 64 }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            background: '#eff6ff',
                            border: '1px solid #bfdbfe',
                            color: 'var(--blue-primary)',
                            padding: '6px 16px',
                            borderRadius: '100px',
                            fontSize: '13px',
                            fontWeight: '700',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            fontFamily: "'DM Sans', sans-serif",
                        }}>
                            Testimonials
                        </span>
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(28px, 4vw, 42px)',
                        fontWeight: 800,
                        marginBottom: 16,
                        color: '#0f172a',
                        fontFamily: "'Syne', sans-serif",
                        letterSpacing: '-0.02em'
                    }}>
                        Why Labs Love <span style={{ color: 'var(--blue-primary)' }}>OnePath</span>
                    </h2>

                    <p style={{
                        color: '#64748b',
                        maxWidth: 460,
                        margin: '0 auto',
                        fontSize: 'clamp(15px, 2vw, 17px)',
                        lineHeight: 1.6,
                        fontFamily: "'DM Sans', sans-serif"
                    }}>
                        Over 2000 labs trust us to run their daily operations. Here's what they say.
                    </p>
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: 24,
                }}>
                    {testimonials.map((t, i) => (
                        <div
                            key={t.name}
                            className="testimonial-card"
                            style={{
                                padding: '32px',
                                background: '#ffffff',
                                border: '1px solid #e2e8f0',
                                borderRadius: '24px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 20,
                                position: 'relative',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                            }}
                        >
                            {/* Decorative Quote Icon */}
                            <div style={{
                                position: 'absolute',
                                top: 24, right: 24,
                                color: '#f1f5f9', // Very subtle light slate color
                                zIndex: 0,
                            }}>
                                <Quote size={48} />
                            </div>

                            {/* Content */}
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <StarRating count={t.stars} />
                            </div>

                            <p style={{
                                color: '#475569',
                                fontSize: 'clamp(14.5px, 1.5vw, 15px)',
                                lineHeight: 1.7,
                                fontFamily: "'DM Sans', sans-serif",
                                flex: 1,
                                position: 'relative',
                                zIndex: 1,
                            }}>
                                "{t.text}"
                            </p>

                            {/* Bottom Author Section */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 14,
                                paddingTop: 20,
                                borderTop: '1px solid #f1f5f9',
                                position: 'relative',
                                zIndex: 1,
                            }}>
                                {/* Modern Soft Avatar */}
                                <div style={{
                                    width: 44, height: 44,
                                    borderRadius: '50%',
                                    background: '#eff6ff', // Light blue background
                                    border: '1px solid #bfdbfe',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 15,
                                    fontWeight: 700,
                                    color: 'var(--blue-primary)',
                                    fontFamily: "'Syne', sans-serif",
                                    flexShrink: 0,
                                }}>
                                    {/* Get first letter of the first name after Title (Mr./Dr.) */}
                                    {t.name.split(' ')[1]?.charAt(0)}
                                </div>

                                <div>
                                    <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', fontFamily: "'DM Sans', sans-serif", marginBottom: 2 }}>
                                        {t.name}
                                    </div>
                                    <div style={{ fontSize: 13, color: '#64748b', fontFamily: "'DM Sans', sans-serif" }}>
                                        {t.lab}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .testimonial-card:hover {
                    transform: translateY(-4px);
                    border-color: #cbd5e1 !important;
                    box-shadow: 0 12px 30px -10px rgba(0,0,0,0.08);
                }
            `}</style>
        </section>
    )
}