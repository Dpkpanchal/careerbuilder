
import React, { useMemo } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm, router } from "@inertiajs/react";


const COMMON_COLLEGE_FIELDS = [
    "name",
    "city",
    "state",
    "website",
];

const COMMON_VOCATIONAL_COLLEGE_FIELDS = [
    "name",
    "city",
    "state",
    "website",
    "note",
];


const FORM_FIELDS = {
    "colleges-iits": [
        "name",
        "code",
        "state",
        "website",
    ],

    "colleges-nits": COMMON_COLLEGE_FIELDS,
    "colleges-iims": COMMON_COLLEGE_FIELDS,
    "colleges-aiims": COMMON_COLLEGE_FIELDS,
    "colleges-nlu": COMMON_COLLEGE_FIELDS,

    
    "colleges-central": COMMON_COLLEGE_FIELDS,
    "colleges-state": COMMON_COLLEGE_FIELDS,
    "colleges-open": COMMON_COLLEGE_FIELDS,


    "colleges-engineering": COMMON_COLLEGE_FIELDS,
    "colleges-medical": COMMON_COLLEGE_FIELDS,
    "colleges-nursing": COMMON_COLLEGE_FIELDS,
    "colleges-pharmacy": COMMON_COLLEGE_FIELDS,
    "colleges-management": COMMON_COLLEGE_FIELDS,
    "colleges-law": COMMON_COLLEGE_FIELDS,
    "colleges-agriculture": COMMON_COLLEGE_FIELDS,
    "colleges-teacher-training": COMMON_COLLEGE_FIELDS,


    "colleges-polytechnic": COMMON_COLLEGE_FIELDS,
    "colleges-msme": COMMON_VOCATIONAL_COLLEGE_FIELDS,
    "colleges-skill": COMMON_VOCATIONAL_COLLEGE_FIELDS,
};



// Links where the field-set depends on a chosen category (the "code"
// dropdown below), not just on the link itself. Each category maps to
// its own field list — e.g. NIFT needs Address/Contact, NID doesn't.


const CATEGORY_FIELDS = {
    "colleges-design": {
        NIFT: ["code", "name", "city", "state", "website", "address", "contact"],
        NID: ["code", "name", "city", "state", "website"],
    },
};

// Full-width textarea fields
const TEXTAREA_FIELDS = [
    "note",
    "address",
];

// For some link types, the "code" field isn't free text — it's a fixed
// category the record belongs to. Add the link's key here with its
// dropdown options to turn "code" into a <select> instead of an <input>.
const CODE_SELECT_OPTIONS = {
    "colleges-design": ["NIFT", "NID"],
};

// Friendlier labels per field, falls back to humanizeField() below.
const FIELD_LABELS = {
    code: "Category",
};

const humanizeField = (field) =>
    FIELD_LABELS[field] ||
    field
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, str => str.toUpperCase());

const CollegeCreate = ({ tabsData, menu_id }) => {

    const { data, setData, post, processing, errors } = useForm({

        menu_id: menu_id || "",
        tab_id: "",
        section_id: "",
        link_id: "",

        name: "",
        code: "",
        state: "",
        city: "",
        website: "",
        address: "",
        contact: "",
        note: "",
        is_active: true,

    });

    const selectedMenu = useMemo(() => {

        return tabsData.find(
            menu => String(menu.id) === String(data.menu_id)
        );

    }, [tabsData, data.menu_id]);

    // If the controller passed `tabsData` as the children of a parent menu and
    // `menu_id` prop equals that parent, then the 'tabs' are `tabsData` itself.
    const tabs = useMemo(() => {

        if (tabsData && String(data.menu_id) === String(menu_id)) {
            return tabsData;
        }

        return selectedMenu?.children || [];

    }, [tabsData, selectedMenu, data.menu_id, menu_id]);

    const selectedTab = useMemo(() => {

        return tabs.find(
            tab => String(tab.id) === String(data.tab_id)
        );

    }, [tabs, data.tab_id]);

    const sections = selectedTab?.children || [];

    const selectedSection = useMemo(() => {

        // Prefer direct match by section_id
        let found = sections.find(
            section => String(section.id) === String(data.section_id)
        );

        // If no direct section selected but a link is chosen, find the section
        // that contains that link as a child so we can show the correct fields.
        if (!found && data.link_id) {
            found = sections.find((section) =>
                Array.isArray(section.children) &&
                section.children.some((child) => String(child.id) === String(data.link_id))
            );
        }

        return found;

    }, [sections, data.section_id, data.link_id]);

    const selectedLink = useMemo(() => {

        if (!selectedSection || !Array.isArray(selectedSection.children)) return undefined;

        return selectedSection.children.find(
            (child) => String(child.id) === String(data.link_id)
        );

    }, [selectedSection, data.link_id]);

    // Fields are driven by the selected link's key — or, for links with
    // category-dependent fields (see CATEGORY_FIELDS), by the chosen
    // category too. Until a category is picked, only the category
    // dropdown itself is shown.
    const fields = useMemo(() => {

        const linkKey = selectedLink?.key;

        if (CATEGORY_FIELDS[linkKey]) {
            if (!data.code) return ["code"];
            return CATEGORY_FIELDS[linkKey][data.code] || ["code"];
        }

        return FORM_FIELDS[linkKey] || [];

    }, [selectedLink, data.code]);

    // If this link has fixed category options for "code", use them.
    const codeOptions = CODE_SELECT_OPTIONS[selectedLink?.key];

    const submit = (e) => {

        e.preventDefault();

        post("/admin/college-content");

    };

    return (

        <AdminLayout header="Create College Content">

            <Head title="Create College Content" />

            <div className="container-fluid">

                <div className="row">

                    <div className="col-md-8">

                        <div className="card">

                            <div className="card-header">

                                <h3 className="card-title">
                                    Create College Content
                                </h3>

                            </div>

                            <form onSubmit={submit}>

                                <div className="card-body">

                                    {!menu_id && (

                                        <div className="form-group">

                                            <label>Choose Menu</label>

                                            <select
                                                className="form-control"
                                                value={data.menu_id}
                                                onChange={(e) => {

                                                    setData({
                                                        ...data,
                                                        menu_id: e.target.value,
                                                        tab_id: "",
                                                        section_id: "",
                                                        link_id: "",
                                                    });

                                                }}
                                            >

                                                <option value="">Select Menu</option>

                                                {tabsData.map(menu => (

                                                    <option
                                                        key={menu.id}
                                                        value={menu.id}
                                                    >
                                                        {menu.label}
                                                    </option>

                                                ))}

                                            </select>

                                        </div>

                                    )}

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
                                                        link_id: "",
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
                                                        link_id: "",
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

                                    {/* {data.section_id && selectedSection?.children?.length > 0 && (

                                        <div className="form-group mt-3">

                                            <label>Link</label>

                                            <select
                                                className="form-control"
                                                value={data.link_id}
                                                onChange={(e) => setData({ ...data, link_id: e.target.value })}
                                            >

                                                <option value="">Select Link</option>

                                                {selectedSection.children.map(link => (

                                                    <option key={link.id} value={link.id}>
                                                        {link.label}
                                                    </option>

                                                ))}

                                            </select>

                                        </div>

                                    )} */}


                                    {data.section_id && selectedSection?.children?.length > 0 && (
                                                    <div className="form-group mt-3">
                                                        <label>Link</label>

                                                        <select
                                                            className="form-control"
                                                            value={data.link_id}
                                                            onChange={(e) => {
                                                                const linkId = e.target.value;

                                                                setData({
                                                                    ...data,
                                                                    link_id: linkId,
                                                                });

                                                                const selectedLink = selectedSection.children.find(
                                                                    (item) => item.id == linkId
                                                                );

                                                                if (selectedLink?.key === "colleges-iti") {
                                                                    router.visit("/admin/iti-colleges/create");
                                                                }
                                                            }}
                                                        >
                                                            <option value="">Select Link</option>

                                                            {selectedSection.children.map((link) => (
                                                                <option key={link.id} value={link.id}>
                                                                    {link.label}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                )}



                                    {data.link_id && selectedLink && fields.length > 0 && (

                                        <>

                                            <hr />

                                            <div className="row">

                                                {fields.map(field => {

                                                    // "code" as a fixed category dropdown for links that need it
                                                    // (e.g. colleges-design → NIFT / NID)
                                                    if (field === "code" && codeOptions) {

                                                        return (
                                                            <div className="col-md-6" key={field}>

                                                                <div className="form-group">

                                                                    <label>{humanizeField(field)}</label>

                                                                    <select
                                                                        className={`form-control ${errors.code ? "is-invalid" : ""}`}
                                                                        value={data.code}
                                                                        onChange={(e) => {

                                                                            const newCode = e.target.value;

                                                                            setData({
                                                                                ...data,
                                                                                code: newCode,
                                                                                // clear fields that don't apply to the newly chosen category
                                                                                ...(newCode !== "NIFT" ? { address: "", contact: "" } : {}),
                                                                            });

                                                                        }}
                                                                    >

                                                                        <option value="">Select Category</option>

                                                                        {codeOptions.map(option => (
                                                                            <option key={option} value={option}>
                                                                                {option}
                                                                            </option>
                                                                        ))}

                                                                    </select>

                                                                    {errors.code && (
                                                                        <div className="invalid-feedback">{errors.code}</div>
                                                                    )}

                                                                </div>

                                                            </div>
                                                        );

                                                    }

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
                                                                        type={field === "website" ? "url" : "text"}
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
                                        {processing ? "Saving..." : "Save"}
                                    </button>

                                    <Link
                                        href="/admin/college-content"
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

export default CollegeCreate;

