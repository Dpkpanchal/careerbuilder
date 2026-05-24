import React from 'react';
import { usePage, Link, Head } from '@inertiajs/react';
import FrontendLayout from '@/Layouts/FrontendLayout';

export default function Page({ title, menuLabel, slug, htmlContent, metaDescription }) {
    const { menus = [] } = usePage().props;

    // Build flat list of all links for breadcrumb + related links
    const allLinks = React.useMemo(() => {
        const links = [];
        menus.forEach((menu) => {
            (menu.tabs ?? []).forEach((tab) => {
                (tab.sections ?? []).forEach((section) => {
                    (section.links ?? []).forEach((link) => {
                        links.push({ ...link, category: menu.label, tab: tab.label });
                    });
                });
            });
        });
        return links;
    }, [menus]);

    const currentLink = allLinks.find((l) => l.href && l.href.includes(slug));
    const related = currentLink
        ? allLinks.filter((l) => l.tab === currentLink.tab && l.href !== currentLink.href)
        : [];

    return (
        <FrontendLayout title={title}>
            <Head>
                <title>{title}</title>
                {metaDescription && <meta name="description" content={metaDescription} />}
            </Head>

            {/* Page Hero */}
            <div style={{ background: 'linear-gradient(135deg, #1a3c6e 0%, #2563a8 100%)', minHeight: 140 }}
                className="d-flex align-items-center">
                <div className="container py-4">
                    {/* Breadcrumb */}
                    {currentLink && (
                        <nav aria-label="breadcrumb" className="mb-2">
                            <ol className="breadcrumb mb-0" style={{ background: 'transparent', padding: 0 }}>
                                <li className="breadcrumb-item">
                                    <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem' }}>
                                        {currentLink.category}
                                    </span>
                                </li>
                                <li className="breadcrumb-item">
                                    <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem' }}>
                                        {currentLink.tab}
                                    </span>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    <span style={{ color: '#fff', fontSize: '0.85rem' }}>{menuLabel}</span>
                                </li>
                            </ol>
                        </nav>
                    )}
                    <h1 className="mb-0 fw-bold" style={{ color: '#fff', fontSize: '1.9rem' }}>
                        {menuLabel}
                    </h1>
                </div>
            </div>

            {/* Main content */}
            <div className="container py-5">
                <div className="row">

                    {/* Content column */}
                    <div className={related.length > 0 ? 'col-lg-8' : 'col-12'}>
                        {htmlContent ? (
                            <div
                                className="page-content"
                                dangerouslySetInnerHTML={{ __html: htmlContent }}
                            />
                        ) : (
                            <div className="text-center py-5">
                                <div style={{ fontSize: '3.5rem' }}>🚧</div>
                                <h2 className="mt-3 fw-semibold text-dark">Content Coming Soon</h2>
                                <p className="text-muted mt-2">
                                    We're preparing detailed information about <strong>{menuLabel}</strong>.<br />
                                    Check back soon!
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Related links sidebar */}
                    {related.length > 0 && (
                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="card border-0 shadow-sm">
                                <div className="card-header fw-semibold"
                                    style={{ background: '#f0f4ff', borderBottom: '2px solid #2563a8', color: '#1a3c6e' }}>
                                    More in {currentLink?.tab}
                                </div>
                                <ul className="list-group list-group-flush">
                                    {related.map((l) => (
                                        <li key={l.href} className="list-group-item px-3 py-2">
                                            <Link href={l.href}
                                                className="text-decoration-none d-flex align-items-center"
                                                style={{ color: '#2563a8', fontSize: '0.9rem' }}>
                                                <i className="fas fa-chevron-right me-2"
                                                    style={{ fontSize: '0.7rem', color: '#6c757d' }}></i>
                                                {l.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            <style>{`
                .page-content h1, .page-content h2, .page-content h3 {
                    color: #1a3c6e;
                    margin-top: 1.5rem;
                    margin-bottom: 0.75rem;
                }
                .page-content h1 { font-size: 1.8rem; }
                .page-content h2 { font-size: 1.4rem; }
                .page-content h3 { font-size: 1.15rem; }
                .page-content p { line-height: 1.8; color: #374151; margin-bottom: 1rem; }
                .page-content ul, .page-content ol { padding-left: 1.5rem; margin-bottom: 1rem; color: #374151; }
                .page-content li { margin-bottom: 0.35rem; line-height: 1.7; }
                .page-content table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; }
                .page-content table th { background: #1a3c6e; color: #fff; padding: 0.6rem 0.8rem; text-align: left; font-size: 0.9rem; }
                .page-content table td { padding: 0.55rem 0.8rem; border-bottom: 1px solid #e5e7eb; font-size: 0.9rem; color: #374151; }
                .page-content table tr:nth-child(even) td { background: #f8fafc; }
                .page-content blockquote { border-left: 4px solid #2563a8; padding: 0.75rem 1rem; background: #f0f4ff; margin: 1rem 0; border-radius: 0 6px 6px 0; color: #374151; }
                .page-content a { color: #2563a8; }
                .page-content a:hover { color: #1a3c6e; }
            `}</style>
        </FrontendLayout>
    );
}
