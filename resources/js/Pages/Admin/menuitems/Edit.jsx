import React, { useState, useEffect } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';

const MenuItemEdit = ({ menuitem, categories, subcategories, groups = [] }) => {

    console.log('dee',menuitem);

    /* ===============================
       LOCAL STATE
    ================================ */
    const [groupOptions, setGroupOptions] = useState(groups);

    /* ===============================
       FORM STATE (IMPORTANT FIX)
    ================================ */
   const { data, setData, put, processing, errors } = useForm({
        category_id: menuitem.subcategory?.category_id || '',
        sub_category_id: menuitem.sub_category_id || '',
        name: menuitem.name || '',
        slug: menuitem.slug || '',
        description: menuitem.description || '',
        group_id: menuitem.group_id || '',
    });




    /* ===============================
       FILTER SUBCATEGORIES
    ================================ */
    const filteredSubCategories = data.category_id
        ? subcategories.filter(sub => sub.category_id == data.category_id)
        : [];

    /* ===============================
       LOAD GROUPS ON SUBCATEGORY CHANGE
    ================================ */
    useEffect(() => {
        if (!data.sub_category_id) {
            setGroupOptions([]);
            setData('group_id', '');
            return;
        }

        fetch(`/admin/ajax/menu-groups/by-subcategory/${data.sub_category_id}`)
            .then(res => res.json())
            .then(result => {
                setGroupOptions(result);
            })
            .catch(() => {
                setGroupOptions([]);
            });
    }, [data.sub_category_id]);

    /* ===============================
       SUBMIT
    ================================ */
    const submit = (e) => {
        e.preventDefault();
        put(`/admin/menuitems/${menuitem.id}`);
    };

    return (
        <AdminLayout header="Edit Menu Item">
            <Head title="Edit Menu Item" />

            <div className="container-fluid">
                <div className="row">

                    {/* LEFT FORM */}
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">
                                    Edit Menu Item: {menuitem.name}
                                </h3>
                            </div>

                            <div className="card-body">
                                <form onSubmit={submit}>

                                    {/* CATEGORY */}
                                    <div className="form-group">
                                        <label>Select Category</label>
                                        <select
                                            className={`form-control ${errors.category_id ? 'is-invalid' : ''}`}
                                            value={data.category_id}
                                            onChange={(e) => {
                                                setData('category_id', e.target.value);
                                                setData('sub_category_id', '');
                                                setData('group_id', '');
                                                setGroupOptions([]);
                                            }}
                                            required
                                        >
                                            <option value="">Select Category</option>
                                            {categories.map(cat => (
                                                <option key={cat.id} value={cat.id}>
                                                    {cat.name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.category_id && (
                                            <div className="invalid-feedback">{errors.category_id}</div>
                                        )}
                                    </div>

                                    {/* SUBCATEGORY */}
                                    <div className="form-group mt-3">
                                        <label>Select Subcategory</label>
                                        <select
                                            className={`form-control ${errors.sub_category_id ? 'is-invalid' : ''}`}
                                            value={data.sub_category_id}
                                            onChange={(e) => setData('sub_category_id', e.target.value)}
                                            disabled={!data.category_id}
                                            required
                                        >
                                            <option value="">
                                                {data.category_id
                                                    ? 'Select Subcategory'
                                                    : 'Select category first'}
                                            </option>

                                            {filteredSubCategories.map(sub => (
                                                <option key={sub.id} value={sub.id}>
                                                    {sub.name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.sub_category_id && (
                                            <div className="invalid-feedback">{errors.sub_category_id}</div>
                                        )}
                                    </div>

                                    {/* ✅ GROUP DROPDOWN */}
                                    <div className="form-group mt-3">
                                        <label>Select Group Title</label>
                                        <select
                                            className={`form-control ${errors.group_id ? 'is-invalid' : ''}`}
                                            value={data.group_id}
                                            onChange={(e) => setData('group_id', e.target.value)}
                                            disabled={!groupOptions.length}
                                            required
                                        >
                                            <option value="">
                                                {groupOptions.length
                                                    ? 'Select Group Title'
                                                    : 'Select subcategory first'}
                                            </option>

                                            {groupOptions.map(group => (
                                                <option key={group.id} value={group.id}>
                                                    {group.title}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.group_id && (
                                            <div className="invalid-feedback">{errors.group_id}</div>
                                        )}
                                    </div>

                                    {/* NAME */}
                                    <div className="form-group mt-3">
                                        <label>Menu Item Name</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            required
                                        />
                                        {errors.name && (
                                            <div className="invalid-feedback">{errors.name}</div>
                                        )}
                                    </div>

                                    {/* SLUG */}
                                    <div className="form-group mt-3">
                                        <label>Slug (optional)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={data.slug}
                                            onChange={(e) => setData('slug', e.target.value)}
                                        />
                                    </div>

                                    {/* DESCRIPTION */}
                                    <div className="form-group mt-3">
                                        <label>Description</label>
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            value={data.description}
                                            onChange={(e) => setData('description', e.target.value)}
                                        />
                                    </div>

                                    {/* BUTTONS */}
                                    <div className="form-group mt-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={processing}
                                        >
                                            {processing ? 'Updating...' : 'Update Menu Item'}
                                        </button>

                                        <Link
                                            href="/admin/menuitems"
                                            className="btn btn-default ml-2"
                                        >
                                            Cancel
                                        </Link>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="col-md-4">

                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Menu Item Info</h3>
                            </div>
                            <div className="card-body">
                                <p><strong>ID:</strong> {menuitem.id}</p>
                                <p><strong>Created:</strong> {new Date(menuitem.created_at).toLocaleDateString()}</p>
                                <p><strong>Updated:</strong> {new Date(menuitem.updated_at).toLocaleDateString()}</p>
                            </div>
                        </div>

                        <div className="card mt-3">
                            <div className="card-header bg-danger">
                                <h3 className="card-title text-white">Danger Zone</h3>
                            </div>
                            <div className="card-body">
                                <Link
                                    href={`/admin/menuitems/${menuitem.id}`}
                                    method="delete"
                                    as="button"
                                    className="btn btn-danger btn-block"
                                    onClick={(e) => {
                                        if (!confirm('Delete this menu item?')) {
                                            e.preventDefault();
                                        }
                                    }}
                                >
                                    Delete Menu Item
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </AdminLayout>
    );
};

export default MenuItemEdit;
