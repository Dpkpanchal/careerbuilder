import React, { useMemo } from "react";
import { Plus, Trash2 } from "lucide-react";
import GenericSnapshotFields from "./GenericSnapshotFields";
// ----------------------------------------------------
// Default empty structure for MSME Tool Room
// ----------------------------------------------------
export const defaultContentData = () => ({
    menu_id: "",
    tab_id: "",
    section_id: "",
    link_id: "",
    url: "",
    intro_heading: "",
    intro_description: "",
    intro_description_secondary: "",
    snapshot: [
        { key: "", value: "" },
    ],
    // Long Term Programs (Diploma)
    long_term_programs: [
        {
            name: "",
            duration: "",
            intake: "",
            fee: "",
            start: "",
            selection: "",
            eligibility: "",
            summary: "",
            contentsBrief: "",
        },
    ],
    // Short & Medium Term Courses
    short_term_courses: [
        {
            id: "",
            group: "",
            name: "",
            duration: "",
            intake: "",
            fee: "",
            start: "",
            selection: "",
            eligibility: "",
            contents: "",
            note: "",
        },
    ],
    admission_heading: "",
    admission_description: "",
    admission_info: [""],
    next_steps: [""],
    skill_agencies: [
        {
            title: "",
            subtitle: "",
            links: [{ label: "", url: "" }],
        },
    ],
    cta_button: {
        label: "",
        url: "",
    },
    sort_order: 0,
    is_active: true,
});

// small helpers to update nested arrays immutably
const updateArrayItem = (arr, index, value) =>
    arr.map((item, i) => (i === index ? value : item));

const removeArrayItem = (arr, index) => arr.filter((_, i) => i !== index);

export default function MSMEToolRoomFields({ data, setData, errors, tabs }) {
    const set = (key, value) => setData(key, value);

    // ---------------- Tab / Section / Link (cascading dropdowns) ----------------
    const selectedTab = useMemo(
        () => tabs?.find((tab) => String(tab.id) === String(data.tab_id)),
        [tabs, data.tab_id]
    );

    const sections = selectedTab?.children || [];

    const selectedSection = useMemo(
        () => sections.find(section => String(section.id) === String(data.section_id)),
        [sections, data.section_id]
    );

    const links = selectedSection?.children || [];

    // ---------------- Snapshot ----------------
  

    // ---------------- Long Term Programs ----------------
    // Ensure long_term_programs is always an array
    const longTermPrograms = data.long_term_programs || [];

    const addLongTermProgram = () =>
        setData("long_term_programs", [
            ...longTermPrograms,
            { name: "", duration: "", intake: "", fee: "", start: "", selection: "", eligibility: "", summary: "", contentsBrief: "" },
        ]);

    const removeLongTermProgram = (idx) =>
        setData("long_term_programs", removeArrayItem(longTermPrograms, idx));

    const updateLongTermProgram = (idx, field, value) =>
        setData(
            "long_term_programs",
            updateArrayItem(longTermPrograms, idx, {
                ...longTermPrograms[idx],
                [field]: value,
            })
        );

    // ---------------- Short Term Courses ----------------
    // Ensure short_term_courses is always an array
    const shortTermCourses = data.short_term_courses || [];

    const addShortTermCourse = () =>
        setData("short_term_courses", [
            ...shortTermCourses,
            { id: "", group: "", name: "", duration: "", intake: "", fee: "", start: "", selection: "", eligibility: "", contents: "", note: "" },
        ]);

    const removeShortTermCourse = (idx) =>
        setData("short_term_courses", removeArrayItem(shortTermCourses, idx));

    const updateShortTermCourse = (idx, field, value) =>
        setData(
            "short_term_courses",
            updateArrayItem(shortTermCourses, idx, {
                ...shortTermCourses[idx],
                [field]: value,
            })
        );

    // ---------------- Admission info / next steps (simple string arrays) ----------------
    const addStringItem = (key) => setData(key, [...(data[key] || []), ""]);
    const updateStringItem = (key, idx, value) =>
        setData(key, updateArrayItem(data[key] || [], idx, value));
    const removeStringItem = (key, idx) =>
        setData(key, removeArrayItem(data[key] || [], idx));

    // ---------------- Skill agencies ----------------
    const skillAgencies = data.skill_agencies || [];

    const addAgency = () =>
        setData("skill_agencies", [
            ...skillAgencies,
            { title: "", subtitle: "", links: [{ label: "", url: "" }] },
        ]);

    const removeAgency = (idx) =>
        setData("skill_agencies", removeArrayItem(skillAgencies, idx));

    const updateAgency = (idx, field, value) =>
        setData(
            "skill_agencies",
            updateArrayItem(skillAgencies, idx, {
                ...skillAgencies[idx],
                [field]: value,
            })
        );

    const addAgencyLink = (aIdx) => {
        const agency = skillAgencies[aIdx];
        updateAgency(aIdx, "links", [...(agency.links || []), { label: "", url: "" }]);
    };

    const updateAgencyLink = (aIdx, lIdx, field, value) => {
        const agency = skillAgencies[aIdx];
        const newLinks = updateArrayItem(agency.links || [], lIdx, {
            ...(agency.links || [])[lIdx],
            [field]: value,
        });
        updateAgency(aIdx, "links", newLinks);
    };

    const removeAgencyLink = (aIdx, lIdx) => {
        const agency = skillAgencies[aIdx];
        updateAgency(aIdx, "links", removeArrayItem(agency.links || [], lIdx));
    };

    // ---------------- CTA Button ----------------
    const setCtaButton = (field, value) =>
        setData("cta_button", { ...(data.cta_button || {}), [field]: value });

    // Group options for short term courses
    const groupOptions = [
        "Tool Design & CAD/CAM",
        "CNC & Conventional Machining",
        "Automation, Mechatronics & Embedded",
        "Computer Hardware, Networking & CCNA",
    ];

    return (
        <div className="row g-4">
            {/* ---------------- Tab / Section / Link ---------------- */}
           
            {/* ---------------- Intro ---------------- */}
            <div className="col-12">
                <hr />
                <h5 className="mb-3">Intro Section</h5>
            </div>

            <div className="col-12">
                <label className="form-label">Intro Heading</label>
                <input
                    type="text"
                    className="form-control"
                    value={data.intro_heading || ""}
                    onChange={(e) => set("intro_heading", e.target.value)}
                />
                {errors?.intro_heading && <div className="text-danger small">{errors.intro_heading}</div>}
            </div>

            <div className="col-12">
                <label className="form-label">Intro Description</label>
                <textarea
                    className="form-control"
                    rows={3}
                    value={data.intro_description || ""}
                    onChange={(e) => set("intro_description", e.target.value)}
                />
                {errors?.intro_description && <div className="text-danger small">{errors.intro_description}</div>}
            </div>

            <div className="col-12">
                <label className="form-label">Intro Description (secondary paragraph)</label>
                <textarea
                    className="form-control"
                    rows={2}
                    value={data.intro_description_secondary || ""}
                    onChange={(e) => set("intro_description_secondary", e.target.value)}
                />
                {errors?.intro_description_secondary && <div className="text-danger small">{errors.intro_description_secondary}</div>}
            </div>

            {/* ---------------- Snapshot ---------------- */}
            <GenericSnapshotFields data={data} setData={setData} errors={errors} />

            {/* ---------------- Long Term Programs ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Long-Term Diploma (After Class 10)</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addLongTermProgram}>
                        <Plus size={14} className="me-1" /> Add Program
                    </button>
                </div>
            </div>

            {longTermPrograms.map((program, pIdx) => (
                <div className="col-12" key={pIdx}>
                    <div className="card mb-3">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">Program #{pIdx + 1}</h6>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeLongTermProgram(pIdx)}
                            >
                                <Trash2 size={14} /> Remove
                            </button>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-12">
                                    <label className="form-label">Program Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., Diploma in Tool & Die Making (AICTE Approved)"
                                        value={program.name || ""}
                                        onChange={(e) => updateLongTermProgram(pIdx, "name", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Duration</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., 4 Years"
                                        value={program.duration || ""}
                                        onChange={(e) => updateLongTermProgram(pIdx, "duration", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Intake</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., 100"
                                        value={program.intake || ""}
                                        onChange={(e) => updateLongTermProgram(pIdx, "intake", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Fee</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., ₹36,000 per year"
                                        value={program.fee || ""}
                                        onChange={(e) => updateLongTermProgram(pIdx, "fee", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Start</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., August"
                                        value={program.start || ""}
                                        onChange={(e) => updateLongTermProgram(pIdx, "start", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Selection</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., Test / Interview"
                                        value={program.selection || ""}
                                        onChange={(e) => updateLongTermProgram(pIdx, "selection", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Eligibility</label>
                                    <textarea
                                        className="form-control"
                                        rows={2}
                                        placeholder="Eligibility criteria"
                                        value={program.eligibility || ""}
                                        onChange={(e) => updateLongTermProgram(pIdx, "eligibility", e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Summary</label>
                                    <textarea
                                        className="form-control"
                                        rows={2}
                                        placeholder="Brief summary of the program"
                                        value={program.summary || ""}
                                        onChange={(e) => updateLongTermProgram(pIdx, "summary", e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Key Topics / Contents</label>
                                    <textarea
                                        className="form-control"
                                        rows={2}
                                        placeholder="Key topics covered in the program"
                                        value={program.contentsBrief || ""}
                                        onChange={(e) => updateLongTermProgram(pIdx, "contentsBrief", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* ---------------- Short Term Courses ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Medium & Short-Term Programs</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addShortTermCourse}>
                        <Plus size={14} className="me-1" /> Add Course
                    </button>
                </div>
            </div>

            {shortTermCourses.map((course, cIdx) => (
                <div className="col-12" key={cIdx}>
                    <div className="card mb-3">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">Course #{cIdx + 1}</h6>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeShortTermCourse(cIdx)}
                            >
                                <Trash2 size={14} /> Remove
                            </button>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label">Course ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., mcc-cadcam"
                                        value={course.id || ""}
                                        onChange={(e) => updateShortTermCourse(cIdx, "id", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Group</label>
                                    <select
                                        className="form-control"
                                        value={course.group || ""}
                                        onChange={(e) => updateShortTermCourse(cIdx, "group", e.target.value)}
                                    >
                                        <option value="">Select Group</option>
                                        {groupOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Course Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., Master Certificate Course in CAD / CAM / CAE"
                                        value={course.name || ""}
                                        onChange={(e) => updateShortTermCourse(cIdx, "name", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Duration</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., 6 Months"
                                        value={course.duration || ""}
                                        onChange={(e) => updateShortTermCourse(cIdx, "duration", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Intake</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., 40"
                                        value={course.intake || ""}
                                        onChange={(e) => updateShortTermCourse(cIdx, "intake", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Fee</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., ₹32,000"
                                        value={course.fee || ""}
                                        onChange={(e) => updateShortTermCourse(cIdx, "fee", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Start</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., February & August"
                                        value={course.start || ""}
                                        onChange={(e) => updateShortTermCourse(cIdx, "start", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Selection</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., First Come – First Serve"
                                        value={course.selection || ""}
                                        onChange={(e) => updateShortTermCourse(cIdx, "selection", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Eligibility</label>
                                    <textarea
                                        className="form-control"
                                        rows={2}
                                        placeholder="Eligibility criteria"
                                        value={course.eligibility || ""}
                                        onChange={(e) => updateShortTermCourse(cIdx, "eligibility", e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Contents</label>
                                    <textarea
                                        className="form-control"
                                        rows={3}
                                        placeholder="Course contents and topics"
                                        value={course.contents || ""}
                                        onChange={(e) => updateShortTermCourse(cIdx, "contents", e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Note (Optional)</label>
                                    <textarea
                                        className="form-control"
                                        rows={2}
                                        placeholder="Any additional notes about this course"
                                        value={course.note || ""}
                                        onChange={(e) => updateShortTermCourse(cIdx, "note", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* ---------------- Admission ---------------- */}
            <div className="col-12">
                <hr />
                <h5 className="mb-3">How to Choose the Right MSME Course</h5>
            </div>

            <div className="col-md-6">
                <label className="form-label">Section Heading</label>
                <input
                    type="text"
                    className="form-control"
                    value={data.admission_heading || ""}
                    onChange={(e) => set("admission_heading", e.target.value)}
                />
                {errors?.admission_heading && <div className="text-danger small">{errors.admission_heading}</div>}
            </div>
            <div className="col-md-6">
                <label className="form-label">Section Description</label>
                <input
                    type="text"
                    className="form-control"
                    value={data.admission_description || ""}
                    onChange={(e) => set("admission_description", e.target.value)}
                />
                {errors?.admission_description && <div className="text-danger small">{errors.admission_description}</div>}
            </div>

            <div className="col-md-6">
                <label className="form-label">How to Choose (bullet points)</label>
                {(data.admission_info || []).map((item, idx) => (
                    <div className="input-group mb-2" key={idx}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="How to choose point"
                            value={item || ""}
                            onChange={(e) =>
                                updateStringItem("admission_info", idx, e.target.value)
                            }
                        />
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => removeStringItem("admission_info", idx)}
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className="btn btn-sm btn-link px-0"
                    onClick={() => addStringItem("admission_info")}
                >
                    <Plus size={14} className="me-1" /> Add Point
                </button>
                {errors?.admission_info && <div className="text-danger small">{errors.admission_info}</div>}
            </div>

            <div className="col-md-6">
                <label className="form-label">Next Steps (ordered list)</label>
                {(data.next_steps || []).map((item, idx) => (
                    <div className="input-group mb-2" key={idx}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Next step"
                            value={item || ""}
                            onChange={(e) => updateStringItem("next_steps", idx, e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => removeStringItem("next_steps", idx)}
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className="btn btn-sm btn-link px-0"
                    onClick={() => addStringItem("next_steps")}
                >
                    <Plus size={14} className="me-1" /> Add Step
                </button>
                {errors?.next_steps && <div className="text-danger small">{errors.next_steps}</div>}
            </div>

            {/* ---------------- CTA Button ---------------- */}
            <div className="col-12">
                <hr />
                <h5 className="mb-3">Call to Action Button</h5>
            </div>

            <div className="col-md-6">
                <label className="form-label">Button Label</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="e.g., Visit MSME Tool Room Website"
                    value={data.cta_button?.label || ""}
                    onChange={(e) => setCtaButton("label", e.target.value)}
                />
            </div>
            <div className="col-md-6">
                <label className="form-label">Button URL</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="https://..."
                    value={data.cta_button?.url || ""}
                    onChange={(e) => setCtaButton("url", e.target.value)}
                />
            </div>

            {/* ---------------- Skill agencies ---------------- */}
          

            {/* ---------------- Meta ---------------- */}
            <div className="col-12">
                <hr />
            </div>

            <div className="col-md-3">
                <label className="form-label">Sort Order</label>
                <input
                    type="number"
                    className="form-control"
                    value={data.sort_order || 0}
                    onChange={(e) => set("sort_order", Number(e.target.value))}
                />
                {errors?.sort_order && <div className="text-danger small">{errors.sort_order}</div>}
            </div>

            <div className="col-md-3 d-flex align-items-center">
                <div className="form-check mt-4" style={{ display: "none" }}>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="is_active"
                        checked={!!data.is_active}
                        onChange={(e) => set("is_active", e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="is_active">
                        Active
                    </label>
                </div>
            </div>
        </div>
    );
}