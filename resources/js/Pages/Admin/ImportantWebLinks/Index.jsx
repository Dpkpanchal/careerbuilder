import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm, router } from '@inertiajs/react';

const CATEGORY_OPTIONS = [
  'School',
  'College',
  'University',
  'Results & Exams',
  'Current Affairs & Job News',
  'Minority & Govt Websites',
];

export default function Index({ links, filters }) {

  const { data, setData } = useForm({
    search: filters.search || '',
    category: filters.category || '',
  });

  const applyFilter = () => {
    router.get('/admin/important-web-links', data, {
      preserveState: true,
      replace: true,
    });
  };

  return (
    <AdminLayout header="Important Web Links">
      <Head title="Important Web Links" />

      {/* FILTERS */}
      <div className="card">
        <div className="card-body row">
          <div className="col-md-4">
            <input
              className="form-control"
              placeholder="Search subject..."
              value={data.search}
              onChange={(e) => setData('search', e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <select
              className="form-control"
              value={data.category}
              onChange={(e) => setData('category', e.target.value)}
            >
              <option value="">All Categories</option>
              {CATEGORY_OPTIONS.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <button className="btn btn-primary" onClick={applyFilter}>
              Apply
            </button>

            <Link
              href="/admin/important-web-links/create"
              className="btn btn-success ml-2"
            >
              + Add
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
                <th>#</th>
                <th>Category</th>
                <th>Subject</th>
                <th>Link</th>
                <th width="140">Action</th>
              </tr>
            </thead>
            <tbody>
              {links.data.length ? links.data.map((item, i) => (
                <tr key={item.id}>
                  <td>{links.from + i}</td>
                  <td>
                    <span className="badge badge-info">
                      {item.category}
                    </span>
                  </td>
                  <td>{item.subject}</td>
                  <td>
                    <a href={item.web_link} target="_blank" rel="noreferrer">
                      {item.web_link}
                    </a>
                  </td>
                  <td>
                    <Link
                      href={`/admin/important-web-links/${item.id}/edit`}
                      className="btn btn-sm btn-info"
                    >
                      Edit
                    </Link>

                    <Link
                      as="button"
                      method="delete"
                      href={`/admin/important-web-links/${item.id}`}
                      className="btn btn-sm btn-danger ml-1"
                      onClick={(e) => !confirm('Delete?') && e.preventDefault()}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="5" className="text-center text-muted">
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ✅ PAGINATION */}
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
