import React from "react";
import { Head, Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout"; // adjust path if your admin layout lives elsewhere

export default function Index({ overview }) {
    const stats = overview?.stats || [];
    const quickAccessItems = overview?.quick_access_items || [];
    const rulesLeft = overview?.rules_left || [];
    const rulesRight = overview?.rules_right || [];
    const schemes = overview?.schemes || [];

    return (
        <AdminLayout>
            <Head title="Scholarship Overview Page" />

            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h4 mb-0">Scholarship Overview Page</h1>

                <Link
                    href={route("admin.scholarship-overview.edit")}
                    className="btn btn-primary"
                >
                    Edit Content
                </Link>
            </div>

            {/* Hero */}
            <div className="card mb-4">
                <div className="card-header">
                    <strong>Hero</strong>
                </div>
                <div className="card-body">
                    <p className="mb-1">
                        <strong>Title:</strong> {overview?.hero_title}
                    </p>
                    <p className="mb-0">
                        <strong>Breadcrumb:</strong> {overview?.hero_breadcrumb}
                    </p>
                </div>
            </div>

            {/* Intro */}
            <div className="card mb-4">
                <div className="card-header">
                    <strong>Main Description</strong>
                </div>
                <div className="card-body">
                    <p className="mb-1">
                        <strong>{overview?.intro_title}</strong>
                    </p>
                    <p className="text-muted small mb-3">
                        {overview?.intro_subtitle}
                    </p>
                    <p>{overview?.paragraph_1}</p>
                    <p className="mb-0">{overview?.paragraph_2}</p>
                </div>
            </div>

            {/* Stats */}
            <div className="card mb-4">
                <div className="card-header">
                    <strong>Key Metrics ({stats.length})</strong>
                </div>
                <div className="card-body">
                    <div className="row">
                        {stats.map((s, i) => (
                            <div className="col-md-4 mb-2" key={i}>
                                <div className="border rounded p-2">
                                    <div className="small text-muted">
                                        {s.label}
                                    </div>
                                    <div className="fw-bold">{s.value}</div>
                                    <div className="small">{s.meta}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick access */}
            <div className="card mb-4">
                <div className="card-header">
                    <strong>Quick Access ({quickAccessItems.length})</strong>
                </div>
                <div className="card-body">
                    <ul className="mb-3">
                        {quickAccessItems.map((item, i) => (
                            <li key={i}>
                                {item.text} —{" "}
                                <a
                                    href={item.link_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.link_label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <p className="small text-muted mb-0">
                        {overview?.quick_access_note}
                    </p>
                </div>
            </div>

            {/* Rules */}
            <div className="card mb-4">
                <div className="card-header">
                    <strong>Rules</strong>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <ul>
                                {rulesLeft.map((r, i) => (
                                    <li key={i}>{r}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                {rulesRight.map((r, i) => (
                                    <li key={i}>{r}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Schemes at a glance */}
            <div className="card mb-4">
                <div className="card-header">
                    <strong>Schemes at a Glance ({schemes.length} rows)</strong>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered align-middle mb-0">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Scheme</th>
                                    <th>Class of study</th>
                                    <th>Website</th>
                                    <th>Min marks</th>
                                    <th>Income</th>
                                </tr>
                            </thead>
                            <tbody>
                                {schemes.map((row, i) => (
                                    <tr key={i}>
                                        <td>{row.no}</td>
                                        <td>{row.name}</td>
                                        <td>{row.class_of_study}</td>
                                        <td>{row.website}</td>
                                        <td>{row.min_marks}</td>
                                        <td>{row.income}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Table note */}
            <div className="card mb-4">
                <div className="card-header">
                    <strong>Note under Schemes Table</strong>
                </div>
                <div className="card-body">
                    <p className="mb-0">{overview?.table_note}</p>
                </div>
            </div>
        </AdminLayout>
    );
}
