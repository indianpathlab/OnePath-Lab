'use client'
import { Star, Quote } from 'lucide-react'

const testimonials = [
    { name: 'Mr. Chetan Tayal', lab: 'Tayal Pathology', stars: 5, text: 'OnePath has proven to be an exceptional choice for diagnostic labs. The fast service significantly enhances operations, allowing for rapid turnaround times.' },
    { name: 'Mr. Devpal Yadav', lab: 'Meditest', stars: 5, text: 'User-friendly, automates report generation, and even delivers reports via WhatsApp. Their support team is responsive and always ready to help.' },
    { name: 'Dr. Dilip Sanghvi', lab: 'Apex Diagnostics', stars: 5, text: 'Even during Diwali, when most services are unavailable, their team resolved our issue without any delay. Exceptional customer support.' },
    { name: 'Mr. Harneet Singh', lab: 'Diagnocare', stars: 5, text: 'OnePath gives all premium features — machine interfacing, barcode tracking, doctor commission, and multi-branch management — at a very fair price.' },
    { name: 'Dr. Supriya Tiwari', lab: 'Zen Health', stars: 5, text: 'We easily manage 500+ daily samples with bulk registration, bulk report downloads, and corporate logins all in one place. Truly the best.' },
    { name: 'Mr. Edwin Tembo', lab: 'Summit Medical Diagnostics', stars: 5, text: 'Other software just shows high or low values. OnePath AI Smart Reports analyze data intelligently and give personalized suggestions.' },
    { name: 'Dr. Rajesh Sharma', lab: 'City Care Labs', stars: 5, text: 'The shift from our old desktop software to OnePath was seamless. Being cloud-based, I can now review and approve reports from my phone anywhere.' },
    { name: 'Mrs. Anjali Desai', lab: 'Prime Diagnostics', stars: 5, text: 'Inventory management and automated B2B billing have saved us hours of manual work every week. Highly recommend this for growing labs.' },
    { name: 'Mr. Vikram Rathore', lab: 'LifeLine Pathology', stars: 5, text: 'Their bidirectional machine interfacing is flawless. Data goes straight from the cell counter to the report, bringing our manual errors down to zero.' },
    { name: 'Dr. Meena Iyer', lab: 'CureWell Diagnostics', stars: 5, text: 'The report formats are incredibly neat and professional. Many of our referring doctors have specifically complimented the quality of our reports.' },
    { name: 'Mr. Suresh Patil', lab: 'Accurate Tests Lab', stars: 5, text: 'Managing sample collections from multiple collection centers used to be a nightmare. OnePath’s barcode tracking solved it on day one.' },
    { name: 'Dr. Ahmed Khan', lab: 'Wellness Labs', stars: 5, text: 'Affordable, reliable, and continuously updating with new features. It’s exactly the kind of tech partner a modern pathology lab needs today.' },
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
    // Split into two rows for the marquee effect
    const row1 = testimonials.slice(0, 6);
    const row2 = testimonials.slice(6, 12);

    return (
        <section style={{ padding: '96px 0', background: '#f8fafc', overflow: 'hidden' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: 64 }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            background: '#eff6ff',
                            border: '1px solid #bfdbfe',
                            color: 'var(--blue-primary, #3b82f6)',
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
                        Why Labs Love <span style={{ color: 'var(--blue-primary, #3b82f6)' }}>OnePath</span>
                    </h2>

                    <p style={{
                        color: '#64748b',
                        maxWidth: 460,
                        margin: '0 auto',
                        fontSize: 'clamp(15px, 2vw, 17px)',
                        lineHeight: 1.6,
                        fontFamily: "'DM Sans', sans-serif"
                    }}>
                        Over 200+ labs trust us to run their daily operations. Here's what they say.
                    </p>
                </div>
            </div>

            {/* Marquee Section */}
            <div className="marquee-wrapper">
                
                {/* Row 1 - Moves Left */}
                <div className="marquee-row marquee-left">
                    <div className="marquee-track">
                        {/* Render twice for seamless infinite loop */}
                        {[...row1, ...row1].map((t, i) => (
                            <TestimonialCard key={`row1-${i}`} t={t} />
                        ))}
                    </div>
                </div>

                {/* Row 2 - Moves Right */}
                <div className="marquee-row marquee-right">
                    <div className="marquee-track">
                        {/* Render twice for seamless infinite loop */}
                        {[...row2, ...row2].map((t, i) => (
                            <TestimonialCard key={`row2-${i}`} t={t} />
                        ))}
                    </div>
                </div>

            </div>

            <style>{`
                .marquee-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                    width: 100vw;
                    margin-left: calc(-50vw + 50%); /* Full bleed trick */
                    padding: 20px 0;
                }

                .marquee-row {
                    display: flex;
                    overflow: hidden;
                    width: 100%;
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }

                .marquee-track {
                    display: flex;
                    gap: 32px;
                    width: max-content;
                }

                .marquee-left .marquee-track {
                    animation: scroll-left 40s linear infinite;
                }

                .marquee-right .marquee-track {
                    animation: scroll-right 40s linear infinite;
                }

                /* Pause animation on hover */
                .marquee-row:hover .marquee-track {
                    animation-play-state: paused;
                }

                @keyframes scroll-left {
                    from { transform: translateX(0); }
                    to { transform: translateX(calc(-50% - 16px)); } /* -16px to account for gap */
                }

                @keyframes scroll-right {
                    from { transform: translateX(calc(-50% - 16px)); }
                    to { transform: translateX(0); }
                }

                .testimonial-card {
                    width: 400px; /* Fixed width for smooth marquee */
                    padding: 32px;
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    position: relative;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    flex-shrink: 0;
                }

                .testimonial-card:hover {
                    transform: translateY(-4px);
                    border-color: #cbd5e1;
                    box-shadow: 0 12px 30px -10px rgba(0,0,0,0.08);
                }
                
                /* Mobile responsiveness */
                @media (max-width: 768px) {
                    .testimonial-card { width: 320px; padding: 24px; }
                }
            `}</style>
        </section>
    )
}

// Extracted Card Component for cleaner code
function TestimonialCard({ t }: { t: any }) {
    return (
        <div className="testimonial-card">
            {/* Decorative Quote Icon */}
            <div style={{
                position: 'absolute',
                top: 24, right: 24,
                color: '#f1f5f9',
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
                fontSize: '15px',
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
                <div style={{
                    width: 44, height: 44,
                    borderRadius: '50%',
                    background: '#eff6ff',
                    border: '1px solid #bfdbfe',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 15,
                    fontWeight: 700,
                    color: 'var(--blue-primary, #3b82f6)',
                    fontFamily: "'Syne', sans-serif",
                    flexShrink: 0,
                }}>
                    {t.name.split(' ')[1]?.charAt(0) || t.name.charAt(0)}
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
    )
}