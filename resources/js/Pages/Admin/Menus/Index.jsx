import React, { useState, useCallback } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';

const TYPE_COLORS = {
    menu:    'badge bg-primary',
    tab:     'badge bg-info',
    section: 'badge bg-warning text-dark',
    link:    'badge bg-secondary',
};

const STATUS_TABS = [
    { value: '',         label: 'All',      color: 'secondary' },
    { value: 'active',   label: 'Active',   color: 'success'   },
    { value: 'inactive', label: 'Inactive', color: 'warning'   },
    { value: 'deleted',  label: 'Deleted',  color: 'danger'    },
];

const DEPTH_INDENT = 20;

export default function MenusIndex({ menus, filters, counts }) {
    const { flash, errors } = usePage().props;

    const [deleting,  setDeleting]  = useState(null);
    const [restoring, setRestoring] = useState(null);
    const [search,    setSearch]    = useState(filters?.search || '');
    const [localType, setLocalType] = useState(filters?.type   || '');

    const activeStatus = filters?.status || '';
    const isFiltered   = search !== '' || localType !== '' || activeStatus !== '';

    // Primary page action — shown in the content-header, not inside the card
    const primaryAction = activeStatus !== 'deleted' ? (
        <Link href="/admin/nav-menus/create" className="btn btn-primary elevation-2 px-4">
            <i className="fas fa-plus mr-2"></i> Add Menu Item
        </Link>
    ) : null;

    // Push filter state into the URL — Inertia handles the round-trip
    const applyFilters = useCallback((overrides = {}) => {
        const next = {
            search: overrides.search  !== undefined ? overrides.search  : search,
            type:   overrides.type    !== undefined ? overrides.type    : localType,
            status: overrides.status  !== undefined ? overrides.status  : activeStatus,
        };
        // Strip empty keys so the URL stays clean
        const params = Object.fromEntries(Object.entries(next).filter(([, v]) => v !== ''));
        router.get('/admin/nav-menus', params, { preserveState: true, replace: true });
    }, [search, localType, activeStatus]);

    const resetAll = () => {
        setSearch('');
        setLocalType('');
        router.get('/admin/nav-menus', {}, { replace: true });
    };

    const handleDelete = (id, label) => {
        if (!confirm(`Soft-delete "${label}"?\n\nThe item will be hidden but kept in the database and can be restored later.`)) return;
        setDeleting(id);
        router.delete(`/admin/nav-menus/${id}`, {
            preserveScroll: true,
            onFinish: () => setDeleting(null),
        });
    };

    const handleRestore = (id) => {
        setRestoring(id);
        router.post(`/admin/nav-menus/${id}/restore`, {}, {
            preserveScroll: true,
            onFinish: () => setRestoring(null),
        });
    };

    const handleToggle = (id) => {
        router.post(`/admin/nav-menus/${id}/toggle-active`, {}, { preserveScroll: true });
    };

    return (
        <AdminLayout
            header="Navigation Menu Manager"
            breadcrumbs={[
                { label: 'Home', href: '/admin/dashboard' },
                { label: 'Nav Menus', active: true },
            ]}
        >
            <Head title="Nav Menus" />

            <div className="container-fluid">

                {/* ── Flash / Error messages ─────────────────────────── */}
                {flash?.success && (
                    <div className="alert alert-success alert-dismissible fade show">
                        <i className="fas fa-check-circle mr-2"></i>
                        {flash.success}
                        <button type="button" className="close" data-dismiss="alert">
                            <span>&times;</span>
                        </button>
                    </div>
                )}
                {errors?.delete && (
                    <div className="alert alert-danger alert-dismissible fade show">
                        <i className="fas fa-exclamation-triangle mr-2"></i>
                        {errors.delete}
                        <button type="button" className="close" data-dismiss="alert">
                            <span>&times;</span>
                        </button>
                    </div>
                )}

                {/* ── Filter card ────────────────────────────────────── */}
                <div className="card card-outline card-primary mb-3">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h3 className="card-title mb-0">
                            <i className="fas fa-filter mr-1"></i> Filters
                        </h3>
                        {primaryAction}
                    </div>
                    <div className="card-body pb-2">

                        {/* Status tabs with live counts */}
                        <div className="mb-3">
                            <div className="btn-group flex-wrap" role="group" aria-label="Filter by status">
                                {STATUS_TABS.map(tab => {
                                    const count     = counts?.[tab.value || 'all'] ?? 0;
                                    const isActive  = activeStatus === tab.value;
                                    return (
                                        <button
                                            key={tab.value}
                                            type="button"
                                            onClick={() => applyFilters({ status: tab.value })}
                                            className={`btn btn-sm ${isActive
                                                ? `btn-${tab.color}`
                                                : `btn-outline-${tab.color}`}`}
                                        >
                                            {tab.label}
                                            <span className={`badge ml-1 ${isActive
                                                ? 'badge-light text-dark'
                                                : `badge-${tab.color}`}`}
                                            >
                                                {count}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Search + Type row */}
                        <div className="row align-items-end">
                            <div className="col-md-6 mb-2">
                                <label className="small text-muted mb-1">Search by name, key, or slug</label>
                                <div className="input-group input-group-sm">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g. careers, engineering, /courses/..."
                                        value={search}
                                        onChange={e => setSearch(e.target.value)}
                                        onKeyDown={e => e.key === 'Enter' && applyFilters({ search: e.target.value })}
                                    />
                                    <div className="input-group-append">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() => applyFilters({ search })}
                                            title="Search"
                                        >
                                            <i className="fas fa-search"></i>
                                        </button>
                                        {search && (
                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary"
                                                onClick={() => { setSearch(''); applyFilters({ search: '' }); }}
                                                title="Clear search"
                                            >
                                                <i className="fas fa-times"></i>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-2">
                                <label className="small text-muted mb-1">Type</label>
                                <select
                                    className="form-control form-control-sm"
                                    value={localType}
                                    onChange={e => {
                                        setLocalType(e.target.value);
                                        applyFilters({ type: e.target.value });
                                    }}
                                >
                                    <option value="">All types</option>
                                    <option value="menu">menu — top navbar</option>
                                    <option value="tab">tab — mega-menu tab</option>
                                    <option value="section">section — group heading</option>
                                    <option value="link">link — clickable link</option>
                                </select>
                            </div>

                            {isFiltered && (
                                <div className="col-md-2 mb-2">
                                    <label className="small text-muted mb-1">&nbsp;</label>
                                    <div>
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary btn-sm"
                                            onClick={resetAll}
                                            title="Clear all filters"
                                        >
                                            <i className="fas fa-undo mr-1"></i> Reset all
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* ── Main table card ────────────────────────────────── */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title mb-0">
                            {activeStatus === 'deleted' ? 'Deleted Menu Items' : 'Menu Items'}
                            {isFiltered && (
                                <span className="badge badge-info ml-2">
                                    {menus.length} result{menus.length !== 1 ? 's' : ''}
                                </span>
                            )}
                        </h3>
                    </div>

                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table table-hover table-striped mb-0">
                                <thead className="thead-dark">
                                    <tr>
                                        <th style={{ width: 40 }}>#</th>
                                        <th>Label / Key</th>
                                        <th style={{ width: 90 }}>Type</th>
                                        <th>Route / Slug / Href</th>
                                        <th style={{ width: 60 }}>Order</th>
                                        {activeStatus === 'deleted'
                                            ? <th style={{ width: 130 }}>Deleted At</th>
                                            : <th style={{ width: 75 }}>Active</th>
                                        }
                                        <th style={{ width: 160 }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {menus.length === 0 ? (
                                        <tr>
                                            <td colSpan={7} className="text-center py-5 text-muted">
                                                {activeStatus === 'deleted'
                                                    ? <><i className="fas fa-trash-alt fa-2x mb-2 d-block"></i>No deleted items — the trash is empty.</>
                                                    : <><i className="fas fa-search fa-2x mb-2 d-block"></i>No menu items match your filters.</>
                                                }
                                            </td>
                                        </tr>
                                    ) : menus.map((m) => (
                                        <tr
                                            key={m.id}
                                            className={m.is_deleted
                                                ? 'table-secondary'
                                                : m.is_active ? '' : 'text-muted'}
                                            style={m.is_deleted ? { opacity: 0.75 } : undefined}
                                        >
                                            {/* # */}
                                            <td className="align-middle text-muted small">{m.id}</td>

                                            {/* Label / Key with tree indent */}
                                            <td className="align-middle">
                                                <div style={{ paddingLeft: m.depth * DEPTH_INDENT }}>
                                                    {m.depth > 0 && (
                                                        <span className="text-muted mr-1">└</span>
                                                    )}
                                                    <strong style={m.is_deleted
                                                        ? { textDecoration: 'line-through', color: '#999' }
                                                        : undefined}
                                                    >
                                                        {m.label}
                                                    </strong>
                                                    {m.has_children && !m.is_deleted && (
                                                        <span
                                                            className="badge badge-light border ml-1 small"
                                                            title="Has child menus — cannot delete until children are removed"
                                                        >
                                                            <i className="fas fa-sitemap mr-1"></i>parent
                                                        </span>
                                                    )}
                                                    <br />
                                                    <small className="text-muted">{m.key}</small>
                                                </div>
                                            </td>

                                            {/* Type */}
                                            <td className="align-middle">
                                                <span className={TYPE_COLORS[m.type] || 'badge bg-dark'}>
                                                    {m.type}
                                                </span>
                                                {m.tabbed && (
                                                    <span className="badge bg-light text-dark border ml-1">tabbed</span>
                                                )}
                                                {m.no_dropdown && (
                                                    <span className="badge bg-light text-dark border ml-1">simple</span>
                                                )}
                                            </td>

                                            {/* Route / Slug / Href */}
                                            <td className="align-middle small">
                                                {m.route_name && (
                                                    <span title="Named route">
                                                        <i className="fas fa-route text-success mr-1"></i>
                                                        {m.route_name}
                                                    </span>
                                                )}
                                                {m.slug && !m.route_name && (
                                                    <span title="Slug">
                                                        <i className="fas fa-link text-info mr-1"></i>
                                                        /{m.slug}
                                                    </span>
                                                )}
                                                {m.href && !m.route_name && !m.slug && (
                                                    <span title="Direct href">
                                                        <i className="fas fa-external-link-alt text-warning mr-1"></i>
                                                        {m.href}
                                                    </span>
                                                )}
                                                {!m.route_name && !m.slug && !m.href && (
                                                    <span className="text-muted">—</span>
                                                )}
                                            </td>

                                            {/* Sort order */}
                                            <td className="align-middle text-center">{m.sort_order}</td>

                                            {/* Active toggle — or deleted timestamp */}
                                            {activeStatus === 'deleted' ? (
                                                <td className="align-middle small text-danger">
                                                    <i className="fas fa-calendar-times mr-1"></i>
                                                    {m.deleted_at}
                                                </td>
                                            ) : (
                                                <td className="align-middle text-center">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleToggle(m.id)}
                                                        className={`btn btn-xs ${m.is_active ? 'btn-success' : 'btn-secondary'}`}
                                                        title={m.is_active ? 'Active — click to disable' : 'Inactive — click to enable'}
                                                    >
                                                        <i className={`fas ${m.is_active ? 'fa-toggle-on' : 'fa-toggle-off'}`}></i>
                                                    </button>
                                                </td>
                                            )}

                                            {/* Actions */}
                                            <td className="align-middle">
                                                {m.is_deleted ? (
                                                    /* ── Deleted row: only Restore ── */
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRestore(m.id)}
                                                        disabled={restoring === m.id}
                                                        className="btn btn-xs btn-success"
                                                        title="Restore this menu item"
                                                    >
                                                        <i className="fas fa-undo mr-1"></i>
                                                        {restoring === m.id ? 'Restoring…' : 'Restore'}
                                                    </button>
                                                ) : (
                                                    /* ── Normal row: Edit, Content, Delete ── */
                                                    <>
                                                        <Link
                                                            href={`/admin/nav-menus/${m.id}/edit`}
                                                            className="btn btn-xs btn-warning mr-1"
                                                            title="Edit"
                                                        >
                                                            <i className="fas fa-edit"></i>
                                                        </Link>

                                                        {m.type === 'link' && m.slug && !m.route_name && (
                                                            <Link
                                                                href={`/admin/nav-menus/${m.id}/content/edit`}
                                                                className="btn btn-xs btn-info mr-1"
                                                                title="Edit page content"
                                                            >
                                                                <i className="fas fa-file-alt"></i>
                                                            </Link>
                                                        )}

                                                        <button
                                                            type="button"
                                                            onClick={() => handleDelete(m.id, m.label)}
                                                            disabled={deleting === m.id || m.has_children}
                                                            className="btn btn-xs btn-danger"
                                                            title={m.has_children
                                                                ? 'Has child menus — delete children first'
                                                                : 'Soft-delete (recoverable)'}
                                                        >
                                                            <i className="fas fa-trash"></i>
                                                        </button>
                                                    </>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="card-footer text-muted small d-flex justify-content-between">
                        <span>
                            {isFiltered
                                ? `${menus.length} filtered result${menus.length !== 1 ? 's' : ''} · flat list`
                                : `${menus.length} item${menus.length !== 1 ? 's' : ''} · tree view`
                            }
                        </span>
                        <span>Cache auto-clears on every change.</span>
                    </div>
                </div>

                {/* ── Type guide ─────────────────────────────────────── */}
                <div className="card card-outline card-secondary">
                    <div className="card-header">
                        <h3 className="card-title">Type Guide</h3>
                    </div>
                    <div className="card-body">
                        <div className="d-flex flex-wrap" style={{ gap: '1rem' }}>
                            <div><span className="badge bg-primary">menu</span> — top navbar item</div>
                            <div><span className="badge bg-info">tab</span> — tab inside a mega-menu</div>
                            <div><span className="badge bg-warning text-dark">section</span> — heading group inside a tab</div>
                            <div><span className="badge bg-secondary">link</span> — actual clickable link</div>
                        </div>
                        <p className="mt-2 mb-0 text-muted small">
                            Hierarchy: <strong>menu → tab → section → link</strong>.
                            Deleted items can be recovered from the{' '}
                            <strong className="text-danger">Deleted</strong> tab above.
                            Parents cannot be deleted while they have active children.
                        </p>
                    </div>
                </div>

            </div>
        </AdminLayout>
    );
}
