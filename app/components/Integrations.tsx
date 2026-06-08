'use client'
import { CreditCard, MessageCircle, Activity, Link as LinkIcon, Shield, Cpu } from 'lucide-react'

const integrations = [
    {
        icon: <CreditCard size={24} />,
        name: 'Razorpay',
        desc: 'Automate payment collection from B2B clients seamlessly.',
        color: '#3b82f6', // Premium Blue
    },
    {
        icon: <MessageCircle size={24} />,
        name: 'WhatsApp',
        desc: 'Share bills, reports, and status directly with your branding.',
        color: '#22c55e', // WhatsApp Green
    },
    {
        icon: <Activity size={24} />,
        name: 'EkaCare',
        desc: 'Tests auto-sync from prescriptions to OnePath and back.',
        color: '#06b6d4', // Cyan
    },
    {
        icon: <LinkIcon size={24} />,
        name: 'REST API',
        desc: 'Well-structured API docs to integrate from any website or app.',
        color: '#8b5cf6', // Purple
    },
    {
        icon: <Shield size={24} />,
        name: 'ABHA Integration',
        desc: 'Instant patient verification and digital health record syncing.',
        color: '#14b8a6', // Teal
    },
    {
        icon: <Cpu size={24} />,
        name: 'Machine Integration',
        desc: 'Uni & Bi-directional support for all major analyzer brands.',
        color: '#6366f1', // Indigo
    },
]

export default function Integrations() {
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
                            Integrations
                        </span>
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(28px, 5vw, 42px)',
                        fontWeight: 800,
                        color: '#0f172a',
                        marginBottom: 16,
                        letterSpacing: '-0.02em',
                        fontFamily: "'Syne', sans-serif"
                    }}>
                        Connect your favorite <span style={{ color: 'var(--blue-primary)' }}>Tools</span>
                    </h2>

                    <p style={{
                        color: '#64748b',
                        maxWidth: 500,
                        margin: '0 auto',
                        fontSize: 'clamp(15px, 2vw, 17px)',
                        lineHeight: 1.6,
                        fontFamily: "'DM Sans', sans-serif"
                    }}>
                        OnePath connects effortlessly with the tools you already use — payments, WhatsApp, EMRs, and laboratory machines.
                    </p>
                </div>

                {/* Integration Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 24,
                }}>
                    {integrations.map(int => (
                        <div
                            key={int.name}
                            className="integration-card"
                            style={{
                                padding: '28px',
                                background: '#ffffff',
                                border: '1px solid #e2e8f0',
                                borderRadius: '20px',
                                display: 'flex',
                                gap: 20,
                                alignItems: 'flex-start',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                cursor: 'default'
                            }}
                        >
                            {/* Icon Box */}
                            <div style={{
                                width: 52, height: 52,
                                borderRadius: '14px',
                                background: `${int.color}15`, // 15 is hex opacity (approx 8%)
                                border: `1px solid ${int.color}30`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: int.color,
                                flexShrink: 0,
                                transition: 'transform 0.3s ease'
                            }} className="int-icon">
                                {int.icon}
                            </div>

                            {/* Text Content */}
                            <div>
                                <h3 style={{
                                    fontSize: 18,
                                    fontWeight: 700,
                                    marginBottom: 8,
                                    color: '#0f172a',
                                    fontFamily: "'Syne', sans-serif"
                                }}>
                                    {int.name}
                                </h3>
                                <p style={{
                                    fontSize: 14.5,
                                    color: '#64748b',
                                    lineHeight: 1.6,
                                    fontFamily: "'DM Sans', sans-serif"
                                }}>
                                    {int.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hover Animations */}
            <style>{`
                .integration-card:hover {
                    transform: translateY(-5px);
                    border-color: #cbd5e1 !important;
                    box-shadow: 0 12px 30px -10px rgba(0,0,0,0.08);
                }
                .integration-card:hover .int-icon {
                    transform: scale(1.08) rotate(-3deg);
                }
            `}</style>
        </section>
    )
}