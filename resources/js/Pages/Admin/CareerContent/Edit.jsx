import React, { useMemo } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import CareerContentFields, {
    emptyBranchGroup,
    emptyPathway,
    emptyCourse,
    emptyExam,
    emptyInstituteLink,
} from "./CareerContentFields";

import CareerAfterClass8Fields, {
    emptyEducationPath, 
    emptyVocationalCourse
} from "./CareerAfterClass8Fields";

import CareerAfterClass10Fields, {
    emptyOverview, 
    emptyStream
} from "./CareerAfterClass10Fields";

import CareerAfterClass12Fields, {
    defaultContentData as defaultClass12Data,
} from "./CareerAfterClass12Fields";

// Agar backend se koi array field khali/null aaye to bhi form me kam se
// kam ek blank row rahe (warna "+ Add" hamesha zero se shuru hoga).
const fallback = (value, template) =>
    Array.isArray(value) && value.length > 0 ? value : [template()];

const fallbackStrings = (value) =>
    Array.isArray(value) && value.length > 0 ? value : [""];

const CareerEdit = ({ tabsData, content }) => {
    const tabs = tabsData || [];

    // Find the selected link first using content.link_id
    const selectedLink = useMemo(() => {
        return tabs
            ?.flatMap(tab => tab.children || [])
            ?.flatMap(section => section.children || [])
            ?.find(link => String(link.id) === String(content.link_id));
    }, [tabs, content.link_id]);

    const isAfterClass8 = selectedLink?.key === "after-class-8";
    const isAfterClass10 = selectedLink?.key === "after-class-10";
    const isAfterClass12 = selectedLink?.key && [
        "after-class-12-arts",
        "after-class-12-commerce",
        "after-class-12-science",
        "after-class-12-eng",
        "after-class-12-medical",
        "after-graduation"
    ].includes(selectedLink.key);

    // Initialize form with proper defaults
    const getInitialData = () => {
        const base = {
            menu_id: content.menu_id || "",
            tab_id: content.tab_id || "",
            section_id: content.section_id || "",
            link_id: content.link_id || "",
            is_active: !!content.is_active,
        };

        if (isAfterClass8) {
            return {
                ...base,
                education_pathways: fallback(content.education_pathways, emptyEducationPath),
                vocational_courses: fallback(content.vocational_courses, emptyVocationalCourse),
                branch_groups: [],
                pathways: [],
                courses: [],
                exams: [],
                institute_links: [],
                industries: [],
                role_examples: [],
                overview: [],
                stream_selection: [],
                overview_tree: {},
                related_exams: [],
                top_colleges_and_universities: [],
                key_instructions_eligibility: content.key_instructions_eligibility || { instructions: [""] } 
            };
        } else if (isAfterClass10) {
            return {
                ...base,
                overview: fallback(content.overview, emptyOverview),
                stream_selection: fallback(content.stream_selection, emptyStream),
                vocational_courses: fallback(content.vocational_courses, emptyVocationalCourse),
                branch_groups: [],
                pathways: [],
                courses: [],
                exams: [],
                institute_links: [],
                industries: [],
                role_examples: [],
                education_pathways: [],
                overview_tree: {},
                related_exams: [],
                top_colleges_and_universities: [],
                key_instructions_eligibility: content.key_instructions_eligibility || { instructions: [""] }
            };
        } else if (isAfterClass12) {
            return {
                ...base,
                overview_tree: content.overview_tree || defaultClass12Data().overview_tree,
                related_exams: content.related_exams || [],
                top_colleges_and_universities: content.top_colleges_and_universities || [],
                branch_groups: [],
                pathways: [],
                courses: [],
                exams: [],
                institute_links: [],
                industries: [],
                role_examples: [],
                education_pathways: [],
                vocational_courses: [],
                overview: [],
                stream_selection: [],
            };
        } else {
            return {
                ...base,
                branch_groups: fallback(content.branch_groups, emptyBranchGroup),
                pathways: fallback(content.pathways, emptyPathway),
                courses: fallback(content.courses, emptyCourse),
                exams: fallback(content.exams, emptyExam),
                institute_links: fallback(content.institute_links, emptyInstituteLink),
                industries: fallbackStrings(content.industries),
                role_examples: fallbackStrings(content.role_examples),
                education_pathways: [],
                vocational_courses: [],
                overview: [],
                stream_selection: [],
                overview_tree: {},
                related_exams: [],
                top_colleges_and_universities: [],
            };
        }
    };

    const { data, setData, put, processing, errors } = useForm(getInitialData());

    const submit = (e) => {
        e.preventDefault();
        
        // Prepare data to submit - only send relevant fields
        let submitData = {
            menu_id: data.menu_id,
            tab_id: data.tab_id,
            section_id: data.section_id,
            link_id: data.link_id,
            is_active: data.is_active,
        };

        // Add only the fields relevant to the selected link type
        if (isAfterClass8) {
            submitData = {
                ...submitData,
                education_pathways: data.education_pathways || [],
                vocational_courses: data.vocational_courses || [],
                key_instructions_eligibility: data.key_instructions_eligibility || { instructions: [""] },
            };
        } else if (isAfterClass10) {
            submitData = {
                ...submitData,
                overview: data.overview || [],
                stream_selection: data.stream_selection || [],
                vocational_courses: data.vocational_courses || [],
                key_instructions_eligibility: data.key_instructions_eligibility || { instructions: [""] },
            };
        } else if (isAfterClass12) {
            submitData = {
                ...submitData,
                overview_tree: data.overview_tree || {},
                related_exams: data.related_exams || [],
                top_colleges_and_universities: data.top_colleges_and_universities || [],
            };
        } else {
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
        put(`/admin/career-content/${content.id}`, submitData);
    };

    return (
        <AdminLayout header="Edit Career Content">
            <Head title="Edit Career Content" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Edit Career Content</h3>
                            </div>

                            <form onSubmit={submit}>
                                <div className="card-body">
                                    {isAfterClass8 ? (
                                        <CareerAfterClass8Fields
                                            data={data}
                                            setData={setData}
                                            errors={errors}
                                            tabs={tabs}
                                        />
                                    ) : isAfterClass10 ? (
                                        <CareerAfterClass10Fields
                                            data={data}
                                            setData={setData}
                                            errors={errors}
                                            tabs={tabs}
                                        />
                                    ) : isAfterClass12 ? (
                                        <CareerAfterClass12Fields
                                            data={data}
                                            setData={setData}
                                            errors={errors}
                                            tabs={tabs}
                                        />
                                    ) : (
                                        <CareerContentFields
                                            data={data}
                                            setData={setData}
                                            errors={errors}
                                            tabs={tabs}
                                        />
                                    )}
                                </div>

                                <div className="card-footer">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={processing}
                                    >
                                        {processing ? "Updating..." : "Update"}
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

export default CareerEdit;