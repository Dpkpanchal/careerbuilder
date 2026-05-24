import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';

import { CKEditor } from '@ckeditor/ckeditor5-react';

import {
    ClassicEditor,
    Essentials,
    Paragraph,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    BlockQuote,
    List,
    Table,
    TableToolbar,
    Link as CKLink,
    Heading
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

export default function PageContentEdit({ menu, content }) {
    const { flash = {} } = usePage().props;
    const [sourceMode, setSourceMode] = useState(false);

    const { data, setData, put, processing, errors } = useForm({
        html_content: content.html_content ?? '',
        meta_title: content.meta_title ?? '',
        meta_description: content.meta_description ?? '',
        is_published: content.is_published ?? false,
    });

    const toggleSourceMode = () => {
        setSourceMode((prev) => !prev);
    };

    const submit = (e) => {
        e.preventDefault();
        put(`/admin/nav-menus/${menu.id}/content`);
    };

    return (
        <AdminLayout header={`Edit Content: ${menu.label}`}>
            <Head title={`Edit Content: ${menu.label}`} />

            <div className="container-fluid">
                {flash.success && (
                    <div className="alert alert-success alert-dismissible fade show">
                        {flash.success}

                        <button
                            type="button"
                            className="close"
                            data-dismiss="alert"
                        >
                            <span>&times;</span>
                        </button>
                    </div>
                )}

                <div className="row">
                    {/* MAIN CONTENT */}
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h3 className="card-title mb-0">
                                    Page Content

                                    <span
                                        className="badge bg-info ml-2 text-white"
                                        style={{ fontSize: '0.7rem' }}
                                    >
                                        /{menu.slug}
                                    </span>
                                </h3>

                                <Link
                                    href="/admin/nav-menus"
                                    className="btn btn-sm btn-secondary"
                                >
                                    ← Back to Menus
                                </Link>
                            </div>

                            <div className="card-body">
                                <form onSubmit={submit}>
                                    {/* HTML CONTENT */}
                                    <div className="form-group">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <label className="font-weight-bold mb-0">
                                                Page Content (HTML)
                                            </label>

                                            <button
                                                type="button"
                                                className={`btn btn-sm ${
                                                    sourceMode
                                                        ? 'btn-warning'
                                                        : 'btn-outline-secondary'
                                                }`}
                                                onClick={toggleSourceMode}
                                            >
                                                {sourceMode
                                                    ? '⬅ Visual Editor'
                                                    : '</> HTML Source'}
                                            </button>
                                        </div>

                                        {sourceMode ? (
                                            <textarea
                                                rows={20}
                                                value={data.html_content}
                                                onChange={(e) =>
                                                    setData(
                                                        'html_content',
                                                        e.target.value
                                                    )
                                                }
                                                className={`form-control font-monospace ${
                                                    errors.html_content
                                                        ? 'is-invalid'
                                                        : ''
                                                }`}
                                                style={{
                                                    fontSize: '0.85rem',
                                                    fontFamily: 'monospace',
                                                }}
                                                placeholder="Paste raw HTML here..."
                                            />
                                        ) : (
                                            <div
                                                className={
                                                    errors.html_content
                                                        ? 'border border-danger rounded'
                                                        : ''
                                                }
                                            >
                                               <CKEditor
    editor={ClassicEditor}
    data={data.html_content}
    onChange={(_event, editor) => {
        setData('html_content', editor.getData());
    }}
    config={{
        licenseKey: 'GPL',

        plugins: [
            Essentials,
            Paragraph,
            Bold,
            Italic,
            Underline,
            Strikethrough,
            BlockQuote,
            List,
            Table,
            TableToolbar,
            CKLink,
            Heading,
        ],

        toolbar: [
            'heading',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            '|',
            'bulletedList',
            'numberedList',
            '|',
            'blockQuote',
            'insertTable',
            '|',
            'link',
            '|',
            'undo',
            'redo',
        ],
    }}
/>
                                            </div>
                                        )}

                                        {errors.html_content && (
                                            <div className="text-danger small mt-1">
                                                {errors.html_content}
                                            </div>
                                        )}

                                        {sourceMode && (
                                            <small className="text-muted">
                                                Paste raw HTML here. Switch back
                                                to Visual Editor to preview.
                                            </small>
                                        )}
                                    </div>

                                    {/* META TITLE */}
                                    <div className="form-group">
                                        <label>
                                            SEO Title{' '}
                                            <small className="text-muted">
                                                (Overrides browser title)
                                            </small>
                                        </label>

                                        <input
                                            type="text"
                                            value={data.meta_title}
                                            onChange={(e) =>
                                                setData(
                                                    'meta_title',
                                                    e.target.value
                                                )
                                            }
                                            className={`form-control ${
                                                errors.meta_title
                                                    ? 'is-invalid'
                                                    : ''
                                            }`}
                                            placeholder={menu.label}
                                        />

                                        {errors.meta_title && (
                                            <div className="invalid-feedback">
                                                {errors.meta_title}
                                            </div>
                                        )}
                                    </div>

                                    {/* META DESCRIPTION */}
                                    <div className="form-group">
                                        <label>
                                            Meta Description{' '}
                                            <small className="text-muted">
                                                (Max 500 chars)
                                            </small>
                                        </label>

                                        <textarea
                                            rows={3}
                                            value={data.meta_description}
                                            onChange={(e) =>
                                                setData(
                                                    'meta_description',
                                                    e.target.value
                                                )
                                            }
                                            className={`form-control ${
                                                errors.meta_description
                                                    ? 'is-invalid'
                                                    : ''
                                            }`}
                                            placeholder="Brief description for search engines..."
                                        />

                                        {errors.meta_description && (
                                            <div className="invalid-feedback">
                                                {errors.meta_description}
                                            </div>
                                        )}
                                    </div>

                                    {/* PUBLISH */}
                                    <div className="form-group">
                                        <div className="custom-control custom-switch">
                                            <input
                                                type="checkbox"
                                                id="is_published"
                                                className="custom-control-input"
                                                checked={data.is_published}
                                                onChange={(e) =>
                                                    setData(
                                                        'is_published',
                                                        e.target.checked
                                                    )
                                                }
                                            />

                                            <label
                                                htmlFor="is_published"
                                                className="custom-control-label"
                                            >
                                                Published

                                                <small className="text-muted ml-2">
                                                    (Visitors see Coming Soon
                                                    when unpublished)
                                                </small>
                                            </label>
                                        </div>
                                    </div>

                                    {/* BUTTONS */}
                                    <div className="mt-4">
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="btn btn-primary mr-2"
                                        >
                                            {processing
                                                ? 'Saving...'
                                                : 'Save Content'}
                                        </button>

                                        <Link
                                            href="/admin/nav-menus"
                                            className="btn btn-secondary"
                                        >
                                            Cancel
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* SIDEBAR */}
                    <div className="col-md-3">
                        <div className="card card-outline card-primary">
                            <div className="card-header">
                                <h3 className="card-title">
                                    Page Info
                                </h3>
                            </div>

                            <div className="card-body small">
                                <table className="table table-sm table-borderless mb-0">
                                    <tbody>
                                        <tr>
                                            <td className="text-muted">
                                                Menu Key
                                            </td>

                                            <td>
                                                <code>{menu.key}</code>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-muted">
                                                Slug
                                            </td>

                                            <td>
                                                <code>/{menu.slug}</code>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-muted">
                                                Preview
                                            </td>

                                            <td>
                                                <a
                                                    href={`/${menu.slug}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn btn-xs btn-outline-secondary"
                                                >
                                                    View page ↗
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="card card-outline card-warning mt-3">
                            <div className="card-header">
                                <h3 className="card-title small">
                                    Tips
                                </h3>
                            </div>

                            <div className="card-body small text-muted">
                                <p>
                                    Use the editor to create rich HTML content.
                                </p>

                                <p>
                                    Toggle <strong>Published</strong> when page
                                    is ready.
                                </p>

                                <p className="mb-0">
                                    Unpublished pages show a Coming Soon screen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}