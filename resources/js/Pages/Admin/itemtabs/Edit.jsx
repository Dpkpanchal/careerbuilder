import React, { useState, useEffect } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, Link } from "@inertiajs/react";

export default function MenuItemTabEdit({
    tab,
    categories,
    subCategories: initialSubCategories,
    menuItems: initialMenuItems,
    selectedCategory,
    selectedSubCat,
    selectedMenuItem
}) {

    const { data, setData, put, processing } = useForm({
        category_id: String(selectedCategory ?? ""),
        sub_category_id: String(selectedSubCat ?? ""),
        menu_item_id: String(selectedMenuItem ?? ""),
        name: tab.name ?? "",
        icon: tab.icon ?? "",
        sort_order: tab.sort_order ?? 0,
    });

    const [subCategories, setSubCategories] = useState(initialSubCategories ?? []);
    const [menuItems, setMenuItems] = useState(initialMenuItems ?? []);

    // ✅ Load subcategories only when user CHANGES category
    useEffect(() => {
        if (!data.category_id) return;

        fetch(`/admin/ajax/subcategories?category_id=${data.category_id}`)
            .then(res => res.json())
            .then(res => {
                setSubCategories(res);

                // ✅ Only reset subcategory if current one is NOT valid
                if (!res.some(s => s.id == data.sub_category_id)) {
                    setData("sub_category_id", "");
                }
            });
    }, [data.category_id]);


    // ✅ Load menu items only when user CHANGES subcategory
    useEffect(() => {
        if (!data.sub_category_id) return;

        fetch(`/admin/ajax/menuitems?sub_category_id=${data.sub_category_id}`)
            .then(res => res.json())
            .then(res => {
                setMenuItems(res);

                if (!res.some(m => m.id == data.menu_item_id)) {
                    setData("menu_item_id", "");
                }
            });
    }, [data.sub_category_id]);


    const submit = (e) => {
        e.preventDefault();
        put(`/admin/itemtabs/${tab.id}`);
    };

    return (
        <AdminLayout header="Edit Menu Item Tab">
            <Head title="Edit Menu Item Tab" />

            <div className="container-fluid">
                <div className="row">

                    {/* FORM */}
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Edit Tab: {tab.name}</h3>
                            </div>

                            <div className="card-body">
                                <form onSubmit={submit}>

                                    {/* CATEGORY */}
                                    <div className="form-group">
                                        <label>Category</label>
                                        <select
                                            className="form-control"
                                            value={data.category_id}
                                            onChange={(e) => setData("category_id", e.target.value)}
                                            required
                                        >
                                            <option value="">Select Category</option>
                                            {categories.map(cat => (
                                                <option key={cat.id} value={cat.id}>
                                                    {cat.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* SUBCATEGORY */}
                                    <div className="form-group mt-3">
                                        <label>Subcategory</label>
                                        <select
                                            className="form-control"
                                            value={data.sub_category_id}
                                            onChange={(e) => setData("sub_category_id", e.target.value)}
                                            required
                                        >
                                            <option value="">Select Subcategory</option>
                                            {subCategories.map(sub => (
                                                <option key={sub.id} value={sub.id}>
                                                    {sub.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* MENU ITEM */}
                                    <div className="form-group mt-3">
                                        <label>Menu Item</label>
                                        <select
                                            className="form-control"
                                            value={data.menu_item_id}
                                            onChange={(e) => setData("menu_item_id", e.target.value)}
                                            required
                                        >
                                            <option value="">Select Menu Item</option>
                                            {menuItems.map(mi => (
                                                <option key={mi.id} value={mi.id}>
                                                    {mi.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* NAME */}
                                    <div className="form-group mt-3">
                                        <label>Tab Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={data.name}
                                            onChange={(e) => setData("name", e.target.value)}
                                            required
                                        />
                                    </div>

                                    {/* ICON */}
                                    <div className="form-group mt-3">
                                        <label>Icon</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={data.icon}
                                            onChange={(e) => setData("icon", e.target.value)}
                                        />
                                    </div>

                                    {/* SORT ORDER */}
                                    <div className="form-group mt-3">
                                        <label>Sort Order</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={data.sort_order}
                                            onChange={(e) => setData("sort_order", e.target.value)}
                                        />
                                    </div>

                                    {/* SAVE */}
                                    <div className="form-group mt-4">
                                        <button className="btn btn-primary" disabled={processing}>
                                            Update Tab
                                        </button>
                                        <Link href="/admin/itemtabs" className="btn btn-default ml-2">
                                            Cancel
                                        </Link>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-md-4">

                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Tab Info</h3>
                            </div>
                            <div className="card-body">
                                <p><strong>ID:</strong> {tab.id}</p>
                                <p><strong>Menu Item:</strong> {tab.menu_item?.name}</p>
                                <p><strong>Created:</strong> {new Date(tab.created_at).toLocaleDateString()}</p>
                                <p><strong>Updated:</strong> {new Date(tab.updated_at).toLocaleDateString()}</p>
                            </div>
                        </div>

                        <div className="card mt-3">
                            <div className="card-header bg-danger">
                                <h3 className="card-title text-white">Danger Zone</h3>
                            </div>
                            <div className="card-body">
                                <Link
                                    href={`/admin/itemtabs/${tab.id}`}
                                    method="delete"
                                    as="button"
                                    className="btn btn-danger btn-block"
                                    onClick={(e) => {
                                        if (!confirm("Delete this tab?")) e.preventDefault();
                                    }}
                                >
                                    Delete Tab
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </AdminLayout>
    );
}
