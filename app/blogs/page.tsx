'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowRight, Clock, Calendar, Mail, Search } from 'lucide-react'

const blogPosts = [
    {
        id: '1',
        title: 'How Artificial Intelligence is Transforming Pathology Labs in 2026',
        excerpt: 'Discover how AI-driven smart reports and automated flagging are helping labs reduce errors, save hours of manual work, and scale their daily sample processing.',
        category: 'AI & Tech',
        readTime: '6 min read',
        date: 'June 02, 2026',
        gradient: 'linear-gradient(135deg, #e0eaff 0%, #3b82f6 100%)',
        featured: true
    },
    {
        id: '2',
        title: '5 Proven Strategies to Reduce Turnaround Time (TAT)',
        excerpt: 'Learn the operational secrets top NABL labs use to deliver reports faster without compromising on precision.',
        category: 'Operations',
        readTime: '4 min read',
        date: 'May 28, 2026',
        gradient: 'linear-gradient(135deg, #fce7f3 0%, #db2777 100%)',
    },
    {
        id: '3',
        title: 'The Ultimate Guide to NABL Compliance for New Labs',
        excerpt: 'A step-by-step checklist to ensure your diagnostic center meets all regulatory requirements and data security standards.',
        category: 'Compliance',
        readTime: '8 min read',
        date: 'May 15, 2026',
        gradient: 'linear-gradient(135deg, #dcfce7 0%, #16a34a 100%)',
    },
    {
        id: '4',
        title: 'Why Cloud-Based LIS is Replacing Offline Software',
        excerpt: 'Offline software is holding your lab back. See why cloud infrastructure is crucial for multi-branch sync and security.',
        category: 'Technology',
        readTime: '5 min read',
        date: 'May 04, 2026',
        gradient: 'linear-gradient(135deg, #fef08a 0%, #eab308 100%)',
    },
    {
        id: '5',
        title: 'Enhancing Patient Experience with WhatsApp Reports',
        excerpt: 'How instant WhatsApp delivery is increasing patient retention and reducing the workload on lab receptionists.',
        category: 'Patient Care',
        readTime: '3 min read',
        date: 'April 22, 2026',
        gradient: 'linear-gradient(135deg, #e0f2fe 0%, #0284c7 100%)',
    },
    {
        id: '6',
        title: 'Managing Multi-Branch Diagnostics Centers Efficiently',
        excerpt: 'Centralized control, role-based access, and financial tracking for owners running more than 3 lab branches.',
        category: 'Management',
        readTime: '7 min read',
        date: 'April 10, 2026',
        gradient: 'linear-gradient(135deg, #fae8ff 0%, #c026d3 100%)',
    },
]

const categories = ['All', 'AI & Tech', 'Operations', 'Compliance', 'Technology', 'Patient Care', 'Management']

export default function Blogs() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    const featuredPost = filteredPosts.find(p => p.featured)
    const gridPosts = filteredPosts.filter(p => !p.featured || activeCategory !== 'All')

    return (
        <main style={{ background: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            
            {/* Hero Section */}
            <section style={{ padding: '160px 20px 80px', background: '#ffffff', borderBottom: '1px solid #e2e8f0', position: 'relative' }}>
                <div className="container" style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Syne', sans-serif", marginBottom: 20, letterSpacing: '-0.02em' }}>
                        Insights & <span style={{ color: 'var(--blue-primary)' }}>Resources</span>
                    </h1>
                    <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: '#64748b', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", marginBottom: 48, maxWidth: 600, margin: '0 auto' }}>
                        Expert advice, industry updates, and operational strategies to help you scale your pathology lab.
                    </p>

                    {/* Search & Mobile-Friendly Filters */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
                        <div className="search-bar" style={{ display: 'flex', alignItems: 'center', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '100px', padding: '12px 24px', width: '100%', maxWidth: 450 }}>
                            <Search size={20} color="#94a3b8" style={{ marginRight: 12 }} />
                            <input type="text" placeholder="Search articles..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: 15, color: '#0f172a', fontFamily: "'DM Sans', sans-serif" }} />
                        </div>

                        {/* Mobile Responsive Category Scroll */}
                        <div className="category-scroll-container">
                            <div className="category-scroll">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        style={{
                                            padding: '8px 20px', borderRadius: '100px', fontSize: 14, fontWeight: 600,
                                            fontFamily: "'DM Sans', sans-serif", cursor: 'pointer', whiteSpace: 'nowrap',
                                            transition: 'all 0.2s ease',
                                            background: activeCategory === cat ? 'var(--blue-primary)' : 'transparent',
                                            color: activeCategory === cat ? '#ffffff' : '#64748b',
                                            border: activeCategory === cat ? '1px solid var(--blue-primary)' : '1px solid #e2e8f0',
                                        }}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Content Section */}
            <section style={{ padding: '60px 20px 100px', flex: 1 }}>
                <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
                    
                    {/* Featured Post */}
                    {featuredPost && activeCategory === 'All' && !searchQuery && (
                        <Link href={`/blogs/${featuredPost.id}`} style={{ textDecoration: 'none' }}>
                            <div className="featured-card" style={{ background: '#ffffff', borderRadius: '32px', border: '1px solid #e2e8f0', overflow: 'hidden', display: 'flex', marginBottom: 60, transition: 'all 0.3s ease' }}>
                                <div className="featured-image" style={{ width: '50%', background: featuredPost.gradient }} />
                                <div className="featured-content" style={{ padding: '56px 48px', width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 24 }}>
                                        <span style={{ background: '#eff6ff', color: 'var(--blue-primary)', padding: '6px 14px', borderRadius: '8px', fontSize: 13, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", textTransform: 'uppercase' }}>{featuredPost.category}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#94a3b8', fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}><Clock size={14} /> {featuredPost.readTime}</span>
                                    </div>
                                    <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0f172a', fontFamily: "'Syne', sans-serif", marginBottom: 20, lineHeight: 1.3 }}>{featuredPost.title}</h2>
                                    <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", marginBottom: 32 }}>{featuredPost.excerpt}</p>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#94a3b8', fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}><Calendar size={14} /> {featuredPost.date}</span>
                                        <span className="read-more-link" style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--blue-primary)', fontWeight: 700, fontSize: 15, fontFamily: "'DM Sans', sans-serif", transition: 'gap 0.2s' }}>Read Article <ArrowRight size={18} /></span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}

                    {/* Standard Grid Posts */}
                    {gridPosts.length > 0 ? (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
                            {gridPosts.map(post => (
                                <Link key={post.id} href={`/blogs/${post.id}`} style={{ textDecoration: 'none' }}>
                                    <div className="blog-card" style={{ background: '#ffffff', borderRadius: '24px', border: '1px solid #e2e8f0', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', transition: 'all 0.3s ease' }}>
                                        <div style={{ height: 200, background: post.gradient, position: 'relative' }}>
                                            <div style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(255,255,255,0.9)', color: '#0f172a', padding: '6px 12px', borderRadius: '8px', fontSize: 12, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", textTransform: 'uppercase' }}>{post.category}</div>
                                        </div>
                                        <div style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16, color: '#94a3b8', fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Calendar size={14} /> {post.date}</span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={14} /> {post.readTime}</span>
                                            </div>
                                            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', fontFamily: "'Syne', sans-serif", marginBottom: 12, lineHeight: 1.4 }}>{post.title}</h3>
                                            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", marginBottom: 24, flex: 1 }}>{post.excerpt}</p>
                                            <span className="read-more-link" style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--blue-primary)', fontWeight: 700, fontSize: 14, fontFamily: "'DM Sans', sans-serif", transition: 'gap 0.2s', marginTop: 'auto' }}>Read Article <ArrowRight size={16} /></span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#64748b', fontFamily: "'DM Sans', sans-serif" }}>No articles found.</div>
                    )}
                </div>
            </section>
            
            <Footer />

            <style>{`
                .search-bar:focus-within { border-color: var(--blue-primary) !important; box-shadow: 0 4px 14px rgba(59, 130, 246, 0.1) !important; }
                .featured-card:hover { transform: translateY(-4px); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1) !important; border-color: #cbd5e1 !important; }
                .featured-card:hover .read-more-link { gap: 12px !important; }
                .blog-card:hover { transform: translateY(-6px); box-shadow: 0 15px 35px -10px rgba(0,0,0,0.08) !important; border-color: #cbd5e1 !important; }
                .blog-card:hover .read-more-link { gap: 10px !important; }
                
                /* Mobile Friendly Category Scroll */
                .category-scroll-container {
                    width: 100vw;
                    max-width: 100%;
                    overflow-x: hidden; /* Hide outer scrollbar */
                }
                .category-scroll {
                    display: flex;
                    gap: 12px;
                    overflow-x: auto;
                    padding: 4px 20px 12px; /* Bottom padding for scrollbar space */
                    justify-content: flex-start;
                    -webkit-overflow-scrolling: touch; /* Smooth iOS scroll */
                    scrollbar-width: none; /* Firefox */
                }
                .category-scroll::-webkit-scrollbar { display: none; /* Chrome/Safari */ }
                
                @media (min-width: 768px) {
                    .category-scroll-container { width: auto; }
                    .category-scroll { justify-content: center; padding: 4px 0; }
                }
                @media (max-width: 850px) {
                    .featured-card { flex-direction: column !important; }
                    .featured-image { width: 100% !important; height: 250px !important; }
                    .featured-content { width: 100% !important; padding: 32px 24px !important; }
                }
            `}</style>
        </main>
    )
}