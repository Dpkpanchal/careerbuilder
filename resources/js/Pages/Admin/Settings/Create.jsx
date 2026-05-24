// resources/js/Pages/Admin/Settings/Create.jsx
import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';

const SettingsCreate = ({ types, groups }) => {
    const { data, setData, post, processing, errors } = useForm({
        key: '',
        label: '',
        type: 'text',
        group: 'general',
        value: '',
        description: '',
        options: '',
        order: 0,
        is_public: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post('/admin/settings');
    };

    return (
        <AdminLayout header="Create Setting">
            <Head title="Create Setting" />
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Create New Setting</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submit}>
                                    <div className="form-group">
                                        <label htmlFor="key">Setting Key *</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.key ? 'is-invalid' : ''}`}
                                            id="key"
                                            value={data.key}
                                            onChange={e => setData('key', e.target.value)}
                                            placeholder="e.g., app_name, contact_email"
                                            required
                                        />
                                        {errors.key && (
                                            <div className="invalid-feedback">{errors.key}</div>
                                        )}
                                        <small className="form-text text-muted">
                                            Unique identifier for this setting. Use snake_case format.
                                        </small>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="label">Display Label *</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.label ? 'is-invalid' : ''}`}
                                            id="label"
                                            value={data.label}
                                            onChange={e => setData('label', e.target.value)}
                                            placeholder="e.g., Application Name"
                                            required
                                        />
                                        {errors.label && (
                                            <div className="invalid-feedback">{errors.label}</div>
                                        )}
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="type">Field Type *</label>
                                                <select
                                                    className={`form-control ${errors.type ? 'is-invalid' : ''}`}
                                                    id="type"
                                                    value={data.type}
                                                    onChange={e => setData('type', e.target.value)}
                                                    required
                                                >
                                                    {types.map((type) => (
                                                        <option key={type} value={type}>
                                                            {type.charAt(0).toUpperCase() + type.slice(1)}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors.type && (
                                                    <div className="invalid-feedback">{errors.type}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="group">Group *</label>
                                                <select
                                                    className={`form-control ${errors.group ? 'is-invalid' : ''}`}
                                                    id="group"
                                                    value={data.group}
                                                    onChange={e => setData('group', e.target.value)}
                                                    required
                                                >
                                                    {groups.map((group) => (
                                                        <option key={group} value={group}>
                                                            {group.charAt(0).toUpperCase() + group.slice(1)}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors.group && (
                                                    <div className="invalid-feedback">{errors.group}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {data.type === 'select' && (
                                        <div className="form-group">
                                            <label htmlFor="options">Options (comma-separated)</label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.options ? 'is-invalid' : ''}`}
                                                id="options"
                                                value={data.options}
                                                onChange={e => setData('options', e.target.value)}
                                                placeholder="e.g., option1, option2, option3"
                                            />
                                            {errors.options && (
                                                <div className="invalid-feedback">{errors.options}</div>
                                            )}
                                            <small className="form-text text-muted">
                                                Enter options separated by commas for select field type.
                                            </small>
                                        </div>
                                    )}

                                    <div className="form-group">
                                        <label htmlFor="value">Default Value</label>
                                        {data.type === 'textarea' ? (
                                            <textarea
                                                className={`form-control ${errors.value ? 'is-invalid' : ''}`}
                                                id="value"
                                                value={data.value}
                                                onChange={e => setData('value', e.target.value)}
                                                rows="3"
                                            />
                                        ) : data.type === 'boolean' ? (
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    checked={data.value === '1'}
                                                    onChange={e => setData('value', e.target.checked ? '1' : '0')}
                                                    id="value"
                                                />
                                                <label className="form-check-label" htmlFor="value">
                                                    Enabled
                                                </label>
                                            </div>
                                        ) : (
                                            <input
                                                type={data.type === 'number' ? 'number' : 'text'}
                                                className={`form-control ${errors.value ? 'is-invalid' : ''}`}
                                                id="value"
                                                value={data.value}
                                                onChange={e => setData('value', e.target.value)}
                                            />
                                        )}
                                        {errors.value && (
                                            <div className="invalid-feedback">{errors.value}</div>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea
                                            className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                                            id="description"
                                            value={data.description}
                                            onChange={e => setData('description', e.target.value)}
                                            rows="2"
                                            placeholder="Brief description of what this setting does..."
                                        />
                                        {errors.description && (
                                            <div className="invalid-feedback">{errors.description}</div>
                                        )}
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="order">Display Order</label>
                                                <input
                                                    type="number"
                                                    className={`form-control ${errors.order ? 'is-invalid' : ''}`}
                                                    id="order"
                                                    value={data.order}
                                                    onChange={e => setData('order', parseInt(e.target.value) || 0)}
                                                />
                                                {errors.order && (
                                                    <div className="invalid-feedback">{errors.order}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <div className="form-check mt-4">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        checked={data.is_public}
                                                        onChange={e => setData('is_public', e.target.checked)}
                                                        id="is_public"
                                                    />
                                                    <label className="form-check-label" htmlFor="is_public">
                                                        Public Setting
                                                    </label>
                                                    <small className="form-text text-muted d-block">
                                                        Public settings can be accessed without authentication.
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <button 
                                            type="submit" 
                                            className="btn btn-primary" 
                                            disabled={processing}
                                        >
                                            {processing ? 'Creating...' : 'Create Setting'}
                                        </button>
                                        <Link 
                                            href="/admin/settings" 
                                            className="btn btn-default ml-2"
                                        >
                                            Cancel
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Field Types Guide</h3>
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt>Text</dt>
                                    <dd>Single line text input</dd>
                                    
                                    <dt>Textarea</dt>
                                    <dd>Multi-line text input</dd>
                                    
                                    <dt>Boolean</dt>
                                    <dd>Checkbox for true/false values</dd>
                                    
                                    <dt>Select</dt>
                                    <dd>Dropdown with predefined options</dd>
                                    
                                    <dt>Number</dt>
                                    <dd>Numeric input field</dd>
                                    
                                    <dt>Email</dt>
                                    <dd>Email input with validation</dd>
                                    
                                    <dt>URL</dt>
                                    <dd>URL input with validation</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default SettingsCreate;