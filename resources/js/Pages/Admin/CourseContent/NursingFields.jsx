import React, { useMemo } from "react";
import { Plus, Trash2 } from "lucide-react";
import GenericSnapshotFields from "./GenericSnapshotFields";

// ----------------------------------------------------
// Default empty structure for Nursing Page
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
    nursing_ladder: [
        {
            id: "",
            badge: "",
            title: "",
            duration: "",
            eligibility: "",
            bestFor: "",
            roles: [""],
            nextStep: "",
        },
    ],
    specialisations: [""],
    work_settings: [
        { title: "", description: "" },
    ],
    admission_notes: [""],
    common_docs: [""],
    build_profile: [""],
    sort_order: 0,
    is_active: true,
});

// Helper functions
const updateArrayItem = (arr, index, value) =>
    arr.map((item, i) => (i === index ? value : item));

const removeArrayItem = (arr, index) => arr.filter((_, i) => i !== index);

export default function NursingFields({ data, setData, errors, tabs }) {
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
  

    // ---------------- Nursing Ladder ----------------
    const nursingLadder = Array.isArray(data.nursing_ladder) ? data.nursing_ladder : [];

    const addNursingLadder = () =>
        setData("nursing_ladder", [
            ...nursingLadder,
            { id: "", badge: "", title: "", duration: "", eligibility: "", bestFor: "", roles: [""], nextStep: "" },
        ]);

    const removeNursingLadder = (idx) =>
        setData("nursing_ladder", removeArrayItem(nursingLadder, idx));

    const updateNursingLadder = (idx, field, value) =>
        setData(
            "nursing_ladder",
            updateArrayItem(nursingLadder, idx, {
                ...nursingLadder[idx],
                [field]: value,
            })
        );

    const addLadderRole = (lIdx) => {
        const ladder = nursingLadder[lIdx];
        updateNursingLadder(lIdx, "roles", [...(ladder.roles || []), ""]);
    };

    const updateLadderRole = (lIdx, rIdx, value) => {
        const ladder = nursingLadder[lIdx];
        const newRoles = updateArrayItem(ladder.roles || [], rIdx, value);
        updateNursingLadder(lIdx, "roles", newRoles);
    };

    const removeLadderRole = (lIdx, rIdx) => {
        const ladder = nursingLadder[lIdx];
        updateNursingLadder(lIdx, "roles", removeArrayItem(ladder.roles || [], rIdx));
    };

    // ---------------- Specialisations ----------------
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

    // ---------------- Build Profile ----------------
    const buildProfile = Array.isArray(data.build_profile) ? data.build_profile : [];

    const addBuildProfile = () =>
        setData("build_profile", [...buildProfile, ""]);

    const updateBuildProfile = (idx, value) =>
        setData("build_profile", updateArrayItem(buildProfile, idx, value));

    const removeBuildProfile = (idx) =>
        setData("build_profile", removeArrayItem(buildProfile, idx));

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

            {/* ---------------- Nursing Ladder ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Nursing Ladder</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addNursingLadder}>
                        <Plus size={14} className="me-1" /> Add Level
                    </button>
                </div>
            </div>

            {nursingLadder.map((level, lIdx) => (
                <div className="col-12" key={lIdx}>
                    <div className="card mb-3">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">Level #{lIdx + 1}: {level.title || "New Level"}</h6>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeNursingLadder(lIdx)}
                            >
                                <Trash2 size={14} /> Remove
                            </button>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-md-4">
                                    <label className="form-label">ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., anm, gnm, bsc"
                                        value={level.id || ""}
                                        onChange={(e) => updateNursingLadder(lIdx, "id", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Badge</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., After Class 10"
                                        value={level.badge || ""}
                                        onChange={(e) => updateNursingLadder(lIdx, "badge", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Duration</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., Typically 2 Years"
                                        value={level.duration || ""}
                                        onChange={(e) => updateNursingLadder(lIdx, "duration", e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., ANM (Auxiliary Nurse Midwife)"
                                        value={level.title || ""}
                                        onChange={(e) => updateNursingLadder(lIdx, "title", e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Eligibility</label>
                                    <textarea
                                        className="form-control"
                                        rows={2}
                                        placeholder="Eligibility criteria"
                                        value={level.eligibility || ""}
                                        onChange={(e) => updateNursingLadder(lIdx, "eligibility", e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Best For</label>
                                    <textarea
                                        className="form-control"
                                        rows={2}
                                        placeholder="Who is this best for?"
                                        value={level.bestFor || ""}
                                        onChange={(e) => updateNursingLadder(lIdx, "bestFor", e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Next Step</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Next step after this level"
                                        value={level.nextStep || ""}
                                        onChange={(e) => updateNursingLadder(lIdx, "nextStep", e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Roles</label>
                                    {(level.roles || []).map((role, rIdx) => (
                                        <div className="input-group mb-2" key={rIdx}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Role"
                                                value={role || ""}
                                                onChange={(e) =>
                                                    updateLadderRole(lIdx, rIdx, e.target.value)
                                                }
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger"
                                                onClick={() => removeLadderRole(lIdx, rIdx)}
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-link px-0"
                                        onClick={() => addLadderRole(lIdx)}
                                    >
                                        <Plus size={14} className="me-1" /> Add Role
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* ---------------- Specialisations ---------------- */}
            <div className="col-12">
                <hr />
                <h5 className="mb-3">Specialisations</h5>
            </div>

            <div className="col-12">
                {(Array.isArray(data.specialisations) ? data.specialisations : []).map((item, idx) => (
                    <div className="input-group mb-2" key={idx}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Specialisation name"
                            value={item || ""}
                            onChange={(e) => updateStringItem("specialisations", idx, e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => removeStringItem("specialisations", idx)}
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className="btn btn-sm btn-link px-0"
                    onClick={() => addStringItem("specialisations")}
                >
                    <Plus size={14} className="me-1" /> Add Specialisation
                </button>
                {errors?.specialisations && <div className="text-danger small">{errors.specialisations}</div>}
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

            {/* ---------------- Admission Notes ---------------- */}
            <div className="col-12">
                <hr />
                <h5 className="mb-3">Admission Notes</h5>
            </div>

            <div className="col-12">
                {(Array.isArray(data.admission_notes) ? data.admission_notes : []).map((item, idx) => (
                    <div className="input-group mb-2" key={idx}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Admission note"
                            value={item || ""}
                            onChange={(e) => updateStringItem("admission_notes", idx, e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => removeStringItem("admission_notes", idx)}
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    className="btn btn-sm btn-link px-0"
                    onClick={() => addStringItem("admission_notes")}
                >
                    <Plus size={14} className="me-1" /> Add Note
                </button>
                {errors?.admission_notes && <div className="text-danger small">{errors.admission_notes}</div>}
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