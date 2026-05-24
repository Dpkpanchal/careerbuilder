// import React from 'react';
// import AdminLayout from '@/Layouts/AdminLayout';
// import { Head, useForm, Link } from '@inertiajs/react';

// const SubCategoryEdit = ({ subcategory, categories }) => {

//     const { data, setData, put, processing, errors } = useForm({
//         category_id: subcategory.category_id || "",
//         name: subcategory.name || "",
//         slug: subcategory.slug || "",
//     });

//     const submit = (e) => {
//         e.preventDefault();
//         put(`/admin/subcategories/${subcategory.id}`);
//     };

//     return (
//         <AdminLayout header="Edit Subcategory">
//             <Head title="Edit Subcategory" />

//             <div className="container-fluid">
//                 <div className="row">

//                     {/* LEFT FORM */}
//                     <div className="col-md-8">
//                         <div className="card">
//                             <div className="card-header">
//                                 <h3 className="card-title">Edit: {subcategory.name}</h3>
//                             </div>

//                             <div className="card-body">
//                                 <form onSubmit={submit}>

//                                     {/* Category */}
//                                     <div className="form-group">
//                                         <label>Parent Category</label>
//                                         <select
//                                             className={`form-control ${errors.category_id ? "is-invalid" : ""}`}
//                                             value={data.category_id}
//                                             onChange={(e) => setData("category_id", e.target.value)}
//                                         >
//                                             <option value="">Select Category</option>
//                                             {categories.map(cat => (
//                                                 <option value={cat.id} key={cat.id}>
//                                                     {cat.name}
//                                                 </option>
//                                             ))}
//                                         </select>
//                                         {errors.category_id && (
//                                             <div className="invalid-feedback">{errors.category_id}</div>
//                                         )}
//                                     </div>

//                                     {/* Name */}
//                                     <div className="form-group mt-3">
//                                         <label>Subcategory Name</label>
//                                         <input
//                                             type="text"
//                                             className={`form-control ${errors.name ? "is-invalid" : ""}`}
//                                             value={data.name}
//                                             onChange={(e) => setData("name", e.target.value)}
//                                             required
//                                         />
//                                         {errors.name && (
//                                             <div className="invalid-feedback">{errors.name}</div>
//                                         )}
//                                     </div>

//                                     {/* Slug */}
//                                     <div className="form-group mt-3">
//                                         <label>Slug (optional)</label>
//                                         <input
//                                             type="text"
//                                             className="form-control"
//                                             value={data.slug}
//                                             onChange={(e) => setData("slug", e.target.value)}
//                                         />
//                                     </div>

//                                     <div className="form-group mt-4">
//                                         <button
//                                             type="submit"
//                                             className="btn btn-primary"
//                                             disabled={processing}
//                                         >
//                                             {processing ? "Updating..." : "Update Subcategory"}
//                                         </button>

//                                         <Link href="/admin/subcategories" className="btn btn-default ml-2">
//                                             Cancel
//                                         </Link>
//                                     </div>

//                                 </form>
//                             </div>
//                         </div>
//                     </div>

//                     {/* RIGHT INFO + DELETE */}
//                     <div className="col-md-4">

//                         {/* Info */}
//                         <div className="card">
//                             <div className="card-header">
//                                 <h3 className="card-title">Subcategory Info</h3>
//                             </div>
//                             <div className="card-body">
//                                 <p><strong>ID:</strong> {subcategory.id}</p>
//                                 <p><strong>Created:</strong> {new Date(subcategory.created_at).toLocaleDateString()}</p>
//                                 <p><strong>Updated:</strong> {new Date(subcategory.updated_at).toLocaleDateString()}</p>
//                             </div>
//                         </div>

//                         {/* Danger Zone */}
//                         <div className="card mt-3">
//                             <div className="card-header bg-danger">
//                                 <h3 className="card-title text-white">Danger Zone</h3>
//                             </div>
//                             <div className="card-body">
//                                 <p className="text-muted">
//                                     Deleting this will remove related menu items.
//                                 </p>

//                                 <Link
//                                     href={`/admin/subcategories/${subcategory.id}`}
//                                     method="delete"
//                                     as="button"
//                                     className="btn btn-danger btn-block"
//                                     onClick={(e) => {
//                                         if (!confirm("Delete this subcategory?")) {
//                                             e.preventDefault();
//                                         }
//                                     }}
//                                 >
//                                     <i className="fas fa-trash mr-2"></i>
//                                     Delete Subcategory
//                                 </Link>
//                             </div>
//                         </div>

//                     </div>

//                 </div>
//             </div>
//         </AdminLayout>
//     );
// };

// export default SubCategoryEdit;


import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';

const SubCategoryEdit = ({ subcategory, categories, groups = [] }) => {

    const { data, setData, put, processing, errors } = useForm({
        category_id: subcategory.category_id || "",
        name: subcategory.name || "",
        slug: subcategory.slug || "",
        groups: groups.length
            ? groups.map(g => ({
                  id: g.id,
                  title: g.title,
                  sort_order: g.sort_order ?? 0
              }))
            : [{ title: "", sort_order: 0 }]
    });

    const submit = (e) => {
        e.preventDefault();
        put(`/admin/subcategories/${subcategory.id}`);
    };

    /* ===============================
       GROUP HANDLERS
    ================================ */

    const addGroup = () => {
        setData("groups", [
            ...data.groups,
            { title: "", sort_order: data.groups.length }
        ]);
    };

    const removeGroup = (index) => {
        const updated = data.groups.filter((_, i) => i !== index);
        setData("groups", updated);
    };

    const updateGroup = (index, value) => {
        const updated = [...data.groups];
        updated[index].title = value;
        setData("groups", updated);
    };

    return (
        <AdminLayout header="Edit Subcategory">
            <Head title="Edit Subcategory" />

            <div className="container-fluid">
                <div className="row">

                    {/* LEFT FORM */}
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Edit: {subcategory.name}</h3>
                            </div>

                            <div className="card-body">
                                <form onSubmit={submit}>

                                    {/* Category */}
                                    <div className="form-group">
                                        <label>Parent Category</label>
                                        <select
                                            className={`form-control ${errors.category_id ? "is-invalid" : ""}`}
                                            value={data.category_id}
                                            onChange={(e) => setData("category_id", e.target.value)}
                                        >
                                            <option value="">Select Category</option>
                                            {categories.map(cat => (
                                                <option value={cat.id} key={cat.id}>
                                                    {cat.name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.category_id && (
                                            <div className="invalid-feedback">{errors.category_id}</div>
                                        )}
                                    </div>

                                    {/* Name */}
                                    <div className="form-group mt-3">
                                        <label>Subcategory Name</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                            value={data.name}
                                            onChange={(e) => setData("name", e.target.value)}
                                            required
                                        />
                                        {errors.name && (
                                            <div className="invalid-feedback">{errors.name}</div>
                                        )}
                                    </div>

                                    {/* Slug */}
                                    <div className="form-group mt-3">
                                        <label>Slug (optional)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={data.slug}
                                            onChange={(e) => setData("slug", e.target.value)}
                                        />
                                    </div>

                                    {/* ===============================
                                       GROUP TITLES
                                    ================================ */}
                                    <div className="form-group mt-4">
                                        <label>Group Titles</label>

                                        {data.groups.map((group, index) => (
                                            <div key={index} className="d-flex mb-2">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="e.g. Graduation Courses (After Class 12)"
                                                    value={group.title}
                                                    onChange={(e) =>
                                                        updateGroup(index, e.target.value)
                                                    }
                                                />

                                                {data.groups.length > 1 && (
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger ml-2"
                                                        onClick={() => removeGroup(index)}
                                                    >
                                                        ×
                                                    </button>
                                                )}
                                            </div>
                                        ))}

                                        <button
                                            type="button"
                                            className="btn btn-sm btn-secondary mt-2"
                                            onClick={addGroup}
                                        >
                                            + Add More Group Title
                                        </button>

                                        {errors.groups && (
                                            <div className="text-danger mt-1">{errors.groups}</div>
                                        )}
                                    </div>

                                    {/* Buttons */}
                                    <div className="form-group mt-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={processing}
                                        >
                                            {processing ? "Updating..." : "Update Subcategory"}
                                        </button>

                                        <Link href="/admin/subcategories" className="btn btn-default ml-2">
                                            Cancel
                                        </Link>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT INFO + DELETE */}
                    <div className="col-md-4">

                        {/* Info */}
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Subcategory Info</h3>
                            </div>
                            <div className="card-body">
                                <p><strong>ID:</strong> {subcategory.id}</p>
                                <p><strong>Created:</strong> {new Date(subcategory.created_at).toLocaleDateString()}</p>
                                <p><strong>Updated:</strong> {new Date(subcategory.updated_at).toLocaleDateString()}</p>
                            </div>
                        </div>

                        {/* Danger Zone */}
                        <div className="card mt-3">
                            <div className="card-header bg-danger">
                                <h3 className="card-title text-white">Danger Zone</h3>
                            </div>
                            <div className="card-body">
                                <p className="text-muted">
                                    Deleting this will remove related menu items and groups.
                                </p>

                                <Link
                                    href={`/admin/subcategories/${subcategory.id}`}
                                    method="delete"
                                    as="button"
                                    className="btn btn-danger btn-block"
                                    onClick={(e) => {
                                        if (!confirm("Delete this subcategory?")) {
                                            e.preventDefault();
                                        }
                                    }}
                                >
                                    <i className="fas fa-trash mr-2"></i>
                                    Delete Subcategory
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </AdminLayout>
    );
};

export default SubCategoryEdit;
