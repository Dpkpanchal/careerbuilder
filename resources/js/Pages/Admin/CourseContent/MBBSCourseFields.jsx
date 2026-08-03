import React, { useMemo } from "react";
import { Plus, Trash2 } from "lucide-react";
import GenericSnapshotFields from "./GenericSnapshotFields";

// ----------------------------------------------------
// Generic component for Medical pages with ladder structure
// Supports: paramedical-diploma, paramedical-ug, medical-pg, allied-health
// ----------------------------------------------------
export const defaultContentData = (ladderFieldName = 'course_ladder') => ({
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
    // Dynamic ladder field - will be set based on page type
    [ladderFieldName]: [
        {
            title: "",
            duration: "",
            focus: "",
        },
    ],
    eligibility_notes: [""],
    core_subjects: [""],
    work_settings: [
        { title: "", description: "" },
    ],
    build_profile: [""],
    sort_order: 0,
    is_active: true,
});

// Helper functions
const updateArrayItem = (arr, index, value) =>
    arr.map((item, i) => (i === index ? value : item));

const removeArrayItem = (arr, index) => arr.filter((_, i) => i !== index);

export default function GenericMedicalFields({ 
    data, 
    setData, 
    errors, 
    tabs,
    ladderFieldName = 'course_ladder' // Default, but can be overridden
}) {
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

    // ---------------- Snapshot ----------------
   

    // ---------------- Ladder (dynamic field name) ----------------
    const ladderData = Array.isArray(data[ladderFieldName]) ? data[ladderFieldName] : [];

    const addLadderItem = () =>
        setData(ladderFieldName, [
            ...ladderData,
            { title: "", duration: "", focus: "" },
        ]);

    const removeLadderItem = (idx) =>
        setData(ladderFieldName, removeArrayItem(ladderData, idx));

    const updateLadderItem = (idx, field, value) =>
        setData(
            ladderFieldName,
            updateArrayItem(ladderData, idx, {
                ...ladderData[idx],
                [field]: value,
            })
        );

    // ---------------- Eligibility Notes ----------------
    const addStringItem = (key) => setData(key, [...(Array.isArray(data[key]) ? data[key] : []), ""]);
    const updateStringItem = (key, idx, value) =>
        setData(key, updateArrayItem(Array.isArray(data[key]) ? data[key] : [], idx, value));
    const removeStringItem = (key, idx) =>
        setData(key, removeArrayItem(Array.isArray(data[key]) ? data[key] : [], idx));

    // ---------------- Work Settings ----------------
    const workSettings = Array.isArray(data.work_settings) ? data.work_settings : [];

    const addWorkSetting = () =>
        setData("work_settings", [
            ...workSettings,
            { title: "", description: "" },
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

    // ---------------- Core Subjects ----------------
    const coreSubjects = Array.isArray(data.core_subjects) ? data.core_subjects : [];

    const addCoreSubject = () =>
        setData("core_subjects", [...coreSubjects, ""]);

    const updateCoreSubject = (idx, value) =>
        setData("core_subjects", updateArrayItem(coreSubjects, idx, value));

    const removeCoreSubject = (idx) =>
        setData("core_subjects", removeArrayItem(coreSubjects, idx));

    // ---------------- Build Profile ----------------
    const buildProfile = Array.isArray(data.build_profile) ? data.build_profile : [];

    const addBuildProfile = () =>
        setData("build_profile", [...buildProfile, ""]);

    const updateBuildProfile = (idx, value) =>
        setData("build_profile", updateArrayItem(buildProfile, idx, value));

    const removeBuildProfile = (idx) =>
        setData("build_profile", removeArrayItem(buildProfile, idx));

    // Get the display name for the ladder section
   const getLadderTitle = () => {
    const titles = {
        'course_ladder': 'Course Ladder',
        'diploma_ladder': 'Diploma Ladder',
        'pharmacy_ladder': 'Pharmacy Ladder',
        'paramedical_ladder': 'UG Paramedical Ladder',  // This will show for paramedical-ug
        'pg_ladder': 'PG Ladder',
        'allied_ladder': 'Allied Health Ladder'
    };
    return titles[ladderFieldName] || 'Ladder';
};

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

            {/* ---------------- Snapshot ---------------- */}
           <GenericSnapshotFields data={data} setData={setData} errors={errors} />

            {/* ---------------- Ladder ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">{getLadderTitle()}</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addLadderItem}>
                        <Plus size={14} className="me-1" /> Add Level
                    </button>
                </div>
            </div>

            {ladderData.map((level, lIdx) => (
                <div className="col-12" key={lIdx}>
                    <div className="card mb-3">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">Level #{lIdx + 1}</h6>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeLadderItem(lIdx)}
                            >
                                <Trash2 size={14} /> Remove
                            </button>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-12">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., MBBS (Bachelor of Medicine & Bachelor of Surgery)"
                                        value={level.title || ""}
                                        onChange={(e) => updateLadderItem(lIdx, "title", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Duration</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., 4.5 Years"
                                        value={level.duration || ""}
                                        onChange={(e) => updateLadderItem(lIdx, "duration", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <label className="form-label">Focus</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="What this level focuses on"
                                        value={level.focus || ""}
                                        onChange={(e) => updateLadderItem(lIdx, "focus", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

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

            {/* ---------------- Core Subjects ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Core Subjects</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addCoreSubject}>
                        <Plus size={14} className="me-1" /> Add Subject
                    </button>
                </div>
            </div>

            <div className="col-12">
                {coreSubjects.map((item, idx) => (
                    <div className="input-group mb-2" key={idx}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Subject name"
                            value={item || ""}
                            onChange={(e) => updateCoreSubject(idx, e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => removeCoreSubject(idx)}
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
                {errors?.core_subjects && <div className="text-danger small">{errors.core_subjects}</div>}
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
                        <div className="col-md-5">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Setting title"
                                value={setting.title || ""}
                                onChange={(e) => updateWorkSetting(wIdx, "title", e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                value={setting.description || ""}
                                onChange={(e) => updateWorkSetting(wIdx, "description", e.target.value)}
                            />
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

            {/* ---------------- Build Profile ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Build Your Profile</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addBuildProfile}>
                        <Plus size={14} className="me-1" /> Add Point
                    </button>
                </div>
            </div>

            <div className="col-12">
                {buildProfile.map((item, idx) => (
                    <div className="input-group mb-2" key={idx}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Profile building point"
                            value={item || ""}
                            onChange={(e) => updateBuildProfile(idx, e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => removeBuildProfile(idx)}
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