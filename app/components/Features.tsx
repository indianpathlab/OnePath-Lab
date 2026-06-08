'use client'
import { Brain, Lightbulb, FileText, Flag, MessageSquare, Mic, Network, UserPlus, BarChart3, ShieldCheck } from 'lucide-react'

const aiFeatures = [
    { icon: <Brain size={24} />, title: 'AI Interpretation', desc: 'Smart AI drafts report interpretations automatically, saving pathologists hours.' },
    { icon: <Lightbulb size={24} />, title: 'AI Test Suggestion', desc: 'Suggests relevant follow-up tests based on results to improve accuracy.' },
    { icon: <FileText size={24} />, title: 'AI Smart Report', desc: 'Turns complex medical data into clear, patient-friendly insights.' },
    { icon: <Flag size={24} />, title: 'AI Flagger', desc: 'Automatically detects machine issues or damaged samples in real-time.' },
    { icon: <MessageSquare size={24} />, title: 'AI Assistant', desc: 'Instant insights to support pathology interpretation and reporting.' },
    { icon: <Network size={24} />, title: 'Multi-Branch Sync', desc: 'Centralized control for all your lab branches with real-time data sync.' },
    { icon: <UserPlus size={24} />, title: 'Doctor/Referral Portal', desc: 'Empower doctors with their own portal to track referrals and commissions.' },
    { icon: <BarChart3 size={24} />, title: 'Business Intelligence', desc: 'Get deep analytics on test volume, revenue, and growth patterns.' },
    { icon: <ShieldCheck size={24} />, title: 'Secure & Compliant', desc: 'End-to-end encryption with full NABL and regulatory compliance.' },
]

export default function Features() {
    return (
        <section style={{ padding: '80px 20px', background: '#ffffff' }}>
            <div className="container">

                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <h2 style={{
                        fontSize: 'clamp(28px, 5vw, 42px)',
                        fontWeight: 800,
                        color: '#0f172a',
                        marginBottom: 16,
                        letterSpacing: '-0.02em'
                    }}>
                        Everything your lab needs to <br />
                        <span style={{ color: 'var(--blue-primary)' }}>Scale Faster</span>
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 24,
                }}>
                    {aiFeatures.map((feat, index) => (
                        <div
                            key={index}
                            className="feature-card"
                            style={{
                                padding: '32px',
                                background: '#ffffff',
                                border: '1px solid #e2e8f0',
                                borderRadius: '20px',
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                marginBottom: 20,
                                color: 'var(--blue-primary)',
                                transition: 'transform 0.4s ease'
                            }} className="icon-box">
                                {feat.icon}
                            </div>
                            <h3 style={{
                                fontSize: 18,
                                fontWeight: 700,
                                marginBottom: 12,
                                color: '#0f172a'
                            }}>
                                {feat.title}
                            </h3>
                            <p style={{
                                color: '#64748b',
                                fontSize: 'clamp(14px, 1.5vw, 15px)',
                                lineHeight: 1.6
                            }}>
                                {feat.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .feature-card:hover {
                    border-color: #cbd5e1;
                    box-shadow: 0 10px 30px -10px rgba(0,0,0,0.08);
                    transform: translateY(-4px);
                }
                .feature-card:hover .icon-box {
                    transform: scale(1.1);
                }
            `}</style>
        </section>
    )
}