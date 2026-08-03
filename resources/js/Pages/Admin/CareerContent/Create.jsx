import React, { useMemo, useEffect } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import CareerContentFields, {
    defaultCareerContentData,
} from "./CareerContentFields";

import CareerAfterClass8Fields, {
    defaultContentData as defaultClass8Data,
} from "./CareerAfterClass8Fields";

import CareerAfterClass10Fields, {
    defaultContentData as defaultClass10Data,
} from "./CareerAfterClass10Fields";

import CareerAfterClass12Fields, {
    defaultContentData as defaultClass12Data,
} from "./CareerAfterClass12Fields";

const CareerCreate = ({ tabsData, menu_id }) => {
    const tabs = tabsData || [];



    // Get default data based on link key
    const getDefaultData = (linkKey) => {
        const base = {
            menu_id: menu_id || "", // Always use the provided menu_id
            tab_id: "",
            section_id: "",
            link_id: "",
            is_active: true,
        };

        switch (linkKey) {
            case "after-class-8":
                return { ...base, ...defaultClass8Data() };
            case "after-class-10":
                return { ...base, ...defaultClass10Data() };
            case "after-class-12-arts":
            case "after-class-12-commerce":
            case "after-class-12-science":
            case "after-class-12-eng":
            case "after-class-12-medical":
            case "after-graduation":
                return { ...base, ...defaultClass12Data() };
            default:
                return { ...base, ...defaultCareerContentData() };
        }
    };

    // Initialize form with default data
    const { data, setData, post, processing, errors } = useForm(
        getDefaultData(null)
    );

    // Field components mapping
    const fieldComponents = {
        "after-class-8": CareerAfterClass8Fields,
        "after-class-10": CareerAfterClass10Fields,
        "after-class-12-arts": CareerAfterClass12Fields,
        "after-class-12-commerce": CareerAfterClass12Fields,
        "after-class-12-science": CareerAfterClass12Fields,
        "after-class-12-eng": CareerAfterClass12Fields,
        "after-class-12-medical": CareerAfterClass12Fields,
        "after-graduation": CareerAfterClass12Fields,
    };

    // Find selected link
    const selectedLink = useMemo(() => {
        return tabs
            ?.flatMap(tab => tab.children || [])
            ?.flatMap(section => section.children || [])
            ?.find(link => String(link.id) === String(data.link_id));
    }, [tabs, data.link_id]);

    console.log('loa',selectedLink);

    // Get the appropriate field component
    const ActiveFields = useMemo(() => {
        return fieldComponents[selectedLink?.key] || CareerContentFields;
    }, [selectedLink]);

    // Reset form data when link changes - PRESERVE menu_id
    useEffect(() => {
        if (data.link_id && selectedLink) {
            const newData = getDefaultData(selectedLink.key);
            setData({
                ...newData,
                menu_id: menu_id || data.menu_id, // Preserve menu_id
                tab_id: data.tab_id,
                section_id: data.section_id,
                link_id: data.link_id,
            });
        }
    }, [data.link_id, selectedLink]);

    const submit = (e) => {
        e.preventDefault();
        
        // Prepare data to submit - only send relevant fields
        let submitData = {
            menu_id: menu_id || data.menu_id, // Use prop first, then data
            tab_id: data.tab_id,
            section_id: data.section_id,
            link_id: data.link_id,
            is_active: data.is_active,
        };

        // Add only the fields relevant to the selected link type
        const linkKey = selectedLink?.key;
        
        if (linkKey === "after-class-8") {
            submitData = {
                ...submitData,
                education_pathways: data.education_pathways || [],
                vocational_courses: data.vocational_courses || [],
            };
        } else if (linkKey === "after-class-10") {
            submitData = {
                ...submitData,
                overview: data.overview || [],
                stream_selection: data.stream_selection || [],
                vocational_courses: data.vocational_courses || [],
            };
        } else if (linkKey && [
            "after-class-12-arts",
            "after-class-12-commerce",
            "after-class-12-science",
            "after-class-12-eng",
            "after-class-12-medical",
            "after-graduation"
        ].includes(linkKey)) {
            submitData = {
                ...submitData,
                overview_tree: data.overview_tree || {},
            };
        } else {
            // Default career content fields
            submitData = {
                ...submitData,
                branch_groups: data.branch_groups || [],
                pathways: data.pathways || [],
                courses: data.courses || [],
                exams: data.exams || [],
                institute_links: data.institute_links || [],
                industries: data.industries || [],
                role_examples: data.role_examples || [],
            };
        }

        console.log("Submitting data:", submitData);
        post("/admin/career-content", submitData);
    };

    return (
        <AdminLayout header="Create Career Content">
            <Head title="Create Career Content" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Create Career Content</h3>
                            </div>

                            <form onSubmit={submit}>
                                <div className="card-body">
                                    {/* Hidden menu_id field to ensure it's in the form */}
                                    <input
                                        type="hidden"
                                        name="menu_id"
                                        value={menu_id || data.menu_id || ""}
                                    />
                                    
                                    <ActiveFields
                                        data={data}
                                        setData={setData}
                                        errors={errors}
                                        tabs={tabs}
                                    />
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
                                        href="/admin/career-content"
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

export default CareerCreate;