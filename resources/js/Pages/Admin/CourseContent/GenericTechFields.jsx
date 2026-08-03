import React, { useMemo } from "react";
import { Plus, Trash2 } from "lucide-react";
import GenericSnapshotFields from "./GenericSnapshotFields";

// ----------------------------------------------------
// Default empty structure for Generic Tech Pages
// ----------------------------------------------------
export const defaultContentData = (ladderFieldName = 'tech_ladder') => ({
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
    // Dynamic ladder field
    [ladderFieldName]: [
        {
            title: "",
            duration: "",
            focus: "",
        },
    ],
    // Who should do (for some pages)
    who_should_do: [
        {
            title: "",
            desc: "",
            icon: "",
        },
    ],
    core_areas: [""],
    eligibility_notes: [""],
    work_settings: [
        { title: "", description: "", icon: "" },
    ],
    admission_notes: [""],
    common_docs: [""],
    build_profile: [""],
    specialisation_tracks: [""],
    sort_order: 0,
    is_active: true,
});

// Helper functions
const updateArrayItem = (arr, index, value) =>
    arr.map((item, i) => (i === index ? value : item));

const removeArrayItem = (arr, index) => arr.filter((_, i) => i !== index);

// Icon options
const ICON_OPTIONS = [
    "Cpu", "Code2", "Monitor", "Database", "Globe", "Palette", 
    "HardDrive", "CircuitBoard", "TerminalSquare", "Network", "Cloud",
    "Briefcase", "GraduationCap", "ShieldCheck", "FlaskConical", 
    "BookOpen", "Factory", "Wrench", "Building2", "Landmark", "Ruler"
];

export default function GenericTechFields({ 
    data, 
    setData, 
    errors, 
    tabs,
    ladderFieldName = 'tech_ladder',
    hasWhoShouldDo = true,
    hasSpecialisations = true,
    hasCoreAreas = true,
    pageTitle = 'Tech Course'
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

    // ---------------- Snapshot (Dynamic Key-Value pairs) ----------------
   

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

    // ---------------- Who Should Do ----------------
    const whoShouldDo = Array.isArray(data.who_should_do) ? data.who_should_do : [];

    const addWhoShouldDo = () =>
        setData("who_should_do", [
            ...whoShouldDo,
            { title: "", desc: "", icon: "" },
        ]);

    const removeWhoShouldDo = (idx) =>
        setData("who_should_do", removeArrayItem(whoShouldDo, idx));

    const updateWhoShouldDo = (idx, field, value) =>
        setData(
            "who_should_do",
            updateArrayItem(whoShouldDo, idx, {
                ...whoShouldDo[idx],
                [field]: value,
            })
        );

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

    // ---------------- Specialisation Tracks ----------------
    const specialisationTracks = Array.isArray(data.specialisation_tracks) ? data.specialisation_tracks : [];

    const addSpecialisationTrack = () =>
        setData("specialisation_tracks", [...specialisationTracks, ""]);

    const updateSpecialisationTrack = (idx, value) =>
        setData("specialisation_tracks", updateArrayItem(specialisationTracks, idx, value));

    const removeSpecialisationTrack = (idx) =>
        setData("specialisation_tracks", removeArrayItem(specialisationTracks, idx));

    // ---------------- String Arrays ----------------
    const addStringItem = (key) => setData(key, [...(Array.isArray(data[key]) ? data[key] : []), ""]);
    const updateStringItem = (key, idx, value) =>
        setData(key, updateArrayItem(Array.isArray(data[key]) ? data[key] : [], idx, value));
    const removeStringItem = (key, idx) =>
        setData(key, removeArrayItem(Array.isArray(data[key]) ? data[key] : [], idx));

    // ---------------- Core Areas ----------------
    const coreAreas = Array.isArray(data.core_areas) ? data.core_areas : [];

    const addCoreArea = () =>
        setData("core_areas", [...coreAreas, ""]);

    const updateCoreArea = (idx, value) =>
        setData("core_areas", updateArrayItem(coreAreas, idx, value));

    const removeCoreArea = (idx) =>
        setData("core_areas", removeArrayItem(coreAreas, idx));

    // Get ladder title
    const getLadderTitle = () => {
        const titles = {
            'tech_ladder': 'Course Ladder',
            'btech_ladder': 'B.Tech Ladder',
            'barch_ladder': 'Architecture Ladder',
            'mtech_ladder': 'M.Tech Ladder',
            'bca_ladder': 'BCA Ladder',
            'bsc_it_ladder': 'B.Sc CS/IT Ladder',
            'mca_ladder': 'MCA Ladder',
            'msc_it_ladder': 'M.Sc CS/IT Ladder'
        };
        return titles[ladderFieldName] || 'Course Ladder';
    };

    // Get who should do title
    const getWhoShouldDoTitle = () => {
        const titles = {
            'tech_ladder': 'Who Should Consider This',
            'btech_ladder': 'Who Should Consider B.Tech',
            'barch_ladder': 'Who Should Consider B.Arch',
            'mtech_ladder': 'Who Should Consider M.Tech',
            'bca_ladder': 'Who Should Consider BCA',
            'bsc_it_ladder': 'Who Should Consider B.Sc CS/IT',
            'mca_ladder': 'Who Should Consider MCA',
            'msc_it_ladder': 'Who Should Consider M.Sc CS/IT'
        };
        return titles[ladderFieldName] || 'Who Should Consider This';
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

            {/* ---------------- Snapshot (Dynamic Key-Value) ---------------- */}
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
                                        placeholder="Level title"
                                        value={level.title || ""}
                                        onChange={(e) => updateLadderItem(lIdx, "title", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Duration</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Duration"
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

            {/* ---------------- Core Areas ---------------- */}
            {hasCoreAreas && (
                <>
                    <div className="col-12">
                        <hr />
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="mb-0">Core Areas</h5>
                            <button type="button" className="btn btn-sm btn-primary" onClick={addCoreArea}>
                                <Plus size={14} className="me-1" /> Add Area
                            </button>
                        </div>
                    </div>

                    <div className="col-12">
                        {coreAreas.map((item, idx) => (
                            <div className="input-group mb-2" key={idx}>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Core area"
                                    value={item || ""}
                                    onChange={(e) => updateCoreArea(idx, e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={() => removeCoreArea(idx)}
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        ))}
                        {errors?.core_areas && <div className="text-danger small">{errors.core_areas}</div>}
                    </div>
                </>
            )}

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

            {/* ---------------- Who Should Do ---------------- */}
            {hasWhoShouldDo && (
                <>
                    <div className="col-12">
                        <hr />
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="mb-0">{getWhoShouldDoTitle()}</h5>
                            <button type="button" className="btn btn-sm btn-primary" onClick={addWhoShouldDo}>
                                <Plus size={14} className="me-1" /> Add Option
                            </button>
                        </div>
                    </div>

                    {whoShouldDo.map((item, wIdx) => (
                        <div className="col-12" key={wIdx}>
                            <div className="row g-2">
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Title"
                                        value={item.title || ""}
                                        onChange={(e) => updateWhoShouldDo(wIdx, "title", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Description"
                                        value={item.desc || ""}
                                        onChange={(e) => updateWhoShouldDo(wIdx, "desc", e.target.value)}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <select
                                        className="form-control"
                                        value={item.icon || ""}
                                        onChange={(e) => updateWhoShouldDo(wIdx, "icon", e.target.value)}
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
                                        onClick={() => removeWhoShouldDo(wIdx)}
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {errors?.who_should_do && <div className="text-danger small">{errors.who_should_do}</div>}
                </>
            )}

            {/* ---------------- Specialisation Tracks ---------------- */}
            {hasSpecialisations && (
                <>
                    <div className="col-12">
                        <hr />
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="mb-0">Specialisation Tracks</h5>
                            <button type="button" className="btn btn-sm btn-primary" onClick={addSpecialisationTrack}>
                                <Plus size={14} className="me-1" /> Add Track
                            </button>
                        </div>
                    </div>

                    <div className="col-12">
                        {specialisationTracks.map((item, idx) => (
                            <div className="input-group mb-2" key={idx}>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Specialisation track"
                                    value={item || ""}
                                    onChange={(e) => updateSpecialisationTrack(idx, e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={() => removeSpecialisationTrack(idx)}
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        ))}
                        {errors?.specialisation_tracks && <div className="text-danger small">{errors.specialisation_tracks}</div>}
                    </div>
                </>
            )}

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