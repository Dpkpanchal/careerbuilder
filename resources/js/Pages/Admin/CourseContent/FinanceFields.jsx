import React, { useMemo } from "react";
import { Plus, Trash2 } from "lucide-react";
import GenericSnapshotFields from "./GenericSnapshotFields";

// ----------------------------------------------------
// Default empty structure for Finance Page
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
    finance_ladder: [
        {
            title: "",
            focus: "",
            examples: "",
            icon: "",
        },
    ],
    course_options: [
        { title: "", desc: "" },
    ],
    typical_roles: [""],
    work_settings: [
        { title: "", description: "", icon: "" },
    ],
    eligibility_notes: [""],
    common_docs: [""],
    build_profile: [""],
    sort_order: 0,
    is_active: true,
});

// Helper functions
const updateArrayItem = (arr, index, value) =>
    arr.map((item, i) => (i === index ? value : item));

const removeArrayItem = (arr, index) => arr.filter((_, i) => i !== index);

// Icon options
const ICON_OPTIONS = [
    "Briefcase", "GraduationCap", "ShieldCheck", "Users", "Calculator", 
    "Landmark", "LineChart", "Megaphone", "UserRound", "Settings", 
    "FileText", "Scale", "BookOpen", "ClipboardList", "Handshake",
    "Banknote", "Layers3", "Cpu", "Code2", "Database", "Network", "Cloud"
];

export default function FinanceFields({ data, setData, errors, tabs }) {
    const set = (key, value) => setData(key, value);

    // ---------------- Tab / Section / Link ----------------
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

    // ---------------- Snapshot (Dynamic Key-Value pairs) ----------------
   

    // ---------------- Finance Ladder ----------------
    const financePaths = Array.isArray(data.finance_ladder) ? data.finance_ladder : [];

    const addFinancePath = () =>
        setData("finance_ladder", [
            ...financePaths,
            { title: "", focus: "", examples: "", icon: "" },
        ]);

    const removeFinancePath = (idx) =>
        setData("finance_ladder", removeArrayItem(financePaths, idx));

    const updateFinancePath = (idx, field, value) =>
        setData(
            "finance_ladder",
            updateArrayItem(financePaths, idx, {
                ...financePaths[idx],
                [field]: value,
            })
        );

    // ---------------- Course Options ----------------
    const courseOptions = Array.isArray(data.course_options) ? data.course_options : [];

    const addCourseOption = () =>
        setData("course_options", [
            ...courseOptions,
            { title: "", desc: "" },
        ]);

    const removeCourseOption = (idx) =>
        setData("course_options", removeArrayItem(courseOptions, idx));

    const updateCourseOption = (idx, field, value) =>
        setData(
            "course_options",
            updateArrayItem(courseOptions, idx, {
                ...courseOptions[idx],
                [field]: value,
            })
        );

    // ---------------- Typical Roles ----------------
    const typicalRoles = Array.isArray(data.typical_roles) ? data.typical_roles : [];

    const addTypicalRole = () =>
        setData("typical_roles", [...typicalRoles, ""]);

    const updateTypicalRole = (idx, value) =>
        setData("typical_roles", updateArrayItem(typicalRoles, idx, value));

    const removeTypicalRole = (idx) =>
        setData("typical_roles", removeArrayItem(typicalRoles, idx));

    // ---------------- Work Settings ----------------
    const workSettings = Array.isArray(data.work_settings) ? data.work_settings : [];

    const addWorkSetting = () =>
        setData("work_settings", [
            ...workSettings,
            { title: "", description: "", icon: "" },
        ]);

    const removeWorkSetting = (idx) =>
        setData("work_settings", removeArrayItem(workSettings, idx));

    const updateWorkSetting = (idx, field, value) =>
        setData(
            "work_settings",
            updateArrayItem(workSettings, idx, {
                ...workSettings[idx],
                [field]: value,
            })
        );

    // ---------------- String Arrays ----------------
    const addStringItem = (key) => setData(key, [...(Array.isArray(data[key]) ? data[key] : []), ""]);
    const updateStringItem = (key, idx, value) =>
        setData(key, updateArrayItem(Array.isArray(data[key]) ? data[key] : [], idx, value));
    const removeStringItem = (key, idx) =>
        setData(key, removeArrayItem(Array.isArray(data[key]) ? data[key] : [], idx));

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
                <label className="form-label">Intro Description (secondary)</label>
                <textarea
                    className="form-control"
                    rows={2}
                    value={data.intro_description_secondary || ""}
                    onChange={(e) => set("intro_description_secondary", e.target.value)}
                />
                {errors?.intro_description_secondary && <div className="text-danger small">{errors.intro_description_secondary}</div>}
            </div>

            {/* ---------------- Snapshot (Dynamic Key-Value) ---------------- */}
           <GenericSnapshotFields data={data} setData={setData} errors={errors} />

            {/* ---------------- Finance Paths ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Finance Career Paths</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addFinancePath}>
                        <Plus size={14} className="me-1" /> Add Path
                    </button>
                </div>
            </div>

            {financePaths.map((item, fIdx) => (
                <div className="col-12" key={fIdx}>
                    <div className="card mb-3">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">Path #{fIdx + 1}</h6>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeFinancePath(fIdx)}
                            >
                                <Trash2 size={14} /> Remove
                            </button>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-md-4">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., Accounting Path"
                                        value={item.title || ""}
                                        onChange={(e) => updateFinancePath(fIdx, "title", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Focus</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="What this path focuses on"
                                        value={item.focus || ""}
                                        onChange={(e) => updateFinancePath(fIdx, "focus", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Examples</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., Accountant, Audit Assistant"
                                        value={item.examples || ""}
                                        onChange={(e) => updateFinancePath(fIdx, "examples", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">Icon</label>
                                    <select
                                        className="form-control"
                                        value={item.icon || ""}
                                        onChange={(e) => updateFinancePath(fIdx, "icon", e.target.value)}
                                    >
                                        <option value="">Select Icon</option>
                                        {ICON_OPTIONS.map((icon) => (
                                            <option key={icon} value={icon}>
                                                {icon}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {errors?.finance_ladder && <div className="text-danger small">{errors.finance_ladder}</div>}

            {/* ---------------- Course Options ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Course Options</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addCourseOption}>
                        <Plus size={14} className="me-1" /> Add Option
                    </button>
                </div>
            </div>

            {courseOptions.map((item, cIdx) => (
                <div className="col-12" key={cIdx}>
                    <div className="row g-2">
                        <div className="col-md-5">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                value={item.title || ""}
                                onChange={(e) => updateCourseOption(cIdx, "title", e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                value={item.desc || ""}
                                onChange={(e) => updateCourseOption(cIdx, "desc", e.target.value)}
                            />
                        </div>
                        <div className="col-md-1">
                            <button
                                type="button"
                                className="btn btn-outline-danger w-100"
                                onClick={() => removeCourseOption(cIdx)}
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {errors?.course_options && <div className="text-danger small">{errors.course_options}</div>}

            {/* ---------------- Typical Roles ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Typical Roles</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addTypicalRole}>
                        <Plus size={14} className="me-1" /> Add Role
                    </button>
                </div>
            </div>

            <div className="col-12">
                {typicalRoles.map((item, idx) => (
                    <div className="input-group mb-2" key={idx}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Typical role"
                            value={item || ""}
                            onChange={(e) => updateTypicalRole(idx, e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => removeTypicalRole(idx)}
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
                {errors?.typical_roles && <div className="text-danger small">{errors.typical_roles}</div>}
            </div>

            {/* ---------------- Work Settings ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Work Settings</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addWorkSetting}>
                        <Plus size={14} className="me-1" /> Add Setting
                    </button>
                </div>
            </div>

            {workSettings.map((setting, wIdx) => (
                <div className="col-12" key={wIdx}>
                    <div className="row g-2">
                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Setting title"
                                value={setting.title || ""}
                                onChange={(e) => updateWorkSetting(wIdx, "title", e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                value={setting.description || ""}
                                onChange={(e) => updateWorkSetting(wIdx, "description", e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <select
                                className="form-control"
                                value={setting.icon || ""}
                                onChange={(e) => updateWorkSetting(wIdx, "icon", e.target.value)}
                            >
                                <option value="">Select Icon</option>
                                {ICON_OPTIONS.map((icon) => (
                                    <option key={icon} value={icon}>
                                        {icon}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-1">
                            <button
                                type="button"
                                className="btn btn-outline-danger w-100"
                                onClick={() => removeWorkSetting(wIdx)}
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {errors?.work_settings && <div className="text-danger small">{errors.work_settings}</div>}

            {/* ---------------- Eligibility Notes ---------------- */}
            <div className="col-12">
                <hr />
                <h5 className="mb-3">Eligibility Notes</h5>
            </div>

            <div className="col-12">
                {(Array.isArray(data.eligibility_notes) ? data.eligibility_notes : []).map((item, idx) => (
                    <div className="input-group mb-2" key={idx}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Eligibility note"
                            value={item || ""}
                            onChange={(e) => updateStringItem("eligibility_notes", idx, e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => removeStringItem("eligibility_notes", idx)}
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className="btn btn-sm btn-link px-0"
                    onClick={() => addStringItem("eligibility_notes")}
                >
                    <Plus size={14} className="me-1" /> Add Note
                </button>
                {errors?.eligibility_notes && <div className="text-danger small">{errors.eligibility_notes}</div>}
            </div>

            {/* ---------------- Common Docs ---------------- */}
            <div className="col-12">
                <hr />
                <h5 className="mb-3">Common Documents</h5>
            </div>

            <div className="col-12">
                {(Array.isArray(data.common_docs) ? data.common_docs : []).map((item, idx) => (
                    <div className="input-group mb-2" key={idx}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Document name"
                            value={item || ""}
                            onChange={(e) => updateStringItem("common_docs", idx, e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => removeStringItem("common_docs", idx)}
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className="btn btn-sm btn-link px-0"
                    onClick={() => addStringItem("common_docs")}
                >
                    <Plus size={14} className="me-1" /> Add Document
                </button>
                {errors?.common_docs && <div className="text-danger small">{errors.common_docs}</div>}
            </div>

            {/* ---------------- Build Profile ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Build Your Profile</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={() => addStringItem("build_profile")}>
                        <Plus size={14} className="me-1" /> Add Point
                    </button>
                </div>
            </div>

            <div className="col-12">
                {(Array.isArray(data.build_profile) ? data.build_profile : []).map((item, idx) => (
                    <div className="input-group mb-2" key={idx}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Profile building point"
                            value={item || ""}
                            onChange={(e) => updateStringItem("build_profile", idx, e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => removeStringItem("build_profile", idx)}
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
                {errors?.build_profile && <div className="text-danger small">{errors.build_profile}</div>}
            </div>

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