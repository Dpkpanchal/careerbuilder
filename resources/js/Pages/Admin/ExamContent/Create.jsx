import React, { useMemo } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";

const FORM_FIELDS = {

    "exams-eng-national": [
        "tag",
        "level",
        "name",
        "purpose",
        "eligibility",
        "apply",
        "activity",
        "source",
    ],

    "exams-eng-state": [
        "tag",
        "level",
        "name",
        "purpose",
        "eligibility",
        "apply",
        "activity",
        "source",
    ],

    "exams-eng-university": [
        "tag",
        "name",
        "calendar",
    ],

    "exams-eng-mca": [
        "exam",
        "fullForm",
        "purpose",
        "eligibility",
        "apply",
        "activity",
        "source",
        "tag",
    ],

    "exams-eng-arch": [
        "exam",
        "fullForm",
        "purpose",
        "eligibility",
        "apply",
        "activity",
        "source",
        "tag",
    ],

     // Medical
    "exams-med-national": [
        "exam",
        "purpose",
        "eligibility",
        "apply",
        "activity",
        "source",
        "statusNote",
    ],

    "exams-med-state": [
        "title",
        "note",
        "linkLabel",
        "href",
    ],

    "exams-med-nursing": [
        "exam",
        "fullForm",
        "purpose",
        "eligibility",
        "apply",
        "activity",
        "sources",
        "tag",
        "statusNote",
    ],

    "exams-med-pg": [
        "exam",
        "fullForm",
        "purpose",
        "apply",
        "activity",
        "sources",
        "tag",
    ],

    "exams-med-pharmacy": [
        "exam",
        "fullForm",
        "purpose",
        "eligibility",
        "apply",
        "activity",
        "sources",
        "tag",
        "wbFocus",
    ],

    "exams-hotel-national": [
        "exam",
        "fullForm",
        "purpose",
        "eligibility",
        "apply",
        "activity",
        "source",
    ],

    "exams-hotel-state": [
        "exam",
        "fullForm",
        "purpose",
        "eligibility",
        "apply",
        "activity",
        "sources",
        "tag",
        "note",
    ],

    "exams-hotel-university": [
        "exam",
        "fullForm",
        "purpose",
        "eligibility",
        "apply",
        "activity",
        "sources",
        "tag",
        "note",
    ],


    "exams-hotel-run": [
        "exam",
        "fullForm",
        "purpose",
        "eligibility",
        "apply",
        "activity",
        "sources",
        "tag",
        "note",
    ],

    "exams-law-law": [
        "exam",
        "fullForm",
        "purpose",
        "activity",
        "sources",
        "tag",
        "note",
    ],

    "exams-law-management": [
        "exam",
        "fullForm",
        "purpose",
        "apply",
        "activity",
        "sources",
        "tag",
        "note",
    ],

    "exams-law-finance": [
        "exam",
        "short",
        "purpose",
        "who",
        "apply",
        "sources",
        "tag",
        "note",
    ],

    "exams-design-fashion": [
        "exam",
        "fullForm",
        "purpose",
        "eligibility",
        "apply",
        "activity",
        "source",
        "tag",
    ],

    "exams-design-masscomm": [
        "exam",
        "fullForm",
        "purpose",
        "apply",
        "activity",
        "sources",
        "tag",
        "note",
    ],


    "exams-design-humanities": [
        "exam",
        "fullForm",
        "purpose",
        "apply",
        "activity",
        "sources",
        "tag",
        "note",
    ],

    "exams-design-math": [
        "route",
        "nature",
        "purpose",
        "apply",
        "activity",
        "sources",
        "tag",
        "note",
    ],

    "exams-agri-agriculture": [

        "exam",
        "fullForm",
        "purpose",
        "eligibility",
        "apply",
        "activity",
        "sources",
        "tag",
        "note",
    ],

    "exams-agri-vet": [
        "exam",
        "fullForm",
        "purpose",
        "eligibility",
        "apply",
        "activity",
        "sources",
        "tag",
        "note",
    ],

    "exams-agri-defence": [
        "group",
        "exam",
        "fullForm",
        "purpose",
        "eligibility",
        "apply",
        "activity",
        "sources",
        "tag",
        "note",
    ],

    "exams-agri-school": [
        "exam",
        "fullForm",
        "purpose",
        "eligibility",
        "apply",
        "activity",
        "sources",
        "tag",
        "note",
    ],


};

// These are still single free-text fields, just rendered as a full-width textarea
const TEXTAREA_FIELDS = [
    "purpose",
    "note",
    "statusNote",
];

// These fields are stored as jsonb arrays in the DB (see exam_contents migration),
// so they get a repeatable "add more" list UI, same pattern as "sources".
const ARRAY_TEXT_FIELDS = [
    "eligibility",
    "activity",
];

const humanizeField = (field) =>
    field
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, str => str.toUpperCase());

const ExamCreate = ({ menus }) => {

const { data, setData, post, transform, processing, errors } = useForm({

    menu_id: "",
    tab_id: "",
    section_id: "",

    // Common
    tag: "",
    level: "",
    name: "",
    exam: "",
    fullForm: "",
    title: "",

    // Details
    purpose: "",
    eligibility: [""],
    apply: "",
    activity: [""],
    calendar: "",

    // Links
    source: "",
    href: "",
    linkLabel: "",

    // Notes
    note: "",
    statusNote: "",

    // Others
    wbFocus: false,
    is_active: true,

    group: "",

    // Multiple sources
    sources: [
        {
            label: "",
            href: ""
        }
    ]

});

    const selectedMenu = useMemo(() => {

        return menus.find(
            menu => menu.id == data.menu_id
        );

    }, [menus, data.menu_id]);

    const tabs = selectedMenu?.children || [];

    const selectedTab = useMemo(() => {

        return tabs.find(
            tab => tab.id == data.tab_id
        );

    }, [tabs, data.tab_id]);

    const sections = selectedTab?.children || [];

    const selectedSection = useMemo(() => {

        return sections.find(
            section => section.id == data.section_id
        );

    }, [sections, data.section_id]);

    const fields = FORM_FIELDS[selectedSection?.key] || [];


    const addSource = () => {
        setData("sources", [
            ...data.sources,
            {
                label: "",
                href: ""
            }
        ]);
    };

    const removeSource = (index) => {

        if (data.sources.length === 1) return;

        setData(
            "sources",
            data.sources.filter((_, i) => i !== index)
        );
    };

    const updateSource = (index, key, value) => {

        const sources = [...data.sources];

        sources[index][key] = value;

        setData("sources", sources);

    };

    // Generic add/remove/update for the plain-text array fields (eligibility, activity)
    const addArrayItem = (field) => {

        setData(field, [...(data[field] || []), ""]);

    };

    const removeArrayItem = (field, index) => {

        const items = data[field] || [];

        if (items.length === 1) return;

        setData(field, items.filter((_, i) => i !== index));

    };

    const updateArrayItem = (field, index, value) => {

        const items = [...(data[field] || [])];

        items[index] = value;

        setData(field, items);

    };

    const submit = (e) => {

        e.preventDefault();

        // Strip blank entries out of the array fields before sending, and
        // send null instead of an empty array when nothing was filled in
        // (keeps it consistent with the migration's NULL handling).
        transform((formData) => {

            const payload = { ...formData };

            ARRAY_TEXT_FIELDS.forEach((field) => {

                if (Array.isArray(payload[field])) {

                    const cleaned = payload[field]
                        .map((v) => (v || "").trim())
                        .filter(Boolean);

                    payload[field] = cleaned.length ? cleaned : null;

                }

            });

            return payload;

        });

        post("/admin/exam-content");

    };

    return (

        <AdminLayout header="Create Exam">

            <Head title="Create Exam" />

            <div className="container-fluid">

                <div className="row">

                    <div className="col-md-8">

                        <div className="card">

                            <div className="card-header">

                                <h3 className="card-title">

                                    Create Exam Content

                                </h3>

                            </div>

                            <form onSubmit={submit}>

                                <div className="card-body">

                                    <div className="form-group">

                                        <label>Menu</label>

                                        <select
                                            className="form-control"
                                            value={data.menu_id}
                                            onChange={(e) => {

                                                setData({
                                                    ...data,
                                                    menu_id: e.target.value,
                                                    tab_id: "",
                                                    section_id: "",
                                                });

                                            }}
                                        >

                                            <option value="">Select Menu</option>

                                            {menus.map(menu => (

                                                <option
                                                    key={menu.id}
                                                    value={menu.id}
                                                >
                                                    {menu.label}
                                                </option>

                                            ))}

                                        </select>

                                    </div>

                                    {tabs.length > 0 && (

                                        <div className="form-group mt-3">

                                            <label>Tab</label>

                                            <select
                                                className="form-control"
                                                value={data.tab_id}
                                                onChange={(e) => {

                                                    setData({
                                                        ...data,
                                                        tab_id: e.target.value,
                                                        section_id: "",
                                                    });

                                                }}
                                            >

                                                <option value="">Select Tab</option>

                                                {tabs.map(tab => (

                                                    <option
                                                        key={tab.id}
                                                        value={tab.id}
                                                    >
                                                        {tab.label}
                                                    </option>

                                                ))}

                                            </select>

                                        </div>

                                    )}
                                {sections.length > 0 && (

                                        <div className="form-group mt-3">

                                            <label>Section</label>

                                            <select
                                                className="form-control"
                                                value={data.section_id}
                                                onChange={(e) => {

                                                    setData({
                                                        ...data,
                                                        section_id: e.target.value,
                                                    });

                                                }}
                                            >

                                                <option value="">
                                                    Select Section
                                                </option>

                                                {sections.map(section => (

                                                    <option
                                                        key={section.id}
                                                        value={section.id}
                                                    >
                                                        {section.label}
                                                    </option>

                                                ))}

                                            </select>

                                        </div>

                                    )}


                                    {data.section_id && (

                                        <>

                                            <hr />

                                         <div className="row">

                                                {fields.map(field => {

                                                    // Special case for multiple sources
                                                    if (field === "sources") {

                                                        return (
                                                            <div className="col-md-12" key="sources">

                                                                <div className="form-group">

                                                                    <label>Official Sources</label>

                                                                    {data.sources.map((source, index) => (

                                                                        <div className="row mb-2" key={index}>

                                                                            <div className="col-md-5">

                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    placeholder="Source Label"
                                                                                    value={source.label}
                                                                                    onChange={(e) =>
                                                                                        updateSource(index, "label", e.target.value)
                                                                                    }
                                                                                />

                                                                            </div>

                                                                            <div className="col-md-5">

                                                                                <input
                                                                                    type="url"
                                                                                    className="form-control"
                                                                                    placeholder="Source URL"
                                                                                    value={source.href}
                                                                                    onChange={(e) =>
                                                                                        updateSource(index, "href", e.target.value)
                                                                                    }
                                                                                />

                                                                            </div>

                                                                            <div className="col-md-2">

                                                                                <button
                                                                                    type="button"
                                                                                    className="btn btn-danger"
                                                                                    onClick={() => removeSource(index)}
                                                                                >
                                                                                    <i className="fas fa-trash"></i>
                                                                                </button>

                                                                            </div>

                                                                        </div>

                                                                    ))}

                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-success btn-sm"
                                                                        onClick={addSource}
                                                                    >
                                                                        <i className="fas fa-plus mr-1"></i>
                                                                        Add Source
                                                                    </button>

                                                                </div>

                                                            </div>
                                                        );

                                                    }


                                                    if (field === "wbFocus") {
                                                        return (
                                                            <div className="col-md-12" key="wbFocus">
                                                                <div className="form-check mt-2">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        id="wbFocus"
                                                                        checked={data.wbFocus}
                                                                        onChange={(e) =>
                                                                            setData("wbFocus", e.target.checked)
                                                                        }
                                                                    />

                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="wbFocus"
                                                                    >
                                                                        West Bengal Specific
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        );
                                                    }


                                                    // Repeatable "add more" list for jsonb-array fields
                                                    // (eligibility, activity)
                                                    if (ARRAY_TEXT_FIELDS.includes(field)) {

                                                        const items = data[field] || [""];

                                                        return (
                                                            <div className="col-md-12" key={field}>

                                                                <div className="form-group">

                                                                    <label>{humanizeField(field)}</label>

                                                                    {items.map((item, index) => (

                                                                        <div className="row mb-2" key={index}>

                                                                            <div className="col-md-10">

                                                                                <textarea
                                                                                    rows="2"
                                                                                    className={`form-control ${errors[`${field}.${index}`] ? "is-invalid" : ""}`}
                                                                                    placeholder={`${humanizeField(field)} #${index + 1}`}
                                                                                    value={item}
                                                                                    onChange={(e) =>
                                                                                        updateArrayItem(field, index, e.target.value)
                                                                                    }
                                                                                />

                                                                                {errors[`${field}.${index}`] && (
                                                                                    <div className="invalid-feedback">
                                                                                        {errors[`${field}.${index}`]}
                                                                                    </div>
                                                                                )}

                                                                            </div>

                                                                            <div className="col-md-2">

                                                                                <button
                                                                                    type="button"
                                                                                    className="btn btn-danger"
                                                                                    onClick={() => removeArrayItem(field, index)}
                                                                                >
                                                                                    <i className="fas fa-trash"></i>
                                                                                </button>

                                                                            </div>

                                                                        </div>

                                                                    ))}

                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-success btn-sm"
                                                                        onClick={() => addArrayItem(field)}
                                                                    >
                                                                        <i className="fas fa-plus mr-1"></i>
                                                                        Add {humanizeField(field)}
                                                                    </button>

                                                                    {errors[field] && (
                                                                        <div className="invalid-feedback d-block">
                                                                            {errors[field]}
                                                                        </div>
                                                                    )}

                                                                </div>

                                                            </div>
                                                        );

                                                    }


                                                    // Default fields
                                                    return (

                                                        <div
                                                            key={field}
                                                            className={
                                                                TEXTAREA_FIELDS.includes(field)
                                                                    ? "col-md-12"
                                                                    : "col-md-6"
                                                            }
                                                        >

                                                            <div className="form-group">

                                                                <label>
                                                                    {humanizeField(field)}
                                                                </label>

                                                                {TEXTAREA_FIELDS.includes(field) ? (

                                                                    <textarea
                                                                        rows="4"
                                                                        className={`form-control ${errors[field] ? "is-invalid" : ""}`}
                                                                        value={data[field]}
                                                                        onChange={(e) =>
                                                                            setData(field, e.target.value)
                                                                        }
                                                                    />

                                                                ) : (

                                                                    <input
                                                                        type={
                                                                            field === "source" || field === "href"
                                                                                ? "url"
                                                                                : field === "sl"
                                                                                    ? "number"
                                                                                    : "text"
                                                                        }
                                                                        className={`form-control ${errors[field] ? "is-invalid" : ""}`}
                                                                        value={data[field]}
                                                                        onChange={(e) =>
                                                                            setData(field, e.target.value)
                                                                        }
                                                                    />

                                                                )}

                                                                {errors[field] && (
                                                                    <div className="invalid-feedback">
                                                                        {errors[field]}
                                                                    </div>
                                                                )}

                                                            </div>

                                                        </div>

                                                    );

                                                })}

                                        </div>

                                        </>

                                    )}
                                                                    </div>

                                <div className="card-footer">

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={processing}
                                    >
                                        {processing ? "Saving..." : "Save Exam"}
                                    </button>

                                    <Link
                                        href="/admin/exam-content"
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

        </AdminLayout>

    );

};

export default ExamCreate;
