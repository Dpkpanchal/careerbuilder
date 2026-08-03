import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ jobGroups, sectors = [], filters = {} }) {

    const [search, setSearch] = useState(filters.search || "");
    const [sectorId, setSectorId] = useState(filters.sector_id || "");

    const {
        data: rows = [],
        links = [],
        from,
        to,
        total,
    } = jobGroups;

    const applyFilters = (overrides = {}) => {

        const params = {
            search: overrides.search !== undefined ? overrides.search : search,
            sector_id: overrides.sector_id !== undefined ? overrides.sector_id : sectorId,
        };

        Object.keys(params).forEach((key) => {
            if (!params[key]) delete params[key];
        });

        router.get("/admin/job-groups", params, {
            preserveScroll: true,
            preserveState: true,
        });

    };

    const goToPage = (url) => {

        if (!url) return;

        router.get(url, {}, {
            preserveScroll: true,
            preserveState: true,
        });

    };

    const deleteGroup = (id) => {

        if (confirm("Delete this job group and all its rows?")) {

            router.delete(`/admin/job-groups/${id}`, {
                preserveScroll: true,
            });

        }

    };

    return (

        <AdminLayout header="Jobs Opportunities">

            <Head title="Job Groups" />

            <div className="container-fluid">

                <div className="card">

                    <div className="card-header">

                        <div className="row align-items-center">

                            <div className="col-md-6">
                                <h3 className="card-title mb-0">Job Groups</h3>
                            </div>

                            <div className="col-md-6 text-right">

                                <Link href="/admin/job-groups/create" className="btn btn-primary">
                                    <i className="fas fa-plus mr-1"></i>
                                    Create
                                </Link>

                            </div>

                        </div>

                    </div>

                    <div className="card-body border-bottom d-flex flex-wrap gap-2">

                        <input
                            type="text"
                            className="form-control mr-2"
                            style={{ maxWidth: 260 }}
                            placeholder="Search recruiter / type..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onBlur={() => applyFilters({ search })}
                            onKeyDown={(e) => e.key === "Enter" && applyFilters({ search })}
                        />

                        <select
                            className="form-control"
                            style={{ maxWidth: 240 }}
                            value={sectorId}
                            onChange={(e) => {
                                setSectorId(e.target.value);
                                applyFilters({ sector_id: e.target.value });
                            }}
                        >

                            <option value="">All Sectors</option>

                            {sectors.map(sector => (

                                <option key={sector.id} value={sector.id}>
                                    {sector.title}
                                </option>

                            ))}

                        </select>

                    </div>

                    <div className="card-body table-responsive p-0">

                        <table className="table mb-0">

                            <thead>

                            <tr>
                                <th width="60">#</th>
                                <th>Sector</th>
                                <th>Recruited By / Type</th>
                                <th>Website</th>
                                <th width="90" className="text-center">Rows</th>
                                <th width="160" className="text-center">Action</th>
                            </tr>

                            </thead>

                            <tbody>

                            {rows.length ? (

                                rows.map((item, index) => (

                                    <tr key={item.id}>

                                        <td className="text-muted">{from ? from + index : index + 1}</td>

                                        <td>{item.sector?.title}</td>

                                        <td className="font-weight-600">{item.label}</td>

                                        <td>
                                            {item.website ? (
                                                <a href={item.website} target="_blank" rel="noreferrer">
                                                    {item.website}
                                                </a>
                                            ) : (
                                                <span className="text-muted">—</span>
                                            )}
                                        </td>

                                        <td className="text-center">{item.rows_count}</td>

                                        <td className="text-center">

                                            <Link
                                                href={`/admin/job-groups/${item.id}/edit`}
                                                className="btn btn-outline-info btn-sm mr-1"
                                                title="Edit"
                                            >
                                                <i className="fas fa-edit"></i>
                                            </Link>

                                            {/* <button
                                                className="btn btn-outline-danger btn-sm"
                                                onClick={() => deleteGroup(item.id)}
                                                title="Delete"
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button> */}

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>
                                    <td colSpan="6" className="text-center text-muted py-4">
                                        No Records Found
                                    </td>
                                </tr>

                            )}

                            </tbody>

                        </table>

                    </div>

                    {rows.length > 0 && (

                        <div className="card-footer d-flex justify-content-between align-items-center flex-wrap">

                            <div className="text-muted small">
                                Showing {from} to {to} of {total} entries
                            </div>

                            <nav>

                                <ul className="pagination mb-0">

                                    {links.map((link, idx) => (

                                        <li
                                            key={idx}
                                            className={`page-item ${link.active ? "active" : ""} ${!link.url ? "disabled" : ""}`}
                                        >

                                            <button
                                                type="button"
                                                className="page-link"
                                                disabled={!link.url}
                                                onClick={() => goToPage(link.url)}
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                            />

                                        </li>

                                    ))}

                                </ul>

                            </nav>

                        </div>

                    )}

                </div>

            </div>

        </AdminLayout>

    );

}
