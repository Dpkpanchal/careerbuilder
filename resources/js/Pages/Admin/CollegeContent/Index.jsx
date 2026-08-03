// import React, { useState } from "react";
// import AdminLayout from "@/Layouts/AdminLayout";
// import { Head, Link, router } from "@inertiajs/react";

// export default function Index({ collageContents, filters = {} }) {

//     const [nameSearch, setNameSearch] = useState(filters.search || "");
//     const [selectedStatus, setSelectedStatus] = useState(filters.status || "");

//     const deleteItem = (id) => {
//         if (confirm("Delete this college content?")) {
//             router.delete(`/admin/college-content/${id}`, {
//                 preserveScroll: true,
//             });
//         }
//     };

//     const toggleStatus = (id) => {
//         router.put(`/admin/college-content/${id}/status`, {}, {
//             preserveScroll: true,
//         });
//     };

//     // Laravel's paginate() response shape: { data, links, from, to, total, current_page, last_page }
//     const {
//         data: rows = [],
//         links = [],
//         from,
//         to,
//         total,
//     } = collageContents;

//     const goToPage = (url) => {
//         if (!url) return;
//         router.get(url, {}, {
//             preserveScroll: true,
//             preserveState: true,
//         });
//     };

//     const applyFilters = (overrides = {}) => {
//         const params = {
//             search: overrides.search !== undefined ? overrides.search : nameSearch,
//             status: overrides.status !== undefined ? overrides.status : selectedStatus,
//         };

//         Object.keys(params).forEach((key) => {
//             if (!params[key]) delete params[key];
//         });

//         router.get("/admin/college-content", params, {
//             preserveScroll: true,
//             preserveState: true,
//         });
//     };

//     const handleStatusChange = (e) => {
//         const value = e.target.value;
//         setSelectedStatus(value);
//         applyFilters({ status: value });
//     };

//     const handleNameKeyDown = (e) => {
//         if (e.key === "Enter") {
//             applyFilters({ search: nameSearch });
//         }
//     };

//     const clearFilters = () => {
//         setNameSearch("");
//         setSelectedStatus("");
//         router.get("/admin/college-content", {}, {
//             preserveScroll: true,
//             preserveState: true,
//         });
//     };

//     const hasActiveFilters = nameSearch || selectedStatus;

//     return (

//         <AdminLayout header="College Content">

//             <Head title="College Content" />

//             <style>{`
//                 .college-card {
//                     border: none;
//                     border-radius: 0.75rem;
//                     box-shadow: 0 0.15rem 1rem rgba(0, 0, 0, 0.08);
//                     overflow: hidden;
//                 }
//                 .college-card .card-header {
//                     background: linear-gradient(135deg, #4e73df 0%, #375bd2 100%);
//                     border-bottom: none;
//                     padding: 1.25rem 1.5rem;
//                 }
//                 .college-card .card-header h3 {
//                     color: #fff;
//                     font-weight: 600;
//                     letter-spacing: 0.02em;
//                 }
//                 .college-card .card-header .btn-primary {
//                     background-color: #fff;
//                     color: #375bd2;
//                     border: none;
//                     font-weight: 600;
//                     box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.15);
//                 }
//                 .college-card .card-header .btn-primary:hover {
//                     background-color: #f0f2ff;
//                 }
//                 .filter-bar {
//                     padding: 1rem 1.5rem;
//                     background-color: #f8f9fc;
//                     border-bottom: 1px solid #e3e6f0;
//                     display: flex;
//                     align-items: center;
//                     gap: 0.75rem;
//                     flex-wrap: wrap;
//                 }
//                 .filter-bar select,
//                 .filter-bar input[type="text"] {
//                     border-radius: 0.5rem;
//                     border: 1px solid #d1d3e2;
//                     padding: 0.4rem 0.75rem;
//                     font-size: 0.85rem;
//                     min-width: 160px;
//                 }
//                 .filter-bar input[type="text"] {
//                     min-width: 260px;
//                 }
//                 .filter-clear-btn {
//                     font-size: 0.8rem;
//                     color: #e74a3b;
//                     background: none;
//                     border: none;
//                     font-weight: 600;
//                 }
//                 .college-table thead th {
//                     background-color: #f8f9fc;
//                     color: #5a5c69;
//                     font-size: 0.78rem;
//                     text-transform: uppercase;
//                     letter-spacing: 0.04em;
//                     border-bottom: 2px solid #e3e6f0;
//                     white-space: nowrap;
//                 }
//                 .college-table tbody tr {
//                     transition: background-color 0.15s ease-in-out;
//                 }
//                 .college-table tbody tr:hover {
//                     background-color: #f8f9fc;
//                 }
//                 .college-table td {
//                     vertical-align: middle;
//                 }
//                 .chip {
//                     display: inline-block;
//                     padding: 0.25rem 0.65rem;
//                     border-radius: 50px;
//                     font-size: 0.75rem;
//                     font-weight: 600;
//                     background-color: #eef1fd;
//                     color: #375bd2;
//                 }
//                 .status-pill {
//                     padding: 0.35rem 0.75rem;
//                     border-radius: 50px;
//                     font-size: 0.72rem;
//                     font-weight: 700;
//                     letter-spacing: 0.03em;
//                 }
//                 .status-pill.active {
//                     background-color: #e2f8ec;
//                     color: #1cc88a;
//                 }
//                 .status-pill.inactive {
//                     background-color: #fbe7e9;
//                     color: #e74a3b;
//                 }
//                 .action-btn {
//                     border-radius: 0.5rem;
//                     width: 32px;
//                     height: 32px;
//                     padding: 0;
//                     display: inline-flex;
//                     align-items: center;
//                     justify-content: center;
//                 }
//                 .breadcrumb-path {
//                     font-size: 0.85rem;
//                     color: #858796;
//                 }
//                 .breadcrumb-path .sep {
//                     margin: 0 0.35rem;
//                     color: #d1d3e2;
//                 }
//                 .empty-state {
//                     padding: 3rem 1rem;
//                     text-align: center;
//                     color: #b7b9cc;
//                 }
//                 .empty-state i {
//                     font-size: 2.5rem;
//                     margin-bottom: 0.75rem;
//                     display: block;
//                 }
//                 .pagination-wrap {
//                     display: flex;
//                     align-items: center;
//                     justify-content: space-between;
//                     padding: 1rem 1.5rem;
//                     border-top: 1px solid #e3e6f0;
//                     flex-wrap: wrap;
//                     gap: 0.75rem;
//                 }
//                 .pagination-info {
//                     font-size: 0.85rem;
//                     color: #858796;
//                 }
//                 .pagination .page-link {
//                     border-radius: 0.4rem;
//                     margin: 0 2px;
//                     border: none;
//                     color: #375bd2;
//                     font-weight: 500;
//                 }
//                 .pagination .page-item.active .page-link {
//                     background-color: #4e73df;
//                     color: #fff;
//                 }
//                 .pagination .page-item.disabled .page-link {
//                     color: #d1d3e2;
//                     background: transparent;
//                 }
//             `}</style>

//             <div className="container-fluid">

//                 <div className="card college-card">

//                     <div className="card-header">

//                         <div className="row align-items-center">

//                             <div className="col-md-6">

//                                 <h3 className="card-title mb-0">
//                                     College Content
//                                 </h3>

//                             </div>

//                             <div className="col-md-6 text-right">

//                                 <Link
//                                     href="/admin/college-content/create"
//                                     className="btn btn-primary"
//                                 >
//                                     <i className="fas fa-plus mr-1"></i>
//                                     Create
//                                 </Link>

//                             </div>

//                         </div>

//                     </div>

//                     <div className="filter-bar">

//                         <input
//                             type="text"
//                             placeholder="Search name / code..."
//                             value={nameSearch}
//                             onChange={(e) => setNameSearch(e.target.value)}
//                             onKeyDown={handleNameKeyDown}
//                             onBlur={() => applyFilters({ search: nameSearch })}
//                         />

//                         <select value={selectedStatus} onChange={handleStatusChange}>
//                             <option value="">All Status</option>
//                             <option value="active">Active</option>
//                             <option value="inactive">Inactive</option>
//                         </select>

//                         {hasActiveFilters && (
//                             <button
//                                 type="button"
//                                 className="filter-clear-btn"
//                                 onClick={clearFilters}
//                             >
//                                 Clear Filters
//                             </button>
//                         )}

//                     </div>

//                     <div className="card-body table-responsive p-0">

//                         <table className="table college-table mb-0">

//                             <thead>

//                             <tr>

//                                 <th width="60">#</th>
//                                 <th>Path</th>
//                                 <th>Name</th>
//                                 <th>Code</th>
//                                 <th>State / City</th>
//                                 <th>Status</th>
//                                 <th width="160" className="text-center">Action</th>

//                             </tr>

//                             </thead>

//                             <tbody>

//                             {rows.length ? (

//                                 rows.map((item, index) => (

//                                     <tr key={item.id}>

//                                         <td className="text-muted">
//                                             {from ? from + index : index + 1}
//                                         </td>

//                                         <td>

//                                             <div className="breadcrumb-path">
//                                                 {item.menu?.label}
//                                                 {item.tab?.label && (
//                                                     <>
//                                                         <span className="sep">/</span>
//                                                         {item.tab.label}
//                                                     </>
//                                                 )}
//                                                 {item.section?.label && (
//                                                     <>
//                                                         <span className="sep">/</span>
//                                                         {item.section.label}
//                                                     </>
//                                                 )}
//                                                 {item.link?.label && (
//                                                     <>
//                                                         <span className="sep">/</span>
//                                                         {item.link.label}
//                                                     </>
//                                                 )}
//                                             </div>

//                                         </td>

//                                         <td className="font-weight-600">

//                                             {item.name || <span className="text-muted">—</span>}

//                                         </td>

//                                         <td>

//                                             {item.code ? (
//                                                 <span className="chip">{item.code}</span>
//                                             ) : (
//                                                 <span className="text-muted">—</span>
//                                             )}

//                                         </td>

//                                         <td>

//                                             {item.state || item.city ? (
//                                                 <>
//                                                     {item.city}
//                                                     {item.city && item.state && ", "}
//                                                     {item.state}
//                                                 </>
//                                             ) : (
//                                                 <span className="text-muted">—</span>
//                                             )}

//                                         </td>

//                                         <td>

//                                             <span className={`status-pill ${item.is_active ? "active" : "inactive"}`}>

//                                                 {item.is_active ? "Active" : "Inactive"}

//                                             </span>

//                                         </td>

//                                         <td className="text-center">

//                                             <button
//                                                 className={`btn action-btn ${item.is_active ? "btn-outline-warning" : "btn-outline-success"} mr-1`}
//                                                 onClick={() => toggleStatus(item.id)}
//                                                 title={item.is_active ? "Deactivate" : "Activate"}
//                                             >
//                                                 <i className={`fas ${item.is_active ? "fa-eye-slash" : "fa-eye"}`}></i>
//                                             </button>

//                                             <Link
//                                                 href={`/admin/college-content/${item.id}/edit`}
//                                                 className="btn btn-outline-info action-btn mr-1"
//                                                 title="Edit"
//                                             >
//                                                 <i className="fas fa-edit"></i>
//                                             </Link>

//                                             <button
//                                                 className="btn btn-outline-danger action-btn"
//                                                 onClick={() => deleteItem(item.id)}
//                                                 title="Delete"
//                                             >
//                                                 <i className="fas fa-trash"></i>
//                                             </button>

//                                         </td>

//                                     </tr>

//                                 ))

//                             ) : (

//                                 <tr>

//                                     <td colSpan="7">

//                                         <div className="empty-state">
//                                             <i className="fas fa-folder-open"></i>
//                                             No Records Found
//                                         </div>

//                                     </td>

//                                 </tr>

//                             )}

//                             </tbody>

//                         </table>

//                     </div>

//                     {rows.length > 0 && (

//                         <div className="pagination-wrap">

//                             <div className="pagination-info">
//                                 Showing {from} to {to} of {total} entries
//                             </div>

//                             <nav>

//                                 <ul className="pagination mb-0">

//                                     {links.map((link, idx) => (

//                                         <li
//                                             key={idx}
//                                             className={`page-item ${link.active ? "active" : ""} ${!link.url ? "disabled" : ""}`}
//                                         >

//                                             <button
//                                                 type="button"
//                                                 className="page-link"
//                                                 disabled={!link.url}
//                                                 onClick={() => goToPage(link.url)}
//                                                 dangerouslySetInnerHTML={{ __html: link.label }}
//                                             />

//                                         </li>

//                                     ))}

//                                 </ul>

//                             </nav>

//                         </div>

//                     )}

//                 </div>

//             </div>

//         </AdminLayout>

//     );
// }


import React, { useState, useCallback, useMemo } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ collageContents, filters = {} }) {

    const [nameSearch, setNameSearch] = useState(filters.search || "");
    const [selectedStatus, setSelectedStatus] = useState(filters.status || "");
    const [expandedSections, setExpandedSections] = useState(() => {
        // By default, expand all sections
        const initial = {};
        if (collageContents?.data) {
            collageContents.data.forEach((section, index) => {
                initial[index] = true;
            });
        }
        return initial;
    });

    const deleteItem = (id) => {
        if (confirm("Delete this college content?")) {
            router.delete(`/admin/college-content/${id}`, {
                preserveScroll: true,
            });
        }
    };

    const toggleStatus = (id) => {
        router.put(`/admin/college-content/${id}/status`, {}, {
            preserveScroll: true,
        });
    };

    // Toggle section with useCallback for better performance
    const toggleSection = useCallback((index) => {
        setExpandedSections(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    }, []);

    // Expand all sections
    const expandAll = useCallback(() => {
        const allExpanded = {};
        if (collageContents?.data) {
            collageContents.data.forEach((section, index) => {
                allExpanded[index] = true;
            });
        }
        setExpandedSections(allExpanded);
    }, [collageContents]);

    // Collapse all sections
    const collapseAll = useCallback(() => {
        const allCollapsed = {};
        if (collageContents?.data) {
            collageContents.data.forEach((section, index) => {
                allCollapsed[index] = false;
            });
        }
        setExpandedSections(allCollapsed);
    }, [collageContents]);

    const {
        data: sections = [],
        links = [],
        from,
        to,
        total,
    } = collageContents || { data: [], links: [], from: null, to: null, total: 0 };

    const goToPage = (url) => {
        if (!url) return;
        router.get(url, {}, {
            preserveScroll: true,
            preserveState: true,
        });
    };

    const applyFilters = (overrides = {}) => {
        const params = {
            search: overrides.search !== undefined ? overrides.search : nameSearch,
            status: overrides.status !== undefined ? overrides.status : selectedStatus,
        };

        Object.keys(params).forEach((key) => {
            if (!params[key]) delete params[key];
        });

        router.get("/admin/college-content", params, {
            preserveScroll: true,
            preserveState: true,
        });
    };

    const handleStatusChange = (e) => {
        const value = e.target.value;
        setSelectedStatus(value);
        applyFilters({ status: value });
    };

    const handleNameKeyDown = (e) => {
        if (e.key === "Enter") {
            applyFilters({ search: nameSearch });
        }
    };

    const clearFilters = () => {
        setNameSearch("");
        setSelectedStatus("");
        router.get("/admin/college-content", {}, {
            preserveScroll: true,
            preserveState: true,
        });
    };

    const hasActiveFilters = nameSearch || selectedStatus;

    // Memoize section count for performance
    const totalSections = sections.length;
    const expandedCount = useMemo(() => {
        return Object.values(expandedSections).filter(Boolean).length;
    }, [expandedSections]);

    return (
        <AdminLayout header="College Content">
            <Head title="College Content" />

            <style>{`
                .college-card {
                    border: none;
                    border-radius: 0.75rem;
                    box-shadow: 0 0.15rem 1rem rgba(0, 0, 0, 0.08);
                    overflow: hidden;
                }
                .college-card .card-header {
                    background: linear-gradient(135deg, #4e73df 0%, #375bd2 100%);
                    border-bottom: none;
                    padding: 1.25rem 1.5rem;
                }
                .college-card .card-header h3 {
                    color: #fff;
                    font-weight: 600;
                    letter-spacing: 0.02em;
                }
                .college-card .card-header .btn-primary {
                    background-color: #fff;
                    color: #375bd2;
                    border: none;
                    font-weight: 600;
                    box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.15);
                }
                .college-card .card-header .btn-primary:hover {
                    background-color: #f0f2ff;
                }
                .filter-bar {
                    padding: 1rem 1.5rem;
                    background-color: #f8f9fc;
                    border-bottom: 1px solid #e3e6f0;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                }
                .filter-bar select,
                .filter-bar input[type="text"] {
                    border-radius: 0.5rem;
                    border: 1px solid #d1d3e2;
                    padding: 0.4rem 0.75rem;
                    font-size: 0.85rem;
                    min-width: 160px;
                }
                .filter-bar input[type="text"] {
                    min-width: 260px;
                }
                .filter-clear-btn {
                    font-size: 0.8rem;
                    color: #e74a3b;
                    background: none;
                    border: none;
                    font-weight: 600;
                }
                .section-actions {
                    display: flex;
                    gap: 0.5rem;
                    align-items: center;
                }
                .section-actions .btn-sm {
                    font-size: 0.75rem;
                    padding: 0.2rem 0.6rem;
                }
                .section-card {
                    border: 1px solid #e3e6f0;
                    border-radius: 0.5rem;
                    margin-bottom: 1rem;
                    overflow: hidden;
                    transition: box-shadow 0.2s ease;
                }
                .section-card:hover {
                    box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.05);
                }
                .section-header {
                    background: #f8f9fc;
                    padding: 0.75rem 1.25rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-bottom: 1px solid #e3e6f0;
                    transition: background 0.15s ease;
                    user-select: none;
                }
                .section-header:hover {
                    background: #f0f2f5;
                }
                .section-header .section-info {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                .section-header .section-title {
                    font-weight: 600;
                    font-size: 1rem;
                    color: #2d3748;
                }
                .section-header .section-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .section-header .badge-count {
                    background: #4e73df;
                    color: #fff;
                    padding: 0.2rem 0.6rem;
                    border-radius: 50px;
                    font-size: 0.75rem;
                    font-weight: 600;
                }
                .section-header .badge-active {
                    background: #1cc88a;
                    color: #fff;
                    padding: 0.2rem 0.6rem;
                    border-radius: 50px;
                    font-size: 0.75rem;
                    font-weight: 600;
                }
                .section-header .toggle-icon {
                    transition: transform 0.15s ease;
                    color: #858796;
                    font-size: 0.85rem;
                }
                .section-header .toggle-icon.expanded {
                    transform: rotate(180deg);
                }
                .section-body {
                    display: ${({ isExpanded }) => isExpanded ? 'block' : 'none'};
                }
                .college-table {
                    margin-bottom: 0;
                }
                .college-table thead th {
                    background-color: #f8f9fc;
                    color: #5a5c69;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                    border-bottom: 2px solid #e3e6f0;
                    white-space: nowrap;
                    padding: 0.5rem 0.75rem;
                    position: sticky;
                    top: 0;
                    z-index: 1;
                }
                .college-table tbody tr {
                    transition: background-color 0.15s ease-in-out;
                }
                .college-table tbody tr:hover {
                    background-color: #f8f9fc;
                }
                .college-table td {
                    vertical-align: middle;
                    padding: 0.5rem 0.75rem;
                    font-size: 0.85rem;
                }
                .chip {
                    display: inline-block;
                    padding: 0.25rem 0.65rem;
                    border-radius: 50px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    background-color: #eef1fd;
                    color: #375bd2;
                }
                .status-pill {
                    padding: 0.25rem 0.65rem;
                    border-radius: 50px;
                    font-size: 0.7rem;
                    font-weight: 700;
                    letter-spacing: 0.03em;
                }
                .status-pill.active {
                    background-color: #e2f8ec;
                    color: #1cc88a;
                }
                .status-pill.inactive {
                    background-color: #fbe7e9;
                    color: #e74a3b;
                }
                .action-btn {
                    border-radius: 0.5rem;
                    width: 30px;
                    height: 30px;
                    padding: 0;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.8rem;
                    border: 1px solid transparent;
                }
                .action-btn.btn-outline-warning {
                    color: #f6c23e;
                    border-color: #f6c23e;
                }
                .action-btn.btn-outline-success {
                    color: #1cc88a;
                    border-color: #1cc88a;
                }
                .action-btn.btn-outline-info {
                    color: #36b9cc;
                    border-color: #36b9cc;
                }
                .action-btn.btn-outline-danger {
                    color: #e74a3b;
                    border-color: #e74a3b;
                }
                .breadcrumb-path {
                    font-size: 0.8rem;
                    color: #858796;
                }
                .breadcrumb-path .sep {
                    margin: 0 0.25rem;
                    color: #d1d3e2;
                }
                .empty-state {
                    padding: 3rem 1rem;
                    text-align: center;
                    color: #b7b9cc;
                }
                .empty-state i {
                    font-size: 2.5rem;
                    margin-bottom: 0.75rem;
                    display: block;
                }
                .pagination-wrap {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1rem 1.5rem;
                    border-top: 1px solid #e3e6f0;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                }
                .pagination-info {
                    font-size: 0.85rem;
                    color: #858796;
                }
                .pagination .page-link {
                    border-radius: 0.4rem;
                    margin: 0 2px;
                    border: none;
                    color: #375bd2;
                    font-weight: 500;
                    padding: 0.4rem 0.75rem;
                }
                .pagination .page-item.active .page-link {
                    background-color: #4e73df;
                    color: #fff;
                }
                .pagination .page-item.disabled .page-link {
                    color: #d1d3e2;
                    background: transparent;
                }
                .edit-section-btn {
                    font-size: 0.8rem;
                    padding: 0.2rem 0.8rem;
                }
            `}</style>

            <div className="container-fluid">
                <div className="card college-card">
                    <div className="card-header">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h3 className="card-title mb-0">College Content</h3>
                            </div>
                            <div className="col-md-6 text-right">
                                <Link href="/admin/college-content/create" className="btn btn-primary">
                                    <i className="fas fa-plus mr-1"></i>
                                    Create
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="filter-bar">
                        <input
                            type="text"
                            placeholder="Search by name, code, state..."
                            value={nameSearch}
                            onChange={(e) => setNameSearch(e.target.value)}
                            onKeyDown={handleNameKeyDown}
                            onBlur={() => applyFilters({ search: nameSearch })}
                        />

                        <select value={selectedStatus} onChange={handleStatusChange}>
                            <option value="">All Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>

                        {hasActiveFilters && (
                            <button type="button" className="filter-clear-btn" onClick={clearFilters}>
                                Clear Filters
                            </button>
                        )}

                        {sections.length > 0 && (
                            <div className="section-actions ml-auto">
                                <span className="text-muted mr-2" style={{ fontSize: '0.8rem' }}>
                                    {expandedCount}/{totalSections} expanded
                                </span>
                                <button 
                                    className="btn btn-sm btn-outline-secondary" 
                                    onClick={expandAll}
                                >
                                    <i className="fas fa-expand mr-1"></i>
                                    Expand All
                                </button>
                                <button 
                                    className="btn btn-sm btn-outline-secondary" 
                                    onClick={collapseAll}
                                >
                                    <i className="fas fa-compress mr-1"></i>
                                    Collapse All
                                </button>
                            </div>
                        )}
                    </div>

                   <div className="card-body">
                        {sections.length > 0 ? (
                            sections.map((group, index) => {
                                const isExpanded = expandedSections[index] !== false;
                                const itemCount = group.items?.length || 0;
                                const activeCount = group.items?.filter(item => item.is_active).length || 0;

                                return (
                                    <div key={group.link_id || index} className="section-card">
                                        {/* Section Header */}
                                        <div 
                                            className="section-header"
                                            onClick={() => toggleSection(index)}
                                        >
                                            <div className="section-info">
                                                <span className="section-title">
                                                    {group.link_label || `Link #${group.link_id}`}
                                                </span>
                                                <span className="section-badge">
                                                    <span className="badge-count">
                                                        <i className="fas fa-file-alt mr-1"></i>
                                                        {itemCount} items
                                                    </span>
                                                    <span className="badge-active">
                                                        <i className="fas fa-check-circle mr-1"></i>
                                                        {activeCount} active
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="d-flex align-items-center" style={{ gap: '0.5rem' }}>
                                                <i className={`fas fa-chevron-down toggle-icon ${isExpanded ? 'expanded' : ''}`}></i>
                                            </div>
                                        </div>

                                        {/* Section Body - Using display:none for faster rendering */}
                                        <div className="section-body" style={{ display: isExpanded ? 'block' : 'none' }}>
                                            <div className="table-responsive">
                                                <table className="table college-table mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th width="50">#</th>
                                                            <th>Path</th>
                                                            <th>Name</th>
                                                            <th>Code</th>
                                                            <th>State / City</th>
                                                            <th>Status</th>
                                                            <th width="140" className="text-center">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {/* FIX: Changed section to group */}
                                                        {group.items && group.items.length > 0 ? (
                                                            group.items.map((item, itemIndex) => (
                                                                <tr key={item.id}>
                                                                    <td className="text-muted">{itemIndex + 1}</td>
                                                                    <td>
                                                                        <div className="breadcrumb-path">
                                                                            {item.menu?.label}
                                                                            {item.tab?.label && (
                                                                                <>
                                                                                    <span className="sep">/</span>
                                                                                    {item.tab.label}
                                                                                </>
                                                                            )}
                                                                            {item.section?.label && (
                                                                                <>
                                                                                    <span className="sep">/</span>
                                                                                    {item.section.label}
                                                                                </>
                                                                            )}
                                                                            {item.link?.label && (
                                                                                <>
                                                                                    <span className="sep">/</span>
                                                                                    {item.link.label}
                                                                                </>
                                                                            )}
                                                                        </div>
                                                                    </td>
                                                                    <td className="font-weight-600">
                                                                        {item.name || <span className="text-muted">—</span>}
                                                                    </td>
                                                                    <td>
                                                                        {item.code ? (
                                                                            <span className="chip">{item.code}</span>
                                                                        ) : (
                                                                            <span className="text-muted">—</span>
                                                                        )}
                                                                    </td>
                                                                    <td>
                                                                        {item.state || item.city ? (
                                                                            <>
                                                                                {item.city}
                                                                                {item.city && item.state && ", "}
                                                                                {item.state}
                                                                            </>
                                                                        ) : (
                                                                            <span className="text-muted">—</span>
                                                                        )}
                                                                    </td>
                                                                    <td>
                                                                        <span className={`status-pill ${item.is_active ? "active" : "inactive"}`}>
                                                                            {item.is_active ? "Active" : "Inactive"}
                                                                        </span>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        <button
                                                                            className={`btn action-btn ${item.is_active ? "btn-outline-warning" : "btn-outline-success"} mr-1`}
                                                                            onClick={() => toggleStatus(item.id)}
                                                                            title={item.is_active ? "Deactivate" : "Activate"}
                                                                        >
                                                                            <i className={`fas ${item.is_active ? "fa-eye-slash" : "fa-eye"}`}></i>
                                                                        </button>
                                                                        <Link
                                                                            href={`/admin/college-content/${item.id}/edit`}
                                                                            className="btn btn-outline-info action-btn mr-1"
                                                                            title="Edit"
                                                                        >
                                                                            <i className="fas fa-edit"></i>
                                                                        </Link>
                                                                        {/* <button
                                                                            className="btn btn-outline-danger action-btn"
                                                                            onClick={() => deleteItem(item.id)}
                                                                            title="Delete"
                                                                        >
                                                                            <i className="fas fa-trash"></i>
                                                                        </button> */}
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        ) : (
                                                            <tr>
                                                                <td colSpan="7">
                                                                    <div className="empty-state">
                                                                        <i className="fas fa-inbox"></i>
                                                                        No items in this section
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="empty-state">
                                <i className="fas fa-folder-open"></i>
                                No Records Found
                            </div>
                        )}
                    </div> 

                    {sections.length > 0 && (
                        <div className="pagination-wrap">
                            <div className="pagination-info">
                                Showing {from} to {to} of {total} links
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