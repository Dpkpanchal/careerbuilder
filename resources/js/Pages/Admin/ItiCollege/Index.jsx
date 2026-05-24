import React, { useState } from 'react';
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";

export default function ItiCollegeIndex({ colleges, filters }) {

    const { data, setData } = useForm({
        search: filters?.search || "",
        sort_field: filters?.sort_field || "created_at",
        sort_direction: filters?.sort_direction || "desc",
    });

    const [showFilters, setShowFilters] = useState(false);

    const handleSort = (field) => {
        const direction = (data.sort_field === field && data.sort_direction === "asc") ? "desc" : "asc";
        setData({ ...data, sort_field: field, sort_direction: direction });

        router.get("/admin/iti-colleges", { ...data, sort_field: field, sort_direction: direction }, {
            preserveState: true,
            replace: true,
        });
    };

    const handleFilter = () => {
        router.get("/admin/iti-colleges", data, { preserveState: true, replace: true });
    };

    const resetFilters = () => {
        setData({ search: "", sort_field: "created_at", sort_direction: "desc" });
        router.get("/admin/iti-colleges", {}, { preserveState: true, replace: true });
    };

    const getSortIcon = (field) => {
        if (data.sort_field !== field) return "fas fa-sort";
        return data.sort_direction === "asc" ? "fas fa-sort-up" : "fas fa-sort-down";
    };

    return (
        <AdminLayout header="ITI Colleges">
            <Head title="ITI Colleges" />

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
                                    <i className={`fas ${showFilters ? 'fa-minus' : 'fa-plus'}`}></i>
                                </button>
                            </div>
                        </div>


                

                    {showFilters && (
                        <div className="card-body">
                            <div className="row">

                                <div className="col-md-4">
                                    <label>Search</label>
                                    <input
                                        className="form-control"
                                        placeholder="Search ITI by name..."
                                        value={data.search}
                                        onChange={(e) => setData("search", e.target.value)}
                                        onKeyPress={(e) => e.key === "Enter" && handleFilter()}
                                    />
                                </div>

                                <div className="col-md-3">
                                    <label>Sort By</label>
                                    <select
                                        className="form-control"
                                        value={data.sort_field}
                                        onChange={(e) => setData("sort_field", e.target.value)}
                                    >
                                        <option value="created_at">Created Date</option>
                                        <option value="name">Name</option>
                                        <option value="city">City</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-3 d-flex justify-content-between">
                                <div>
                                    <button className="btn btn-primary" onClick={handleFilter}>
                                        <i className="fas fa-filter mr-1"></i>Apply
                                    </button>
                                    <button className="btn btn-default ml-2" onClick={resetFilters}>
                                        <i className="fas fa-redo mr-1"></i>Reset
                                    </button>
                                </div>

                                <div className="text-muted">Total: {colleges.total}</div>
                            </div>
                        </div>
                    )}
                </div>

                {/* DATA TABLE */}
                <div className="card mt-3">
                   

                      <div className="card-header">
                        <h3 className="card-title">ITI Colleges List</h3>
                        <div className="card-tools">
                            <Link
                                href="/admin/iti-colleges/create"
                                className="btn btn-primary btn-sm"
                            >
                                <i className="fas fa-plus"></i> Add ITI
                            </Link>
                        </div>
                    </div>



                    <div className="card-body table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th style={{cursor:'pointer'}} onClick={() => handleSort('id')}>
                                        ID <i className={getSortIcon('id')}></i>
                                    </th>
                                    <th style={{cursor:'pointer'}} onClick={() => handleSort('name')}>
                                        Name <i className={getSortIcon('name')}></i>
                                    </th>
                                    <th>Type</th>
                                    {/* <th>City</th> */}
                                    <th>Trades</th>
                                    <th width="120px">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {colleges.data.length ? colleges.data.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td><span className="badge badge-info">{item.type}</span></td>
                                        {/* <td>{item.city ?? "-"}</td> */}
                                        <td><span className="badge badge-success">{item.trades_count}</span></td>

                                        <td>
                                            <div className="btn-group">
                                                <Link href={`/admin/iti-colleges/${item.id}/edit`} className="btn btn-info btn-sm">
                                                    <i className="fas fa-edit"></i>
                                                </Link>

                                                <Link as="button"
                                                    href={`/admin/iti-colleges/${item.id}`}
                                                    method="delete"
                                                    className="btn btn-danger btn-sm"
                                                    onClick={(e) => !confirm("Delete ITI?") && e.preventDefault()}>
                                                    <i className="fas fa-trash"></i>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr><td colSpan="6" className="text-center p-3 text-muted">No ITI Found</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                   <div className="card-footer d-flex justify-content-end">
                        {colleges.links && (
                            <nav>
                                <ul className="pagination mb-0">
                                    {colleges.links.map((link, i) => (
                                        <li 
                                            key={i} 
                                            className={`page-item ${link.active ? "active" : ""} ${!link.url ? "disabled" : ""}`}
                                        >
                                            <Link 
                                                href={link.url || "#"} 
                                                className="page-link" 
                                                dangerouslySetInnerHTML={{ __html: link.label }} 
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
