'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Mail, Phone, MapPin, MessageCircle, Clock, CheckCircle, ArrowRight, Send } from 'lucide-react'

const contactCards = [
    {
        icon: <Phone size={22} />, title: 'Sales Enquiry', sub: 'Talk to our sales team', color: '#2563eb', bg: '#eff6ff',
        lines: ['+91 92173 27134', '+91 72539 28905'],
        note: 'Mon–Sat, 9 AM to 8 PM IST',
    },
    {
        icon: <Mail size={22} />, title: 'Email Us', sub: 'We reply within 2 hours', color: '#7c3aed', bg: '#f5f3ff',
        lines: ['hello@onepath.in', 'support@onepath.in'],
        note: 'For billing queries: billing@onepath.in',
    },
    {
        icon: <MapPin size={22} />, title: 'Visit Us', sub: 'Head office', color: '#059669', bg: '#ecfdf5',
        lines: ['Plot 12, Sector 20A', 'Faridabad, Haryana 121001'],
        note: 'By appointment only',
    },
    {
        icon: <Clock size={22} />, title: 'Support Hours', sub: 'Technical support', color: '#d97706', bg: '#fffbeb',
        lines: ['Mon–Sat: 9 AM – 10 PM', 'Sunday: 10 AM – 6 PM'],
        note: 'Emergency line: 24×7',
    },
]

const faqs = [
    {
        q: 'How long does onboarding take?',
        a: 'Most labs go live within 24–48 hours. Here\'s exactly what happens: Day 1 — our onboarding specialist calls you, understands your lab\'s workflow, and sets up your account with your complete test master list, report templates, and your branding (logo, letterhead, color scheme). Day 2 — your staff gets a live training session (1–2 hours) covering patient registration, report generation, billing, and WhatsApp delivery. We also configure machine interfacing on the same call. For larger multi-branch labs with 3+ centers, onboarding typically takes 3–5 business days to cover all locations properly.',
    },
    {
        q: 'Can I migrate data from my old software?',
        a: 'Yes — and it\'s completely free. We support data migration from all major LIS platforms including Meditech, Lifelab, Creliohealth, SoftClinic, MocDoc, Pathofinder, and even custom Excel or Access-based systems. Our team extracts your existing patient history, test masters, reference ranges, doctor list, and billing records, then imports them into OnePath in the background without disrupting your daily operations. We\'ve successfully migrated 800+ labs to date with zero data loss. Just share your data export file and we handle the rest — no technical knowledge needed from your side.',
    },
    {
        q: 'Do you offer machine interfacing support?',
        a: 'We support 80+ analyzer brands with both unidirectional and bidirectional interfacing. This includes Sysmex (XN, XP series), Mindray (BC, BS series), Siemens (Atellica, Dimension), Roche (Cobas series), Abbott (Architect, Alinity), Beckman Coulter, DiaSys, Erba, Transasia, and many more. Unidirectional means results automatically flow from machine → software. Bidirectional additionally sends test orders from software → machine, eliminating all manual result entry. Our interfacing team handles the complete HL7/ASTM protocol setup at no extra charge. Average time to configure one analyzer: 2–4 hours.',
    },
    {
        q: 'What happens after my trial ends?',
        a: 'Your account moves to read-only mode — you can view all existing reports and data, but cannot register new patients until you subscribe. Your data is safely stored and never deleted during this period. You have a full 30-day grace period to choose a plan and reactivate with zero disruption. During this period you can export all your data (CSV + PDF) from Settings > Data Export anytime. We send reminder emails at Day 3, Day 7, and Day 25 so you\'re never caught off-guard. No credit card is charged automatically — we never do surprise billing.',
    },
    {
        q: 'Is there a setup or installation fee?',
        a: 'Absolutely zero. No setup fees, no installation charges, no onboarding fees, no hidden costs of any kind. What you see on the pricing page is exactly what you pay — just the monthly or annual subscription. This includes: full account setup, test master configuration, report template design with your branding, machine interfacing setup, WhatsApp and SMS integration, staff training for up to 5 users, and ongoing customer support. We believe in 100% transparent pricing — because surprise charges are how outdated software companies make money, and we\'re building something better.',
    },
    {
        q: 'Is my patient data safe? Where is it stored?',
        a: 'Your patient data is stored on AWS Mumbai (ap-south-1) servers — meaning your data never leaves Indian soil. All data in transit is encrypted with TLS 1.3, and all data at rest is encrypted using AES-256 (the same standard used by major Indian banks). We run automated backups every 4 hours with 30-day retention. Access is strictly role-based — your receptionist only sees registration data, not billing or finance reports. We are aligned with India\'s Digital Personal Data Protection (DPDP) Act 2023 and operate on ISO 27001-certified infrastructure. We never sell, rent, or share your patient data with any third party.',
    },
    {
        q: 'Can I use OnePath on mobile and tablets?',
        a: 'Yes. OnePath Lab is a fully responsive Progressive Web App (PWA) that works on any modern browser — desktop, laptop, Android, or iPhone — with no installation required. We also have a dedicated Android and iOS app for lab staff supporting barcode scanning, sample tracking, and report sharing. Doctors get their own portal where they can review and approve reports directly from their phone. Patients receive a secure WhatsApp link to view and download their report — no app install needed. Everything is designed to work smoothly even on slower 4G connections common in smaller towns.',
    },
    {
        q: 'Do you support multi-branch or chain labs?',
        a: 'Yes — our multi-branch plan is built specifically for diagnostic chains. You get one central admin dashboard with combined analytics across all centers. Each branch has its own login, sample queue, report numbering series, and billing. You can transfer samples between centers, share a common test master, and generate consolidated MIS reports for the entire chain in one click. Branch-level access control ensures a receptionist at Branch A cannot access Branch B data. We currently support chains with up to 50+ branches on a single account. Speak to our sales team for enterprise pricing on large chains.',
    },
]

export default function ContactSupport() {
    const [formData, setFormData] = useState({ lab: '', name: '', phone: '', email: '', city: '', message: '', type: 'Demo Request' })
    const [submitted, setSubmitted] = useState(false)
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const handleSubmit = () => {
        if (formData.lab && formData.phone) setSubmitted(true)
    }

    return (
        <main style={{ background: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            {/* ── Hero ── */}
            <section style={{
                padding: '160px 20px 80px',
                background: 'linear-gradient(160deg,#ffffff 0%,#eff6ff 60%,#e0eaff 100%)',
                textAlign: 'center', position: 'relative', overflow: 'hidden',
            }}>
                <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(219,234,254,0.5) 0%,transparent 70%)', top: -100, right: -100, pointerEvents: 'none' }} />
                <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 100, padding: '6px 18px', fontSize: 13, fontWeight: 600, color: '#2563eb', fontFamily: "'DM Sans',sans-serif", marginBottom: 28, boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                        We respond within 2 hours
                    </div>
                    <h1 style={{ fontSize: 'clamp(40px,6vw,62px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Syne',sans-serif", marginBottom: 20, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                        Let's Talk About<br /><span style={{ color: '#2563eb' }}>Your Lab's Growth</span>
                    </h1>
                    <p style={{ fontSize: 'clamp(16px,2vw,18px)', color: '#475569', lineHeight: 1.75, fontFamily: "'DM Sans',sans-serif" }}>
                        Whether you want a live demo, need migration help, or have a billing question — our team is here. No chatbots, no ticket queues. Real humans, real answers.
                    </p>
                </div>
            </section>

            {/* ── Contact Cards ── */}
            <section style={{ padding: '0 20px', marginTop: '-32px', position: 'relative', zIndex: 10 }}>
                <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 16 }}>
                    {contactCards.map((c, i) => (
                        <div key={i} style={{ background: '#ffffff', borderRadius: 20, padding: '28px 24px', border: '1px solid #e2e8f0', boxShadow: '0 8px 32px -8px rgba(0,0,0,0.09)', display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 4 }}>
                                <div style={{ width: 46, height: 46, borderRadius: 13, background: c.bg, color: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{c.icon}</div>
                                <div>
                                    <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', fontFamily: "'Syne',sans-serif" }}>{c.title}</div>
                                    <div style={{ fontSize: 12, color: '#94a3b8', fontFamily: "'DM Sans',sans-serif" }}>{c.sub}</div>
                                </div>
                            </div>
                            {c.lines.map((l, j) => (
                                <div key={j} style={{ fontSize: 14.5, fontWeight: 600, color: '#1e293b', fontFamily: "'DM Sans',sans-serif" }}>{l}</div>
                            ))}
                            <div style={{ fontSize: 12, color: '#94a3b8', fontFamily: "'DM Sans',sans-serif", marginTop: 4 }}>{c.note}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Form + WhatsApp ── */}
            <section style={{ padding: '80px 20px 96px' }}>
                <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 48, alignItems: 'start' }} className="contact-grid">

                    {/* Left */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                        <div>
                            <h2 style={{ fontSize: 30, fontWeight: 800, color: '#0f172a', fontFamily: "'Syne',sans-serif", marginBottom: 12, letterSpacing: '-0.02em' }}>
                                Prefer a Quick Chat?
                            </h2>
                            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.75, fontFamily: "'DM Sans',sans-serif" }}>
                                Our team is active on WhatsApp from 9 AM to 10 PM. Send a message and get a response within minutes.
                            </p>
                        </div>

                        <a href="https://wa.me/919266837566?text=Hi%2C%20I%20want%20to%20know%20more%20about%20OnePath%20Lab%20software" target="_blank" rel="noreferrer"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, background: '#22c55e', color: '#ffffff', textDecoration: 'none', fontWeight: 700, fontSize: 16, padding: '18px 24px', borderRadius: 16, fontFamily: "'DM Sans',sans-serif", boxShadow: '0 8px 28px rgba(34,197,94,0.35)', transition: 'all 0.2s' }}>
                            <MessageCircle size={22} />
                            Chat on WhatsApp Now
                        </a>

                        {/* Trust points */}
                        <div style={{ background: '#f8fafc', borderRadius: 16, padding: '24px' }}>
                            <div style={{ fontSize: 13, fontWeight: 700, color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'DM Sans',sans-serif", marginBottom: 16 }}>Why labs choose us</div>
                            {[
                                'Free onboarding & migration support',
                                'Dedicated account manager for 3 months',
                                'No long-term contract — cancel anytime',
                                'Response SLA: under 2 hours on weekdays',
                                'Training for your entire team — included',
                            ].map((pt, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#334155', fontFamily: "'DM Sans',sans-serif", fontWeight: 500, marginBottom: 12 }}>
                                    <CheckCircle size={15} color="#22c55e" style={{ flexShrink: 0 }} />
                                    {pt}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div style={{ background: '#ffffff', borderRadius: 24, padding: '40px', border: '1px solid #e2e8f0', boxShadow: '0 20px 60px -15px rgba(0,0,0,0.08)' }}>
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                                <div style={{ width: 72, height: 72, background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                                    <CheckCircle size={36} color="#16a34a" />
                                </div>
                                <h3 style={{ fontSize: 24, fontWeight: 800, color: '#0f172a', fontFamily: "'Syne',sans-serif", marginBottom: 12 }}>Request Received!</h3>
                                <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.7, fontFamily: "'DM Sans',sans-serif", marginBottom: 28 }}>
                                    Our team will call you within 2 hours on the number you've provided. We'll be ready to give you a live personalized demo.
                                </p>
                                <button onClick={() => setSubmitted(false)} style={{ background: '#eff6ff', color: '#2563eb', border: 'none', padding: '12px 28px', borderRadius: 50, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif" }}>
                                    Submit Another Request
                                </button>
                            </div>
                        ) : (
                            <>
                                <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0f172a', fontFamily: "'Syne',sans-serif", marginBottom: 6, letterSpacing: '-0.02em' }}>Request a Free Demo</h2>
                                <p style={{ fontSize: 14, color: '#94a3b8', fontFamily: "'DM Sans',sans-serif", marginBottom: 28 }}>Fill in your details and we'll call you within 2 hours.</p>

                                {/* Enquiry type */}
                                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
                                    {['Demo Request', 'Migration Help', 'Pricing Query', 'Technical Support'].map(type => (
                                        <button key={type} onClick={() => setFormData(f => ({ ...f, type }))}
                                            style={{ padding: '7px 16px', borderRadius: 50, fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s', fontFamily: "'DM Sans',sans-serif", border: '1.5px solid', borderColor: formData.type === type ? '#2563eb' : '#e2e8f0', background: formData.type === type ? '#eff6ff' : '#ffffff', color: formData.type === type ? '#2563eb' : '#64748b' }}>
                                            {type}
                                        </button>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    <InputField label="Lab Name *" placeholder="e.g. Sharma Diagnostics" value={formData.lab} onChange={v => setFormData(f => ({ ...f, lab: v }))} />
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-grid">
                                        <InputField label="Your Name" placeholder="Dr. / Mr. / Ms." value={formData.name} onChange={v => setFormData(f => ({ ...f, name: v }))} />
                                        <InputField label="Phone Number *" placeholder="+91 9XXXXXXXXX" value={formData.phone} onChange={v => setFormData(f => ({ ...f, phone: v }))} type="tel" />
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-grid">
                                        <InputField label="Email Address" placeholder="you@lab.com" value={formData.email} onChange={v => setFormData(f => ({ ...f, email: v }))} type="email" />
                                        <InputField label="City / State" placeholder="e.g. Faridabad, HR" value={formData.city} onChange={v => setFormData(f => ({ ...f, city: v }))} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: 13.5, fontWeight: 600, color: '#475569', marginBottom: 7, fontFamily: "'DM Sans',sans-serif" }}>Message (optional)</label>
                                        <textarea rows={3} placeholder="Tell us about your lab — current software, daily volume, specific challenges..." value={formData.message} onChange={e => setFormData(f => ({ ...f, message: e.target.value }))}
                                            style={{ width: '100%', padding: '13px 15px', borderRadius: 12, border: '1.5px solid #e2e8f0', outline: 'none', fontSize: 14.5, fontFamily: "'DM Sans',sans-serif", resize: 'none', transition: 'border-color 0.2s', color: '#0f172a' }}
                                            onFocus={e => e.target.style.borderColor = '#2563eb'}
                                            onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                                        />
                                    </div>
                                    <button onClick={handleSubmit}
                                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#2563eb', color: '#fff', border: 'none', padding: '16px', borderRadius: 12, fontSize: 15, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", cursor: 'pointer', boxShadow: '0 4px 16px rgba(37,99,235,0.35)', transition: 'all 0.2s', marginTop: 4 }}>
                                        <Send size={16} /> Submit Request
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* ── FAQs ── */}
            <section style={{ padding: '80px 20px 96px', background: '#f8fafc' }}>
                <div style={{ maxWidth: 720, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: 48 }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2563eb', background: '#eff6ff', border: '1px solid #dbeafe', padding: '5px 14px', borderRadius: 100, marginBottom: 16, fontFamily: "'DM Sans',sans-serif" }}>FAQs</span>
                        <h2 style={{ fontSize: 'clamp(26px,4vw,38px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Syne',sans-serif", letterSpacing: '-0.02em' }}>Common Questions</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {faqs.map((faq, i) => (
                            <div key={i} style={{ background: '#ffffff', borderRadius: 16, border: '1px solid', borderColor: openFaq === i ? '#bfdbfe' : '#e2e8f0', overflow: 'hidden', transition: 'border-color 0.2s' }}>
                                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', gap: 16 }}>
                                    <span style={{ fontSize: 15.5, fontWeight: 700, color: '#0f172a', fontFamily: "'Syne',sans-serif", textAlign: 'left' }}>{faq.q}</span>
                                    <span style={{ fontSize: 20, color: '#2563eb', fontWeight: 300, flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.3s', lineHeight: 1 }}>+</span>
                                </button>
                                <div style={{ maxHeight: openFaq === i ? 200 : 0, overflow: 'hidden', transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)' }}>
                                    <p style={{ padding: '0 24px 20px', fontSize: 14.5, color: '#64748b', lineHeight: 1.75, fontFamily: "'DM Sans',sans-serif", margin: 0 }}>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </main>
    )
}

function InputField({ label, placeholder, value, onChange, type = 'text' }: { label: string; placeholder: string; value: string; onChange: (v: string) => void; type?: string }) {
    return (
        <div>
            <label style={{ display: 'block', fontSize: 13.5, fontWeight: 600, color: '#475569', marginBottom: 7, fontFamily: "'DM Sans',sans-serif" }}>{label}</label>
            <input type={type} placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)}
                style={{ width: '100%', padding: '13px 15px', borderRadius: 12, border: '1.5px solid #e2e8f0', outline: 'none', fontSize: 14.5, fontFamily: "'DM Sans',sans-serif", transition: 'border-color 0.2s', color: '#0f172a', background: '#ffffff' }}
                onFocus={e => e.target.style.borderColor = '#2563eb'}
                onBlur={e => e.target.style.borderColor = '#e2e8f0'}
            />
        </div>
    )
}