'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Search, Activity, Clock, ShieldCheck, Beaker, HeartPulse, Dna, Droplet, TestTube2, Scaling } from 'lucide-react'

// Enhanced mock data with Technical Details & Descriptions
const allTests = [
    {
        name: 'Complete Blood Count (CBC)', category: 'Routine', oldPrice: 450, newPrice: 299, tat: '12 Hrs', icon: <Activity size={20} />,
        sample: 'Whole Blood', vial: 'EDTA (Purple Top)', volume: '2 ml',
        desc: 'Evaluates overall health and detects a wide range of disorders, including anemia, infection, and leukemia.'
    },
    {
        name: 'Lipid Profile', category: 'Profiles', oldPrice: 900, newPrice: 599, tat: '12 Hrs', icon: <HeartPulse size={20} />,
        sample: 'Serum', vial: 'SST (Yellow Top)', volume: '3 ml',
        desc: 'Measures cholesterol and triglycerides to assess the risk of cardiovascular disease. Fasting required.'
    },
    {
        name: 'Thyroid Profile (T3, T4, TSH)', category: 'Profiles', oldPrice: 850, newPrice: 499, tat: '24 Hrs', icon: <Dna size={20} />,
        sample: 'Serum', vial: 'SST (Yellow Top)', volume: '3 ml',
        desc: 'Checks thyroid gland function to diagnose hyperthyroidism or hypothyroidism.'
    },
    {
        name: 'Liver Function Test (LFT)', category: 'Profiles', oldPrice: 1100, newPrice: 699, tat: '12 Hrs', icon: <Activity size={20} />,
        sample: 'Serum', vial: 'SST (Yellow Top)', volume: '3 ml',
        desc: 'Assesses liver health by measuring proteins, liver enzymes, and bilirubin levels.'
    },
    {
        name: 'Kidney Function Test (KFT)', category: 'Profiles', oldPrice: 1200, newPrice: 799, tat: '12 Hrs', icon: <Activity size={20} />,
        sample: 'Serum', vial: 'SST (Yellow Top)', volume: '3 ml',
        desc: 'Evaluates kidney function by measuring urea, creatinine, and electrolytes.'
    },
    {
        name: 'HbA1c (Glycosylated Hb)', category: 'Diabetes', oldPrice: 650, newPrice: 399, tat: '12 Hrs', icon: <Beaker size={20} />,
        sample: 'Whole Blood', vial: 'EDTA (Purple Top)', volume: '2 ml',
        desc: 'Measures your average blood sugar levels over the past 2-3 months.'
    },
    {
        name: 'Fasting Blood Sugar (FBS)', category: 'Diabetes', oldPrice: 150, newPrice: 99, tat: '6 Hrs', icon: <Beaker size={20} />,
        sample: 'Plasma', vial: 'Fluoride (Grey Top)', volume: '2 ml',
        desc: 'Measures blood glucose after an overnight fast to screen for diabetes.'
    },
    {
        name: 'Vitamin D (25-OH)', category: 'Vitamins', oldPrice: 1600, newPrice: 899, tat: '24 Hrs', icon: <ShieldCheck size={20} />,
        sample: 'Serum', vial: 'SST (Yellow Top)', volume: '3 ml',
        desc: 'Measures Vitamin D levels to assess bone health, immunity, and fatigue causes.'
    },
    {
        name: 'Urine Routine & Microscopy', category: 'Routine', oldPrice: 250, newPrice: 149, tat: '12 Hrs', icon: <Beaker size={20} />,
        sample: 'Urine', vial: 'Sterile Container', volume: '15-20 ml',
        desc: 'Checks for urinary tract infections, kidney disease, and diabetes markers in urine.'
    },
    {
        name: 'C-Reactive Protein (CRP)', category: 'Specialized', oldPrice: 700, newPrice: 450, tat: '12 Hrs', icon: <Dna size={20} />,
        sample: 'Serum', vial: 'SST (Yellow Top)', volume: '2 ml',
        desc: 'Measures the level of c-reactive protein to identify inflammation or infection in the body.'
    },
    {
        name: 'D-Dimer', category: 'Specialized', oldPrice: 1200, newPrice: 850, tat: '12 Hrs', icon: <Dna size={20} />,
        sample: 'Plasma', vial: 'Citrate (Light Blue)', volume: '2 ml',
        desc: 'Helps rule out the presence of a serious blood clot (thrombosis).'
    },
    {
        name: 'Widal Test (Typhoid)', category: 'Specialized', oldPrice: 400, newPrice: 249, tat: '12 Hrs', icon: <Activity size={20} />,
        sample: 'Serum', vial: 'SST (Yellow Top)', volume: '2 ml',
        desc: 'Detects antibodies against Salmonella bacteria to diagnose Typhoid fever.'
    },
]

const categories = ['All', ...Array.from(new Set(allTests.map(test => test.category)))]

export default function TestPricing() {
    const [searchTerm, setSearchTerm] = useState('')
    const [activeCategory, setActiveCategory] = useState('All')

    const filteredTests = allTests.filter(test => {
        const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = activeCategory === 'All' || test.category === activeCategory
        return matchesSearch && matchesCategory
    })

    return (
        <main style={{ background: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            {/* Hero Section */}
            <section style={{
                padding: '160px 20px 80px',
                background: 'linear-gradient(180deg, #ffffff 0%, #e0eaff 100%)',
                textAlign: 'center',
                borderBottom: '1px solid #e2e8f0',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', top: 50, left: -100, width: 400, height: 400, background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />

                <div className="container" style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Syne', sans-serif", marginBottom: 20, letterSpacing: '-0.02em' }}>
                        Test Information & <br />
                        <span style={{ color: 'var(--blue-primary)' }}>Pricing List</span>
                    </h1>
                    <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#475569', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", marginBottom: 40 }}>
                        Browse our comprehensive catalogue of diagnostic tests. View technical specifications, sample requirements, and transparent pricing.
                    </p>

                    {/* Search Bar */}
                    <div style={{
                        display: 'flex', alignItems: 'center', background: '#ffffff', border: '1px solid #cbd5e1',
                        borderRadius: '100px', padding: '12px 24px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)',
                        maxWidth: 600, margin: '0 auto', transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                    }} className="search-wrapper">
                        <Search size={22} color="#64748b" style={{ marginRight: 12 }} />
                        <input
                            type="text"
                            placeholder="Search tests (e.g., CBC, Thyroid)..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                flex: 1, border: 'none', outline: 'none', fontSize: 16, color: '#0f172a',
                                fontFamily: "'DM Sans', sans-serif", background: 'transparent'
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section style={{ padding: '60px 20px 100px', flex: 1 }}>
                <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>

                    {/* Category Filter Pills */}
                    <div className="hide-scrollbar" style={{
                        display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 12, marginBottom: 36, justifyContent: 'center'
                    }}>
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                style={{
                                    padding: '8px 20px', borderRadius: '100px', fontSize: 14.5, fontWeight: 600,
                                    fontFamily: "'DM Sans', sans-serif", cursor: 'pointer', whiteSpace: 'nowrap',
                                    transition: 'all 0.2s ease',
                                    border: activeCategory === category ? '1px solid var(--blue-primary)' : '1px solid #e2e8f0',
                                    background: activeCategory === category ? 'var(--blue-primary)' : '#ffffff',
                                    color: activeCategory === category ? '#ffffff' : '#64748b',
                                    boxShadow: activeCategory === category ? '0 4px 12px rgba(59,130,246,0.3)' : 'none',
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div style={{ marginBottom: 24, color: '#64748b', fontSize: 15, fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>
                        Showing {filteredTests.length} tests {activeCategory !== 'All' && `for ${activeCategory}`}
                    </div>

                    {/* Tests Grid */}
                    {filteredTests.length > 0 ? (
                        <div style={{
                            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24,
                        }}>
                            {filteredTests.map((test, i) => {
                                const savePercent = Math.round(((test.oldPrice - test.newPrice) / test.oldPrice) * 100);

                                return (
                                    <div key={i} className="test-card" style={{
                                        background: '#ffffff', borderRadius: '20px', border: '1px solid #e2e8f0',
                                        padding: '28px', display: 'flex', flexDirection: 'column',
                                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)', position: 'relative',
                                    }}>
                                        {/* Category & Save Badge */}
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                                            <span style={{
                                                background: '#f1f5f9', color: '#475569', padding: '4px 12px',
                                                borderRadius: '6px', fontSize: 12, fontWeight: 700,
                                                fontFamily: "'DM Sans', sans-serif", textTransform: 'uppercase', letterSpacing: '0.05em'
                                            }}>
                                                {test.category}
                                            </span>
                                            <span style={{
                                                background: '#dcfce7', color: '#16a34a', border: '1px solid #bbf7d0',
                                                padding: '4px 10px', borderRadius: '100px', fontSize: 12, fontWeight: 700,
                                                fontFamily: "'DM Sans', sans-serif",
                                            }}>
                                                Save {savePercent}%
                                            </span>
                                        </div>

                                        {/* Test Name & Icon */}
                                        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 20 }}>
                                            <div style={{
                                                width: 48, height: 48, background: '#eff6ff', color: 'var(--blue-primary)',
                                                borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                                            }}>
                                                {test.icon}
                                            </div>
                                            <h3 style={{ fontSize: 19, fontWeight: 800, color: '#0f172a', fontFamily: "'Syne', sans-serif", lineHeight: 1.3 }}>
                                                {test.name}
                                            </h3>
                                        </div>

                                        {/* Medical Description */}
                                        <p style={{ fontSize: 14.5, color: '#64748b', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", marginBottom: 24, flex: 1 }}>
                                            {test.desc}
                                        </p>

                                        {/* Technical Specifications (Vial, Sample, Volume) */}
                                        <div style={{
                                            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12,
                                            background: '#f8fafc', padding: '16px', borderRadius: '12px', marginBottom: 24
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                                                <Droplet size={16} color="#94a3b8" style={{ marginTop: 2 }} />
                                                <div>
                                                    <div style={{ fontSize: 11, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif" }}>Sample</div>
                                                    <div style={{ fontSize: 13, fontWeight: 600, color: '#334155', fontFamily: "'DM Sans', sans-serif" }}>{test.sample}</div>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                                                <TestTube2 size={16} color="#94a3b8" style={{ marginTop: 2 }} />
                                                <div>
                                                    <div style={{ fontSize: 11, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif" }}>Vial / Container</div>
                                                    <div style={{ fontSize: 13, fontWeight: 600, color: '#334155', fontFamily: "'DM Sans', sans-serif" }}>{test.vial}</div>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, gridColumn: 'span 2' }}>
                                                <Scaling size={16} color="#94a3b8" style={{ marginTop: 2 }} />
                                                <div>
                                                    <div style={{ fontSize: 11, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif" }}>Required Volume</div>
                                                    <div style={{ fontSize: 13, fontWeight: 600, color: '#334155', fontFamily: "'DM Sans', sans-serif" }}>{test.volume}</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* TAT & Pricing Section (No Book Button) */}
                                        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#64748b', fontSize: 14, fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>
                                                <Clock size={16} /> TAT: {test.tat}
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                                <span style={{ fontSize: 15, color: '#94a3b8', textDecoration: 'line-through', fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>
                                                    ₹{test.oldPrice}
                                                </span>
                                                <span style={{ fontSize: 24, fontWeight: 800, color: 'var(--blue-primary)', fontFamily: "'Syne', sans-serif" }}>
                                                    ₹{test.newPrice}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '60px 20px', background: '#ffffff', borderRadius: 20, border: '1px solid #e2e8f0' }}>
                            <Search size={48} color="#cbd5e1" style={{ margin: '0 auto 16px' }} />
                            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', fontFamily: "'Syne', sans-serif", marginBottom: 8 }}>No tests found</h3>
                            <p style={{ color: '#64748b', fontFamily: "'DM Sans', sans-serif" }}>We couldn't find any test matching "{searchTerm}". Please try a different keyword.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />

            <style>{`
                .search-wrapper:focus-within {
                    border-color: var(--blue-primary) !important;
                    box-shadow: 0 10px 30px -5px rgba(59, 130, 246, 0.15) !important;
                }
                
                .test-card:hover {
                    border-color: #cbd5e1 !important;
                    box-shadow: 0 15px 35px -10px rgba(0,0,0,0.08) !important;
                    transform: translateY(-4px);
                }

                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                
                @media (max-width: 768px) {
                    .hide-scrollbar {
                        justify-content: flex-start !important;
                    }
                }
            `}</style>
        </main>
    )
}