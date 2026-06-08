'use client'
import { Server, Cpu, UserCheck, Stethoscope, Send } from 'lucide-react'

const steps = [
    {
        number: '01',
        icon: <Server size={22} />,
        title: 'Receive Results from Machine',
        desc: 'Test data is automatically fetched from lab analyzers via machine interfacing — no manual entry required.',
    },
    {
        number: '02',
        icon: <Cpu size={22} />,
        title: 'AI Verification',
        desc: 'AI engine checks for abnormalities and flags any critical values in real-time before human review.',
    },
    {
        number: '03',
        icon: <UserCheck size={22} />,
        title: 'Technician Verification',
        desc: 'Lab technician validates machine results and ensures correctness with a single click.',
    },
    {
        number: '04',
        icon: <Stethoscope size={22} />,
        title: 'Doctor Approval with AI Interpretations',
        desc: 'Pathologist reviews reports with AI-drafted interpretations, edits, and gives final digital approval.',
    },
    {
        number: '05',
        icon: <Send size={22} />,
        title: 'Report Delivery',
        desc: 'Reports instantly delivered to patient portal via WhatsApp, SMS, Email — automatically.',
    },
]

export default function Workflow() {
    return (
        <section
            id="workflow"
            style={{
                padding: '96px 20px',
                /* Lightweight, breathing background gradient */
                background: 'linear-gradient(180deg, #ffffff 0%, #f4f7fe 50%, #ffffff 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Soft decorative background blob */}
            <div style={{
                position: 'absolute',
                width: 600, height: 600,
                background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto' }}>

                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: 64 }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            background: '#ffffff',
                            border: '1px solid #e2e8f0',
                            color: 'var(--blue-primary)',
                            padding: '6px 16px',
                            borderRadius: '100px',
                            fontSize: '13px',
                            fontWeight: '700',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            fontFamily: "'DM Sans', sans-serif",
                            boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                        }}>
                            Reporting Workflow
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
                        AI Automated Lab <span style={{ color: 'var(--blue-primary)' }}>Workflow</span>
                    </h2>
                    <p style={{
                        color: '#64748b',
                        maxWidth: 500,
                        margin: '0 auto',
                        fontSize: 'clamp(15px, 2vw, 17px)',
                        lineHeight: 1.6,
                        fontFamily: "'DM Sans', sans-serif"
                    }}>
                        From machine to patient — fully automated, AI-verified, and delivered in minutes.
                    </p>
                </div>

                {/* Steps Mapping */}
                <div style={{ maxWidth: 760, margin: '0 auto' }}>
                    {steps.map((step, i) => (
                        <div
                            key={step.number}
                            className="workflow-step"
                            style={{
                                display: 'flex',
                                gap: 24,
                                alignItems: 'flex-start',
                                position: 'relative',
                            }}
                        >
                            {/* Left Side: Number, Icon & Connecting Line */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                                <div className="step-icon-box" style={{
                                    width: 56, height: 56,
                                    borderRadius: 16,
                                    background: '#ffffff',
                                    border: '1px solid #e2e8f0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--blue-primary)',
                                    flexDirection: 'column',
                                    gap: 2,
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.02)',
                                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                    zIndex: 2,
                                    position: 'relative'
                                }}>
                                    <span style={{ color: '#94a3b8', fontSize: 10, fontWeight: 700, fontFamily: "'DM Sans', sans-serif" }}>
                                        {step.number}
                                    </span>
                                    {step.icon}
                                </div>

                                {/* Vertical Connecting Line (Hidden for the last step) */}
                                {i < steps.length - 1 && (
                                    <div style={{
                                        width: 2,
                                        height: 50, // Line length
                                        background: 'linear-gradient(to bottom, #cbd5e1, rgba(203,213,225,0.2))',
                                        margin: '8px 0',
                                        borderRadius: 2,
                                    }} />
                                )}
                            </div>

                            {/* Right Side: Text Content */}
                            <div className="step-content" style={{
                                padding: '10px 0 32px 0',
                                flex: 1,
                                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                            }}>
                                <h3 style={{
                                    fontSize: 19,
                                    fontWeight: 700,
                                    marginBottom: 8,
                                    fontFamily: "'Syne', sans-serif",
                                    color: '#0f172a'
                                }}>
                                    {step.title}
                                </h3>
                                <p style={{
                                    color: '#64748b',
                                    fontSize: 'clamp(14.5px, 1.5vw, 15.5px)',
                                    lineHeight: 1.6,
                                    fontFamily: "'DM Sans', sans-serif",
                                }}>
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subtly Premium Hover Animations */}
            <style>{`
                .workflow-step:hover .step-icon-box {
                    border-color: #93c5fd !important;
                    box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.15) !important;
                    transform: translateY(-2px);
                }
                .workflow-step:hover .step-content {
                    transform: translateX(4px);
                }
            `}</style>
        </section>
    )
}