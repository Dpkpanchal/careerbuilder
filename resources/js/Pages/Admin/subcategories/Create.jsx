// import React from 'react';
// import AdminLayout from '@/Layouts/AdminLayout';
// import { Head, useForm, Link } from '@inertiajs/react';

// const SubCategoryCreate = ({ categories }) => {

//     const { data, setData, post, processing, errors } = useForm({
//         category_id: '',
//         name: '',
//         slug: '',
//     });

//     const submit = (e) => {
//         e.preventDefault();
//         post('/admin/subcategories');
//     };

//     return (
//         <AdminLayout header="Create Subcategory">
//             <Head title="Create Subcategory" />

//             <div className="container-fluid">
//                 <div className="row">

//                     {/* LEFT SECTION */}
//                     <div className="col-md-8">
//                         <div className="card">
//                             <div className="card-header">
//                                 <h3 className="card-title">Add New Subcategory</h3>
//                             </div>

//                             <div className="card-body">
//                                 <form onSubmit={submit}>
                                    
//                                     {/* Parent Category */}
//                                     <div className="form-group">
//                                         <label htmlFor="category_id">Parent Category</label>
//                                         <select
//                                             id="category_id"
//                                             value={data.category_id}
//                                             onChange={(e) => setData('category_id', e.target.value)}
//                                             className={`form-control ${errors.category_id ? 'is-invalid' : ''}`}
//                                             required
//                                         >
//                                             <option value="">Select Category</option>
//                                             {categories.map(cat => (
//                                                 <option key={cat.id} value={cat.id}>
//                                                     {cat.name}
//                                                 </option>
//                                             ))}
//                                         </select>
//                                         {errors.category_id && (
//                                             <div className="invalid-feedback">
//                                                 {errors.category_id}
//                                             </div>
//                                         )}
//                                     </div>

//                                     {/* Subcategory Name */}
//                                     <div className="form-group mt-3">
//                                         <label htmlFor="name">Subcategory Name</label>
//                                         <input
//                                             type="text"
//                                             id="name"
//                                             value={data.name}
//                                             onChange={(e) => setData('name', e.target.value)}
//                                             className={`form-control ${errors.name ? 'is-invalid' : ''}`}
//                                             placeholder="Enter subcategory name"
//                                             required
//                                         />
//                                         {errors.name && (
//                                             <div className="invalid-feedback">
//                                                 {errors.name}
//                                             </div>
//                                         )}
//                                     </div>

//                                     {/* Slug */}
//                                     <div className="form-group mt-3">
//                                         <label htmlFor="slug">Slug (optional)</label>
//                                         <input
//                                             type="text"
//                                             id="slug"
//                                             value={data.slug}
//                                             onChange={(e) => setData('slug', e.target.value)}
//                                             className="form-control"
//                                             placeholder="Auto-generated if left empty"
//                                         />
//                                     </div>

//                                     {/* Buttons */}
//                                     <div className="form-group mt-4">
//                                         <button
//                                             type="submit"
//                                             className="btn btn-primary"
//                                             disabled={processing}
//                                         >
//                                             {processing ? 'Saving...' : 'Save Subcategory'}
//                                         </button>

//                                         <Link 
//                                             href="/admin/subcategories"
//                                             className="btn btn-default ml-2"
//                                         >
//                                             Cancel
//                                         </Link>
//                                     </div>

//                                 </form>
//                             </div>
//                         </div>
//                     </div>

//                     {/* RIGHT SECTION – TIPS */}
//                     <div className="col-md-4">
//                         <div className="card">
//                             <div className="card-header">
//                                 <h3 className="card-title">Quick Tips</h3>
//                             </div>
//                             <div className="card-body">
//                                 <ul className="list-unstyled">
//                                     <li><i className="fas fa-lightbulb text-warning mr-2"></i>Choose the correct parent category</li>
//                                     <li><i className="fas fa-lightbulb text-warning mr-2"></i>Subcategory name must be unique</li>
//                                     <li><i className="fas fa-lightbulb text-warning mr-2"></i>Slug auto-generates if left blank</li>
//                                     <li><i className="fas fa-lightbulb text-warning mr-2"></i>Use short and clear names</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </AdminLayout>
//     );
// };

// export default SubCategoryCreate;


import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';

const SubCategoryCreate = ({ categories }) => {

    const { data, setData, post, processing, errors } = useForm({
        category_id: '',
        name: '',
        slug: '',
        groups: [
            { title: '', sort_order: 0 }
        ]
    });

    const submit = (e) => {
        e.preventDefault();
        post('/admin/subcategories');
    };

    /* ===============================
       GROUP HANDLERS
    ================================ */

    const addGroup = () => {
        setData('groups', [
            ...data.groups,
            { title: '', sort_order: data.groups.length }
        ]);
    };

    const removeGroup = (index) => {
        const updated = data.groups.filter((_, i) => i !== index);
        setData('groups', updated);
    };

    const updateGroup = (index, value) => {
        const updated = [...data.groups];
        updated[index].title = value;
        setData('groups', updated);
    };

    return (
        <AdminLayout header="Create Subcategory">
            <Head title="Create Subcategory" />

            <div className="container-fluid">
                <div className="row">

                    {/* LEFT SECTION */}
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Add New Subcategory</h3>
                            </div>

                            <div className="card-body">
                                <form onSubmit={submit}>

                                    {/* Parent Category */}
                                    <div className="form-group">
                                        <label>Parent Category</label>
                                        <select
                                            className={`form-control ${errors.category_id ? 'is-invalid' : ''}`}
                                            value={data.category_id}
                                            onChange={(e) => setData('category_id', e.target.value)}
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

                                    {/* Subcategory Name */}
                                    <div className="form-group mt-3">
                                        <label>Subcategory Name</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            placeholder="Enter subcategory name"
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
                                            onChange={(e) => setData('slug', e.target.value)}
                                            placeholder="Auto-generated if left empty"
                                        />
                                    </div>

                                    {/* ===============================
                                       GROUP TITLES SECTION
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
                                                    onChange={(e) => updateGroup(index, e.target.value)}
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
                                            {processing ? 'Saving...' : 'Save Subcategory'}
                                        </button>

                                        <Link
                                            href="/admin/subcategories"
                                            className="btn btn-default ml-2"
                                        >
                                            Cancel
                                        </Link>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SECTION – TIPS */}
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Quick Tips</h3>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled">
                                    <li>✔ Group titles are optional</li>
                                    <li>✔ Add multiple headings if needed</li>
                                    <li>✔ Menu items will use these headings</li>
                                    <li>✔ Keep titles short & clear</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </AdminLayout>
    );
};

export default SubCategoryCreate;

