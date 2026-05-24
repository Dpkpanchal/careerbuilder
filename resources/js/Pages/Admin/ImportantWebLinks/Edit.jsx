import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';

const CATEGORY_OPTIONS = [
  'School','College','University','Results & Exams',
  'Current Affairs & Job News','Minority & Govt Websites'
];

export default function Edit({ link }) {
  const { data, setData, put } = useForm({
    category: link.category,
    subject: link.subject,
    web_link: link.web_link,
  });

  const submit = (e) => {
    e.preventDefault();
    put(`/admin/important-web-links/${link.id}`);
  };

  return (
    <AdminLayout header="Edit Web Link">
      <Head title="Edit Web Link" />

      <form onSubmit={submit} className="card p-4">
        <select className="form-control mb-3"
          value={data.category}
          onChange={(e) => setData('category', e.target.value)}>
          {CATEGORY_OPTIONS.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <input className="form-control mb-3"
          value={data.subject}
          onChange={(e) => setData('subject', e.target.value)}
        />

        <input className="form-control mb-3"
          value={data.web_link}
          onChange={(e) => setData('web_link', e.target.value)}
        />

        <button className="btn btn-primary">Update</button>
      </form>
    </AdminLayout>
  );
}
