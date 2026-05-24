import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';

const CATEGORY_OPTIONS = [
  'School','College','University','Results & Exams',
  'Current Affairs & Job News','Minority & Govt Websites'
];

export default function Create() {
  const { data, setData, post, errors } = useForm({
    category: '',
    subject: '',
    web_link: '',
  });

  const submit = (e) => {
    e.preventDefault();
    post('/admin/important-web-links');
  };

  return (
    <AdminLayout header="Add Web Link">
      <Head title="Add Web Link" />

      <form onSubmit={submit} className="card p-4">
        <select className="form-control mb-3"
          value={data.category}
          onChange={(e) => setData('category', e.target.value)}>
          <option value="">Select Category</option>
          {CATEGORY_OPTIONS.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <input className="form-control mb-3"
          placeholder="Subject"
          value={data.subject}
          onChange={(e) => setData('subject', e.target.value)}
        />

        <input className="form-control mb-3"
          placeholder="Web Link"
          value={data.web_link}
          onChange={(e) => setData('web_link', e.target.value)}
        />

        <button className="btn btn-primary">Save</button>
      </form>
    </AdminLayout>
  );
}
