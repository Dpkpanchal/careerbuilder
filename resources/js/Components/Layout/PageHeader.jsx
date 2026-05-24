// resources/js/Components/Layout/PageHeader.jsx
import React from 'react';
import { Link } from '@inertiajs/react';

const PageHeader = ({ title, breadcrumbs = [], actions = null }) => {
    if (!title) return null;

    const defaultBreadcrumbs = [
        { label: 'Home', href: '/admin/dashboard' },
        { label: title, href: null, active: true },
    ];

    const breadcrumbItems = breadcrumbs.length > 0 ? breadcrumbs : defaultBreadcrumbs;

    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row align-items-center mb-2">

                    {/* Left: page title */}
                    <div className="col-sm-6">
                        <h1 className="m-0">{title}</h1>
                    </div>

                    {/* Right: primary action + breadcrumbs stacked */}
                    <div className="col-sm-6 d-flex flex-column align-items-end">
                        {actions && (
                            <div className="mb-1">{actions}</div>
                        )}
                        <ol className="breadcrumb mb-0" style={{ background: 'transparent', padding: 0 }}>
                            {breadcrumbItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={`breadcrumb-item ${item.active ? 'active' : ''}`}
                                >
                                    {item.href ? (
                                        <Link href={item.href}>{item.label}</Link>
                                    ) : (
                                        item.label
                                    )}
                                </li>
                            ))}
                        </ol>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PageHeader;
