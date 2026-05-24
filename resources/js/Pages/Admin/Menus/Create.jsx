import React, { useEffect, useRef } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';

const TYPES = ['menu', 'tab', 'section', 'link'];

const VALID_PARENT_TYPES = {
    menu:    [],
    tab:     ['menu'],
    section: ['tab'],
    link:    ['section'],
};

function slugify(str) {
    return str.toLowerCase().trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

export default function MenusCreate({ parents }) {
    const { data, setData, post, processing, errors } = useForm({
        label:       '',
        key:         '',
        type:        'link',
        parent_id:   '',
        route_name:  '',
        slug:        '',
        href:        '',
        tabbed:      false,
        no_dropdown: false,
        sort_order:  0,
        is_active:   true,
    });

    // Track whether slug was manually edited so we stop overwriting it
    const slugManuallyEdited = useRef(false);

    // Auto-generate key from label
    useEffect(() => {
        if (data.label) setData('key', slugify(data.label));
    }, [data.label]);

    // Auto-generate slug from label + parent root_key prefix
    useEffect(() => {
        if (slugManuallyEdited.current) return;
        if (!data.label) return;

        const labelSlug = slugify(data.label);

        if (data.parent_id && data.type === 'link') {
            const parent = parents.find(p => String(p.id) === String(data.parent_id));
            const prefix = parent?.root_key ? slugify(parent.root_key) : '';
            setData('slug', prefix ? `${prefix}/${labelSlug}` : labelSlug);
        } else {
            setData('slug', labelSlug);
        }
    }, [data.label, data.parent_id]);

    const filteredParents = parents.filter(
        (p) => VALID_PARENT_TYPES[data.type]?.includes(p.type)
    );

    const submit = (e) => {
        e.preventDefault();
        post('/admin/nav-menus');
    };

    return (
        <AdminLayout header="Add Menu Item">
            <Head title="Add Menu Item" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">New Menu Item</h3>
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
                                                slugManuallyEdited.current = false;
                                            }}
                                            className={`form-control ${errors.type ? 'is-invalid' : ''}`}
                                        >
                                            {TYPES.map((t) => (
                                                <option key={t} value={t}>{t}</option>
                                            ))}
                                        </select>
                                        {errors.type && <div className="invalid-feedback">{errors.type}</div>}
                                        <small className="text-muted">menu → tab → section → link</small>
                                    </div>

                                    {/* Parent */}
                                    {data.type !== 'menu' && (
                                        <div className="form-group">
                                            <label>Parent <span className="text-danger">*</span></label>
                                            <select
                                                value={data.parent_id}
                                                onChange={(e) => {
                                                    setData('parent_id', e.target.value);
                                                    slugManuallyEdited.current = false;
                                                }}
                                                className={`form-control ${errors.parent_id ? 'is-invalid' : ''}`}
                                            >
                                                <option value="">— Select parent —</option>
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
                                            onChange={(e) => {
                                                slugManuallyEdited.current = false;
                                                setData('label', e.target.value);
                                            }}
                                            className={`form-control ${errors.label ? 'is-invalid' : ''}`}
                                            placeholder="e.g. After Class 8"
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
                                            placeholder="auto-generated from label"
                                        />
                                        {errors.key && <div className="invalid-feedback">{errors.key}</div>}
                                        <small className="text-muted">Unique machine identifier.</small>
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
                                                <small className="text-muted">Use an existing Laravel named route.</small>
                                            </div>

                                            <div className="form-group">
                                                <label>
                                                    Slug
                                                    <small className="text-muted ml-2">(auto-generated — edit freely)</small>
                                                </label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">/</span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        value={data.slug}
                                                        onChange={(e) => {
                                                            slugManuallyEdited.current = true;
                                                            setData('slug', e.target.value);
                                                        }}
                                                        className={`form-control ${errors.slug ? 'is-invalid' : ''}`}
                                                        placeholder="e.g. careers/my-new-page"
                                                    />
                                                </div>
                                                {errors.slug && <div className="invalid-feedback">{errors.slug}</div>}
                                                <small className="text-muted">
                                                    Auto-filled from label + parent category. Change the prefix if needed (e.g. <code>careers/</code>, <code>courses/</code>).
                                                </small>
                                            </div>

                                            <div className="form-group mb-0">
                                                <label>Direct URL</label>
                                                <input
                                                    type="text"
                                                    value={data.href}
                                                    onChange={(e) => setData('href', e.target.value)}
                                                    className={`form-control ${errors.href ? 'is-invalid' : ''}`}
                                                    placeholder="https://example.com"
                                                />
                                                {errors.href && <div className="invalid-feedback">{errors.href}</div>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Flags */}
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="tabbed"
                                                    checked={data.tabbed}
                                                    onChange={(e) => setData('tabbed', e.target.checked)} />
                                                <label className="custom-control-label" htmlFor="tabbed">Tabbed (has tab children)</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="no_dropdown"
                                                    checked={data.no_dropdown}
                                                    onChange={(e) => setData('no_dropdown', e.target.checked)} />
                                                <label className="custom-control-label" htmlFor="no_dropdown">Simple link (no dropdown)</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Sort Order</label>
                                                <input type="number" min="0" value={data.sort_order}
                                                    onChange={(e) => setData('sort_order', parseInt(e.target.value) || 0)}
                                                    className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="custom-control custom-switch mt-4">
                                                <input type="checkbox" className="custom-control-input" id="is_active"
                                                    checked={data.is_active}
                                                    onChange={(e) => setData('is_active', e.target.checked)} />
                                                <label className="custom-control-label" htmlFor="is_active">Active</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <button type="submit" disabled={processing} className="btn btn-primary mr-2">
                                            {processing ? 'Saving…' : 'Create Menu Item'}
                                        </button>
                                        <Link href="/admin/nav-menus" className="btn btn-secondary">Cancel</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card card-outline card-primary">
                            <div className="card-header"><h3 className="card-title">How it works</h3></div>
                            <div className="card-body small text-muted">
                                <p><strong>Hierarchy:</strong> menu → tab → section → link</p>
                                <p><strong>Slug</strong> — auto-filled as <code>category/page-name</code> from your label and parent. Edit freely.</p>
                                <p><strong>Route Name</strong> — only if pointing to an existing Laravel named route.</p>
                                <p className="mb-0"><strong>Direct URL</strong> — external or absolute link.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
