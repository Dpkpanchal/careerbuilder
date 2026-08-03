import React, { useMemo } from "react";
import { Plus, Trash2 } from "lucide-react";
import GenericSnapshotFields from "./GenericSnapshotFields";

// ----------------------------------------------------
// Default empty structure for AYUSH Page
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
    ayush_ladder: [
        {
            title: "",
            duration: "",
            focus: "",
        },
    ],
    ayush_systems: [
        {
            key: "",
            title: "",
            badge: "",
            whatYouStudy: "",
            commonRoute: [""],
            whereYouWork: [""],
            bestFor: "",
        },
    ],
    eligibility_notes: [""],
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

export default function AYUSHFields({ data, setData, errors, tabs }) {
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
   

    // ---------------- AYUSH Ladder ----------------
    const ayushLadder = Array.isArray(data.ayush_ladder) ? data.ayush_ladder : [];

    const addAyushLadder = () =>
        setData("ayush_ladder", [
            ...ayushLadder,
            { title: "", duration: "", focus: "" },
        ]);

    const removeAyushLadder = (idx) =>
        setData("ayush_ladder", removeArrayItem(ayushLadder, idx));

    const updateAyushLadder = (idx, field, value) =>
        setData(
            "ayush_ladder",
            updateArrayItem(ayushLadder, idx, {
                ...ayushLadder[idx],
                [field]: value,
            })
        );

    // ---------------- AYUSH Systems ----------------
    const ayushSystems = Array.isArray(data.ayush_systems) ? data.ayush_systems : [];

    const addAyushSystem = () =>
        setData("ayush_systems", [
            ...ayushSystems,
            { key: "", title: "", badge: "", whatYouStudy: "", commonRoute: [""], whereYouWork: [""], bestFor: "" },
        ]);

    const removeAyushSystem = (idx) =>
        setData("ayush_systems", removeArrayItem(ayushSystems, idx));

    const updateAyushSystem = (idx, field, value) =>
        setData(
            "ayush_systems",
            updateArrayItem(ayushSystems, idx, {
                ...ayushSystems[idx],
                [field]: value,
            })
        );

    const addSystemRoute = (sIdx) => {
        const system = ayushSystems[sIdx];
        updateAyushSystem(sIdx, "commonRoute", [...(system.commonRoute || []), ""]);
    };

    const updateSystemRoute = (sIdx, rIdx, value) => {
        const system = ayushSystems[sIdx];
        const newRoutes = updateArrayItem(system.commonRoute || [], rIdx, value);
        updateAyushSystem(sIdx, "commonRoute", newRoutes);
    };

    const removeSystemRoute = (sIdx, rIdx) => {
        const system = ayushSystems[sIdx];
        updateAyushSystem(sIdx, "commonRoute", removeArrayItem(system.commonRoute || [], rIdx));
    };

    const addSystemWork = (sIdx) => {
        const system = ayushSystems[sIdx];
        updateAyushSystem(sIdx, "whereYouWork", [...(system.whereYouWork || []), ""]);
    };

    const updateSystemWork = (sIdx, wIdx, value) => {
        const system = ayushSystems[sIdx];
        const newWorks = updateArrayItem(system.whereYouWork || [], wIdx, value);
        updateAyushSystem(sIdx, "whereYouWork", newWorks);
    };

    const removeSystemWork = (sIdx, wIdx) => {
        const system = ayushSystems[sIdx];
        updateAyushSystem(sIdx, "whereYouWork", removeArrayItem(system.whereYouWork || [], wIdx));
    };

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

            {/* ---------------- Snapshot ---------------- */}
           

           <GenericSnapshotFields data={data} setData={setData} errors={errors} />

            {/* ---------------- AYUSH Ladder ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">AYUSH Ladder</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addAyushLadder}>
                        <Plus size={14} className="me-1" /> Add Level
                    </button>
                </div>
            </div>

            {ayushLadder.map((level, lIdx) => (
                <div className="col-12" key={lIdx}>
                    <div className="card mb-3">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">Level #{lIdx + 1}</h6>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeAyushLadder(lIdx)}
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
                                        placeholder="e.g., UG AYUSH Degree"
                                        value={level.title || ""}
                                        onChange={(e) => updateAyushLadder(lIdx, "title", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Duration</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., 5.5 Years"
                                        value={level.duration || ""}
                                        onChange={(e) => updateAyushLadder(lIdx, "duration", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <label className="form-label">Focus</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="What this level focuses on"
                                        value={level.focus || ""}
                                        onChange={(e) => updateAyushLadder(lIdx, "focus", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* ---------------- AYUSH Systems ---------------- */}
            <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">AYUSH Systems</h5>
                    <button type="button" className="btn btn-sm btn-primary" onClick={addAyushSystem}>
                        <Plus size={14} className="me-1" /> Add System
                    </button>
                </div>
            </div>

            {ayushSystems.map((system, sIdx) => (
                <div className="col-12" key={sIdx}>
                    <div className="card mb-3">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">System #{sIdx + 1}</h6>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeAyushSystem(sIdx)}
                            >
                                <Trash2 size={14} /> Remove
                            </button>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-md-3">
                                    <label className="form-label">Key</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., ayurveda"
                                        value={system.key || ""}
                                        onChange={(e) => updateAyushSystem(sIdx, "key", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-5">
                                    <label className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., Ayurveda (BAMS → MD Ayurveda)"
                                        value={system.title || ""}
                                        onChange={(e) => updateAyushSystem(sIdx, "title", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Badge</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g., Traditional Indian Medicine"
                                        value={system.badge || ""}
                                        onChange={(e) => updateAyushSystem(sIdx, "badge", e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">What You Study</label>
                                    <textarea
                                        className="form-control"
                                        rows={2}
                                        placeholder="Description of what you study"
                                        value={system.whatYouStudy || ""}
                                        onChange={(e) => updateAyushSystem(sIdx, "whatYouStudy", e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Common Route</label>
                                    {(system.commonRoute || []).map((route, rIdx) => (
                                        <div className="input-group mb-2" key={rIdx}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Route step"
                                                value={route || ""}
                                                onChange={(e) =>
                                                    updateSystemRoute(sIdx, rIdx, e.target.value)
                                                }
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger"
                                                onClick={() => removeSystemRoute(sIdx, rIdx)}
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-link px-0"
                                        onClick={() => addSystemRoute(sIdx)}
                                    >
                                        <Plus size={14} className="me-1" /> Add Route
                                    </button>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Where You Work</label>
                                    {(system.whereYouWork || []).map((work, wIdx) => (
                                        <div className="input-group mb-2" key={wIdx}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Work place"
                                                value={work || ""}
                                                onChange={(e) =>
                                                    updateSystemWork(sIdx, wIdx, e.target.value)
                                                }
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger"
                                                onClick={() => removeSystemWork(sIdx, wIdx)}
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-link px-0"
                                        onClick={() => addSystemWork(sIdx)}
                                    >
                                        <Plus size={14} className="me-1" /> Add Work Place
                                    </button>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Best For</label>
                                    <textarea
                                        className="form-control"
                                        rows={2}
                                        placeholder="Who is this best for?"
                                        value={system.bestFor || ""}
                                        onChange={(e) => updateAyushSystem(sIdx, "bestFor", e.target.value)}
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