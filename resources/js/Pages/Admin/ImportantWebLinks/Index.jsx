// import React from 'react';
// import AdminLayout from '@/Layouts/AdminLayout';
// import { Head, Link, useForm, router } from '@inertiajs/react';

// const CATEGORY_OPTIONS = [
//   'School',
//   'College',
//   'University',
//   'Results & Exams',
//   'Current Affairs & Job News',
//   'Minority & Govt Websites',
// ];

// export default function Index({ links, filters }) {

//   const { data, setData } = useForm({
//     search: filters.search || '',
//     category: filters.category || '',
//   });

//   const applyFilter = () => {
//     router.get('/admin/important-web-links', data, {
//       preserveState: true,
//       replace: true,
//     });
//   };

//   return (
//     <AdminLayout header="Important Web Links">
//       <Head title="Important Web Links" />

//       {/* FILTERS */}
//       <div className="card">
//         <div className="card-body row">
//           <div className="col-md-4">
//             <input
//               className="form-control"
//               placeholder="Search subject..."
//               value={data.search}
//               onChange={(e) => setData('search', e.target.value)}
//             />
//           </div>

//           <div className="col-md-4">
//             <select
//               className="form-control"
//               value={data.category}
//               onChange={(e) => setData('category', e.target.value)}
//             >
//               <option value="">All Categories</option>
//               {CATEGORY_OPTIONS.map(cat => (
//                 <option key={cat} value={cat}>{cat}</option>
//               ))}
//             </select>
//           </div>

//           <div className="col-md-4">
//             <button className="btn btn-primary" onClick={applyFilter}>
//               Apply
//             </button>

//             <Link
//               href="/admin/important-web-links/create"
//               className="btn btn-success ml-2"
//             >
//               + Add
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* TABLE */}
//       <div className="card mt-3">
//         <div className="card-body table-responsive">
//           <table className="table table-bordered">
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Category</th>
//                 <th>Subject</th>
//                 <th>Link</th>
//                 <th width="140">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {links.data.length ? links.data.map((item, i) => (
//                 <tr key={item.id}>
//                   <td>{links.from + i}</td>
//                   <td>
//                     <span className="badge badge-info">
//                       {item.category}
//                     </span>
//                   </td>
//                   <td>{item.subject}</td>
//                   <td>
//                     <a href={item.web_link} target="_blank" rel="noreferrer">
//                       {item.web_link}
//                     </a>
//                   </td>
//                   <td>
//                     <Link
//                       href={`/admin/important-web-links/${item.id}/edit`}
//                       className="btn btn-sm btn-info"
//                     >
//                       Edit
//                     </Link>

//                     <Link
//                       as="button"
//                       method="delete"
//                       href={`/admin/important-web-links/${item.id}`}
//                       className="btn btn-sm btn-danger ml-1"
//                       onClick={(e) => !confirm('Delete?') && e.preventDefault()}
//                     >
//                       Delete
//                     </Link>
//                   </td>
//                 </tr>
//               )) : (
//                 <tr>
//                   <td colSpan="5" className="text-center text-muted">
//                     No data found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* ✅ PAGINATION */}
//      {links.links && links.links.length > 1 && (
//         <div className="card-footer d-flex justify-content-end">
//             <nav>
//             <ul className="pagination mb-0">
//                 {links.links.map((link, i) => (
//                 <li
//                     key={i}
//                     className={`page-item ${link.active ? 'active' : ''} ${!link.url ? 'disabled' : ''}`}
//                 >
//                     <Link
//                     href={link.url || '#'}
//                     className="page-link"
//                     dangerouslySetInnerHTML={{ __html: link.label }}
//                     />
//                 </li>
//                 ))}
//             </ul>
//             </nav>
//         </div>
//         )}

//       </div>
//     </AdminLayout>
//   );
// }

import React, { useState, useEffect } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';

const CATEGORY_OPTIONS = [
  'School',
  'College',
  'University',
  'Results & Exams',
  'Current Affairs & Job News',
  'Minority & Govt Websites',
];

export default function Index({ links, filters }) {
  const { flash } = usePage().props;
  
  const [search, setSearch] = useState(filters?.search || '');
  const [category, setCategory] = useState(filters?.category || '');
  const [status, setStatus] = useState(filters?.status || '');
  const [showSuccess, setShowSuccess] = useState(false);

  // Show flash message
  useEffect(() => {
    if (flash?.success) {
      setShowSuccess(true);
      // Auto hide after 3 seconds
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [flash]);

  const applyFilter = () => {
    const params = {};
    if (search && search.trim() !== '') params.search = search.trim();
    if (category && category.trim() !== '') params.category = category;
    if (status && status.trim() !== '') params.status = status;

    router.get('/admin/important-web-links', params, {
      preserveState: true,
      replace: true,
    });
  };

  const resetFilters = () => {
    setSearch('');
    setCategory('');
    setStatus('');
    router.get('/admin/important-web-links', {}, {
      preserveState: true,
      replace: true,
    });
  };

  const toggleStatus = (item) => {
    if (!confirm(`Are you sure you want to ${item.is_active ? 'deactivate' : 'activate'} this link?`)) {
      return;
    }

    router.put(
      `/admin/important-web-links/${item.id}/toggle-status`,
      { is_active: !item.is_active },
      {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          // Don't call applyFilter here, let the redirect handle it
        },
        onError: (errors) => {
          console.error('Error updating status:', errors);
        }
      }
    );
  };

  const getSerialNumber = (index) => {
    const currentPage = links.current_page || 1;
    const perPage = links.per_page || 10;
    return (currentPage - 1) * perPage + index + 1;
  };

  const handleDelete = (id, e) => {
    e.preventDefault();
    if (confirm("Are you sure you want to permanently delete this link? This action cannot be undone!")) {
      router.delete(`/admin/important-web-links/${id}`, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          // Don't call applyFilter here, let the redirect handle it
        },
        onError: (errors) => {
          console.error('Error deleting link:', errors);
        }
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      applyFilter();
    }
  };

  return (
    <AdminLayout header="Important Web Links">
      <Head title="Important Web Links" />

      {/* Success Message */}
      {/* {showSuccess && flash?.success && (
        <div className="alert alert-success alert-dismissible fade show" role="alert" style={{ position: 'fixed', top: '70px', right: '20px', zIndex: 9999, minWidth: '300px' }}>
          <i className="fas fa-check-circle mr-2"></i>
          {flash.success}
          <button
            type="button"
            className="close"
            onClick={() => setShowSuccess(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )} */}

      {/* FILTERS */}
      <div className="card">
        <div className="card-body row">
          <div className="col-md-3">
            <input
              className="form-control"
              placeholder="Search subject..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>

          <div className="col-md-3">
            <select
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {CATEGORY_OPTIONS.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="col-md-2">
            <select
              className="form-control"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">All Status</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>

          <div className="col-md-4">
            <button className="btn btn-primary" onClick={applyFilter}>
              <i className="fas fa-filter mr-1"></i> Apply
            </button>

            <button className="btn btn-default ml-2" onClick={resetFilters}>
              <i className="fas fa-redo mr-1"></i> Reset
            </button>

            <Link
              href="/admin/important-web-links/create"
              className="btn btn-success ml-2"
            >
              <i className="fas fa-plus mr-1"></i> Add Link
            </Link>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="card mt-3">
        <div className="card-body table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th style={{ width: "70px" }}>S.No</th>
                <th>Category</th>
                <th>Subject</th>
                <th>Link</th>
                <th style={{ width: "120px", textAlign: "center" }}>Status</th>
                <th width="120">Action</th>
              </tr>
            </thead>
            <tbody>
              {links.data && links.data.length ? (
                links.data.map((item, i) => (
                  <tr key={item.id}>
                    <td>{getSerialNumber(i)}</td>
                    <td>
                      <span className="badge badge-info">
                        {item.category}
                      </span>
                    </td>
                    <td>{item.subject}</td>
                    <td>
                      {item.web_link ? (
                        <a href={item.web_link} target="_blank" rel="noreferrer">
                          {item.web_link}
                        </a>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id={`status-switch-${item.id}`}
                          checked={item.is_active === 1 || item.is_active === true}
                          onChange={() => toggleStatus(item)}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor={`status-switch-${item.id}`}
                        >
                          <span className={`badge ${item.is_active ? 'badge-success' : 'badge-secondary'}`}>
                            {item.is_active ? 'Active' : 'Inactive'}
                          </span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="btn-group">
                        <Link
                          href={`/admin/important-web-links/${item.id}/edit`}
                          className="btn btn-info btn-sm"
                          title="Edit"
                        >
                          <i className="fas fa-edit"></i>
                        </Link>

                        <button
                          onClick={(e) => handleDelete(item.id, e)}
                          className="btn btn-dark btn-sm"
                          title="Permanently Delete"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-muted">
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        {links.links && links.links.length > 1 && (
          <div className="card-footer d-flex justify-content-end">
            <nav>
              <ul className="pagination mb-0">
                {links.links.map((link, i) => (
                  <li
                    key={i}
                    className={`page-item ${link.active ? 'active' : ''} ${!link.url ? 'disabled' : ''}`}
                  >
                    <Link
                      href={link.url || '#'}
                      className="page-link"
                      dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}