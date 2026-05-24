import React, { useEffect } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';

const TYPES = ['menu', 'tab', 'section', 'link'];

const VALID_PARENT_TYPES = {
    menu:    [],
    tab:     ['menu'],
    section: ['tab'],
    link:    ['section'],
};

export default function MenusEdit({ menu, parents }) {
    const { data, setData, put, processing, errors } = useForm({
        label:       menu.label       ?? '',
        key:         menu.key         ?? '',
        type:        menu.type        ?? 'link',
        parent_id:   menu.parent_id   ?? '',
        route_name:  menu.route_name  ?? '',
        slug:        menu.slug        ?? '',
        href:        menu.href        ?? '',
        tabbed:      menu.tabbed      ?? false,
        no_dropdown: menu.no_dropdown ?? false,
        sort_order:  menu.sort_order  ?? 0,
        is_active:   menu.is_active   ?? true,
    });

    const filteredParents = parents.filter(
        (p) => VALID_PARENT_TYPES[data.type]?.includes(p.type)
    );

    const submit = (e) => {
        e.preventDefault();
        put(`/admin/nav-menus/${menu.id}`);
    };

    return (
        <AdminLayout header="Edit Menu Item">
            <Head title="Edit Menu Item" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h3 className="card-title mb-0">
                                    Editing: <strong>{menu.label}</strong>
                                    <span className="badge bg-secondary ml-2">{menu.type}</span>
                                </h3>
                                <span className="text-muted small">ID #{menu.id}</span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submit}>

                                    {/* Type */}
                                    <div className="form-group">
                                        <label>Type <span className="text-danger">*</span></label>
                                        <select
                                            value={data.type}
                                            onChange={(e) => {
                                                setData('type', e.target.value);
                                                setData('parent_id', '');
                                            }}
                                            className={`form-control ${errors.type ? 'is-invalid' : ''}`}
                                        >
                                            {TYPES.map((t) => (
                                                <option key={t} value={t}>{t}</option>
                                            ))}
                                        </select>
                                        {errors.type && <div className="invalid-feedback">{errors.type}</div>}
                                    </div>

                                    {/* Parent */}
                                    {data.type !== 'menu' && (
                                        <div className="form-group">
                                            <label>Parent</label>
                                            <select
                                                value={data.parent_id}
                                                onChange={(e) => setData('parent_id', e.target.value)}
                                                className={`form-control ${errors.parent_id ? 'is-invalid' : ''}`}
                                            >
                                                <option value="">— None —</option>
                                                {filteredParents.map((p) => (
                                                    <option key={p.id} value={p.id}>{p.label}</option>
                                                ))}
                                            </select>
                                            {errors.parent_id && <div className="invalid-feedback">{errors.parent_id}</div>}
                                        </div>
                                    )}

                                    {/* Label */}
                                    <div className="form-group">
                                        <label>Label <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            value={data.label}
                                            onChange={(e) => setData('label', e.target.value)}
                                            className={`form-control ${errors.label ? 'is-invalid' : ''}`}
                                        />
                                        {errors.label && <div className="invalid-feedback">{errors.label}</div>}
                                    </div>

                                    {/* Key */}
                                    <div className="form-group">
                                        <label>Key <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            value={data.key}
                                            onChange={(e) => setData('key', e.target.value)}
                                            className={`form-control ${errors.key ? 'is-invalid' : ''}`}
                                        />
                                        {errors.key && <div className="invalid-feedback">{errors.key}</div>}
                                    </div>

                                    {/* URL Source */}
                                    <div className="card card-outline card-info mt-3">
                                        <div className="card-header"><h3 className="card-title small">URL Source (pick one)</h3></div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label>Route Name</label>
                                                <input
                                                    type="text"
                                                    value={data.route_name}
                                                    onChange={(e) => setData('route_name', e.target.value)}
                                                    className={`form-control ${errors.route_name ? 'is-invalid' : ''}`}
                                                    placeholder="e.g. career.engineering"
                                                />
                                                {errors.route_name && <div className="invalid-feedback">{errors.route_name}</div>}
                                            </div>

                                            <div className="form-group">
                                                <label>Slug</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">/</span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        value={data.slug}
                                                        onChange={(e) => setData('slug', e.target.value)}
                                                        className={`form-control ${errors.slug ? 'is-invalid' : ''}`}
                                                        placeholder="e.g. new-career-path"
                                                    />
                                                </div>
                                                {errors.slug && <div className="invalid-feedback">{errors.slug}</div>}
                                            </div>

                                            <div className="form-group mb-0">
                                                <label>Direct URL</label>
                                                <input
                                                    type="text"
                                                    value={data.href}
                                                    onChange={(e) => setData('href', e.target.value)}
                                                    className={`form-control ${errors.href ? 'is-invalid' : ''}`}
                                                    placeholder="https://..."
                                                />
                                                {errors.href && <div className="invalid-feedback">{errors.href}</div>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Flags */}
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <div className="custom-control custom-switch">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="tabbed"
                                                    checked={data.tabbed}
                                                    onChange={(e) => setData('tabbed', e.target.checked)}
                                                />
                                                <label className="custom-control-label" htmlFor="tabbed">
                                                    Tabbed
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="custom-control custom-switch">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="no_dropdown"
                                                    checked={data.no_dropdown}
                                                    onChange={(e) => setData('no_dropdown', e.target.checked)}
                                                />
                                                <label className="custom-control-label" htmlFor="no_dropdown">
                                                    Simple link (no dropdown)
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Sort Order</label>
                                                <input
                                                    type="number"
                                                    min="0"
                                                    value={data.sort_order}
                                                    onChange={(e) => setData('sort_order', parseInt(e.target.value) || 0)}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <div className="custom-control custom-switch mt-4">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="is_active"
                                                        checked={data.is_active}
                                                        onChange={(e) => setData('is_active', e.target.checked)}
                                                    />
                                                    <label className="custom-control-label" htmlFor="is_active">
                                                        Active
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <button type="submit" disabled={processing} className="btn btn-primary mr-2">
                                            {processing ? 'Saving…' : 'Save Changes'}
                                        </button>
                                        <Link href="/admin/nav-menus" className="btn btn-secondary">Cancel</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Meta panel */}
                    <div className="col-md-4">
                        <div className="card card-outline card-warning">
                            <div className="card-header"><h3 className="card-title">Item Info</h3></div>
                            <div className="card-body small">
                                <table className="table table-sm table-borderless mb-0">
                                    <tbody>
                                        <tr><td className="text-muted">ID</td><td>#{menu.id}</td></tr>
                                        <tr><td className="text-muted">Key</td><td><code>{menu.key}</code></td></tr>
                                        <tr><td className="text-muted">Type</td><td>{menu.type}</td></tr>
                                        <tr>
                                            <td className="text-muted">Status</td>
                                            <td>
                                                <span className={`badge ${menu.is_active ? 'bg-success' : 'bg-secondary'}`}>
                                                    {menu.is_active ? 'Active' : 'Inactive'}
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
