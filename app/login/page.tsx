'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Lock, Eye, EyeOff, ShieldCheck, Activity, Quote, ArrowLeft } from 'lucide-react'

export default function Login() {
    const [view, setView] = useState<'login' | 'forgot'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [resetSent, setResetSent] = useState(false)

    const handleAction = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        
        // Simulate API call for both Login and Reset
        setTimeout(() => {
            setIsLoading(false)
            if (view === 'forgot') {
                setResetSent(true)
            } else {
                // Login redirect logic here
            }
        }, 1500)
    }

    return (
        <main className="login-container" style={{ minHeight: '100vh', display: 'flex', background: '#ffffff' }}>

            {/* Left Panel: Form Section */}
            <div className="login-left" style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                padding: '40px 24px',
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                {/* Premium Brand Logo */}
                <div className="login-logo" style={{ position: 'absolute', top: 40, left: 40 }}>
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
                        <Image 
                            src="/logo.png" 
                            alt="OnePath Logo" 
                            width={36} 
                            height={36} 
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                        <span style={{ fontSize: 24, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: '#0f172a', letterSpacing: '-0.03em' }}>
                            OnePath
                        </span>
                    </Link>
                </div>

                <div className="form-wrapper" style={{ width: '100%', maxWidth: 420, margin: '0 auto' }}>
                    
                    {/* View: LOGIN */}
                    {view === 'login' ? (
                        <div className="animate-fade-in">
                            <div style={{ marginBottom: 40, textAlign: 'center' }}>
                                <h1 style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Syne', sans-serif", marginBottom: 12, letterSpacing: '-0.02em' }}>
                                    Welcome back
                                </h1>
                                <p style={{ color: '#64748b', fontSize: 16, fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
                                    Sign in to manage your lab operations.
                                </p>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                                <div style={{ flex: 1, height: 1, background: '#f1f5f9' }} />
                                <span style={{ fontSize: 13, color: '#94a3b8', fontWeight: 700, fontFamily: "'DM Sans', sans-serif", textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    Or continue with email
                                </span>
                                <div style={{ flex: 1, height: 1, background: '#f1f5f9' }} />
                            </div>

                            <form onSubmit={handleAction} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: 14, fontWeight: 700, color: '#334155', marginBottom: 8, fontFamily: "'DM Sans', sans-serif" }}>
                                        Email Address
                                    </label>
                                    <div className="input-group" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                        <Mail size={18} color="#94a3b8" style={{ position: 'absolute', left: 16 }} />
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            required
                                            style={{
                                                width: '100%', padding: '14px 16px 14px 44px', borderRadius: '12px', border: '1px solid #cbd5e1',
                                                fontSize: 15, fontFamily: "'DM Sans', sans-serif", outline: 'none', background: '#ffffff',
                                                transition: 'all 0.2s', color: '#0f172a'
                                            }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                                        <label style={{ fontSize: 14, fontWeight: 700, color: '#334155', fontFamily: "'DM Sans', sans-serif" }}>
                                            Password
                                        </label>
                                        <button type="button" onClick={() => setView('forgot')} style={{ fontSize: 13, fontWeight: 700, color: 'var(--blue-primary)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", padding: 0 }}>
                                            Forgot password?
                                        </button>
                                    </div>
                                    <div className="input-group" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                        <Lock size={18} color="#94a3b8" style={{ position: 'absolute', left: 16 }} />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            required
                                            style={{
                                                width: '100%', padding: '14px 44px', borderRadius: '12px', border: '1px solid #cbd5e1',
                                                fontSize: 15, fontFamily: "'DM Sans', sans-serif", outline: 'none', background: '#ffffff',
                                                transition: 'all 0.2s', color: '#0f172a'
                                            }}
                                        />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: 16, background: 'transparent', border: 'none', cursor: 'pointer', color: '#94a3b8', display: 'flex' }}>
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                <button type="submit" disabled={isLoading} style={{
                                    padding: '16px', borderRadius: '12px', background: 'var(--blue-primary)', color: '#ffffff',
                                    fontSize: 16, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", border: 'none',
                                    cursor: isLoading ? 'not-allowed' : 'pointer', transition: 'all 0.2s',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 8,
                                    boxShadow: '0 8px 25px -6px rgba(59, 130, 246, 0.5)'
                                }} className="primary-btn">
                                    {isLoading ? <span className="spinner" /> : 'Sign In'}
                                </button>
                            </form>

                            <p style={{ textAlign: 'center', marginTop: 32, fontSize: 15, color: '#64748b', fontFamily: "'DM Sans', sans-serif" }}>
                                Don't have an account?{' '}
                                <Link href="/trial" style={{ color: 'var(--blue-primary)', fontWeight: 700, textDecoration: 'none' }}>
                                    Start free trial
                                </Link>
                            </p>
                        </div>
                    ) : (
                        /* View: FORGOT PASSWORD */
                        <div className="animate-fade-in">
                            <div style={{ marginBottom: 40, textAlign: 'left' }}>
                                <div style={{ width: 48, height: 48, background: '#eff6ff', color: 'var(--blue-primary)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                                    <Lock size={24} />
                                </div>
                                <h1 style={{ fontSize: 'clamp(28px, 4vw, 32px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Syne', sans-serif", marginBottom: 12, letterSpacing: '-0.02em' }}>
                                    Reset Password
                                </h1>
                                <p style={{ color: '#64748b', fontSize: 16, fontFamily: "'DM Sans', sans-serif", fontWeight: 500, lineHeight: 1.6 }}>
                                    {resetSent 
                                        ? "We've sent a password reset link to your email. Please check your inbox." 
                                        : "Enter your registered email address and we'll send you a link to reset your password."}
                                </p>
                            </div>

                            {!resetSent ? (
                                <form onSubmit={handleAction} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: 14, fontWeight: 700, color: '#334155', marginBottom: 8, fontFamily: "'DM Sans', sans-serif" }}>
                                            Email Address
                                        </label>
                                        <div className="input-group" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                            <Mail size={18} color="#94a3b8" style={{ position: 'absolute', left: 16 }} />
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                required
                                                style={{
                                                    width: '100%', padding: '14px 16px 14px 44px', borderRadius: '12px', border: '1px solid #cbd5e1',
                                                    fontSize: 15, fontFamily: "'DM Sans', sans-serif", outline: 'none', background: '#ffffff',
                                                    transition: 'all 0.2s', color: '#0f172a'
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <button type="submit" disabled={isLoading} style={{
                                        padding: '16px', borderRadius: '12px', background: 'var(--blue-primary)', color: '#ffffff',
                                        fontSize: 16, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", border: 'none',
                                        cursor: isLoading ? 'not-allowed' : 'pointer', transition: 'all 0.2s',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                                        boxShadow: '0 8px 25px -6px rgba(59, 130, 246, 0.5)'
                                    }} className="primary-btn">
                                        {isLoading ? <span className="spinner" /> : 'Send Reset Link'}
                                    </button>
                                </form>
                            ) : (
                                <button onClick={() => setView('login')} style={{
                                    width: '100%', padding: '16px', borderRadius: '12px', background: '#f1f5f9', color: '#0f172a',
                                    fontSize: 16, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", border: 'none',
                                    cursor: 'pointer', transition: 'all 0.2s'
                                }} className="secondary-btn">
                                    Return to Sign In
                                </button>
                            )}

                            {!resetSent && (
                                <button type="button" onClick={() => setView('login')} style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%',
                                    marginTop: 32, fontSize: 15, fontWeight: 700, color: '#64748b', background: 'none', border: 'none',
                                    cursor: 'pointer', fontFamily: "'DM Sans', sans-serif"
                                }} className="back-link">
                                    <ArrowLeft size={16} /> Back to log in
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Right Panel: Premium Graphic & Content (Hidden on Mobile) */}
            <div className="login-right" style={{
                flex: 1.2,
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '60px',
                color: 'white'
            }}>
                <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, background: 'rgba(59, 130, 246, 0.3)', borderRadius: '50%', filter: 'blur(120px)' }} />
                <div style={{ position: 'absolute', bottom: -100, left: -100, width: 500, height: 500, background: 'rgba(139, 92, 246, 0.2)', borderRadius: '50%', filter: 'blur(120px)' }} />

                <div style={{ position: 'relative', zIndex: 1, maxWidth: 500 }}>
                    <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 800, fontFamily: "'Syne', sans-serif", lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em' }}>
                        Automate.<br />Scale. <span style={{ color: '#60a5fa' }}>Grow.</span>
                    </h2>
                    <p style={{ fontSize: 18, color: '#94a3b8', fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>
                        Join the network of 2000+ top NABL accredited labs across India utilizing our AI-powered LIS software.
                    </p>
                </div>

                <div style={{
                    background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '24px', padding: '36px',
                    position: 'relative', zIndex: 1, maxWidth: 500, boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}>
                    <Quote size={40} color="rgba(255,255,255,0.1)" style={{ position: 'absolute', top: 24, right: 24 }} />
                    <p style={{ fontSize: 16, color: '#f8fafc', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", marginBottom: 28, position: 'relative', zIndex: 2 }}>
                        "Switching to OnePath was the best operational decision we made. Our TAT reduced by 40%, and the AI smart reports have drastically improved our patient satisfaction scores."
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                        <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16, fontFamily: "'Syne', sans-serif" }}>
                            D
                        </div>
                        <div>
                            <div style={{ fontSize: 16, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", color: '#ffffff' }}>Dr. Dilip Sanghvi</div>
                            <div style={{ fontSize: 14, color: '#94a3b8', fontFamily: "'DM Sans', sans-serif" }}>Apex Diagnostics</div>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: 40, position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <ShieldCheck size={28} color="#60a5fa" />
                        <div>
                            <div style={{ fontSize: 15, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", color: '#fff' }}>HIPAA Compliant</div>
                            <div style={{ fontSize: 13, color: '#94a3b8', fontFamily: "'DM Sans', sans-serif" }}>100% Data Security</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <Activity size={28} color="#34d399" />
                        <div>
                            <div style={{ fontSize: 15, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", color: '#fff' }}>99.9% Uptime</div>
                            <div style={{ fontSize: 13, color: '#94a3b8', fontFamily: "'DM Sans', sans-serif" }}>Cloud Infrastructure</div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                /* Smooth View Transitions */
                .animate-fade-in {
                    animation: fadeIn 0.4s ease-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                /* Smooth Inputs */
                .input-group input:focus {
                    border-color: var(--blue-primary) !important;
                    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
                    background: #ffffff !important;
                }
                .input-group:focus-within svg { color: var(--blue-primary) !important; }

                /* Buttons */
                .primary-btn:hover:not(:disabled) {
                    background: #2563eb !important;
                    transform: translateY(-2px);
                    box-shadow: 0 12px 30px -6px rgba(59, 130, 246, 0.6) !important;
                }
                .secondary-btn:hover { background: #e2e8f0 !important; }
                .social-btn:hover { background: #f8fafc !important; border-color: #cbd5e1 !important; transform: translateY(-1px); }
                .back-link:hover { color: #0f172a !important; }

                /* Loading Spinner */
                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                .spinner {
                    width: 20px; height: 20px; border: 2px solid rgba(255,255,255,0.3);
                    border-top-color: #fff; border-radius: 50%; animation: spin 1s linear infinite;
                }

                /* Mobile Layout */
                @media (max-width: 900px) {
                    .login-right { display: none !important; }
                    .login-left {
                        padding: 24px !important;
                        background: #f8fafc;
                        align-items: center;
                    }
                    .login-logo {
                        position: relative !important;
                        top: 0 !important; left: 0 !important;
                        margin-bottom: 40px;
                        display: flex; justify-content: center; width: 100%;
                    }
                    .form-wrapper {
                        background: #ffffff;
                        padding: 40px 24px;
                        border-radius: 24px;
                        box-shadow: 0 10px 40px -10px rgba(0,0,0,0.05);
                        border: 1px solid #e2e8f0;
                    }
                }
            `}</style>
        </main>
    )
}