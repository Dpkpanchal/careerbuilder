// import React, { useState } from "react";
// import AdminLayout from "@/Layouts/AdminLayout";
// import { Head, Link, router, useForm } from "@inertiajs/react";

// export default function Index({ hostels, filters }) {

//     const { data, setData } = useForm({
//         search: filters?.search || "",
//         sort_field: filters?.sort_field || "created_at",
//         sort_direction: filters?.sort_direction || "desc",
//     });

//     const [showFilters, setShowFilters] = useState(false);

//     const handleFilter = () => {
//         router.get("/admin/waqf-run-hostels", data, {
//             preserveState: true,
//             replace: true,
//         });
//     };

//     const resetFilters = () => {
//         setData({
//             search: "",
//             sort_field: "created_at",
//             sort_direction: "desc",
//         });

//         router.get("/admin/waqf-run-hostels", {}, {
//             preserveState: true,
//             replace: true,
//         });
//     };

//     const handleSort = (field) => {
//         const direction =
//             data.sort_field === field && data.sort_direction === "asc"
//                 ? "desc"
//                 : "asc";

//         setData({ ...data, sort_field: field, sort_direction: direction });

//         router.get(
//             "/admin/waqf-run-hostels",
//             { ...data, sort_field: field, sort_direction: direction },
//             { preserveState: true, replace: true }
//         );
//     };

//     const getSortIcon = (field) => {
//         if (data.sort_field !== field) return "fas fa-sort";
//         return data.sort_direction === "asc"
//             ? "fas fa-sort-up"
//             : "fas fa-sort-down";
//     };

//     return (
//         <AdminLayout header="Waqf Run Hostels">
//             <Head title="Waqf Run Hostels" />

//             <div className="container-fluid">

//                 {/* FILTER CARD */}
//                 <div className="card">
//                     <div className="card-header">
//                         <h3 className="card-title">Filters</h3>
//                         <div className="card-tools">
//                             <button
//                                 type="button"
//                                 className="btn btn-tool"
//                                 onClick={() => setShowFilters(!showFilters)}
//                             >
//                                 <i className={`fas ${showFilters ? "fa-minus" : "fa-plus"}`}></i>
//                             </button>
//                         </div>
//                     </div>

//                     {showFilters && (
//                         <div className="card-body">
//                             <div className="row g-3">

//                                 {/* Search */}
//                                 <div className="col-md-4">
//                                     <label>Search</label>
//                                     <input
//                                         className="form-control"
//                                         placeholder="Search hostel by name or address..."
//                                         value={data.search}
//                                         onChange={(e) => setData("search", e.target.value)}
//                                         onKeyPress={(e) =>
//                                             e.key === "Enter" && handleFilter()
//                                         }
//                                     />
//                                 </div>

//                                 {/* Sort */}
//                                 <div className="col-md-3">
//                                     <label>Sort By</label>
//                                     <select
//                                         className="form-control"
//                                         value={data.sort_field}
//                                         onChange={(e) =>
//                                             setData("sort_field", e.target.value)
//                                         }
//                                     >
//                                         <option value="created_at">Created Date</option>
//                                         <option value="name">Hostel Name</option>
//                                         <option value="seat_capacity">Seat Capacity</option>
//                                     </select>
//                                 </div>

//                             </div>

//                             <div className="mt-3 d-flex justify-content-between">
//                                 <div>
//                                     <button className="btn btn-primary" onClick={handleFilter}>
//                                         <i className="fas fa-filter mr-1"></i> Apply
//                                     </button>
//                                     <button
//                                         className="btn btn-default ml-2"
//                                         onClick={resetFilters}
//                                     >
//                                         <i className="fas fa-redo mr-1"></i> Reset
//                                     </button>
//                                 </div>

//                                 <div className="text-muted">
//                                     Total: {hostels.total}
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 {/* DATA TABLE */}
//                 <div className="card mt-3">
//                     <div className="card-header">
//                         <h3 className="card-title">Waqf Run Hostels List</h3>
//                         <div className="card-tools">
//                             <Link
//                                 href="/admin/waqf-run-hostels/create"
//                                 className="btn btn-primary btn-sm"
//                             >
//                                 <i className="fas fa-plus"></i> Add Hostel
//                             </Link>
//                         </div>
//                     </div>

//                     <div className="card-body table-responsive">
//                         <table className="table table-bordered table-hover">
//                             <thead>
//                                 <tr>
//                                     <th style={{ cursor: "pointer" }} onClick={() => handleSort("id")}>
//                                         S.No <i className={getSortIcon("id")}></i>
//                                     </th>
//                                     <th style={{ cursor: "pointer" }} onClick={() => handleSort("name")}>
//                                         Hostel Name <i className={getSortIcon("name")}></i>
//                                     </th>
//                                     <th>Address</th>
//                                     <th style={{ cursor: "pointer" }} onClick={() => handleSort("seat_capacity")}>
//                                         Seats <i className={getSortIcon("seat_capacity")}></i>
//                                     </th>
//                                     <th>Contact No</th>
//                                     <th width="120">Actions</th>
//                                 </tr>
//                             </thead>

//                             <tbody>
//                                 {hostels.data.length ? (
//                                     hostels.data.map((hostel, index) => (
//                                         <tr key={hostel.id}>
//                                             <td>{hostels.from + index}</td>
//                                             <td>{hostel.name}</td>
//                                             <td>{hostel.address}</td>
//                                             <td>
//                                                 <span className="badge badge-info">
//                                                     {hostel.seat_capacity}
//                                                 </span>
//                                             </td>
//                                             <td>{hostel.contact_no}</td>

//                                             <td>
//                                                 <div className="btn-group">
//                                                     <Link
//                                                         href={`/admin/waqf-run-hostels/${hostel.id}/edit`}
//                                                         className="btn btn-info btn-sm"
//                                                     >
//                                                         <i className="fas fa-edit"></i>
//                                                     </Link>

//                                                     <Link
//                                                         as="button"
//                                                         href={`/admin/waqf-run-hostels/${hostel.id}`}
//                                                         method="delete"
//                                                         className="btn btn-danger btn-sm"
//                                                         onClick={(e) =>
//                                                             !confirm("Delete this hostel?")
//                                                                 ? e.preventDefault()
//                                                                 : null
//                                                         }
//                                                     >
//                                                         <i className="fas fa-trash"></i>
//                                                     </Link>
//                                                 </div>
//                                             </td>
//                                         </tr>
//                                     ))
//                                 ) : (
//                                     <tr>
//                                         <td colSpan="6" className="text-center text-muted py-3">
//                                             No hostels found.
//                                         </td>
//                                     </tr>
//                                 )}
//                             </tbody>
//                         </table>
//                     </div>

//                     {/* PAGINATION */}
//                     <div className="card-footer d-flex justify-content-end">
//                         {hostels.links && (
//                             <nav>
//                                 <ul className="pagination mb-0">
//                                     {hostels.links.map((link, i) => (
//                                         <li
//                                             key={i}
//                                             className={`page-item ${
//                                                 link.active ? "active" : ""
//                                             } ${!link.url ? "disabled" : ""}`}
//                                         >
//                                             <Link
//                                                 href={link.url || "#"}
//                                                 className="page-link"
//                                                 dangerouslySetInnerHTML={{
//                                                     __html: link.label,
//                                                 }}
//                                             />
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </nav>
//                         )}
//                     </div>

//                 </div>
//             </div>
//         </AdminLayout>
//     );
// }

import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";

export default function Index({ hostels, filters }) {

    const { data, setData } = useForm({
        search: filters?.search || "",
        status: filters?.status || "",
        sort_field: filters?.sort_field || "created_at",
        sort_direction: filters?.sort_direction || "desc",
    });

    const [showFilters, setShowFilters] = useState(false);

    const handleFilter = () => {
        router.get("/admin/waqf-run-hostels", data, {
            preserveState: true,
            replace: true,
        });
    };

    const resetFilters = () => {
        setData({
            search: "",
            status: "",
            sort_field: "created_at",
            sort_direction: "desc",
        });

        router.get("/admin/waqf-run-hostels", {}, {
            preserveState: true,
            replace: true,
        });
    };

    const handleSort = (field) => {
        const direction =
            data.sort_field === field && data.sort_direction === "asc"
                ? "desc"
                : "asc";

        setData({ ...data, sort_field: field, sort_direction: direction });

        router.get(
            "/admin/waqf-run-hostels",
            { ...data, sort_field: field, sort_direction: direction },
            { preserveState: true, replace: true }
        );
    };

    const getSortIcon = (field) => {
        if (data.sort_field !== field) return "fas fa-sort";
        return data.sort_direction === "asc"
            ? "fas fa-sort-up"
            : "fas fa-sort-down";
    };

    /* ---------------- TOGGLE STATUS ---------------- */
    const toggleStatus = (item) => {
        if (!confirm(`Are you sure you want to ${item.is_active ? 'deactivate' : 'activate'} this hostel?`)) {
            return;
        }

        router.put(
            `/admin/waqf-run-hostels/${item.id}/toggle-status`,
            { is_active: !item.is_active },
            {
                preserveState: true,
                preserveScroll: true,
                onSuccess: () => {
                    console.log('Status updated successfully');
                },
                onError: (errors) => {
                    console.error('Error updating status:', errors);
                }
            }
        );
    };

    /* ---------------- CALCULATE S.NO ---------------- */
    const getSerialNumber = (index) => {
        const currentPage = hostels.current_page || 1;
        const perPage = hostels.per_page || 10;
        return (currentPage - 1) * perPage + index + 1;
    };

    return (
        <AdminLayout header="Waqf Run Hostels">
            <Head title="Waqf Run Hostels" />

            <div className="container-fluid">

                {/* FILTER CARD */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Filters</h3>
                        <div className="card-tools">
                            <button
                                type="button"
                                className="btn btn-tool"
                                onClick={() => setShowFilters(!showFilters)}
                            >
                                <i className={`fas ${showFilters ? "fa-minus" : "fa-plus"}`}></i>
                            </button>
                        </div>
                    </div>

                    {showFilters && (
                        <div className="card-body">
                            <div className="row g-3">

                                {/* Search */}
                                <div className="col-md-4">
                                    <label>Search</label>
                                    <input
                                        className="form-control"
                                        placeholder="Search hostel by name or address..."
                                        value={data.search}
                                        onChange={(e) => setData("search", e.target.value)}
                                        onKeyPress={(e) =>
                                            e.key === "Enter" && handleFilter()
                                        }
                                    />
                                </div>

                                {/* Status Filter */}
                                <div className="col-md-3">
                                    <label>Status</label>
                                    <select
                                        className="form-control"
                                        value={data.status}
                                        onChange={(e) => setData("status", e.target.value)}
                                    >
                                        <option value="">All Status</option>
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>

                                {/* Sort */}
                           

                            </div>

                            <div className="mt-3 d-flex justify-content-between">
                                <div>
                                    <button className="btn btn-primary" onClick={handleFilter}>
                                        <i className="fas fa-filter mr-1"></i> Apply
                                    </button>
                                    <button
                                        className="btn btn-default ml-2"
                                        onClick={resetFilters}
                                    >
                                        <i className="fas fa-redo mr-1"></i> Reset
                                    </button>
                                </div>

                                <div className="text-muted">
                                    Total: {hostels.total}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* DATA TABLE */}
                <div className="card mt-3">
                    <div className="card-header">
                        <h3 className="card-title">Waqf Run Hostels List</h3>
                        <div className="card-tools">
                            <Link
                                href="/admin/waqf-run-hostels/create"
                                className="btn btn-primary btn-sm"
                            >
                                <i className="fas fa-plus"></i> Add Hostel
                            </Link>
                        </div>
                    </div>

                    <div className="card-body table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th style={{ width: "70px" }}>S.No</th>
                                    <th style={{ cursor: "pointer" }} onClick={() => handleSort("name")}>
                                        Hostel Name <i className={getSortIcon("name")}></i>
                                    </th>
                                    <th>Address</th>
                                    <th style={{ cursor: "pointer" }} onClick={() => handleSort("seat_capacity")}>
                                        Seats <i className={getSortIcon("seat_capacity")}></i>
                                    </th>
                                    <th>Contact No</th>
                                    <th style={{ width: "120px", textAlign: "center" }}>Status</th>
                                    <th width="120">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {hostels.data.length ? (
                                    hostels.data.map((hostel, index) => (
                                        <tr key={hostel.id}>
                                            <td>{getSerialNumber(index)}</td>
                                            <td>{hostel.name}</td>
                                            <td>{hostel.address}</td>
                                            <td>
                                                <span className="badge badge-info">
                                                    {hostel.seat_capacity}
                                                </span>
                                            </td>
                                            <td>{hostel.contact_no}</td>
                                            <td style={{ textAlign: "center" }}>
                                                <div className="custom-control custom-switch">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id={`status-switch-${hostel.id}`}
                                                        checked={hostel.is_active}
                                                        onChange={() => toggleStatus(hostel)}
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor={`status-switch-${hostel.id}`}
                                                    >
                                                        <span className={`badge ${hostel.is_active ? 'badge-success' : 'badge-secondary'}`}>
                                                            {hostel.is_active ? 'Active' : 'Inactive'}
                                                        </span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="btn-group">
                                                    <Link
                                                        href={`/admin/waqf-run-hostels/${hostel.id}/edit`}
                                                        className="btn btn-info btn-sm"
                                                    >
                                                        <i className="fas fa-edit"></i>
                                                    </Link>

                                                    <Link
                                                        as="button"
                                                        href={`/admin/waqf-run-hostels/${hostel.id}`}
                                                        method="delete"
                                                        className="btn btn-dark btn-sm"
                                                        title="Delete Permanently"
                                                        onClick={(e) =>
                                                            !confirm("Delete this hostel?")
                                                                ? e.preventDefault()
                                                                : null
                                                        }
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="text-center text-muted py-3">
                                            No hostels found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* PAGINATION */}
                    <div className="card-footer d-flex justify-content-end">
                        {hostels.links && (
                            <nav>
                                <ul className="pagination mb-0">
                                    {hostels.links.map((link, i) => (
                                        <li
                                            key={i}
                                            className={`page-item ${
                                                link.active ? "active" : ""
                                            } ${!link.url ? "disabled" : ""}`}
                                        >
                                            <Link
                                                href={link.url || "#"}
                                                className="page-link"
                                                dangerouslySetInnerHTML={{
                                                    __html: link.label,
                                                }}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        )}
                    </div>

                </div>
            </div>
        </AdminLayout>
    );
}
