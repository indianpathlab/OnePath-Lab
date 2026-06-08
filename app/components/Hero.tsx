'use client'
import Link from 'next/link'
import { ArrowRight, Wand2, Search, Settings, HelpCircle, Bell } from 'lucide-react'

export default function Hero() {
    return (
        <section
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'linear-gradient(180deg, #ffffff 0%, #f0f4ff 40%, #e0eaff 100%)',
                overflow: 'hidden',
                paddingTop: '150px',
            }}
        >
            {/* Decorative Glow Blobs */}
            <div style={{ position: 'absolute', top: 50, left: -100, width: 500, height: 500, background: 'rgba(59, 130, 246, 0.15)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 100, right: -100, width: 600, height: 600, background: 'rgba(139, 92, 246, 0.1)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* Text Content Area */}
                <div className="animate-fade-up" style={{ maxWidth: 850, margin: '0 auto', textAlign: 'center', paddingBottom: 50 }}>

                    {/* Top Badge */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
                        <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            background: 'linear-gradient(to right, #ffffff, #f8faff)',
                            border: '1px solid rgba(59, 130, 246, 0.3)',
                            borderRadius: 100,
                            padding: '6px 18px', fontSize: 13, fontWeight: 700,
                            color: 'var(--blue-primary)',
                            boxShadow: '0 4px 14px rgba(59, 130, 246, 0.1)'
                        }}>
                            <Wand2 size={15} /> Precision in every drop.
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 style={{
                        fontSize: 'clamp(38px, 5vw, 68px)',
                        fontWeight: 800,
                        lineHeight: 1.15,
                        color: 'var(--text-main)',
                        marginBottom: 20,
                        letterSpacing: '-0.02em',
                    }}>
                        Smarter Pathology Labs <br />
                        Run on <span style={{
                            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>OnePath</span>
                    </h1>

                    {/* Subtext */}
                    <p style={{
                        fontSize: 'clamp(16px, 2vw, 19px)',
                        color: 'var(--text-muted)',
                        maxWidth: 680,
                        margin: '0 auto 40px',
                        lineHeight: 1.6,
                        fontWeight: 500,
                    }}>
                        Automate machine interfacing, generate intelligent AI-powered reports, and deliver them instantly via WhatsApp. Scale your diagnostic center with India's most advanced cloud software.
                    </p>

                    {/* CTA Section */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
                        <Link href="/trial" className="btn-primary" style={{ padding: '16px 40px', fontSize: 16 }}>
                            Start 5-Day Free Trial
                            <ArrowRight size={18} />
                        </Link>
                        <p style={{ fontSize: 13, color: 'var(--gray-mid)', fontWeight: 600, letterSpacing: '0.02em' }}>
                            NO CREDIT CARD REQUIRED • TRUSTED BY 2000+ NABL LABS
                        </p>
                    </div>

                </div>

                {/* PREMIUM FLOATING MOCKUP CARD */}
                <div className="animate-fade-up mockup-wrapper" style={{
                    width: '100%',
                    maxWidth: 1150,
                    margin: '0 auto 80px',
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.6) 0%, rgba(139, 92, 246, 0.4) 50%, rgba(56, 189, 248, 0.6) 100%)',
                    padding: '2px',
                    borderRadius: '24px',
                    boxShadow: '0 30px 60px -15px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.15)',
                    animationDelay: '0.2s',
                }}>

                    {/* Inner Mockup Container */}
                    <div className="mockup-container" style={{
                        background: '#ffffff',
                        borderRadius: '22px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>

                        {/* Mockup Mac Dots */}
                        <div style={{ background: 'linear-gradient(to right, #f8faff, #ffffff)', padding: '16px 24px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #e5e7eb' }}>
                            <div style={{ display: 'flex', gap: 8 }}>
                                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)' }} />
                                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#eab308', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)' }} />
                                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#22c55e', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)' }} />
                            </div>
                        </div>

                        {/* Mockup Top Header */}
                        <div className="mockup-header" style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e5e7eb', background: '#ffffff' }}>

                            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                    <div style={{ width: 24, height: 2, background: '#1e293b', borderRadius: 2 }} />
                                    <div style={{ width: 24, height: 2, background: '#1e293b', borderRadius: 2 }} />
                                    <div style={{ width: 24, height: 2, background: '#1e293b', borderRadius: 2 }} />
                                </div>
                                <span className="hide-mobile" style={{ fontSize: 24, fontWeight: 800, fontFamily: 'Syne, sans-serif', color: '#0f172a' }}>OnePath</span>
                            </div>

                            <div className="hide-mobile" style={{ flex: 1, maxWidth: 500, margin: '0 24px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#f1f5f9', border: '1px solid #e2e8f0', padding: '10px 16px', borderRadius: 10 }}>
                                    <Search size={18} color="#64748b" />
                                    <span style={{ color: '#64748b', fontSize: 14, fontWeight: 500 }}>Search patient by name, ID, phone no.</span>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                <div className="hide-mobile" style={{ border: '1px solid #e2e8f0', padding: '6px 12px', borderRadius: 8, fontSize: 14, color: '#334155', fontWeight: 600 }}>Center 1</div>
                                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #e2e8f0, #cbd5e1)' }} />
                                <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--blue-primary)', background: '#eff6ff', border: '1px solid #bfdbfe', padding: '6px 14px', borderRadius: 8, fontSize: 14, fontWeight: 600 }}>
                                    <HelpCircle size={16} /> Help
                                </div>
                                <Settings size={22} color="#475569" style={{ cursor: 'pointer' }} />
                                <Bell size={22} color="#475569" style={{ cursor: 'pointer' }} />
                            </div>
                        </div>

                        {/* Mockup Content */}
                        <div style={{ display: 'flex', flex: 1, background: '#f8fafc' }}>

                            {/* Sidebar */}
                            <div className="hide-mobile" style={{ width: 260, borderRight: '1px solid #e2e8f0', background: '#ffffff', padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                                <div style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: '#ffffff', padding: '14px 16px', borderRadius: 10, fontSize: 14, fontWeight: 600, boxShadow: '0 4px 10px rgba(59,130,246,0.2)' }}>
                                    + New Registration
                                </div>
                                <div style={{ padding: '12px 16px', color: '#475569', fontSize: 14, fontWeight: 600 }}>|| Accession</div>
                                <div style={{ padding: '12px 16px', color: '#475569', fontSize: 14, fontWeight: 600 }}>○ Analysis</div>
                                <div style={{ padding: '12px 16px', color: '#475569', fontSize: 14, fontWeight: 600 }}>☰ Patient List</div>
                            </div>

                            {/* Main Board Area */}
                            <div className="mockup-main" style={{ flex: 1, padding: '32px' }}>
                                <div className="mockup-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="mockup-card" style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 16, padding: 24, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
                                            <div style={{ width: '45%', height: 14, background: '#f1f5f9', borderRadius: 4, marginBottom: 24 }} />
                                            <div className="mockup-line" style={{ width: '100%', height: 42, background: '#f8fafc', borderRadius: 8, marginBottom: 12, border: '1px solid #f1f5f9' }} />
                                            <div className="mockup-line" style={{ width: '100%', height: 42, background: '#f8fafc', borderRadius: 8, marginBottom: 12, border: '1px solid #f1f5f9' }} />
                                            <div className="mockup-line" style={{ width: '60%', height: 42, background: '#f8fafc', borderRadius: 8, border: '1px solid #f1f5f9' }} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <style>{`
                /* Desktop Default Sizes */
                .mockup-container { min-height: 480px; }
                
                /* Mobile Responsive Adjustments */
                @media (max-width: 800px) {
                    .hide-mobile { display: none !important; }
                    .mockup-header { padding: 12px 16px !important; }
                    
                    /* Yahan fix kiya hai lamba hone wala issue */
                    .mockup-container { min-height: 280px !important; } 
                    .mockup-main { padding: 16px !important; }
                    
                    /* Grid ko horizontally scrollable bana diya */
                    .mockup-grid { 
                        display: flex !important; 
                        overflow-x: auto; 
                        gap: 16px !important; 
                        padding-bottom: 8px; /* Scroll area spacing */
                    }
                    
                    /* Hide scrollbar for a clean look */
                    .mockup-grid::-webkit-scrollbar { display: none; }
                    .mockup-grid { -ms-overflow-style: none; scrollbar-width: none; }
                    
                    /* Mobile par cards ki height aur width shrink ki */
                    .mockup-card { 
                        min-width: 240px; 
                        padding: 16px !important; 
                    }
                    .mockup-line { 
                        height: 32px !important; 
                    }
                }
            `}</style>
        </section>
    )
}