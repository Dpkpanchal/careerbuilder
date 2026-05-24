import React, { useState, useEffect } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, Link } from "@inertiajs/react";

export default function MenuItemTabCreate({ categories }) {

    const { data, setData, post, processing, errors } = useForm({
        category_id: "",
        sub_category_id: "",
        menu_item_id: "",

        name: "",        // ✅ Tab Name
        icon: "",        // ✅ Tab Icon
        sort_order: "",  // ✅ Optional
    });

    const [subCategories, setSubCategories] = useState([]);
    const [menuItems, setMenuItems] = useState([]);

    // ✅ Load Subcategories when Category changes
    useEffect(() => {
        if (data.category_id) {
            fetch(`/admin/ajax/subcategories?category_id=${data.category_id}`)
                .then((res) => res.json())
                .then((res) => {
                    setSubCategories(res);
                    setMenuItems([]);
                    setData("sub_category_id", "");
                    setData("menu_item_id", "");
                });
        }
    }, [data.category_id]);

    // ✅ Load Menu Items when Subcategory changes
    useEffect(() => {
        if (data.sub_category_id) {
            fetch(`/admin/ajax/menuitems?sub_category_id=${data.sub_category_id}`)
                .then((res) => res.json())
                .then((res) => {
                    setMenuItems(res);
                    setData("menu_item_id", "");
                });
        }
    }, [data.sub_category_id]);

    const submit = (e) => {
        e.preventDefault();
        post("/admin/itemtabs"); // ✅ Correct route for creating TAB
    };

    return (
        <AdminLayout header="Create Menu Item Tab">
            <Head title="Create Menu Item Tab" />

            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Add New Tab</h3>
                            </div>

                            <div className="card-body">
                                <form onSubmit={submit}>

                                    {/* CATEGORY */}
                                    <div className="form-group">
                                        <label>Select Category</label>
                                        <select
                                            value={data.category_id}
                                            onChange={(e) => setData("category_id", e.target.value)}
                                            className="form-control"
                                            required
                                        >
                                            <option value="">Select Category</option>
                                            {categories.map((cat) => (
                                                <option key={cat.id} value={cat.id}>
                                                    {cat.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* SUBCATEGORY */}
                                    <div className="form-group mt-3">
                                        <label>Select Subcategory</label>
                                        <select
                                            value={data.sub_category_id}
                                            onChange={(e) => setData("sub_category_id", e.target.value)}
                                            className="form-control"
                                            required
                                            disabled={!subCategories.length}
                                        >
                                            <option value="">Select Subcategory</option>
                                            {subCategories.map((sub) => (
                                                <option key={sub.id} value={sub.id}>
                                                    {sub.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* MENU ITEM */}
                                    <div className="form-group mt-3">
                                        <label>Select Menu Item</label>
                                        <select
                                            value={data.menu_item_id}
                                            onChange={(e) => setData("menu_item_id", e.target.value)}
                                            className="form-control"
                                            required
                                            disabled={!menuItems.length}
                                        >
                                            <option value="">Select Menu Item</option>
                                            {menuItems.map((item) => (
                                                <option key={item.id} value={item.id}>
                                                    {item.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* TAB NAME */}
                                    <div className="form-group mt-3">
                                        <label>Tab Name</label>
                                        <input
                                            type="text"
                                            value={data.name}
                                            onChange={(e) => setData("name", e.target.value)}
                                            className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                            required
                                        />
                                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                    </div>

                                    {/* TAB ICON */}
                                    <div className="form-group mt-3">
                                        <label>Tab Icon (FontAwesome or custom)</label>
                                        <input
                                            type="text"
                                            value={data.icon}
                                            onChange={(e) => setData("icon", e.target.value)}
                                            className="form-control"
                                            placeholder="Example: fa-solid fa-book"
                                        />
                                    </div>

                                    {/* SORT ORDER */}
                                    <div className="form-group mt-3">
                                        <label>Sort Order (optional)</label>
                                        <input
                                            type="number"
                                            value={data.sort_order}
                                            onChange={(e) => setData("sort_order", e.target.value)}
                                            className="form-control"
                                            placeholder="0"
                                        />
                                    </div>

                                    {/* SUBMIT */}
                                    <div className="form-group mt-4">
                                        <button className="btn btn-primary" disabled={processing}>
                                            {processing ? "Saving..." : "Save Tab"}
                                        </button>

                                        <Link
                                            href="/admin/itemtabs"
                                            className="btn btn-default ml-2"
                                        >
                                            Cancel
                                        </Link>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </AdminLayout>
    );
}
