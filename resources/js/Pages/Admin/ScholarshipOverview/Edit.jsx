import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout"; // adjust path if your admin layout lives elsewhere
import { Plus, Trash2 } from "lucide-react";

export default function Edit({ overview }) {
    const { data, setData, put, processing, errors } = useForm({
        hero_title: overview?.hero_title || "",
        hero_breadcrumb: overview?.hero_breadcrumb || "",

        intro_title: overview?.intro_title || "",
        intro_subtitle: overview?.intro_subtitle || "",
        paragraph_1: overview?.paragraph_1 || "",
        paragraph_2: overview?.paragraph_2 || "",

        stats:
            overview?.stats?.length > 0
                ? overview.stats
                : [
                      { label: "", value: "", meta: "" },
                      { label: "", value: "", meta: "" },
                      { label: "", value: "", meta: "" },
                  ],

        quick_access_items: overview?.quick_access_items || [],
        quick_access_note: overview?.quick_access_note || "",

        rules_left: overview?.rules_left || [],
        rules_right: overview?.rules_right || [],

        schemes: overview?.schemes || [],

        table_note: overview?.table_note || "",
        is_active: overview?.is_active ?? true,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route("admin.scholarship-overview.update"));
    };

    /* ---------- Stats helpers (fixed 3 cards) ---------- */
    const updateStat = (index, field, value) => {
        const next = [...data.stats];
        next[index] = { ...next[index], [field]: value };
        setData("stats", next);
    };

    /* ---------- Quick access helpers ---------- */
    const addQuickAccess = () => {
        setData("quick_access_items", [
            ...data.quick_access_items,
            { text: "", link_url: "", link_label: "" },
        ]);
    };

    const updateQuickAccess = (index, field, value) => {
        const next = [...data.quick_access_items];
        next[index] = { ...next[index], [field]: value };
        setData("quick_access_items", next);
    };

    const removeQuickAccess = (index) => {
        setData(
            "quick_access_items",
            data.quick_access_items.filter((_, i) => i !== index)
        );
    };

    /* ---------- Rules helpers (two plain-string columns) ---------- */
    const addRule = (column) => {
        setData(column, [...data[column], ""]);
    };

    const updateRule = (column, index, value) => {
        const next = [...data[column]];
        next[index] = value;
        setData(column, next);
    };

    const removeRule = (column, index) => {
        setData(
            column,
            data[column].filter((_, i) => i !== index)
        );
    };

    /* ---------- Schemes table helpers ---------- */
    const addScheme = () => {
        setData("schemes", [
            ...data.schemes,
            {
                no: data.schemes.length + 1,
                name: "",
                class_of_study: "",
                website: "",
                min_marks: "",
                income: "",
            },
        ]);
    };

    const updateScheme = (index, field, value) => {
        const next = [...data.schemes];
        next[index] = { ...next[index], [field]: value };
        setData("schemes", next);
    };

    const removeScheme = (index) => {
        setData(
            "schemes",
            data.schemes.filter((_, i) => i !== index)
        );
    };

    return (
        <AdminLayout>
            <Head title="Edit Scholarship Overview" />

            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h4 mb-0">Edit Scholarship Overview Page</h1>
                <Link
                    href={route("admin.scholarship-overview.index")}
                    className="btn btn-secondary"
                >
                    Back
                </Link>
            </div>

            <form onSubmit={submit}>
                {/* Hero */}
            

                {/* Main description */}
                <div className="card mb-4">
                    <div className="card-header">
                        <strong>Main Description</strong>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>Section Heading</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={data.intro_title}
                                    onChange={(e) =>
                                        setData("intro_title", e.target.value)
                                    }
                                />
                                {errors.intro_title && (
                                    <small className="text-danger">
                                        {errors.intro_title}
                                    </small>
                                )}
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Section Subtitle</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={data.intro_subtitle}
                                    onChange={(e) =>
                                        setData(
                                            "intro_subtitle",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label>Paragraph 1</label>
                            <textarea
                                rows={3}
                                className="form-control"
                                value={data.paragraph_1}
                                onChange={(e) =>
                                    setData("paragraph_1", e.target.value)
                                }
                            />
                        </div>

                        <div className="mb-0">
                            <label>Paragraph 2</label>
                            <textarea
                                rows={3}
                                className="form-control"
                                value={data.paragraph_2}
                                onChange={(e) =>
                                    setData("paragraph_2", e.target.value)
                                }
                            />
                        </div>
                    </div>
                </div>

                {/* Stats (fixed 3 cards) */}
                <div className="card mb-4">
                    <div className="card-header">
                        <strong>Key Metrics (3 cards)</strong>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {data.stats.map((stat, i) => (
                                <div className="col-md-4 mb-3" key={i}>
                                    <div className="border rounded p-3">
                                        <label>Label</label>
                                        <input
                                            type="text"
                                            className="form-control mb-2"
                                            value={stat.label}
                                            onChange={(e) =>
                                                updateStat(
                                                    i,
                                                    "label",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <label>Value</label>
                                        <input
                                            type="text"
                                            className="form-control mb-2"
                                            value={stat.value}
                                            onChange={(e) =>
                                                updateStat(
                                                    i,
                                                    "value",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <label>Meta (small line)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={stat.meta}
                                            onChange={(e) =>
                                                updateStat(
                                                    i,
                                                    "meta",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick access */}
                <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <strong>Quick Access Links</strong>
                        <button
                            type="button"
                            className="btn btn-sm btn-outline-primary d-flex align-items-center gap-1"
                            onClick={addQuickAccess}
                        >
                            <Plus size={14} /> Add Link
                        </button>
                    </div>
                    <div className="card-body">
                        {data.quick_access_items.length === 0 && (
                            <p className="text-muted small mb-3">
                                No quick access links added yet.
                            </p>
                        )}

                        {data.quick_access_items.map((item, i) => (
                            <div
                                className="row align-items-end border-bottom pb-3 mb-3"
                                key={i}
                            >
                                <div className="col-md-4 mb-2">
                                    <label>Description Text</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={item.text}
                                        onChange={(e) =>
                                            updateQuickAccess(
                                                i,
                                                "text",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div className="col-md-3 mb-2">
                                    <label>Link URL</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={item.link_url}
                                        onChange={(e) =>
                                            updateQuickAccess(
                                                i,
                                                "link_url",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div className="col-md-3 mb-2">
                                    <label>Link Label</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={item.link_label}
                                        onChange={(e) =>
                                            updateQuickAccess(
                                                i,
                                                "link_label",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div className="col-md-2 mb-2">
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger w-100"
                                        onClick={() => removeQuickAccess(i)}
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}

                        <label>Note (below the links)</label>
                        <textarea
                            rows={2}
                            className="form-control"
                            value={data.quick_access_note}
                            onChange={(e) =>
                                setData("quick_access_note", e.target.value)
                            }
                        />
                    </div>
                </div>

                {/* Rules - two columns */}
                <div className="card mb-4">
                    <div className="card-header">
                        <strong>Important Rules (two columns)</strong>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {["rules_left", "rules_right"].map(
                                (column, colIdx) => (
                                    <div className="col-md-6" key={column}>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <label className="mb-0">
                                                {colIdx === 0
                                                    ? "Left Column"
                                                    : "Right Column"}
                                            </label>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-primary d-flex align-items-center gap-1"
                                                onClick={() =>
                                                    addRule(column)
                                                }
                                            >
                                                <Plus size={14} /> Add
                                            </button>
                                        </div>

                                        {data[column].map((rule, i) => (
                                            <div
                                                className="d-flex gap-2 mb-2"
                                                key={i}
                                            >
                                                <textarea
                                                    rows={2}
                                                    className="form-control"
                                                    value={rule}
                                                    onChange={(e) =>
                                                        updateRule(
                                                            column,
                                                            i,
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger"
                                                    onClick={() =>
                                                        removeRule(column, i)
                                                    }
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>

                {/* Schemes at a glance */}
                <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <strong>Scholarship Schemes at a Glance</strong>
                        <button
                            type="button"
                            className="btn btn-sm btn-outline-primary d-flex align-items-center gap-1"
                            onClick={addScheme}
                        >
                            <Plus size={14} /> Add Row
                        </button>
                    </div>
                    <div className="card-body">
                        {data.schemes.length === 0 && (
                            <p className="text-muted small mb-3">
                                No scheme rows added yet.
                            </p>
                        )}

                        {data.schemes.map((scheme, i) => (
                            <div
                                className="border rounded p-3 mb-3"
                                key={i}
                            >
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <strong className="small text-muted">
                                        Row #{i + 1}
                                    </strong>
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-outline-danger"
                                        onClick={() => removeScheme(i)}
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>

                                <div className="row">
                                    <div className="col-md-4 mb-2">
                                        <label>Scholarship Scheme Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={scheme.name}
                                            onChange={(e) =>
                                                updateScheme(
                                                    i,
                                                    "name",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="col-md-4 mb-2">
                                        <label>Class of Study</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={scheme.class_of_study}
                                            onChange={(e) =>
                                                updateScheme(
                                                    i,
                                                    "class_of_study",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="col-md-4 mb-2">
                                        <label>Website / Portal (full URL)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={scheme.website}
                                            onChange={(e) =>
                                                updateScheme(
                                                    i,
                                                    "website",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label>Minimum Marks</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={scheme.min_marks}
                                            onChange={(e) =>
                                                updateScheme(
                                                    i,
                                                    "min_marks",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label>Annual Family Income</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={scheme.income}
                                            onChange={(e) =>
                                                updateScheme(
                                                    i,
                                                    "income",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                                {errors[`schemes.${i}.name`] && (
                                    <small className="text-danger">
                                        {errors[`schemes.${i}.name`]}
                                    </small>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Table note + status */}
                <div className="card mb-4">
                    <div className="card-header">
                        <strong>Schemes Table Note & Status</strong>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <label>Note shown below the schemes table</label>
                            <textarea
                                rows={2}
                                className="form-control"
                                value={data.table_note}
                                onChange={(e) =>
                                    setData("table_note", e.target.value)
                                }
                            />
                        </div>

                        {/* <div className="col-md-3">
                            <label>Status</label>
                            <select
                                className="form-control"
                                value={data.is_active ? 1 : 0}
                                onChange={(e) =>
                                    setData(
                                        "is_active",
                                        Boolean(Number(e.target.value))
                                    )
                                }
                            >
                                <option value={1}>Active</option>
                                <option value={0}>Inactive</option>
                            </select>
                        </div> */}
                    </div>
                </div>

                <div className="mt-3 d-flex gap-2">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={processing}
                    >
                        {processing ? "Saving..." : "Save"}
                    </button>

                    <Link
                        href={route("admin.scholarship-overview.index")}
                        className="btn btn-secondary"
                    >
                        Cancel
                    </Link>
                </div>
            </form>
        </AdminLayout>
    );
}
