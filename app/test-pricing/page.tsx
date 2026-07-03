'use client'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
    Search, Activity, Clock, ShieldCheck, Beaker, HeartPulse,
    Dna, Droplet, TestTube2, Scaling, ChevronLeft, ChevronRight,
    Microscope, FlaskConical
} from 'lucide-react'
import allTests from '../../data/tests.json'

const getTestIcon = (category: string) => {
    switch (category) {
        case 'Haematology': return <Microscope size={20} />
        case 'Microbiology': return <FlaskConical size={20} />
        case 'Serology': return <ShieldCheck size={20} />
        case 'Routine': return <Activity size={20} />
        default: return <Activity size={20} />
    }
}

const categoryColors: Record<string, { color: string; bg: string; border: string }> = {
    'Haematology': { color: '#dc2626', bg: '#fef2f2', border: '#fecaca' },
    'Microbiology': { color: '#7c3aed', bg: '#f5f3ff', border: '#e9d5ff' },
    'Serology': { color: '#059669', bg: '#ecfdf5', border: '#bbf7d0' },
    'Routine': { color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe' },
}

const categories = ['All', 'Haematology', 'Microbiology', 'Serology', 'Routine']
const ITEMS_PER_PAGE = 9

export default function TestPricing() {
    const [searchTerm, setSearchTerm] = useState('')
    const [activeCategory, setActiveCategory] = useState('All')
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => { setCurrentPage(1) }, [searchTerm, activeCategory])

    const filteredTests = allTests.filter(test => {
        const matchSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            test.desc.toLowerCase().includes(searchTerm.toLowerCase())
        const matchCategory = activeCategory === 'All' || test.category === activeCategory
        return matchSearch && matchCategory
    })

    const totalPages = Math.ceil(filteredTests.length / ITEMS_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const currentTests = filteredTests.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    const handlePrev = () => {
        if (currentPage > 1) { setCurrentPage(p => p - 1); window.scrollTo({ top: 280, behavior: 'smooth' }) }
    }
    const handleNext = () => {
        if (currentPage < totalPages) { setCurrentPage(p => p + 1); window.scrollTo({ top: 280, behavior: 'smooth' }) }
    }

    // Count per category
    const counts: Record<string, number> = { All: allTests.length }
    categories.slice(1).forEach(cat => {
        counts[cat] = allTests.filter(t => t.category === cat).length
    })

    return (
        <main style={{ background: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            {/* ── Hero ── */}
            <section style={{
                padding: '160px 20px 72px',
                background: 'linear-gradient(160deg, #ffffff 0%, #eff6ff 60%, #e0eaff 100%)',
                textAlign: 'center',
                borderBottom: '1px solid #e2e8f0',
                position: 'relative',
                overflow: 'hidden',
            }}>
                <div style={{ position: 'absolute', top: 40, left: -100, width: 400, height: 400, background: 'rgba(37,99,235,0.08)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', top: -50, right: -80, width: 350, height: 350, background: 'rgba(124,58,237,0.06)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />

                <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    {/* Badge */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 100, padding: '6px 18px', fontSize: 13, fontWeight: 600, color: '#2563eb', fontFamily: "'DM Sans', sans-serif", marginBottom: 24, boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
                        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                        {allTests.length} Tests Available · NABL Approved
                    </div>

                    <h1 style={{ fontSize: 'clamp(34px, 5vw, 56px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Syne', sans-serif", marginBottom: 18, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                        Test Information &{' '}
                        <span style={{ background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            Pricing List
                        </span>
                    </h1>
                    <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: '#475569', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", marginBottom: 40 }}>
                        Browse our comprehensive diagnostic catalogue across Haematology, Microbiology, Serology, and Routine panels. View sample requirements, TAT, and transparent pricing.
                    </p>

                    {/* Search bar */}
                    <div style={{
                        display: 'flex', alignItems: 'center',
                        background: '#ffffff', border: '1.5px solid #e2e8f0',
                        borderRadius: 100, padding: '13px 24px',
                        boxShadow: '0 4px 20px -4px rgba(0,0,0,0.06)',
                        maxWidth: 600, margin: '0 auto',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                    }} className="search-bar">
                        <Search size={20} color="#94a3b8" style={{ marginRight: 12, flexShrink: 0 }} />
                        <input
                            type="text"
                            placeholder="Search tests (e.g. CBC, Dengue, Vitamin D...)"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            style={{ flex: 1, border: 'none', outline: 'none', fontSize: 15, color: '#0f172a', fontFamily: "'DM Sans', sans-serif", background: 'transparent' }}
                        />
                        {searchTerm && (
                            <button onClick={() => setSearchTerm('')} style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', width: 24, height: 24, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: '#94a3b8', flexShrink: 0 }}>✕</button>
                        )}
                    </div>
                </div>
            </section>

            {/* ── Main Content ── */}
            <section style={{ padding: '48px 20px 96px', flex: 1 }}>
                <div style={{ maxWidth: 1200, margin: '0 auto' }}>

                    {/* Category filter pills */}
                    <div className="category-scroll" style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 4, marginBottom: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
                        {categories.map(cat => {
                            const cc = categoryColors[cat]
                            const isActive = activeCategory === cat
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: 7,
                                        padding: '8px 20px', borderRadius: 100,
                                        fontSize: 14, fontWeight: 600,
                                        fontFamily: "'DM Sans', sans-serif",
                                        cursor: 'pointer', whiteSpace: 'nowrap',
                                        transition: 'all 0.2s ease',
                                        border: isActive
                                            ? `1.5px solid ${cc?.color || '#2563eb'}`
                                            : '1.5px solid #e2e8f0',
                                        background: isActive
                                            ? (cc?.bg || '#eff6ff')
                                            : '#ffffff',
                                        color: isActive
                                            ? (cc?.color || '#2563eb')
                                            : '#64748b',
                                        boxShadow: isActive
                                            ? `0 4px 12px ${cc?.color || '#2563eb'}25`
                                            : 'none',
                                    }}
                                >
                                    {cat}
                                    <span style={{
                                        fontSize: 11, fontWeight: 800,
                                        background: isActive ? (cc?.color || '#2563eb') : '#f1f5f9',
                                        color: isActive ? '#ffffff' : '#94a3b8',
                                        padding: '1px 7px', borderRadius: 100,
                                    }}>
                                        {counts[cat] || allTests.length}
                                    </span>
                                </button>
                            )
                        })}
                    </div>

                    {/* Result count */}
                    <div style={{ marginBottom: 24, color: '#64748b', fontSize: 14, fontWeight: 500, fontFamily: "'DM Sans', sans-serif", display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: filteredTests.length > 0 ? '#22c55e' : '#ef4444', display: 'inline-block' }} />
                        Showing <strong style={{ color: '#0f172a' }}>{filteredTests.length}</strong> tests
                        {activeCategory !== 'All' && <> in <strong style={{ color: '#0f172a' }}>{activeCategory}</strong></>}
                        {searchTerm && <> matching <strong style={{ color: '#0f172a' }}>"{searchTerm}"</strong></>}
                    </div>

                    {/* Tests grid */}
                    {filteredTests.length > 0 ? (
                        <>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20, marginBottom: 48 }}>
                                {currentTests.map((test, i) => {
                                    const savePercent = Math.round(((test.oldPrice - test.newPrice) / test.oldPrice) * 100)
                                    const cc = categoryColors[test.category] || categoryColors['Routine']

                                    return (
                                        <div key={i} className="test-card" style={{
                                            background: '#ffffff', borderRadius: 20,
                                            border: '1px solid #e2e8f0', padding: '26px',
                                            display: 'flex', flexDirection: 'column',
                                            transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                                            position: 'relative',
                                        }}>
                                            {/* Top row: category + save badge */}
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                                                <span style={{
                                                    background: cc.bg, color: cc.color,
                                                    border: `1px solid ${cc.border}`,
                                                    padding: '3px 12px', borderRadius: 100,
                                                    fontSize: 11.5, fontWeight: 700,
                                                    fontFamily: "'DM Sans', sans-serif",
                                                    letterSpacing: '0.04em',
                                                }}>
                                                    {test.category}
                                                </span>
                                                <span style={{
                                                    background: '#dcfce7', color: '#16a34a',
                                                    border: '1px solid #bbf7d0',
                                                    padding: '3px 10px', borderRadius: 100,
                                                    fontSize: 11.5, fontWeight: 700,
                                                    fontFamily: "'DM Sans', sans-serif",
                                                }}>
                                                    Save {savePercent}%
                                                </span>
                                            </div>

                                            {/* Test name + icon */}
                                            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 16 }}>
                                                <div style={{
                                                    width: 46, height: 46, flexShrink: 0,
                                                    background: cc.bg, color: cc.color,
                                                    borderRadius: 13, border: `1px solid ${cc.border}`,
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                }}>
                                                    {getTestIcon(test.category)}
                                                </div>
                                                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#0f172a', fontFamily: "'Syne', sans-serif", lineHeight: 1.3 }}>
                                                    {test.name}
                                                </h3>
                                            </div>

                                            {/* Description */}
                                            <p style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", marginBottom: 20, flex: 1 }}>
                                                {test.desc}
                                            </p>

                                            {/* Technical specs */}
                                            <div style={{
                                                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10,
                                                background: '#f8fafc', padding: '14px', borderRadius: 12,
                                                marginBottom: 18, border: '1px solid #f1f5f9',
                                            }}>
                                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                                                    <Droplet size={14} color="#94a3b8" style={{ marginTop: 2, flexShrink: 0 }} />
                                                    <div>
                                                        <div style={{ fontSize: 10, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: "'DM Sans', sans-serif", marginBottom: 2 }}>Sample</div>
                                                        <div style={{ fontSize: 12.5, fontWeight: 600, color: '#334155', fontFamily: "'DM Sans', sans-serif" }}>{test.sample}</div>
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                                                    <TestTube2 size={14} color="#94a3b8" style={{ marginTop: 2, flexShrink: 0 }} />
                                                    <div>
                                                        <div style={{ fontSize: 10, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: "'DM Sans', sans-serif", marginBottom: 2 }}>Vial</div>
                                                        <div style={{ fontSize: 12.5, fontWeight: 600, color: '#334155', fontFamily: "'DM Sans', sans-serif" }}>{test.vial}</div>
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, gridColumn: 'span 2' }}>
                                                    <Scaling size={14} color="#94a3b8" style={{ marginTop: 2, flexShrink: 0 }} />
                                                    <div>
                                                        <div style={{ fontSize: 10, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: "'DM Sans', sans-serif", marginBottom: 2 }}>Required Volume</div>
                                                        <div style={{ fontSize: 12.5, fontWeight: 600, color: '#334155', fontFamily: "'DM Sans', sans-serif" }}>{test.volume}</div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* TAT + Pricing */}
                                            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#64748b', fontSize: 13, fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>
                                                    <Clock size={14} color="#94a3b8" /> TAT: {test.tat}
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                                    <span style={{ fontSize: 14, color: '#94a3b8', textDecoration: 'line-through', fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>
                                                        ₹{test.oldPrice}
                                                    </span>
                                                    <span style={{ fontSize: 24, fontWeight: 800, color: cc.color, fontFamily: "'Syne', sans-serif" }}>
                                                        ₹{test.newPrice}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                                    <button onClick={handlePrev} disabled={currentPage === 1} className="page-btn">
                                        <ChevronLeft size={18} /> Previous
                                    </button>

                                    <div style={{ display: 'flex', gap: 6 }}>
                                        {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(page => (
                                            <button
                                                key={page}
                                                onClick={() => { setCurrentPage(page); window.scrollTo({ top: 280, behavior: 'smooth' }) }}
                                                style={{
                                                    width: 36, height: 36, borderRadius: 9,
                                                    border: currentPage === page ? '1.5px solid #2563eb' : '1.5px solid #e2e8f0',
                                                    background: currentPage === page ? '#2563eb' : '#ffffff',
                                                    color: currentPage === page ? '#ffffff' : '#64748b',
                                                    fontWeight: 700, fontSize: 13,
                                                    fontFamily: "'DM Sans', sans-serif",
                                                    cursor: 'pointer', transition: 'all 0.15s',
                                                }}
                                            >
                                                {page}
                                            </button>
                                        ))}
                                    </div>

                                    <button onClick={handleNext} disabled={currentPage === totalPages} className="page-btn">
                                        Next <ChevronRight size={18} />
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '72px 20px', background: '#ffffff', borderRadius: 20, border: '1px solid #e2e8f0' }}>
                            <div style={{ width: 72, height: 72, background: '#f1f5f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                                <Search size={32} color="#cbd5e1" />
                            </div>
                            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', fontFamily: "'Syne', sans-serif", marginBottom: 10 }}>No tests found</h3>
                            <p style={{ color: '#64748b', fontFamily: "'DM Sans', sans-serif", fontSize: 15 }}>
                                No test matches "<strong>{searchTerm}</strong>". Try a different keyword or browse by category.
                            </p>
                            <button onClick={() => { setSearchTerm(''); setActiveCategory('All') }} style={{ marginTop: 20, padding: '10px 24px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600, fontFamily: "'DM Sans', sans-serif", cursor: 'pointer' }}>
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />

            <style>{`
                .search-bar:focus-within {
                    border-color: #2563eb !important;
                    box-shadow: 0 0 0 4px rgba(37,99,235,0.1) !important;
                }
                .test-card:hover {
                    border-color: #bfdbfe !important;
                    box-shadow: 0 12px 36px -8px rgba(0,0,0,0.1) !important;
                    transform: translateY(-3px);
                }
                .page-btn {
                    display: flex; align-items: center; gap: 6px;
                    padding: 10px 20px; border-radius: 100px;
                    background: #ffffff; border: 1.5px solid #e2e8f0;
                    color: #334155; font-size: 14px; font-weight: 600;
                    font-family: 'DM Sans', sans-serif;
                    cursor: pointer; transition: all 0.2s ease;
                }
                .page-btn:hover:not(:disabled) {
                    background: #eff6ff; border-color: #2563eb; color: #2563eb;
                }
                .page-btn:disabled { opacity: 0.4; cursor: not-allowed; }
                @media (max-width: 640px) {
                    .category-scroll { justify-content: flex-start !important; flex-wrap: nowrap !important; }
                }
            `}</style>
        </main>
    )
}