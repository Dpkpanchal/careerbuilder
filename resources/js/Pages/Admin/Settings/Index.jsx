// resources/js/Pages/Admin/Settings/Index.jsx
import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm, router } from '@inertiajs/react';

const SettingsIndex = ({ settings, groups }) => {
    const { data, setData, post, processing } = useForm({
        settings: Object.fromEntries(
            Object.entries(settings).flatMap(([group, groupSettings]) =>
                groupSettings.map(setting => [setting.key, setting.value])
            )
        ),
    });

    const [activeGroup, setActiveGroup] = useState(groups[0] || 'general');

    const handleBulkUpdate = (e) => {
        e.preventDefault();
        post('/admin/settings/bulk-update');
    };

    const handleSettingChange = (key, value) => {
        setData('settings', {
            ...data.settings,
            [key]: value,
        });
    };

    const renderSettingField = (setting) => {
        const value = data.settings[setting.key] || '';

        switch (setting.type) {
            case 'textarea':
                return (
                    <textarea
                        className="form-control"
                        value={value}
                        onChange={(e) => handleSettingChange(setting.key, e.target.value)}
                        rows="3"
                    />
                );
            
            case 'boolean':
                return (
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            checked={!!value}
                            onChange={(e) => handleSettingChange(setting.key, e.target.checked ? '1' : '0')}
                            id={`setting-${setting.key}`}
                        />
                        <label className="form-check-label" htmlFor={`setting-${setting.key}`}>
                            {value ? 'Enabled' : 'Disabled'}
                        </label>
                    </div>
                );
            
            case 'select':
                return (
                    <select
                        className="form-control"
                        value={value}
                        onChange={(e) => handleSettingChange(setting.key, e.target.value)}
                    >
                        {setting.options?.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                );
            
            case 'number':
                return (
                    <input
                        type="number"
                        className="form-control"
                        value={value}
                        onChange={(e) => handleSettingChange(setting.key, e.target.value)}
                    />
                );
            
            default: // text, email, url
                return (
                    <input
                        type={setting.type === 'email' ? 'email' : setting.type === 'url' ? 'url' : 'text'}
                        className="form-control"
                        value={value}
                        onChange={(e) => handleSettingChange(setting.key, e.target.value)}
                    />
                );
        }
    };

    return (
        <AdminLayout header="Settings Management">
            <Head title="Settings Management" />
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Settings Groups</h3>
                            </div>
                            <div className="card-body p-0">
                                <ul className="nav nav-pills flex-column">
                                    {groups.map((group) => (
                                        <li key={group} className="nav-item">
                                            <button
                                                className={`nav-link w-100 text-left ${activeGroup === group ? 'active' : ''}`}
                                                onClick={() => setActiveGroup(group)}
                                                style={{ 
                                                    background: 'none', 
                                                    border: 'none', 
                                                    textTransform: 'capitalize' 
                                                }}
                                            >
                                                <i className="fas fa-cog mr-2"></i>
                                                {group}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="card mt-3">
                            <div className="card-body text-center">
                                <Link 
                                    href="/admin/settings/create" 
                                    className="btn btn-primary btn-block"
                                >
                                    <i className="fas fa-plus mr-2"></i>
                                    Add New Setting
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <form onSubmit={handleBulkUpdate}>
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title text-capitalize">{activeGroup} Settings</h3>
                                    <div className="card-tools">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-sm"
                                            disabled={processing}
                                        >
                                            {processing ? 'Saving...' : 'Save Settings'}
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    {settings[activeGroup]?.length > 0 ? (
                                        settings[activeGroup].map((setting) => (
                                            <div key={setting.id} className="form-group row">
                                                <label 
                                                    htmlFor={`setting-${setting.key}`}
                                                    className="col-sm-3 col-form-label"
                                                >
                                                    <strong>{setting.label}</strong>
                                                    {setting.is_public && (
                                                        <span className="badge badge-info ml-2">Public</span>
                                                    )}
                                                    {setting.description && (
                                                        <small className="form-text text-muted d-block">
                                                            {setting.description}
                                                        </small>
                                                    )}
                                                </label>
                                                <div className="col-sm-6">
                                                    {renderSettingField(setting)}
                                                    <small className="form-text text-muted">
                                                        Key: <code>{setting.key}</code>
                                                    </small>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="btn-group float-right">
                                                        <Link
                                                            href={`/admin/settings/${setting.id}/edit`}
                                                            className="btn btn-info btn-sm"
                                                            title="Edit Setting"
                                                        >
                                                            <i className="fas fa-edit"></i>
                                                        </Link>
                                                        <Link
                                                            href={`/admin/settings/${setting.id}`}
                                                            method="delete"
                                                            as="button"
                                                            className="btn btn-danger btn-sm"
                                                            title="Delete Setting"
                                                            onClick={(e) => {
                                                                if (!confirm('Are you sure you want to delete this setting?')) {
                                                                    e.preventDefault();
                                                                }
                                                            }}
                                                        >
                                                            <i className="fas fa-trash"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center py-4">
                                            <i className="fas fa-cogs fa-3x text-muted mb-3"></i>
                                            <p className="text-muted">No settings found for this group.</p>
                                            <Link 
                                                href="/admin/settings/create" 
                                                className="btn btn-primary"
                                            >
                                                <i className="fas fa-plus mr-2"></i>
                                                Add New Setting
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                {settings[activeGroup]?.length > 0 && (
                                    <div className="card-footer">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={processing}
                                        >
                                            {processing ? (
                                                <>
                                                    <i className="fas fa-spinner fa-spin mr-2"></i>
                                                    Saving...
                                                </>
                                            ) : (
                                                <>
                                                    <i className="fas fa-save mr-2"></i>
                                                    Save All {activeGroup} Settings
                                                </>
                                            )}
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-default ml-2"
                                            onClick={() => router.reload()}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default SettingsIndex;