// import React, { useState, useEffect } from 'react';
// import AdminLayout from '@/Layouts/AdminLayout';
// import { Head, useForm, Link } from '@inertiajs/react';

// const MenuItemCreate = ({ categories, subcategories }) => {

//     const { data, setData, post, processing, errors, reset } = useForm({
//         category_id: '',
//         sub_category_id: '',
//         name: '',
//         slug: '',
//         description: '',
//         link_to_page: '',
//     });

//     // ✅ Filtered subcategories based on selected category
//     const filteredSubCategories = data.category_id
//         ? subcategories.filter(sub => sub.category_id == data.category_id)
//         : [];

//     const submit = (e) => {
//         e.preventDefault();
//         post('/admin/menuitems');
//     };

//     return (
//         <AdminLayout header="Create Menu Item">
//             <Head title="Create Menu Item" />

//             <div className="container-fluid">
//                 <div className="row">

//                     {/* LEFT FORM */}
//                     <div className="col-md-8">
//                         <div className="card">
//                             <div className="card-header">
//                                 <h3 className="card-title">Add New Menu Item</h3>
//                             </div>

//                             <div className="card-body">

//                                 <form onSubmit={submit}>


//                                     {/* ✅ SELECT CATEGORY */}
//                                     <div className="form-group">
//                                         <label>Select Category</label>
//                                         <select
//                                             value={data.category_id}
//                                             onChange={(e) => {
//                                                 setData('category_id', e.target.value);
//                                                 setData('sub_category_id', ''); // reset subcategory
//                                             }}
//                                             className={`form-control ${errors.category_id ? 'is-invalid' : ''}`}
//                                             required
//                                         >
//                                             <option value="">Select Category</option>
//                                             {categories.map(cat => (
//                                                 <option key={cat.id} value={cat.id}>{cat.name}</option>
//                                             ))}
//                                         </select>

//                                         {errors.category_id && (
//                                             <div className="invalid-feedback">{errors.category_id}</div>
//                                         )}
//                                     </div>


//                                     {/* ✅ SELECT SUBCATEGORY (Filtered) */}
//                                     <div className="form-group mt-3">
//                                         <label>Select Subcategory</label>
//                                         <select
//                                             value={data.sub_category_id}
//                                             onChange={(e) => setData('sub_category_id', e.target.value)}
//                                             className={`form-control ${errors.sub_category_id ? 'is-invalid' : ''}`}
//                                             required
//                                             disabled={!data.category_id}
//                                         >
//                                             <option value="">
//                                                 {data.category_id ? 'Select Subcategory' : 'Select category first'}
//                                             </option>

//                                             {filteredSubCategories.map(sub => (
//                                                 <option key={sub.id} value={sub.id}>{sub.name}</option>
//                                             ))}
//                                         </select>

//                                         {errors.sub_category_id && (
//                                             <div className="invalid-feedback">{errors.sub_category_id}</div>
//                                         )}
//                                     </div>


//                                     {/* Name */}
//                                     <div className="form-group mt-3">
//                                         <label>Menu Item Name</label>
//                                         <input
//                                             type="text"
//                                             value={data.name}
//                                             onChange={(e) => setData('name', e.target.value)}
//                                             className={`form-control ${errors.name ? 'is-invalid' : ''}`}
//                                             placeholder="Menu item name"
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
//                                             value={data.slug}
//                                             onChange={(e) => setData('slug', e.target.value)}
//                                             className="form-control"
//                                             placeholder="auto-generated if empty"
//                                         />
//                                     </div>

//                                     {/* Description */}
//                                     <div className="form-group mt-3">
//                                         <label>Description</label>
//                                         <textarea
//                                             value={data.description}
//                                             onChange={(e) => setData('description', e.target.value)}
//                                             className="form-control"
//                                             placeholder="Enter description..."
//                                             rows="3"
//                                         ></textarea>
//                                     </div>

                        
//                                     {/* Buttons */}
//                                     <div className="form-group mt-4">
//                                         <button className="btn btn-primary" disabled={processing}>
//                                             {processing ? 'Saving...' : 'Save Menu Item'}
//                                         </button>

//                                         <Link href="/admin/menuitems" className="btn btn-default ml-2">
//                                             Cancel
//                                         </Link>
//                                     </div>

//                                 </form>

//                             </div>
//                         </div>
//                     </div>


//                     {/* RIGHT SIDEBAR */}
//                     <div className="col-md-4">

//                         <div className="card">
//                             <div className="card-header">
//                                 <h3 className="card-title">Quick Tips</h3>
//                             </div>
//                             <div className="card-body">
//                                 <ul>
//                                     <li>Choose category → then subcategory</li>
//                                     <li>Slug auto-generates if blank</li>
//                                     <li>Menu items appear under subcategories</li>
//                                     <li>Keep title short and meaningful</li>
//                                 </ul>
//                             </div>
//                         </div>

//                     </div>

//                 </div>
//             </div>

//         </AdminLayout>
//     );
// };

// export default MenuItemCreate;


import React, { useState, useEffect } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';

const MenuItemCreate = ({ categories, subcategories }) => {

    /* ===============================
       LOCAL STATE
    ================================ */
    const [groups, setGroups] = useState([]);

    /* ===============================
       FORM STATE
    ================================ */
    const { data, setData, post, processing, errors } = useForm({
        category_id: '',
        sub_category_id: '',
        group_id: '',
        name: '',
        slug: '',
        description: '',
    });

    /* ===============================
       FILTER SUBCATEGORIES
    ================================ */
    const filteredSubCategories = data.category_id
        ? subcategories.filter(sub => sub.category_id == data.category_id)
        : [];

    /* ===============================
       FETCH GROUPS ON SUBCATEGORY CHANGE
    ================================ */
    useEffect(() => {
        if (!data.sub_category_id) {
            setGroups([]);
            setData('group_id', '');
            return;
        }

        fetch(`/admin/ajax/menu-groups/by-subcategory/${data.sub_category_id}`)
            .then(res => res.json())
            .then(result => {
                setGroups(result);
                setData('group_id', '');
            })
            .catch(() => {
                setGroups([]);
            });
    }, [data.sub_category_id]);

    /* ===============================
       SUBMIT
    ================================ */
    const submit = (e) => {
        e.preventDefault();
        post('/admin/menuitems');
    };

    return (
        <AdminLayout header="Create Menu Item">
            <Head title="Create Menu Item" />

            <div className="container-fluid">
                <div className="row">

                    {/* ===============================
                       LEFT FORM
                    ================================ */}
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Add New Menu Item</h3>
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
                                                setGroups([]);
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

                                    {/* SUB CATEGORY */}
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
                                                {data.category_id ? 'Select Subcategory' : 'Select category first'}
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

                                    {/* GROUP TITLE */}
                                    <div className="form-group mt-3">
                                        <label>Select Group Title</label>
                                        <select
                                            className={`form-control ${errors.group_id ? 'is-invalid' : ''}`}
                                            value={data.group_id}
                                            onChange={(e) => setData('group_id', e.target.value)}
                                            disabled={!groups.length}
                                            required
                                        >
                                            <option value="">
                                                {groups.length
                                                    ? 'Select Group Title'
                                                    : 'Select subcategory first'}
                                            </option>
                                            {groups.map(group => (
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
                                            placeholder="Enter menu item name"
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
                                            placeholder="Auto-generated if empty"
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
                                            placeholder="Optional description"
                                        />
                                    </div>

                                    {/* BUTTONS */}
                                    <div className="form-group mt-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={processing}
                                        >
                                            {processing ? 'Saving...' : 'Save Menu Item'}
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

                    {/* ===============================
                       RIGHT SIDEBAR
                    ================================ */}
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Quick Tips</h3>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>Select Category → Subcategory → Group</li>
                                    <li>Group titles come from Subcategory</li>
                                    <li>Slug auto-generates if empty</li>
                                    <li>Keep names short & clear</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </AdminLayout>
    );
};

export default MenuItemCreate;

